# SkillDock

SkillDock is a TanStack Start application for showcasing AI agent skills in a modern registry-style interface. The current implementation focuses on a polished landing page, a reusable skill card component, and a small set of typed dummy skill records that simulate registry content.

## Project Overview

This codebase is a front-end first product shell built to present and explore agentic skills. It includes:

- A branded home page with a hero section and registry call-to-action
- A dark visual theme applied at the document root
- A reusable `SkillCard` component for rendering skill metadata
- A shared dummy data source with five sample skills
- TanStack Router layout and root shell wiring
- Clerk and TanStack Query providers in the app shell
- Tailwind CSS-based styling with custom theme tokens

## What Is Already Implemented

### Landing Page

The home route presents the product positioning, key messaging, and a latest innovations section that renders the sample skill cards.

### Skill Card UI

Each card currently displays:

- Skill title
- Description
- Category
- Tags
- Install command
- Author email
- Created date
- Copy-to-clipboard action for the install command

### Shared Dummy Data

Sample content is stored in `src/lib/dummy-skill.ts` as five `SkillRecord` items. The dataset is typed, reusable, and easy to replace with API data later.

### App Shell

The root route defines the HTML document shell and includes:

- Metadata for title and description
- Global stylesheet loading
- Clerk provider integration
- TanStack Router and TanStack Query devtools
- Persistent header layout with navigation elements

### Theme Support

The app currently renders in dark mode by default through the root HTML class. The CSS theme tokens are configured for both light and dark palettes, with dark mode active in the current shell.

## Tech Stack

- **Framework:** TanStack Start
- **Router:** TanStack Router
- **UI:** React 19
- **Styling:** Tailwind CSS v4
- **Auth:** Clerk
- **Data Layer:** TanStack Query
- **Icons:** lucide-react
- **Testing:** Vitest
- **Formatting and Linting:** Biome
- **Build Tooling:** Vite

## Data Model

The shared `SkillRecord` shape currently includes:

- `id`
- `title`
- `slug`
- `description`
- `category`
- `tags`
- `installCommand`
- `createdAt`
- `authorClerkId`
- `authorEmail`

This gives the project a clean path for later replacement with a real registry API or database-backed model.

## Repository Structure

- `src/routes/__root.tsx` - application shell, metadata, providers, and layout
- `src/routes/index.tsx` - home page and featured skills section
- `src/components/SkillCard.tsx` - reusable skill card UI
- `src/lib/dummy-skill.ts` - typed sample skill data
- `src/components/Navbar.tsx` - top navigation
- `src/components/Crosshair.tsx` - decorative header element
- `src/integrations/clerk/` - Clerk integration wiring
- `src/integrations/tanstack-query/` - TanStack Query integration wiring
- `src/styles.css` - theme tokens and app styling
- `public/` - static assets such as the app logo and manifest

## Getting Started

### Prerequisites

- Node.js 20 or newer is recommended
- npm, pnpm, or yarn

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The app runs on port `3000`.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Quality Checks

```bash
npm run lint
npm run format
npm run check
npm run test
```

## Current Status

The project is currently in a foundation stage. The home page and skill card experience are implemented, and the application shell is in place. Some navigation entries are prepared for future registry routes, but those routes are not yet implemented in the current file-based router setup.

## Notes for Future Expansion

The current structure is ready for the next layer of product work, such as:

- A real skills listing route
- Skill details pages
- Create/edit flows for publishing new skills
- Search, filtering, and category browsing
- Backend persistence for registry entries
- Auth-gated publishing and management experiences

## Learn More

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.com/)
- [Vitest](https://vitest.dev/)
- [Biome](https://biomejs.dev/)
