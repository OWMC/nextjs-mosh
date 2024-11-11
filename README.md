This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Notes

NEXT-DEMO

set up using app-router

Uses Tailwind, Radix, Prisma, Axios, react hook form.

DaisyUI, Bootstrap have been experimented with here also.

Server components: non interactive server js - buildtime (SSG) or runtime (SSR)
Client components: interactive browser js - runtime - addToCart, new issue form (react apps like SPAs, no seo, extra round trips for data)

Default is static buildtime (ssg) pages. Currently getting the Issues tracker to work requires SSR I think, not SSG. 

'use client' will make a component CR. It is used atomically (on a field or button instance that depends on remote data).

Next uses caching on the fetch function. If set to no-store, there's no cache and it is SSRd each time. Revalidate every X seconds will store a static cache of an SSR'd page until the time expires and it will fetch new data and re-render.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
