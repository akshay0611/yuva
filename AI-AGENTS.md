# AI Agents — project guide

Instructions for coding agents (OpenCode, Claude, Codex, etc.) working in this repo.

## Read first

1. [AGENTS.md](./AGENTS.md) — includes Next.js agent rules that `next dev` rewrites
2. [ARCHITECTURE.md](./ARCHITECTURE.md) — routes, auth, content model
3. [README.md](./README.md) — setup and scripts
4. `node_modules/next/dist/docs/` — **authoritative Next.js docs for this install** (may differ from training data)

## Hard rules

- This Next.js version has breaking changes — do not assume older APIs. Prefer docs under `node_modules/next/dist/docs/`.
- Dynamic route `params` is a `Promise` (e.g. `params: Promise<{ slug: string }>`).
- Keep the `<!-- BEGIN:nextjs-agent-rules -->` block in `AGENTS.md` intact (Next re-adds it).
- Never commit secrets or `.env.local`.
- Path alias: `@/*` → repo root (`my-app/` when nested).
- Prefer editing existing files over creating new ones.
- Match existing style: Tailwind classes, `"use client"` where needed, lucide-react icons (use `GithubIcon` from `components/BrandIcons.tsx` — lucide has no `Github` export here).

## Before you finish

```bash
npx tsc --noEmit
npm run build
```

Both must exit 0. Lint warnings that exist in ported React components are acceptable unless you introduced them.

## Auth conventions

- Supabase only for session: `createClient` from `@/lib/supabase/client` / `@/lib/supabase/server`
- Header auth UI lives in `components/HomePage.tsx` (SIGN IN / SIGN UP / SIGN OUT)
- Sign-out is `POST /auth/signout` → redirect `/`
- Do not reintroduce the OTP header modal unless the Express API exists

## Content conventions

- Event/gallery/sponsor content: `lib/data.ts` + types in `lib/types.ts`
- UI parity source of truth: React site when porting features
- Empty lists should render graceful empty states, not crash

## Component conventions

- Client pages/components: `"use client"` at top
- Shared UI: `components/`
- Root data providers: `app/layout.tsx` (`QueryProvider`)
- Modals: controlled by `isOpen` + `onClose` props

## Git

- User must ask explicitly before commit/push
- Scope commits to the task; do not stage unrelated files
- Message style: `feat:` / `fix:` / `chore:` + short summary

## Quick map

| Task | Where |
| --- | --- |
| Home UI | `components/HomePage.tsx` |
| Hero | `components/HeroTerminal.tsx` |
| Event page | `components/EventDetailPage.tsx`, `app/events/[slug]/page.tsx` |
| Auth pages | `app/auth/*` |
| Supabase | `lib/supabase/*` |
| Data | `lib/data.ts`, `lib/types.ts` |
| Theme | `app/globals.css` |

## Anti-patterns

- Assuming Next.js 13/14 App Router APIs without checking local docs
- Committing `.next/`, `node_modules/`, or `*.tsbuildinfo`
- Using `lucide-react` `Github` icon (use BrandIcons)
- Hardcoding absolute Supabase URLs in components (use env via `createClient`)
- Breaking horizontal overflow (`overflow-x: hidden` on `html`/`body`)
