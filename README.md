# Ian Toyota - Portfolio

This my personal portfolio. The idea was to make something modern looking but minimalistic.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

## Structure

- `src/data.ts`: Central source of truth for all content (personal info, experiences, skills, projects, writing).
- `src/components/`: Modular UI components (Hero, Skills, Experience, Projects, etc.).
- `public/`: Static assets like the resume PDF and headshot image.

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

### Deployment

The project is configured for easy deployment to GitHub Pages.

1. Ensure your `vite.config.ts` has the correct `base` path (usually your repository name).
2. Run the deploy script:

```bash
npm run deploy
```

## Customization

To update your profile, simply edit the objects in `src/data.ts`.

- **Resume:** Replace `public/resume.pdf` with your actual file.
- **Headshot:** Place your photo in `public/headshot.jpg`.
