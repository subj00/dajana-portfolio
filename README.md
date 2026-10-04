# Dajana Subotić — Portfolio

Static personal portfolio built with Astro, TypeScript and Tailwind CSS.
React is available only for components that need client-side interactivity.

## Commands

| Command           | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start the dev server at `localhost:4321`      |
| `npm run check`   | Type-check `.astro` and `.ts` files           |
| `npm run build`   | Type-check and build the static site to `dist/` |
| `npm run preview` | Preview the production build locally          |

## Structure

```
src/
├── components/
│   ├── layout/      Shared structure: BaseHead (SEO), Header, Footer
│   ├── ui/          Reusable, content-agnostic UI pieces
│   ├── ui/          Reusable, content-agnostic UI pieces (Section wrapper, ...)
│   └── home/ work/ experience/ contact/   One folder per page section
├── layouts/         BaseLayout.astro — document shell
├── pages/           index.astro only — composes the section components
├── data/            Portfolio content (projects, experience, social links)
├── config/site.ts   Global site info and SEO defaults
├── styles/          variables.css (design tokens), global.css (base styles)
├── assets/images/   Images processed by Astro (projects/, profile/)
└── types/           TypeScript types for the data
public/              Files served as-is (favicon)
```

## Single-page layout

The site is one page. Home, Work, Experience and Contact are sections of
`src/pages/index.astro`, not routes. Each lives in its own component
(`HomeSection.astro`, `WorkSection.astro`, ...) and is wrapped in
`ui/Section.astro`, which sets the anchor id. The ids are defined once as
`sectionIds` in `src/config/site.ts`, and the navigation links to them as
`#pocetna`, `#portfolio`, `#karijera`, `#kontakt`. Smooth scrolling is set in
`src/styles/global.css`; `ui/Section.astro` applies the `scroll-margin-top`
that keeps section tops clear of the sticky header.

## Conventions

- Astro components by default; React (`.tsx`) only for real client-side state,
  hydrated with a `client:*` directive.
- Content lives in `src/data`, never hardcoded in visual components.
- PascalCase for component files, camelCase for TS files, variables and functions.
- Import from `src` with the `@/` alias, e.g. `import { projects } from "@/data/projects"`.
- Images: put them in `src/assets/images/...`, import them, and render with
  `<Image />` from `astro:assets`.
- Design tokens go in `src/styles/variables.css` and are available as Tailwind
  utilities (e.g. `bg-background`, `text-muted`, `max-w-page`).
