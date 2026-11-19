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

## Learn More

### Private wedding wishes

1. Open the destination Google Sheet and go to **Extensions → Apps Script**.
2. Paste the contents of [scripts/wedding-wishes.gs](scripts/wedding-wishes.gs) into the editor.
3. Select **Deploy → New deployment → Web app**. Set **Execute as** to **Me** and **Who has access** to **Anyone**. Authorize the script and copy its `/exec` URL. Keep the spreadsheet sharing set to **Restricted**.
4. Set `NEXT_PUBLIC_WISHES_ENDPOINT` to the `/exec` URL in `.env.local` and in the environment that builds the deployed invitation. Restart the dev server or rebuild the deployed site.
5. Name your response tab **Wedding Wishes** and put **Name**, **Wish**, **Date**, and **Time** in A1–D1. Send a test wish from the invitation and check that tab. The script uses hidden column E to prevent duplicate submissions. Dates and times use the spreadsheet's time zone. If a wish is missing, open **Executions** in Apps Script and check the latest `doPost` run for the saved row or setup error.

New wishes go directly to Google Sheets. Use the legacy [Firestore CSV exporter](scripts/export-wishes.py) if you want to import previously saved wishes.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
