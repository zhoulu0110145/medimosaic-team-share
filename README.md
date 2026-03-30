# MediMosaic Prototype

MediMosaic is a mobile-first biomedical web prototype for a course presentation. It demonstrates how a patient and caregiver can upload fragmented health documents, understand medical results in plain language, track trends over time, add notes, and share a concise summary package.

The prototype is frontend-only. All content uses realistic but fictional mock data based on the project PDFs.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Recharts
- Lucide React

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Deploy to Vercel

This project is ready for Vercel deployment.

What has already been prepared in this repo:

- `vercel.json` for SPA deep-link routing
- `.vercelignore` to avoid uploading the source PDFs
- verified `npm run build` production build

### Option A: Deploy with GitHub and the Vercel dashboard

1. Push this repo to GitHub.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click `Add New...` → `Project`.
4. Import the GitHub repository for `MediMosaic`.
5. Vercel should detect `Vite` automatically.
6. Confirm these settings if prompted:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. If Vercel asks for a project name, use `medimosaic-prototype` or `medimosaic`.
8. Click `Deploy`.

After deployment:

- presentation/demo version: `/`
- simplified user version: `/app`

If you previously linked this folder to an older Vercel project name, you can either:

- rename the project in the Vercel dashboard to `medimosaic-prototype`, or
- create a new Vercel project with the `MediMosaic` name

### Option B: Deploy with the Vercel CLI

1. Install the CLI:

```bash
npm i -g vercel
```

2. Log in:

```bash
vercel login
```

3. From the project root, run:

```bash
vercel
```

4. Suggested answers during the first setup:
   - Set up and deploy: `Y`
   - Link to existing project: `N`
   - Project name: `medimosaic-prototype`
   - Directory: `./`

5. For a production deployment later, run:

```bash
vercel --prod
```

### Important note for this app

This is a Vite single-page app using React Router. The `vercel.json` rewrite is required so routes like `/app`, `/app/dashboard`, and `/report/lab-mar-2026` still work when opened directly or refreshed in the browser.

## Main routes

- `/` landing page
- `/app` simplified user-facing version without presentation/demo extras
- `/app/dashboard` simplified dashboard inside the user flow
- `/dashboard` patient dashboard
- `/upload` upload flow with success and blurry-image error states
- `/summary` plain-language lab summary
- `/timeline` caregiver health timeline with filters and trends
- `/report/:id` report detail and comparison view
- `/notes` caregiver notes and reminders
- `/share` summary package preview and confirmation
- `/presentation` classroom presentation-support page

## Suggested class demo flow

1. Start at `/` and introduce the problem with fragmented records.
2. Enter the patient route at `/dashboard`.
3. Go to `/upload`, trigger the sample photo upload, and continue to `/summary`.
4. Use `/share?target=caregiver` to show the patient-to-caregiver handoff.
5. Switch to `/timeline` for the caregiver route.
6. Open `/report/lab-mar-2026`, go to `/notes`, then finish with `/share?target=doctor`.
7. Close on `/presentation` for the 5-minute pitch sections.

## Simplified user route

If you want the cleaner day-to-day experience without presentation support or demo shortcuts, open:

- `/app`

This version redirects straight into the core user flow at `/app/dashboard`, then continues through:

- dashboard
- upload
- summary
- timeline
- report detail
- notes
- share

## Project notes

- The source-of-truth metaphor from the PDFs is translated into UX principles only.
- No backend, database, or real patient data is used.
- The UI is intentionally calm, readable, and low-friction for users with lower digital literacy.
