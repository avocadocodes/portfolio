# Nikita Kar - Portfolio

A personal portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Editing content

All content lives in one place: `src/data/portfolio.js`. Update your details,
skills, experience, projects, and achievements there. No need to touch the
components.

## Add your resume

Drop your PDF into a `public/` folder named `Nikita_Kar_Resume.pdf` (or change
the `resume` field in `src/data/portfolio.js`) to make the Resume button work.

## Update project links

The project cards currently link to the GitHub profile. Replace the `url`
values under `projects[].links` in `src/data/portfolio.js` with the actual
repo and live-demo URLs.

## Deploy

- **Vercel / Netlify:** import the repo, framework auto-detected as Vite, deploy.
- **GitHub Pages:** run `npm run build` and publish the `dist/` folder.
