# Dr. Md. Moniruzzaman Sarkar — Official Website

Professional medical website for **Dr. Md. Moniruzzaman Sarkar**, Assistant Professor, Gastroenterologist & Diabetologist (Yale University). Built with Next.js 16, Tailwind CSS, and TypeScript.

## Features

- **Modern, Premium Healthcare Design** — Minimal luxury aesthetic with soft shadows, rounded cards, and generous spacing
- **Fully Responsive** — Mobile-first design with adaptive bottom navigation, floating action buttons, and optimized layouts for all screen sizes
- **SEO Optimized** — sitemap.xml, robots.txt, canonical URLs, hreflang tags, comprehensive schema.org structured data (Person, Physician, MedicalClinic, FAQPage, Article, BreadcrumbList, AggregateRating)
- **Performance Focused** — Static generation (SSG) for all pages, optimized fonts (Outfit + Merriweather with display=swap), lazy-loaded images via next/image
- **Conversion Optimized** — Multiple CTAs, floating WhatsApp/phone buttons, appointment booking form, contact form
- **Content Rich** — Detailed condition pages, blog with markdown rendering, testimonials carousel, gallery, consultation timeline

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Outfit (body) + Merriweather (headings) via next/font |
| Icons | Lucide React |
| Forms | React Hook Form + Zod validation |
| UI | Custom shadcn-style components |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts, metadata, schema.org
│   ├── page.tsx           # Homepage
│   ├── about/             # About page with biography & timeline
│   ├── appointment/       # Appointment booking
│   ├── blog/              # Blog list + dynamic [slug] pages
│   ├── conditions/        # Conditions list + dynamic [slug] pages
│   ├── contact/           # Contact form + info
│   ├── gallery/           # Photo gallery
│   ├── services/          # Medical services listing
│   ├── specialties/       # Specialties list + dynamic [slug] pages
│   ├── privacy-policy/    # Privacy policy
│   ├── terms/             # Terms & conditions
│   ├── 404/               # Custom 404 page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots configuration
├── components/
│   ├── ui/                # Reusable UI primitives
│   ├── Navbar.tsx         # Responsive navbar with mobile menu
│   ├── Footer.tsx         # Site footer with links & chambers
│   ├── Hero.tsx           # Homepage hero with doctor portrait
│   ├── TrustCards.tsx     # Why choose us cards
│   ├── ExpertiseCards.tsx # Specialty cards
│   ├── ConditionCards.tsx # Condition preview cards
│   ├── Timeline.tsx       # Consultation process steps
│   ├── Chambers.tsx       # Chamber locations
│   ├── Testimonials.tsx   # Patient testimonials carousel
│   ├── BlogCards.tsx      # Blog article cards
│   ├── FAQ.tsx            # Accordion FAQ component
│   ├── ContactForm.tsx    # Contact form with validation
│   ├── AppointmentForm.tsx# Appointment booking form
│   ├── FloatingWhatsApp.tsx # WhatsApp FAB
│   ├── FloatingCall.tsx   # Phone FAB
│   └── BottomMobileNav.tsx # Mobile bottom navigation
├── lib/
│   └── data.ts            # Doctor profile, conditions, specialties, blog posts, testimonials, FAQs
├── constants/
│   └── index.ts           # Navigation, footer links, site config
├── types/
│   └── index.ts           # TypeScript interfaces
└── utils/
    └── cn.ts              # className utility
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript compiler check |

## Configuration

### Site Configuration

Edit `src/constants/index.ts` to update:

```typescript
export const SITE_CONFIG = {
  name: "Dr. Md. Moniruzzaman Sarkar",
  url: "https://drmoniruzzamansarkar.com",
  phone: "+8801700000000",
  whatsapp: "+8801700000000",
  email: "dr.moniruzzaman@example.com",
  address: "General Diagnostic Center, Medical Mor, Dhap Jail Road (Opposite Sarak Bhaban), Rangpur",
};
```

### Doctor Profile

Edit `src/lib/data.ts` to update:

- Qualifications, biography, mission statement
- Chamber locations, visiting hours, phone numbers
- Achievements, memberships, education history
- Conditions, specialties, services
- Blog posts, testimonials, FAQs
- Gallery items

### Brand Colors

Edit `src/app/globals.css`:

```css
:root {
  --background: #F8FAFC;
  --foreground: #1E293B;
  --medical-blue: #0F4C81;
  --healthcare-green: #2E8B57;
  --border: #E5E7EB;
}
```

## SEO Features

- **Metadata** — Per-page titles, descriptions, keywords, Open Graph, Twitter Cards
- **Structured Data** — Person, Physician, MedicalClinic, FAQPage, Article, BreadcrumbList, AggregateRating
- **Sitemap** — Auto-generated at `/sitemap.xml`
- **Robots** — Configured at `/robots.txt`
- **Canonical URLs** — Set on all pages
- **Hreflang** — `en-BD` and `bn-BD` declarations
- **Security Headers** — X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sofolitltd/drmoniruzzamansarkar)

### Other Platforms

Build the project and deploy the `.next` folder to any Node.js hosting:

```bash
npm run build
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Dr. Md. Moniruzzaman Sarkar. All rights reserved.

## Contact

- **Phone:** +8801700000000
- **WhatsApp:** +8801700000000
- **Email:** dr.moniruzzaman@example.com
- **Chamber 1:** General Diagnostic Center, Medical Mor, Dhap Jail Road (Opposite Sarak Bhaban), Rangpur
- **Chamber 2:** Poschimpara, Gaibandha (Friday)
