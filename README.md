Built with React 19 + Vite + Tailwind CSS v4.

---

## Stack

- React 19
- Vite (rolldown-vite 7.2.5)
- Tailwind CSS v4
- react-icons v5

---

## Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PreLoader.jsx
│   └── ProjectModal.jsx     # image gallery modal
├── hooks/
│   └── useScrollReveal.js
├── App.jsx                  # all sections in one file
├── data.js                  # all content lives here
├── index.css
└── main.jsx

public/assets/
├── Hamdan_Red_Background.png
└── proyek/                  # project screenshots
```

---

## Running Locally

```bash
npm install
npm run dev
```

---

## Updating Content

All text content and project data is in `src/data.js`. No need to touch any component files.

**To add a project**, add an object to the `projects` array:

```js
{
  id: "project-id",
  gambar: ProyekN,
  galeri: [ProyekN, "/assets/proyek/...jpg"],
  nama: "Project Name",
  role: "Role",
  desk: "One-line description",
  impact: ["thing built", "thing achieved"],
  stack: ["Tech1", "Tech2"],
  category: "Category",
  links: { github: "https://...", demo: null },
  featured: false   // true = top grid
}
```

Other exports in `data.js`:
- `stack` — tech icons in the Skills section
- `aiSkills` — capabilities list
- `experience` — timeline in About

-

