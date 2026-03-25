# [Visit my Portfolio](http://ravi-rajpurohit.vercel.app/)

If you're reading this, you went one layer deeper than most people do — respect.

## What this is

A static site I built because I wanted something that actually reflected how I work, not a template I filled in. Dark theme, minimal, loads fast. Case studies for the projects worth explaining properly, with real architecture diagrams and the actual tradeoffs behind each technical decision.

## Stack

- **[Astro](https://astro.build/)** — static site generator. Most of the page is just HTML at build time.
- **Tailwind CSS** — utility classes, no component library, no overrides
- **Mermaid** — architecture diagrams in the case studies, defined as template strings and rendered client-side
- **Canvas API** — the particle background is a hand-rolled `requestAnimationFrame` loop, nothing fancy

No framework components. No state management. No build-time magic beyond what Astro already does. I wanted to keep it readable.

## Structure

```
src/
├── data/           ← all content lives here, not in the components
│   ├── site.ts     ← name, tagline, nav links, stats, capability pillars
│   ├── experience.ts
│   ├── projects.ts
│   └── articles.ts
├── components/     ← one file per section
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Projects.astro
│   ├── WhatIBuild.astro
│   ├── Experience.astro
│   ├── Writing.astro
│   └── ParticleBackground.astro
├── layouts/
│   ├── Layout.astro       ← homepage shell
│   └── CaseStudy.astro    ← shared layout for all case study pages
├── pages/
│   ├── index.astro
│   └── projects/          ← one .astro file per case study
│       ├── michigan-data-lake.astro
│       ├── kaha-wearables.astro
│       ├── uta-biosensor.astro
│       ├── nutanix-analytics.astro
│       ├── places-ops.astro
│       └── app-store-trends.astro
└── styles/
    └── global.css
```

To update content — a new project, a new job, a new article — `src/data/` is the only place you need to touch. The components just read from those files.

## Case studies

Each case study page has:

- Architecture diagrams (Mermaid flowcharts)
- A before/after comparison where there's something concrete to compare
- ADR-style cards for the key engineering decisions, written as actual decisions rather than a list of features

The Step Functions diagram on the Michigan data lake page is a real AWS Console export, not a recreation.

## Running it

```bash
npm install
npm run dev       # localhost:4321
npm run build     # output to /dist
npm run preview   # preview the built output
```

No environment variables. No API keys. It's a static site.

## A few things I did on purpose

The nav and cards use a liquid glass effect — `backdrop-filter: blur` with very low opacity so the particle animation bleeds through the tiles slightly. It's subtle but intentional.

Content and layout are kept separate because I knew I'd be updating content more often than I'd be touching layout. The `src/data/` pattern means I don't have to re-read component code every time I want to update a job title.

The particle background pauses when the canvas is off-screen and resizes with the window. Small thing, but `requestAnimationFrame` loops running on invisible elements are the kind of thing that shows up later in profiling.
