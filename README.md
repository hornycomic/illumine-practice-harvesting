# Illumine Practice Harvesting MVP

Practice Harvesting Tool MVP for collecting practices from retail outlets against predefined models.

## Run locally

```bash
npm install
npm run seed
npm run dev
```

Create `.env.local` from `.env.example` first.

Seed users use password `password123`:
- `admin@illumine.test`
- `bpcl.admin@test.com`
- `sales@test.com`
- `reviewer@test.com`

## Deploy on AWS Amplify

Connect this GitHub repo in AWS Amplify, add `MONGODB_URI`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, and optional `OPENAI_API_KEY`, then deploy.
