## Preview video

## Window break points

| Tailwind name | window size |
|---------------|-------------|
| md            | 768px       |
| xs            | 400px       |

## Libraries

   * Clerk auth
   * Prisma client
   * Redux Toolkit
   * React Ace
   * React Content Loader
   * Tailwind
   * React
   * Typescript

## Getting Started

To create docker container run:

```bash
docker compose up
# then
npx prisma generate
# then
npx prisma db push

# then inject seed to db with (create test TASK)
npx prisma db seed
```

Now, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
