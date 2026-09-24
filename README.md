# Tech Yuva

Student-led innovation guild platform — where youth meet to build future tech.

Next.js (App Router) + Supabase auth + React Query. UI is kept in parity with the React source site.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4, Motion |
| Auth | Supabase (`@supabase/ssr`) |
| Data fetching | TanStack React Query |
| Language | TypeScript (strict) |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

Create `.env.local` (gitignored):

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
# optional: used after sign-out redirect
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Project layout

```
app/
  page.tsx              # Home
  layout.tsx            # Root layout + QueryProvider
  globals.css           # Theme, base styles, overflow clip
  auth/                 # Sign in, sign up, confirm, sign out
  events/[slug]/        # Event detail (dynamic route)
components/             # UI (HomePage, hero, dashboards, modals)
lib/
  data.ts               # Events, gallery, sponsors (static content)
  types.ts              # Shared domain types
  supabase/             # Browser + server Supabase clients
public/                 # Images, posters, icons
```

## Auth

- **Sign in / sign up:** `/auth/signin`, `/auth/signup` (Supabase email + password)
- **Sign out:** `POST /auth/signout` → redirect `/`
- **Navbar:** shows email + SIGN OUT when a session exists; otherwise SIGN IN / SIGN UP

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — system design and data flow
- [AI-AGENTS.md](./AI-AGENTS.md) — guidance for AI coding agents
- [AGENTS.md](./AGENTS.md) — agent entrypoint (Next.js rules + project notes)

## Deploy

Deploy on [Vercel](https://vercel.com/new). Set Supabase env vars in the project settings.
