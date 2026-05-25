# KeratoCare Website Documentation + Project Brief

## 1. Project Overview

### What the website is
KeratoCare is a single-page, conversion-focused healthcare marketing website for a Pune-based eye care clinic specializing in keratoconus treatment, specialty contact lenses, corneal mapping, and glare/light-sensitivity support. The public experience is mounted on `/`, with a separate local admin dashboard on `/admin`.

### Main purpose of the platform
The primary goal is lead generation and consultation booking. The site is built to:

- introduce KeratoCare as a specialist eye-care brand
- explain services and treatment positioning
- visually demonstrate treatment outcomes
- move users into high-intent contact actions such as calling, WhatsApp, map lookup, and booking an assessment

### Target audience

- patients with keratoconus or irregular corneal issues
- users seeking specialty lens fitting or corneal mapping
- users experiencing glare or light sensitivity
- mobile-first local users looking for quick consultation access in Pune

### Core functionality

- single-page marketing layout with anchored section navigation
- hero section with animated metrics and desktop-only looping video
- visual before/after outcome section implemented as state-based image toggles
- service cards with WhatsApp-driven CTAs
- assessment-branded treatment-journey timeline
- clinic/about/testimonial trust-building section
- contact section with phone, WhatsApp, map embed, and form-driven WhatsApp handoff
- floating contact shortcuts and mobile bottom navigation
- localStorage-backed admin panel for contact submissions

### Technologies used

- Vite + React 18 + TypeScript
- Tailwind CSS with CSS variables and `tailwindcss-animate`
- shadcn/ui and Radix UI primitives
- React Router for routing
- TanStack React Query provider at app root
- `sonner` and Radix toast infrastructure
- `lucide-react` icons
- `react-countup`
- `react-intersection-observer`
- optional Firebase helpers and test scaffold

### Design style / theme
The UI is a polished medical-brand aesthetic with:

- blue, cyan, teal, and green trust colors
- white and translucent glass surfaces
- large rounded corners and pill-shaped CTAs
- soft gradients, light shadows, and blurred cards
- a premium, friendly healthcare tone rather than a clinical dashboard look

### UI/UX philosophy
The UX favors trust, clarity, and rapid action:

- large contact-first CTAs
- minimal route depth and few cognitive branches
- consistent phone/WhatsApp availability
- visible social proof and outcome framing
- strong mobile affordances via floating buttons and fixed bottom nav

### High-level code references

- `src/main.tsx`
- `src/App.tsx`
- `src/pages/Index.tsx`
- `src/index.css`
- `index.html`

---

## 2. Website Structure

### Live page composition
The live landing page is assembled in `src/pages/Index.tsx` in this order:

1. `Header`
2. `Hero`
3. `VisionSlider`
4. `Services`
5. `About`
6. `Contact`
7. `Footer`
8. `MobileNav`
9. `FloatingButtons`

Important: the repo also contains `VisionAssessment.tsx` and `ContactFormReliable.tsx`, but neither is mounted on the live landing page.

### Landing page

**Purpose**
Act as a one-page funnel from awareness to consultation.

**Main UI elements**

- fixed-position absolute header over hero
- hero marketing block
- treatment outcome visualizer
- services grid
- treatment journey / assessment anchor
- about + testimonials trust block
- contact and map section
- CTA-heavy footer

**User flow**
Users land in the hero, scroll through proof and services, inspect visual outcomes, reach the assessment-branded journey section, and convert through call, WhatsApp, or form submission.

### Navbar / Header

**Purpose**
Provide fast in-page movement and persistent access to consultation CTAs.

**Heading / subheading**
No text heading; branding is handled by a logo image block.

**Main UI elements**

- brand logo button
- desktop nav items: Home, Services, Assessment, About, Contact
- phone CTA
- Free Vision Assessment CTA
- mobile hamburger toggle

**Buttons / actions**

- logo scrolls to `#hero`
- nav items smooth-scroll to matching section IDs
- phone button uses `tel:+918432861131`
- main CTA scrolls to `#assessment`

**Animations / interactions**

- hover lift and scale on logo and buttons
- blurred glass header card
- collapsible mobile menu

**User flow**
Users can either explore sections or jump directly into the assessment/contact path.

### Hero section

**Purpose**
Establish the brand promise and immediate conversion path.

**Heading / subheading**

- headline: `See the World` / `Clearly Again`
- subheading describes premium eye care and keratoconus specialization

**Main UI elements**

- dual-line hero headline
- supporting copy inside a translucent card
- two animated stat cards
- CTA buttons for assessment and phone
- social proof avatar row
- desktop video/promo block

**Buttons / actions**

- Book Free Assessment scrolls to `#assessment`
- Call Now uses `tel:`

**Animations / interactions**

- entry animation gated by intersection observer
- delayed fade-up text animations
- animated metric count-up
- floating decorative circles over desktop video

**User flow**
Hero pushes users either to the assessment/treatment flow or direct call conversion.

### About section

