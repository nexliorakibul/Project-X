# SEU CSE Resource Hub (Starter)

Single-university (SEU), single-department (CSE) hub with domain-restricted auth, courses, resources, ideas, and moderation.

## Tech
- Next.js (App Router)
- TypeScript
- Tailwind + shadcn/ui (optional, install step included)
- NextAuth (Google) with domain allowlist `@seu.edu.bd`
- Prisma + PostgreSQL
- File storage: S3-compatible (configure later)

## Setup
```bash
pnpm i  # or npm/yarn
pnpm dlx prisma generate
cp .env.example .env
# Fill GOOGLE_CLIENT_ID/SECRET, NEXTAUTH_SECRET, DATABASE_URL
pnpm dev
```

## Prisma
```bash
pnpm dlx prisma migrate dev --name init
```
