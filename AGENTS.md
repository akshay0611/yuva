# AGENTS.md

## Project context (Tech Yuva Next.js app)

Working directory is this Next.js app (App Router, TypeScript, Tailwind 4, Supabase auth).

**Read before coding:**

- [AI-AGENTS.md](./AI-AGENTS.md) — conventions, auth, finish checklist
- [ARCHITECTURE.md](./ARCHITECTURE.md) — routes and data flow
- [README.md](./README.md) — setup and scripts
- `node_modules/next/dist/docs/` — local Next.js docs (source of truth for this version)

**Verify before push:** `npx tsc --noEmit` and `npm run build` must pass.

**Auth:** Supabase only (`lib/supabase/*`). Navbar sign-in/up/out lives in `components/HomePage.tsx`. Sign-out: `POST /auth/signout` → `/`.

**Content:** `lib/data.ts` + `lib/types.ts`. Keep UI parity with the React source when porting.

**Icons:** use `components/BrandIcons.tsx` for GitHub (`GithubIcon`), not lucide `Github`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