**Purpose**
Build trust through clinic positioning, stats, and testimonials.

**Heading / subheading**

- heading: `Leading Eye Care Clinic in Pune`
- subcopy emphasizes premium care and compassion

**Main UI elements**

- clinic profile card with image and shield badge
- quick-value tags: Advanced Technology, Patient-First Care
- stat cards
- testimonial cards

**Buttons / actions**

- `Learn More` button exists but currently has no handler
- `Book Consultation` button exists but currently has no handler

**Animations / interactions**

- card hover elevation
- star icons and quote styling on testimonials

**User flow**
Users receive trust signals before entering the contact section.

### Services section

**Purpose**
Explain the three main commercial service offerings.

**Heading / subheading**

- heading: `Advanced Eye Care Solutions`
- subcopy explains tailored keratoconus services

**Main UI elements**

- three service cards
- service badges
- icon circles
- bullet-style key points
- service-specific CTA buttons

**Buttons / actions**

- `Schedule Fitting` opens WhatsApp message template `scheduleFitting`
- `Book Mapping` opens WhatsApp message template `bookMapping`
- `Start Program` opens WhatsApp message template `startProgram`
- `Learn More` scrolls to `#contact`

**Animations / interactions**

- card hover scale and shadow increase
- badge overlays

**User flow**
Users choose the most relevant service and are routed into WhatsApp or contact.

### Assessment section

**Important reality check**
There is no live multi-step questionnaire in the current codebase.

What is live at `#assessment` is a static treatment-journey timeline inside `Services.tsx` with the heading `Your Eye Care Treatment Journey`.

**Purpose**
Frame the consultation process as a four-step path.

**Main UI elements**

- step cards for assessment, design, fitting, ongoing care
- connecting line on desktop
- durations per step

**Buttons / actions**
No internal form or submission controls in the live assessment section.

**Animations / interactions**
No dynamic questionnaire logic. This is a static informational block.

**User flow**
The header, hero, footer, and mobile nav all treat this anchor as the main booking destination, even though it is informational rather than interactive.

### Before / After section

**Purpose**
Show treatment impact visually.

**Heading / subheading**

- heading: `Vision Transformation with Keratoconus Treatment`
- subcopy instructs users to choose a concern and then switch between before/after states

**Main UI elements**

- three concern selector buttons
- before/after state buttons
- large image container
- text overlay labels

**Buttons / actions**

- option buttons: Vision Clarity, Glare Reduction, Light Sensitivity
- state buttons: before and after

**Animations / interactions**

- smooth image transition
- overlay transitions
- button variant changes

**User flow**
Users select a symptom area, compare visual states, then continue down the page toward services and contact.

### Testimonials

**Purpose**
Provide patient-centered social proof.

**Heading**
`Patient Success Stories`

**Main UI elements**

- three testimonial cards
- star ratings
- quote icon
- before/after outcome snippets
- lens type labels

**Buttons / actions**
No testimonial-specific actions.

**Animations / interactions**
Cards use the same hover-elevation system as the rest of the site.

### FAQ

**Important reality check**
There is no dedicated FAQ accordion or question list in the live site.

What exists is:

- a footer resource link labeled `FAQs`
- a short placeholder paragraph with `id="faqs"`

This means the site suggests FAQ availability, but does not currently implement a real FAQ section.

### Contact form

**Purpose**
Capture lead information and hand the conversation off to WhatsApp.

**Heading / subheading**

- section heading: `Get in Touch with KeratoCare`
- form card heading: `Send Us a Message`

**Main UI elements**

- phone support card
- WhatsApp support card
- clinic/location card
- Google Maps iframe card
- contact form fields

**Buttons / actions**

- Call Now
- Open WhatsApp
- Open in Google Maps
- Send via WhatsApp
- Clear Form

**Animations / interactions**

- form toasts
- high-z-index select dropdown
- card hover on the contact method cards

**User flow**
Users can call immediately, launch WhatsApp directly, or submit the form and then be redirected to WhatsApp with a prefilled message.

### Footer

**Purpose**
Close with a final booking CTA, SEO-style keyword reinforcement, and deep-link navigation.

**Heading / subheading**

- CTA block: `Book Your Appointment`
- CTA headline: `Ready to Transform Your Vision?`

**Main UI elements**

- booking CTA banner
- footer logo
- service link column
- why KeratoCare link column
- resources column
- connect/social column
- phone, map, and hours cards
- medical disclaimer
- Back to Top button

**Buttons / actions**

- Book Free Assessment anchor
- phone link
- map link
- social links
- back-to-top button using `window.scrollTo`

**Animations / interactions**

- hover underline and slide on footer links
- hover lift on contact chips and socials
- decorative wave and radial/grid backgrounds

**User flow**
The footer acts as both a final conversion surface and a secondary navigation hub.

### Floating buttons

**Purpose**
Provide persistent high-intent contact shortcuts.

**Main UI elements**

- phone FAB
- WhatsApp FAB
- Instagram FAB

