
# 🩺 Kerato Care9

Kerato Care9 is a **real-world client project** built as a modern frontend web application for an **eye-care–related business**.  
The goal of the project was to provide a **professional, fast, and accessible website** that presents eye-health and keratoconus-related information in a clean and trustworthy manner.

This repository contains the **frontend application**, built using **Vite + React + TypeScript**, with a modern UI stack powered by **Tailwind CSS** and **shadcn-ui**.

🌐 **Live Website:**  
https://keratocare9.vercel.app/

---

## 🧑‍💼 Client Project Context

This project was developed for a **real-life client** who required:
- A professional website for their **eye-care business**
- Clean, medical-grade UI/UX suitable for healthcare audiences
- Responsive design for mobile and desktop users
- A scalable frontend architecture for future enhancements

The repository represents a **production-oriented scaffold** that can be extended with additional features such as dashboards, analytics, and content management.

---

## 📸 Screenshots

_Add real screenshots once available._

- Desktop view:  
  `./screenshots/Screenshot 2025-12-20 214759.png`

- Mobile view:  
  `./screenshots/mobile.png`

---

## 📂 Project Structure (Key Files)

```

src/
├── main.tsx        # Application entry point
├── App.tsx         # Router & global providers (React Query, toasts, tooltips)
├── index.css       # Global styles & Tailwind setup
├── App.css         # App-level styles
├── pages/          # Application pages
│   ├── Index.tsx   # Public landing page
│   ├── Admin.tsx   # Admin dashboard (scaffold)
│   └── NotFound.tsx
└── components/     # Reusable UI components (shadcn + Radix)

````

---

## 🛠️ Technologies Used

- **Vite**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **shadcn-ui** (Radix + Tailwind UI primitives)
- **React Router**
- **@tanstack/react-query**
- **Sonner & Radix Toasts**
- **Recharts**
- **react-hook-form + zod**
- **date-fns & react-day-picker**
- **embla-carousel-react**
- **input-otp**
- **next-themes** (light/dark mode)

---

## ✨ Features

> ⚠️ Note: The codebase is currently a **scaffolded production-ready frontend**.  
> The features below reflect the **configured infrastructure and intended functionality**.

### Routing
- `/` — Public landing page
- `/admin` — Admin dashboard (future expansion)
- Catch-all — 404 / NotFound page

### Global State & Data Fetching
- React Query configured for server-state management

### Notifications
- Global toast and Sonner notification system

### UI System
- Accessible UI components using shadcn-ui & Radix
- Dialogs, tooltips, popovers, sliders, progress bars, etc.

### Forms & Validation
- `react-hook-form` with `zod` schema validation

### Charts & Analytics
- Recharts integrated for dashboards and metrics

### Date & Media Utilities
- Date pickers and utilities
- Carousel support for media/content

### Theme Support
- Light/Dark theme toggling using `next-themes`

---

## 🚀 Getting Started (Local Development)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/pb1803/kerato_care9.git
cd kerato_care9
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

### 5️⃣ Preview Production Build

```bash
npm run preview
```

---

## 📜 Available Scripts

* `npm run dev` — Start Vite development server
* `npm run build` — Create production build
* `npm run build:dev` — Build in development mode
* `npm run lint` — Run ESLint
* `npm run preview` — Preview production build locally

---

## 🔮 Notes & Next Steps

* Implement real content inside `src/pages`
* Extend `/admin` for dashboards or CMS
* Add API integration for dynamic data
* Upload real screenshots to `/screenshots`
* Add authentication & role-based access
* Integrate analytics and SEO optimizations

---

## 🤝 Contributing

This repository represents a **client-delivered project**, but improvements and suggestions are welcome.

* Open an issue for bugs or ideas
* Submit a pull request for enhancements

---

## 📄 License

No license file is currently provided.
Unless stated otherwise, **all rights are reserved**.

---

## 👤 Contact

* **Repository Owner:** [@pb1803](https://github.com/pb1803)

---

⭐ This project demonstrates **real-client development experience**, modern frontend tooling, and production deployment practices.

```
