# DevOps Portfolio

Personal portfolio of Kamlesh Gorade, a DevOps engineer. React 18, React Router, Framer Motion, SCSS.


## Run locally

    npm ci
    npm run dev       # http://localhost:3000
    npm run build     # production build into build/

## Where to edit content

- `src/constants/index.js` - experience, education, skills, projects
- `src/i18n/ui.js` - page titles and short texts
- `public/cv.pdf` - resume download

The contact form opens the visitor's email app (mailto), so no backend or API keys are needed.

## Docker

Added next as part of the DevOps project: multi-stage Dockerfile (Node build, Nginx serve), Nginx config with a single-page-app fallback, and a CI pipeline.
