# SkillDock

> A modern registry experience for discovering, sharing, and showcasing AI agent capabilities.

![Status](https://img.shields.io/badge/status-alpha-7c3aed)
![React](https://img.shields.io/badge/react-19.2-61dafb)
![TanStack](https://img.shields.io/badge/tanstack-start-ff4154)
![Firebase](https://img.shields.io/badge/firebase-data_connect-ffca28)

**Last updated:** May 18, 2026  
**Project status:** Alpha foundation  
**Package manager:** npm

## Overview

SkillDock is a TanStack Start application for browsing AI agent skills, workflows, and reusable capability packages. The current version focuses on the product foundation: a polished landing experience, reusable skill cards, Clerk-powered authentication screens, analytics instrumentation, and Firebase Data Connect schema groundwork for the future registry backend.

The app is intentionally small and focused right now. Static sample data powers the public registry preview while the backend data model and GraphQL operations are being prepared in `dataconnect/`.

## ✨ Current Features

- **Agent capability landing page** with branded messaging and registry calls to action.
- **Reusable skill cards** with author metadata, category labels, install commands, copy-to-clipboard behavior, and placeholder engagement actions.
- **Clerk authentication shell** with sign-in, sign-up, signed-in user button, and signed-out navigation state.
- **PostHog analytics integration** for manual page view tracking and skill interaction events.
- **Firebase Data Connect foundation** with `User` and `Skill` schema definitions plus starter read/insert GraphQL operations.
- **Responsive dark UI** built with Tailwind CSS v4 and app-level design tokens.
- **TanStack developer tooling** for Router and Query debugging during development.

## 🧱 Tech Stack

| Area | Technology |
| --- | --- |
| Framework | TanStack Start, TanStack Router |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4, tw-animate-css |
| Auth | Clerk, `@clerk/tanstack-react-start` |
| Analytics | PostHog |
| Data foundation | Firebase Data Connect |
| State/query tools | TanStack Query |
| Icons | lucide-react |
| Quality | Biome, Vitest |
| Build tooling | Vite, React Compiler, Rolldown Babel plugin |

## 📁 Project Structure

```txt
skilldock/
├── dataconnect/
│   ├── schema/schema.gql       # Firebase Data Connect data model
│   ├── Skill_insert.gql        # Starter skill create mutation
│   ├── Skill_read.gql          # Starter skill read query
│   ├── User_insert.gql         # Starter user create mutation
│   ├── User_read.gql           # Starter user read query
│   ├── dataconnect.yaml        # Data Connect service config
│   └── example/connector.yaml  # Connector config
├── public/                     # Static app assets and manifest
├── src/
│   ├── components/
│   │   ├── Crosshair.tsx
│   │   ├── Navbar.tsx
│   │   └── SkillCard.tsx
│   ├── integrations/
│   │   ├── posthog/provider.tsx
│   │   └── tanstack-query/
│   ├── lib/
│   │   ├── dummy-skill.ts
│   │   └── utils.ts
│   ├── routes/
│   │   ├── __auth/sign-in.$.tsx
│   │   ├── __auth/sign-up.$.tsx
│   │   ├── __root.tsx
│   │   └── index.tsx
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── start.ts
│   └── styles.css
├── type.d.ts                   # Shared global SkillRecord type
├── firebase.json               # Firebase emulator/Data Connect config
├── vite.config.ts
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer
- Clerk application for authentication keys
- Optional: Firebase CLI for Data Connect emulator workflows

### Install

```bash
npm install
```

### Configure Environment

Create `.env` or `.env.local` in the project root.

```env
# Clerk
VITE_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# PostHog
VITE_PUBLIC_POSTHOG_KEY=
VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# Firebase
FIREBASE_PROJECT_ID=
FIREBASE_APP_ID=
FIREBASE_API_KEY=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
```

**Note:** ```Do not commit local environment files. `.env` is already ignored by Git.```

### Run Locally

```bash
npm run dev
```

The app runs on:

```txt
http://localhost:3000
```

## 🧪 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite/TanStack Start development server on port `3000`. |
| `npm run build` | Create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run test` | Run the Vitest test suite once. |
| `npm run lint` | Run Biome lint checks. |
| `npm run format` | Format files with Biome. |
| `npm run check` | Run Biome checks across the project. |

## 🔐 Authentication

Authentication is powered by Clerk.

- `src/routes/__auth/sign-in.$.tsx` renders the Clerk sign-in flow.
- `src/routes/__auth/sign-up.$.tsx` renders the Clerk sign-up flow.
- `src/components/Navbar.tsx` shows `UserButton` for signed-in users and a sign-in button for signed-out users.
- `src/routes/__root.tsx` wraps the application with `ClerkProvider`.

The current auth flow redirects users back to `/` after successful sign-in or sign-up.

## 📊 Analytics

PostHog is wired through `src/integrations/posthog/provider.tsx`.

Tracked behavior currently includes:

- Manual page view events on TanStack Router navigation.
- `install_command_copied` when a skill install command is copied.
- `skill_opened` when a skill card open action is clicked.

Page view autocapture is disabled so route changes can be tracked intentionally through the router subscription.

## 🔥 Firebase Data Connect

The backend foundation lives in `dataconnect/`.

Current schema:

- `User` keyed by Clerk ID.
- `Skill` records with author relationship, title, description, tags, install command, prompt config, usage example, and creation timestamp.

Important files:

| File | Purpose |
| --- | --- |
| `dataconnect/schema/schema.gql` | Source schema for Data Connect. |
| `dataconnect/dataconnect.yaml` | Service, location, Cloud SQL, and connector configuration. |
| `firebase.json` | Emulator config with Data Connect data stored under `dataconnect/.dataconnect/pgliteData`. |
| `dataconnect/*_read.gql` | Starter read operations. |
| `dataconnect/*_insert.gql` | Starter insert operations. |

Generated local emulator artifacts under `dataconnect/.dataconnect/` should remain ignored.

## 🧩 Skill Data Model

The frontend currently renders static sample skills from `src/lib/dummy-skill.ts`.

```ts
interface SkillRecord {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  installCommand: string;
  createdAt: string | null;
  authorClerkId: string | null;
  authorEmail: string | null;
}
```

This frontend model is expected to evolve as Firebase Data Connect becomes the source of truth.

## 🛠️ Development Notes

- Use the `#/*` import alias for source imports, for example `#/components/SkillCard`.
- `src/routeTree.gen.ts` is generated by TanStack Router and should only be edited through route file changes.
- The app currently has a home route plus Clerk auth routes. Some UI links already point toward future registry routes such as `/skills` and `/skills/new-skill`.
- TanStack Router and Query devtools are enabled from the root shell during development.
- Biome is the source of truth for formatting and linting.

## ✅ Quality Checklist

Before opening a pull request or deploying, run:

```bash
npm run check
npm run test
npm run build
```

Also verify:

- Clerk keys are set for the target environment.
- PostHog keys are set only when analytics should be active.
- Firebase/Data Connect generated files are not committed.
- Placeholder routes are either implemented or intentionally hidden before production.

## 🗺️ Roadmap

- Registry listing route with search, filters, and pagination.
- Skill detail pages with full metadata and usage examples.
- Authenticated skill publishing flow.
- Data Connect-backed reads and writes.
- User dashboards for authored, saved, and recently viewed skills.
- Real upvotes, bookmarks, and discussion counts.
- Production deployment configuration.

## 🧯 Troubleshooting

### Port 3000 is already in use

```bash
npm run dev -- --port 3001
```

### Clerk screens do not load

- Check that `VITE_CLERK_PUBLISHABLE_KEY` exists and belongs to the Clerk application configured for your local domain.

### Analytics events are missing

- Confirm that both `VITE_PUBLIC_POSTHOG_KEY` and `VITE_PUBLIC_POSTHOG_HOST` are configured. If they are intentionally omitted, PostHog events will not be sent.

### Route types look stale

- Restart the dev server so TanStack Router can regenerate `src/routeTree.gen.ts`.

## 📚 References

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Clerk](https://clerk.com/docs)
- [PostHog JavaScript SDK](https://posthog.com/docs/libraries/js)
- [Firebase Data Connect](https://firebase.google.com/docs/data-connect)
- [Biome](https://biomejs.dev)
- [Vitest](https://vitest.dev)

<!-- ## License

No license has been specified yet. -->

<p align="center">Thank You for exploring our community <b>SkillDock</b><br />Join our community to share something from your amazing capabilities.
</p>