**Buttons / actions**

- `tel:` link
- WhatsApp template launch
- external Instagram link

**Animations / interactions**

- fixed positioning
- slide-up entrance class
- hover scale
- icon pulse on hover

### Additional sections / routes

- `/admin`: password-gated local admin panel for stored leads
- `NotFound`: simple 404 page with return-home link

### Section source references

- `src/pages/Index.tsx`
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/VisionSlider.tsx`
- `src/components/Services.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/MobileNav.tsx`
- `src/components/FloatingButtons.tsx`

---

## 3. Navbar + Routing

### Routing model

- `/` renders the public single-page experience
- `/admin` renders a local admin dashboard
- `*` renders `NotFound`

There are no route-level content pages for services, FAQ, blog, or policies.

### Navigation behavior

- desktop header nav uses smooth scrolling via `scrollIntoView`
- mobile header uses an inline dropdown menu
- mobile bottom nav is separate from the header and remains fixed to the bottom

### Mobile responsiveness

- header nav switches from inline pill menu to hamburger below `md`
- bottom mobile nav only shows on screens below `md`
- desktop call and assessment CTA buttons are hidden on small screens, replaced by mobile menu items and bottom nav

### Scroll behavior

- global smooth scrolling is enabled in CSS
- section scroll margin is globally set to `80px`
- mobile bottom nav hides on downward scroll after `100px`, and reappears on upward scroll
- bottom nav also tracks the visible section among `hero`, `about`, `assessment`, and `contact`

### CTA buttons

- desktop header CTA scrolls to `#assessment`
- desktop header phone CTA uses `tel:`
- mobile menu includes a call button and an assessment button
- mobile bottom nav includes a green `Book` WhatsApp button

### Section linking
Primary section IDs in use:

- `hero`
- `services`
- `assessment`
- `about`
- `contact`
- `specialists`
- `testimonials`
- `vision-assessment`
- `faqs`
- `guide`

There are also invisible anchors for `scleral-lenses` and `contact-lenses` placed inside the first services card.

### Logo implementation

- header logo uses `src/assets/logo.png` rendered as a background image inside a custom `BrandLogo` block
- footer logo uses `public/logo.svg` as a normal image tag

### Source references

- `src/App.tsx`
- `src/pages/Index.tsx`
- `src/pages/Admin.tsx`
- `src/pages/NotFound.tsx`
- `src/components/Header.tsx`
- `src/components/MobileNav.tsx`
- `src/components/Footer.tsx`

---

## 4. Hero Section

### Main headline

- line 1: `See the World`
- line 2: `Clearly Again`

### Supporting text
The copy positions KeratoCare as a premium eye-care clinic specializing in keratoconus treatment and vision correction with advanced technology and a patient-first approach.

### CTA buttons

- `Book Free Assessment`: scrolls to `#assessment`
- `Call Now`: `tel:+918432861131`

### Background / gradient

- hero root uses `.bg-gradient-hero-new`
- gradient is a bright medical blue to cyan blend
- extra blurred gradient blobs are placed behind the content

### Media block

- desktop only
- looping, muted, inline `<video>` uses `/hero-video.mp4`
- `hero-eye.jpg` acts as poster/fallback
- floating circles animate over the media frame

### Animations

- section content enters with `animate-slide-up`
- headline and supporting text use staggered `animate-fade-in-up`
- stats count up only when the section enters the viewport
- floating circles use `animate-float`
- desktop video wrapper fades in

### Layout behavior

- mobile: single-column, text-first, centered
- desktop: two-column layout with content left and media right
- CTA buttons stack vertically on small screens and align horizontally from `sm`

### Responsive behavior

- media block hidden below `lg`
- text scales from `text-3xl` to `xl:text-6xl`
- stats wrap across small widths
- social proof avatars remain compact and centered on mobile

### Motion accessibility
The component explicitly watches `prefers-reduced-motion` and short-circuits count-up durations when reduced motion is requested.

### Source references

- `src/components/Hero.tsx`
- `src/index.css`
- `public/hero-video.mp4`
- `src/assets/hero-eye.jpg`

---

## 5. Assessment System

### Critical finding
The current codebase does **not** implement a real questionnaire, scoring engine, or result-generation system.

The word `assessment` is used in marketing copy and anchor IDs, but not as a genuine quiz/workflow.

### What actually exists

1. A live static treatment-journey section in `src/components/Services.tsx`
2. An unused component `src/components/VisionAssessment.tsx` that displays static before/after cards and CTAs
3. A WhatsApp template message in `src/lib/whatsapp.ts` that assumes a user has completed an assessment

### Requested questionnaire analysis, based on actual code

#### Number of questions
`0`

#### Question flow
None. No question array, no stepper, no branching logic.

#### Option structure
None. There are no answer options or selectable assessment answers in the live site.

#### State management
There is no assessment-answer state. The only related state in the live experience is:

- scroll-based section targeting to `#assessment`
- WhatsApp CTA routing that uses the idea of an assessment in message copy

