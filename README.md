# react-porto2

Personal portfolio for **Hamdan Akbar Marzuqi** — Web Developer & Agentic AI Integration.

Built with React 19, Vite, Tailwind CSS v4, and react-icons. Designed as a full-stack developer's portfolio: information-dense, technically honest, and free of marketing fluff.

## Stack

- **React 19** — UI library
- **Vite** (rolldown) — dev server & bundler
- **Tailwind CSS v4** — styling via CSS-first config
- **react-icons** — icon set (Feather + Simple Icons)

## Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav with section index (01-05) and active-section tracking
│   ├── Footer.jsx       # Multi-column footer with social links
│   └── PreLoader.jsx    # Sub-1s preloader with progress bar
├── data.js              # Project, stack, AI skills, experience data
├── App.jsx              # Sections: hero / about / projects / skills / contact
├── main.jsx             # Entry point
└── index.css            # Tailwind v4 theme tokens + utilities
```

## Sections

| # | Section | Purpose |
|---|---------|---------|
| 01 | Hero | Identity + typewriter role + key stats |
| 02 | About | Builder/operator narrative + experience timeline |
| 03 | Projects | 6 production projects with stack, impact, links |
| 04 | Skills | Primary stack grid + agentic AI specialism list |
| 05 | Contact | Form (FormSubmit) + social links |

## Local Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # preview production build
```

## Design Decisions

- **Dark mode only** — matches the "builder/IDE" aesthetic, no toggle complexity.
- **No emoji** — keeps the visual language technical and consistent.
- **Inter + Space Grotesk + JetBrains Mono** — three-font system: body / display / code.
- **Numbered sections (01-05)** — gives the page a navigable structure, like a CLI menu.
- **Real project data only** — no Lorem ipsum, no fake testimonials.
- **Impact bullets per project** — answers "what did this actually do?" not "what tech did you use?"

## Deployment

Static build, deploys anywhere. Recommended: Vercel or Netlify with form submission proxy.
