# Plan of Record

Status legend: ✅ Done · 🔄 In progress · ⏳ Planned

## Current commitments
- ✅ Align docs and stack on Next.js 16 and passwordless magic-link auth.
- ⏳ Sync shared environment examples with the current local values for quick setup.
- ⏳ Ship Watch Safe end-to-end (TMDB/OpenAI `/api/watch-check`, UI wiring, remote image allowlist).
- ⏳ Finish Supabase alignment: runnable migrations for app/api schemas, avatars bucket, feature flags/logging.
- ⏳ Harden auth/profile UX (session refresh, error messaging, logging) and remove unused auth variants.
- ⏳ Stand up challenge/group skeleton (routes + server actions + stubbed data) for “last one out” flows.
- ⏳ PWA and performance polish (manifest/service worker, mobile metrics) plus minimal test/CI baseline.

See `docs/` for supporting detail:
- `docs/product.md` – product scope, rules, and requirements
- `docs/architecture.md` – stack, services, data model sketch, feature notes
- `docs/ops.md` – environment variables, running locally, migrations, deployment
- `docs/decisions.md` – resolved decisions and open questions

## Upcoming steps (detail)
1) Environment hygiene
   - Update `web/.env.example` from `.env.local` values.
   - Call out required keys in docs and verify secrets aren’t needed in commits.
2) Watch Safe feature
   - Implement `/api/watch-check` with TMDB primary + iTunes fallback + OpenAI assessment.
   - Allowlist image domains in `next.config.mjs`; surface results on home.
3) Supabase + data model
   - Author migrations for `app` tables, RLS, and `api` feature flags/debug logs; include avatars bucket.
   - Wire repos/use-cases layer per `docs/server-caching-plan.md` for profile/avatar.
4) Auth/profile polish
   - Ensure magic-link-only flow, session lifecycle, structured logging, and avatar upload durability.
5) Challenge/group scaffold
   - Build placeholder routes/components for groups, invites, challenges, and “I’m out” submission.
6) PWA + quality
   - Add manifest/service worker/icons, mobile perf checks, and minimal lint/test CI pipeline.