#### Score calculation logic
None.

#### Result generation logic
None.

#### Risk categorization
None.

#### UI interactions

- users can scroll to the `assessment` anchor
- users can read the four-step treatment journey
- users can click booking/WhatsApp actions related to assessment messaging

#### Progress tracking
None.

#### Validation
None.

#### Submission flow
There is no assessment form submission. The closest related flows are:

- hero/header/footer buttons that scroll to the assessment anchor
- service/footer/mobile buttons that open WhatsApp

#### How user answers are processed
No answers are collected, so no answer processing exists.

#### How results are displayed
No results UI exists.

#### Dynamic rendering logic
No dynamic assessment rendering logic exists. The `VisionAssessment` component maps over a hardcoded array of three categories, but it is not mounted and is still not a questionnaire.

### What the live `assessment` anchor contains
Inside `Services.tsx`, `#assessment` renders four static steps:

1. Vision Assessment
2. Custom Lens Design
3. Professional Fitting
4. Ongoing Eye Health

Each step includes:

- step number
- title
- description
- duration

### Important mismatch for future AI / developers
If another model assumes there is a real assessment engine because of the label, that assumption will be incorrect. Any new model should treat assessment as a content/CTA concept, not an implemented questionnaire feature.

### Source references

- `src/components/Services.tsx`
- `src/components/VisionAssessment.tsx`
- `src/lib/whatsapp.ts`
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/MobileNav.tsx`
- `src/components/Footer.tsx`

---

## 6. Before / After Image Section

### Current implementation summary
The live before/after experience is in `src/components/VisionSlider.tsx`, but it is not a draggable comparison slider. It is a state-driven visual switcher.

### How image comparison works

- the component stores `selectedOptionId`
- it also stores `selectedState` as `"before"` or `"after"`
- it derives `activeOption` from the selected ID
- it derives `activeState` from `activeOption.states[selectedState]`
- switching the symptom option resets the state back to `"before"`

### Available comparison categories

1. Vision Clarity
2. Glare Reduction
3. Light Sensitivity

### State structure
Each option includes:

- `id`
- `icon`
- `title`
- `description`
- `states.before`
- `states.after`

Each state can define:

- `label`
- `image`
- `alt`
- optional `imageClassName`
- optional `overlayStyle`

### Mouse / touch interactions
There is no drag handle, scrubber, or pointer-based split view.

Actual interactions are:

- tap/click an outcome category button
- tap/click a before/after state button

This means the component is easy to use on mobile, but it behaves more like a tabbed state switcher than a true comparison slider.

### Image rendering

- `Vision Clarity` uses separate local assets:
  - `vision-before.jpg`
  - `vision-after.jpg`
- `Glare Reduction` and `Light Sensitivity` reuse `vision-after.jpg` and simulate changes through brightness, contrast, saturation, and overlay gradients

### Animations / transitions

- image and overlay transitions use `transition-all duration-500 ease-out`
- selected buttons change variant and shadow
- bottom label overlay remains fixed while content updates

### Responsiveness

- image frame uses `aspect-[5/4]` on small screens
- image frame shifts to `sm:aspect-[4/3]` on larger screens
- top selector buttons wrap across widths
- main comparison card is capped at `max-w-3xl`

### User interaction logic

- initial state: `selectedOptionId = "vision"` and `selectedState = "before"`
- selecting a new category always resets to the before state
- selected button styling communicates the active context

### Current issue in the component
The component renders `activeOption.benefit` in the eyebrow area, but no `benefit` field exists in the option type or data. That means the UI attempts to render a value that is always missing.

### Repo-only alternative component
`src/components/VisionAssessment.tsx` also contains before/after-themed visuals, but:

- it is not used on the landing page
- it uses static stacked cards instead of the live toggle layout
- it also references a missing `category.benefit` field

### Source references

- `src/components/VisionSlider.tsx`
- `src/components/VisionAssessment.tsx`
- `src/assets/vision-before.jpg`
- `src/assets/vision-after.jpg`

---

## 7. Contact Form System

### Live contact implementation
The live form is defined directly in `src/components/Contact.tsx`.

### Form fields

- `name` required
- `email` required
- `phone` required
- `condition` optional select
- `message` optional textarea
- `agreed` required checkbox for submission

### Condition options

- Keratoconus
- Post-Surgery
- Irregular Cornea
- Other Corneal Issue

### Validation

- browser-native `required` validation on name, email, phone
- custom logic blocks submission if `agreed` is `false`
- no schema validation, regex validation, or backend validation in the live form

### Submission handling

1. prevent default form submission
2. block if privacy checkbox is unchecked
3. create `contactData` object with safe fallbacks
4. try `storeMessageSilently(contactData)`
5. show success toast
6. clear form
7. after 2 seconds, generate a WhatsApp message and open `wa.me`
8. show follow-up toast telling the user to send the WhatsApp message

If storage fails, the code still redirects the user to WhatsApp after a slightly shorter delay.

### WhatsApp integration
The live form does not send data to a backend or email endpoint. It opens a WhatsApp chat with a prefilled message generated by `generateWhatsAppMessage`.

### localStorage usage
The live form writes through `storeMessageSilently`, which stores:

- an array under `keratocare_admin_messages`
- an itemized backup entry under `keratocare_msg_${id}`

Stored data includes:

- name
- email
- phone
- condition
- message
- generated ID
- ISO timestamp
- `navigator.userAgent`
- placeholder `ipAddress: "Not available"`

### Toast notifications
The live form uses `sonner` to display:

- error toast when privacy is unchecked
- success toast after submission
- info toast after WhatsApp opens

### Email / mailto logic
There is no live email submission path.

However, the repo contains an unused alternative component, `ContactFormReliable.tsx`, which:

- saves a local backup to `keratocare_messages`
- constructs a `mailto:` URL for `keratocare.contact@gmail.com`
- opens the user’s mail client
- offers call and WhatsApp secondary actions

That component is currently not mounted.

### Map integration
The contact section also includes:

- embedded Google Maps iframe focused on Pune
- external `Open in Google Maps` link

### Current quirks / issues

- the text `You'll be redirected to WhatsApp...` contains a malformed leading character
- a dead `handleExportAll` helper is defined but never used
- the UI references HIPAA/privacy consent, but there is no backend or compliance workflow enforcing healthcare-grade data handling

