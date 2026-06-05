import type { ContactFormData } from "@/lib/admin-storage";

export type PatientReview = {
  name: string;
  age: string;
  city: string;
  review: string;
  beforeCondition: string;
  afterResult: string;
  lensType: string;
  rating: string;
  active: string;
};

const GOOGLE_SHEETS_WEB_APP_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL?.trim() ||
  "https://script.google.com/macros/s/AKfycbxL2QuoA6l0XhCoiVLK4OuXm8Ie2gk3pweJ8CSp-SeogwkjUimBRivxLnlL8ZHODvo/exec";

export const isGoogleSheetsIntegrationConfigured = (): boolean =>
  GOOGLE_SHEETS_WEB_APP_URL.length > 0;

const normalizeReviewRow = (row: Record<string, unknown>): PatientReview => ({
  name: String(row.name ?? row.Name ?? "").trim(),
  age: String(row.age ?? row.Age ?? "").trim(),
  city: String(row.city ?? row.City ?? "").trim(),
  review: String(row.review ?? row.Review ?? "").trim(),
  beforeCondition: String(
    row.beforeCondition ?? row.BeforeCondition ?? row.before ?? row.Before ?? "",
  ).trim(),
  afterResult: String(row.afterResult ?? row.AfterResult ?? row.after ?? row.After ?? "").trim(),
  lensType: String(row.lensType ?? row.LensType ?? row.lens_type ?? row.Lens_Type ?? "").trim(),
  rating: String(row.rating ?? row.Rating ?? "").trim(),
  active: String(row.active ?? row.Active ?? row.visible ?? row.Visible ?? "").trim(),
});

export const fetchPatientReviewsFromGoogleSheets = async (): Promise<PatientReview[]> => {
  const response = await fetch("/api/reviews?action=reviews", {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load patient reviews.");
  }

  const payload: unknown = await response.json();
  console.log("Reviews payload:", payload);

  if (!Array.isArray(payload)) {
    return [];
  }

  const reviews = payload
    .map((row) => (row && typeof row === "object" ? normalizeReviewRow(row as Record<string, unknown>) : null))
    .filter((row): row is PatientReview => Boolean(row.name))
    .filter((row) => {
      const active = row.active?.trim().toUpperCase();

      return active === "FALSE" ? false : active === "TRUE" || active === "";
    })
    .slice(0, 6);

  console.log("Processed reviews:", reviews);

  return reviews;
};

export const submitContactToGoogleSheets = async (
  data: ContactFormData,
): Promise<boolean> => {
  const payload = JSON.stringify(data);

  try {
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
      body: payload,
    });

    if (response.ok) {
      return true;
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("Google Sheets JSON submit failed; falling back to simple POST.", error);
    }
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
      },
      body: payload,
    });

    return response.type === "opaque" || response.ok;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("Google Sheets submit failed.", error);
    }

    return false;
  }
};