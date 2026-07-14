# Ian Toyota - Portfolio

My personal portfolio, live at [iantoyota.com](https://iantoyota.com). A slate + crimson design with a technical, blueprint feel — hard borders, offset shadows, and mono type.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Plain CSS with design tokens (CSS variables), Tailwind base
- **Icons:** Lucide React
- **Hosting:** Cloudflare Workers (static assets), custom domain via Cloudflare DNS

## Structure

- `src/data.ts`: Central source of truth for all content (personal info, experiences, skills, projects, writing).
- `src/index.css`: Theme tokens and all component styling.
- `src/components/`: Modular UI components (Hero, Projects, Experience, Skills, Writing, Interests).
- `public/`: Static assets — resume PDF, project reports, headshot, favicon.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Deployment

Deploys automatically: every push to `main` triggers a Cloudflare build (`npm run build`, serving `dist/`). No manual deploy step.

## Customization

All content lives in `src/data.ts` — edit the objects there and the site updates.

- **Resume:** replace `public/resume.pdf`.
- **Headshot:** replace `public/headshot.jpg`.
- **Project videos:** each project card has a video slot; set `video: { url, thumbnail }` in `data.ts` to replace the "coming soon" placeholder.