### Source references

- `src/components/Contact.tsx`
- `src/components/ContactFormReliable.tsx`
- `src/lib/admin-storage.ts`
- `src/lib/whatsapp.ts`
- `src/components/ui/select.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/label.tsx`

---

## 8. UI Components

### Major reusable components actively used by the live site

#### `Button`
Base shadcn button with variants:

- `default`
- `destructive`
- `outline`
- `secondary`
- `ghost`
- `link`

Used throughout hero, services, contact, admin, footer, and mobile menu.

#### `Card`
Generic bordered panel used for:

- service cards
- about profile
- stats
- testimonials
- contact cards
- admin panels

#### `Input`
Used for name, email, and phone fields.

#### `Textarea`
Used for the contact message field.

#### `Label`
Used for accessible form labeling.

#### `Select`
Radix-based dropdown used for `condition`.
This file has been customized with high z-index popper content to avoid clipping inside the contact form card.

#### `Badge`
Used in the admin panel to show condition tags and counts.

#### `Toaster` and `Sonner`
Both toast systems are mounted globally, but the public site mostly uses `sonner`’s `toast`.

#### `TooltipProvider`
Mounted globally in `App.tsx`, though the landing page does not currently render visible tooltip UI.

### Major custom section components

- `Header`
- `Hero`
- `VisionSlider`
- `Services`
- `About`
- `Contact`
- `Footer`
- `MobileNav`
- `FloatingButtons`
- `AdminPanel`

### Repo-only or scaffolded components worth noting

- `VisionAssessment`: unused alternate visual-results section
- `ContactFormReliable`: unused email-based contact form
- `FirebaseTest`: unused debugging component
- `HeroVideo`: empty file

### Full shadcn/ui inventory present in the repo
The project includes a large generated UI library under `src/components/ui/`, including:

- accordion
- alert / alert-dialog
- aspect-ratio
- avatar
- badge
- breadcrumb
- button
- calendar
- card
- carousel
- chart
- checkbox
- collapsible
- command
- context-menu
- dialog
- drawer
- dropdown-menu
- form
- hover-card
- input / input-otp
- label
- menubar
- navigation-menu
- pagination
- popover
- progress
- radio-group
- resizable
- scroll-area
- select
- separator
- sheet
- sidebar
- skeleton
- slider
- sonner
- switch
- table
- tabs
- textarea
- toast / toaster
- toggle / toggle-group
- tooltip

Important: most of these are available in the repo but are not currently used by the public landing page.

### Source references

- `src/components/ui/`
- `src/components/`

---

## 9. Design System

### Color palette
The design system is defined primarily in `src/index.css` and surfaced through Tailwind theme extension.

Core tokens:

- `--primary`: blue, roughly `#4A90E2`
- `--secondary`: green, roughly `#27AE60`
- `--accent`: pale blue
- `--medical-blue`, `--medical-blue-dark`, `--medical-blue-light`
- `--success-green`, `--success-green-dark`, `--success-green-light`
- `--warm-orange`
- `--navy-dark`: `#012A4A`
- `--teal-bright`: `#00A896`

Hardcoded accent colors also appear in component classes:

- `#173B8D`
- `#25B4B3`
- `#4facfe`
- `#00d9e7`
- emerald and green utility shades

### Gradients

- `--gradient-primary`: blue to green
- `--gradient-hero`: bright blue to cyan
- `--gradient-subtle`: white to light gray
- `--gradient-green-button`: teal-green to lime

Notable usage:

- hero background
- header assessment CTA
- footer top CTA ribbon
- floating social branding

