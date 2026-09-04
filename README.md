This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Create a `.env.local` file (or set these in your hosting provider's dashboard) with:

| Variable | Required | Used by | Purpose |
| --- | --- | --- | --- |
| `EMAIL_USER` | Yes | `app/api/enroll/route.ts`, `app/api/contact/route.ts` | Gmail address the enrollment and contact forms send notifications from. |
| `EMAIL_PASS` | Yes | `app/api/enroll/route.ts`, `app/api/contact/route.ts` | Gmail app password for the above account. |
| `BLOG_ADMIN_PASSWORD` | Yes (for blog publishing) | `app/api/blog/route.ts` | Shared password staff enter at `/news/admin` to publish a post. |
| `SHEETDB_API_KEY` | Optional | `app/api/blog/route.ts` | If set, sent as a Bearer token to SheetDB. Recommended: enable API-key protection for write methods (POST/PATCH/DELETE) in your SheetDB dashboard and set this to match — otherwise the sheet's write endpoint is only gated by this app's password, not by SheetDB itself. |

The blog (`/news`) reads and writes posts via `SCHOOL_DATA.sheetdbUrl` in `constants/index.ts`, a [SheetDB](https://sheetdb.io) API backed by a Google Sheet. Expected columns: `title`, `slug`, `excerpt`, `content`, `image_url`, `category`, `date`, `author`.

### Site-wide flyer popup

`components/FlyerPopup.tsx` shows a dismissible popup (once per visitor session) on every page, plus a featured card at the top of `/news`. Both read the image from `public/flyers/ibtidahiy-graduation-2026.jpg` — drop the current event flyer there under that exact filename to update it. To promote a different event later, replace that file (or update the path in `FlyerPopup.tsx` and `app/news/page.tsx`) and bump the `DISMISS_KEY` in `FlyerPopup.tsx` so it re-appears for visitors who dismissed the old one.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
