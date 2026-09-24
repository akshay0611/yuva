# Architecture

Tech Yuva web app: a Next.js App Router frontend with Supabase authentication and mostly static content modules.

## High-level diagram

```text
Browser
  │
  ├─ Next.js App Router (RSC + client components)
  │    ├─ app/page.tsx          → HomePage (client)
  │    ├─ app/events/[slug]     → EventDetailPage
  │    └─ app/auth/*            → signin / signup / confirm / signout
  │
  ├─ Supabase Auth
  │    ├─ lib/supabase/client.ts  (browser: createBrowserClient)
  │    └─ lib/supabase/server.ts  (server: cookie session)
  │
  └─ Static content
       └─ lib/data.ts + lib/types.ts
```

## Layers

### 1. Presentation (`components/`)

| Component | Role |
| --- | --- |
| `HomePage` | Shell: loading screen, navbar, sections, tabs, modals |
| `HeroTerminal` | Hero title + terminal animation + primary CTA |
| `EventDetailPage` | Full event page used by `/events/[slug]` |
| `MemberDashboard` | Member console pane (needs session) |
| `AdminCMS` / `AdminTerminal` | Admin room panes (role-gated UI) |
| `CertificateViewer` | Modal for developer pass / certificate |
| `ParallaxCards` | Gallery / parallax media |
| `EventRegisterModal` | Registration CTA modal |
| `QueryProvider` | React Query client (root layout) |

Most interactive UI is `"use client"` because it depends on auth state, local form state, or motion.

### 2. Routing (`app/`)

| Route | Type | Notes |
| --- | --- | --- |
| `/` | Static shell | Client `HomePage` |
| `/events/[slug]` | Dynamic | `params` is a Promise — `await` / `use()` |
| `/auth/signin` | Client page | `signInWithPassword` |
| `/auth/signup` | Client page | `signUp` + email redirect |
| `/auth/confirm` | Route handler | Email confirmation |
| `/auth/signout` | POST handler | `signOut` then redirect `/` |

### 3. Auth & session

```text
User → /auth/signin → supabase.auth.signInWithPassword
     → session cookie (@supabase/ssr)
     → HomePage useEffect: getUser + onAuthStateChange
     → header shows email / SIGN OUT
     → POST /auth/signout → clear session → /
```

- Browser client: `lib/supabase/client.ts`
- Server client: `lib/supabase/server.ts`
- Session lives in cookies; do not store tokens in `localStorage` for Supabase flows.

### 4. Content & domain (`lib/`)

- `types.ts` — `EventItem`, `GalleryItem`, `Sponsor`, `Testimonial`, metadata shapes
- `data.ts` — canonical lists (`UPCOMING_EVENTS`, `PAST_EVENTS`, `GALLERY_ITEMS`, …)
- Content is edited in code for now; a CMS/API can replace `data.ts` without changing routes.

### 5. Styling

- Tailwind CSS 4 via `@import "tailwindcss"` and `@theme` tokens in `globals.css`
- Design tokens: brand bg, neon blue, saffron, emerald, text/border colors
- `html`/`body` use `overflow-x: hidden` to prevent decorative-orb horizontal scroll

## Key flows

### Home tabs

```text
upcoming  → event cards (UPCOMING_EVENTS)
portal    → MemberDashboard (requires currentUser)
admin     → AdminCMS | AdminTerminal (role === "admin")
```

### Event detail

```text
lib/data.ts → slug → app/events/[slug]/page.tsx → EventDetailPage
```

### Future backend (optional)

React-site OTP login and live CMS expect Express-style `/api/*` endpoints. This app does not implement them yet; shells render with empty/static data until an API is added.

## Non-goals (current)

- Server-side rendering of auth-gated dashboards (client-first)
- Drizzle/Postgres content DB in this package (content is static)
- Monorepo shared packages with the React site

## Operational notes

- Build must pass `tsc --noEmit` and `next build` before push
- Keep UI parity with the React source when porting features
- Never commit `.env*` (gitignored)