### Typography

- primary font: Inter
- loaded twice: once in `index.html` and once via `@import` in `src/index.css`
- headings are bold to extra-bold
- body text is clean, modern, and highly legible

### Shadows

- CSS tokenized shadows in `index.css`
- many components also use custom inline Tailwind shadow values for premium glass cards and CTA emphasis

### Border radius

- global radius token: `0.75rem`
- many sections increase this with `rounded-2xl`, `rounded-[28px]`, `rounded-[30px]`, and full-pill buttons

### Spacing system

- primary section spacing is `py-20`
- cards generally use `p-6` or `p-8`
- layout containers use `container mx-auto px-4`

### Animation style

- subtle fades, slide-ups, floating shapes, count-up stats, hover scale, and hover lift
- no heavy motion choreography or page-level scroll narrative

### Tailwind usage

- Tailwind is the main styling layer
- design tokens are exposed through CSS variables and Tailwind theme mappings
- many components rely on utility-first inline classes
- custom classes in `index.css` supplement Tailwind for hero, buttons, stats, and animation helpers

### shadcn/ui usage

- shadcn provides structural primitives and accessibility patterns
- current site customizes these primitives heavily with Tailwind classes
- the select component has been specifically customized for stacking context issues

### Source references

- `src/index.css`
- `tailwind.config.ts`
- `components.json`
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/select.tsx`

---

## 10. Responsiveness

### Mobile adaptations

- mobile header collapses into a menu button
- mobile bottom nav adds persistent one-tap navigation and booking
- hero media column disappears below `lg`
- CTA buttons stack vertically on smaller screens
- footer spacing increases bottom padding to avoid collision with the mobile nav

### Tablet layouts

- content commonly shifts from one column to two at `md`
- about profile card becomes `md:grid-cols-3`
- testimonials become `md:grid-cols-3`
- contact becomes `md:grid-cols-2`
- assessment journey becomes `md:grid-cols-4`

### Responsive navbar

- desktop header nav appears from `md`
- mobile dropdown only appears below `md`
- bottom nav is `md:hidden`

### Responsive cards

- services grid becomes three columns at `lg`
- testimonial and stat cards compress well across breakpoints
- form/card padding adjusts with `sm` breakpoints

### Grid behavior

- hero switches to `lg:grid lg:grid-cols-2`
- services use `grid-cols-1 lg:grid-cols-3`
- statistics use `grid-cols-2 md:grid-cols-4`
- footer uses `sm:grid-cols-2 xl:grid-cols-4`

### Breakpoints used
The code mostly relies on Tailwind defaults:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: container width configured to 1400px

### Source references

- `src/components/*.tsx`
- `tailwind.config.ts`
- `src/index.css`

---

## 11. Animations + Interactions

### Hover effects

- card lift via `.card-hover`
- stat enlargement via `.stat-hover`
- button translation and shadow changes
- footer link underline and horizontal slide
- floating action buttons scale on hover

### Scroll effects

- smooth scrolling to section anchors
- mobile nav visibility toggles based on scroll direction
- active section detection in mobile nav

### Transitions

- many components use `transition-all duration-200/300/500`
- image comparisons animate with `duration-500 ease-out`
- header and footer use blur + hover polish

### Motion effects

- custom keyframes: slideUpFadeIn, fadeIn, float, shake, glow, scaleIn, gradient-x, fadeInUp, statHover, floatEye
- hero uses staggered fade-up entry
- floating decorative circles animate endlessly

### Floating buttons

- fixed right-side stack
- hover scale and icon pulse
- mobile position is raised above bottom nav

### Interactive UI behaviors

- logo scroll-home behavior
- section anchor scrolling
- dropdown menu toggle in header
- WhatsApp launch buttons throughout the site
- Google Maps iframe and external map link
- back-to-top button in footer
- contact form toast flow

### Motion accessibility

- reduced-motion handling exists globally and inside `Hero`
- some hover effects still remain visual, but major timed animations are reduced

### Source references

- `src/index.css`
- `src/components/Hero.tsx`
- `src/components/Header.tsx`
- `src/components/MobileNav.tsx`
- `src/components/VisionSlider.tsx`
- `src/components/FloatingButtons.tsx`
- `src/components/Footer.tsx`

---

## 12. Data Flow + State Management

### Overall architecture
The site uses local component state almost exclusively. There is no global UI state manager such as Redux, Zustand, or React Context for application logic.

### `useState` usage by component

- `Header`: mobile menu open/closed
- `Hero`: reduced-motion detection state
- `VisionSlider`: selected concern and selected before/after state
- `MobileNav`: visibility, last scroll position, active section
- `Contact`: form field state
- `ContactFormReliable`: alternative form state
- `AdminPanel`: auth state, password, messages, stats
- `FirebaseTest`: debug loading and result state

### Props flow
There is very little prop drilling. Most sections are self-contained and do not receive props from `Index.tsx`.

### localStorage usage

#### Live contact flow

- `keratocare_admin_messages`
- `keratocare_msg_${id}`

#### Unused alternate form

- `keratocare_messages`

### Form state
Live form state is held in a single object:

- name
- email
- phone
- condition
- message
- agreed

### Assessment state
There is no questionnaire state.

The closest related interactive state is in `VisionSlider`, which manages:

- current selected comparison category
- current selected comparison state

### Admin state
The admin panel reads from localStorage and computes:

- total submissions
- today count
- this week count
- top conditions
- latest message date

### Global state logic

- React Query provider is mounted, but the public landing page does not use React Query queries or mutations
- the custom Radix toast store in `hooks/use-toast.ts` exists globally
- `sonner` toasts are globally mounted and actively used

### Firebase data path
`src/lib/firebase.ts` provides optional Firestore and Auth helpers, but the live landing page does not use them for submission or admin functionality.

### Source references

- `src/App.tsx`
- `src/components/Contact.tsx`
- `src/components/VisionSlider.tsx`
- `src/components/MobileNav.tsx`
- `src/components/AdminPanel.tsx`
- `src/lib/admin-storage.ts`
- `src/lib/firebase.ts`
- `src/hooks/use-toast.ts`

---

## 13. File / Folder Structure

### High-level structure

```text
kerato_care9/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── hero-video.mp4
│   ├── logo.svg
│   └── robots.txt
├── screenshots/
│   ├── desktop.png
│   ├── d1.png
│   └── d2.png
├── src/
│   ├── assets/
│   │   ├── hero-eye.jpg
│   │   ├── hero-eye1.jpg
│   │   ├── kerato.jpg
│   │   ├── logo.png
│   │   ├── vision-after.jpg
│   │   └── vision-before.jpg
│   ├── components/
│   │   ├── About.tsx
│   │   ├── AdminPanel.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactFormReliable.tsx
│   │   ├── FirebaseTest.tsx
│   │   ├── FloatingButtons.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroVideo.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Services.tsx
│   │   ├── VisionAssessment.tsx
│   │   ├── VisionSlider.tsx
│   │   └── ui/
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── admin-storage.ts
│   │   ├── firebase.ts
│   │   ├── utils.ts
│   │   └── whatsapp.ts
│   ├── pages/
│   │   ├── Admin.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── components.json
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

### Important files

#### Entry / app shell

- `src/main.tsx`: React bootstrap
- `src/App.tsx`: router and global providers
- `src/pages/Index.tsx`: live landing-page composition

#### Core marketing sections

- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/VisionSlider.tsx`
- `src/components/Services.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

#### Conversion utilities

- `src/components/MobileNav.tsx`
- `src/components/FloatingButtons.tsx`
- `src/lib/whatsapp.ts`

#### Lead storage / admin

- `src/lib/admin-storage.ts`
- `src/components/AdminPanel.tsx`
- `src/pages/Admin.tsx`

#### Styling / design system

- `src/index.css`
- `src/App.css`
- `tailwind.config.ts`
- `components.json`

#### Optional / scaffold files

- `src/components/ContactFormReliable.tsx`
- `src/components/VisionAssessment.tsx`
- `src/components/FirebaseTest.tsx`
- `src/components/HeroVideo.tsx`
- `src/lib/firebase.ts`

### Assets organization

- `public/` holds directly-served assets like the main video, SVG logos, and favicon
- `src/assets/` holds imported images bundled by Vite
- `screenshots/` is documentation-only and referenced from README

---

## 14. User Flow

### Primary public journey

1. **Landing / Hero**
   User sees the value proposition, stats, and immediate CTA choices.

2. **Outcome framing**
   User explores visual improvement examples in `VisionSlider`.

3. **Services**
   User reads the three service offerings and can launch service-specific WhatsApp conversations.

4. **Assessment / treatment journey**
   User reaches the `#assessment` anchor and understands the 4-step care path.

5. **Trust-building**
   User reads clinic profile, stats, and testimonials in the About section.

6. **Contact**
   User chooses between call, WhatsApp, map lookup, or form submission.

7. **Appointment booking**
   User converts via:
   - header/footer/hero assessment CTA
   - service WhatsApp CTA
   - mobile bottom `Book` button
   - floating phone or WhatsApp buttons
   - contact form redirect to WhatsApp

### Secondary journey: admin

1. visit `/admin`
2. enter hardcoded password
3. inspect local submission history
4. export CSV
5. clear older entries

### Drop-off recovery mechanisms

- floating phone button
- floating WhatsApp button
- mobile bottom nav
- repeated footer CTA

---

## 15. Tech Stack

### React usage

- function components throughout
- hooks-based state and effects
- route rendering through `react-router-dom`

### TypeScript usage

- most components are typed
- utility types used in admin-storage and Firebase helpers
- some lint issues remain around `any`

### Tailwind CSS

- primary layout and styling layer
- heavy use of utility classes
- custom theme extension via CSS variables

### shadcn/ui

- foundational UI primitives
- accessible wrappers around Radix components
- selectively customized for project-specific styling

### Libraries / packages actively used by the live site

- `react`
- `react-dom`
- `react-router-dom`
- `@tanstack/react-query`
- `lucide-react`
- `sonner`
- `react-countup`
- `react-intersection-observer`
- `clsx`
- `tailwind-merge`
- `class-variance-authority`

### Present in the repo but not meaningfully used by the live landing page

- `react-hook-form`
- `zod`
- `recharts`
- `embla-carousel-react`
- `date-fns`
- `react-day-picker`
- `next-themes`
- Firebase Auth / Firestore runtime helpers

### Icons
Primary icon system is `lucide-react`, with inline SVGs used for:

- WhatsApp FAB
- Instagram FAB

### Animation libraries

- custom CSS keyframes in `src/index.css`
- `tailwindcss-animate`
- `react-countup`
- `react-intersection-observer`

### Deployment readiness

- `npm run build` succeeds
- Vite production build completes successfully
- SEO metadata exists in `index.html`
- `robots.txt` exists

Current deployment caveats:

- lint does not pass cleanly
- canonical URL is hardcoded
- no sitemap
- no backend submission pipeline
- admin auth is client-side only

### Build / lint status observed

- build: passes
- lint: fails with TypeScript `any`, empty-interface, and `require()` issues plus several fast-refresh warnings

### Source references

- `package.json`
- `vite.config.ts`
- `tailwind.config.ts`
- `index.html`
- `src/lib/firebase.ts`

---

## 16. Improvement Suggestions

### UI / UX improvements

- turn the assessment section into a real interactive questionnaire if that is the intended product direction
- wire the `About` section buttons to actual actions
- replace the placeholder FAQ/link behavior with a real FAQ accordion
- replace placeholder footer resource links (`#`) with real pages or remove them
- standardize appointment-hour messaging across contact and footer sections

### Performance improvements

- replace header `logo.png` with the lighter `logo.svg` or another optimized asset
- compress `vision-before.jpg`, which is currently very large
- lazy-load below-the-fold images and map iframe
- consider self-hosting or optimizing remote avatar images in the hero
- review the JS bundle size if unused packages or UI primitives can be trimmed

### Accessibility improvements

- add real focus-visible states consistently to all custom controls
- ensure any CTA-only buttons have descriptive text or titles where needed
- verify sufficient contrast on light glass surfaces
- provide a real FAQ and policy content instead of anchor placeholders
- audit mobile nav and FAB overlap behavior with screen readers

### SEO improvements

- add a sitemap
- make canonical URL environment-aware
- expand structured data for medical business / local business
- add dedicated route pages for services if organic SEO growth is important
- replace placeholder resource links with indexable content pages

### Architecture improvements

- remove or clearly separate unused components like `VisionAssessment`, `ContactFormReliable`, and `FirebaseTest` if they are no longer part of the product direction
- consolidate the contact strategy so the repo has one canonical form flow
- remove duplicated font loading
- normalize asset usage so header and footer share one logo strategy

### Backend suggestions

- replace localStorage lead storage with a real backend or Firestore collection
- add server-side validation and spam protection
- implement secure admin authentication instead of a hardcoded client password
- add real submission tracking, analytics, and CRM integration

### Scalability suggestions

- move repeated content arrays into structured content/config files or CMS-fed JSON
- separate marketing content from component logic for easier iteration
- introduce page-level routes for service details, FAQ, and policy content
- use a backend or headless CMS for testimonials, services, and contact logs

### Security / product risks to note

- `/admin` password is hardcoded in the frontend
- lead data lives in browser localStorage, not a secure database
- compliance language currently overstates what the client-side implementation can guarantee
- WhatsApp flow depends on the user completing the chat manually after redirect

---

## 17. Final Summary

KeratoCare is a polished, single-page React/Tailwind marketing website for a keratoconus-focused eye-care clinic. Its live architecture is straightforward: a header-led anchor navigation shell, premium hero, visual outcome switcher, services grid, treatment-journey section, trust-building about/testimonials block, and a contact section that funnels users into phone or WhatsApp conversion. The site is highly CTA-driven and mobile-aware, with both floating contact buttons and a fixed bottom navigation bar.

From an engineering perspective, the public experience is mostly self-contained and component-driven, with minimal state complexity and no real backend dependency for the main site. Lead capture is currently handled through a localStorage + WhatsApp handoff pattern, while a client-side `/admin` route reads those stored messages and exports them as CSV. The repo includes scaffolding for Firebase, a mailto-based alternate contact form, and an unused alternate assessment/results component, but those are not part of the live page flow.

The most important architectural clarification for any new model or developer is this: the current codebase does **not** contain a real assessment questionnaire, score engine, or results workflow. The term `assessment` currently refers to a branded informational section and CTA path, not an implemented diagnostic form. Any future work around assessments, admin security, backend storage, FAQ depth, or SEO content should be treated as product expansion rather than existing behavior.
