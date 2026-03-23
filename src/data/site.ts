/**
 * SITE CONFIGURATION — src/data/site.ts
 * ======================================
 * Central source of truth for personal info, social links, stats, nav links,
 * and the "What I Build" capability pillars.
 *
 * THIS IS THE FIRST FILE TO EDIT for most updates:
 *   - Changing your name, tagline, or role        → edit `site.name/role/tagline`
 *   - Updating social links                        → edit `site.social`
 *   - Switching photo from PNG to JPG              → edit `site.photo`
 *   - Adding/removing nav sections                 → edit `site.navLinks`
 *   - Updating the stats strip on the hero         → edit `site.stats`
 *   - Adding/removing skills in About section      → edit `site.skills`
 *   - Updating the capability pillars              → edit `pillars` array
 *
 * Imported by: Nav, Hero, About, WhatIBuild, Contact
 */

export const site = {
  name: 'Ravi Rajpurohit',
  role: 'Data · Infrastructure · Analytics',
  tagline: 'I build the pipelines, platforms, and analytics layers that turn raw data into decisions.',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'ravirajpurohit414@gmail.com',

  // ── Social links ─────────────────────────────────────────────────────────
  social: {
    linkedin: 'https://linkedin.com/in/ravi-rajpurohit',
    github: 'https://github.com/ravi-rajpurohit-gh',
    medium: 'https://ravi-rajpurohit.medium.com/',
    linktree: 'https://linktr.ee/hey_ravi',
  },

  // ── Assets ───────────────────────────────────────────────────────────────
  // Profile photo lives in public/images/. Update the filename here if you
  // switch formats (e.g. '/images/profile_pic.jpg').
  photo: '/images/profile_pic.png',

  // Resume PDF lives at public/resume.pdf. Replace the file to update it.
  resumeUrl: '/resume.pdf',

  // ── Hero stats strip ─────────────────────────────────────────────────────
  // Shown as 3 numbers at the bottom of the hero section.
  stats: [
    { value: '2B+',  label: 'events/month processed' },
    { value: '10M+', label: 'users served' },
    { value: '5M+',  label: 'records/day through current pipelines' },
  ],

  // ── About section skill badges ───────────────────────────────────────────
  // Displayed as pill badges below the about text. Reorder or add freely.
  skills: [
    'AWS', 'dbt', 'Spark', 'Kafka', 'Airflow',
    'Python', 'SQL', 'Snowflake', 'D3.js', 'NoSQL', 'CI/CD'
  ],

  // ── Navigation links ─────────────────────────────────────────────────────
  // Add a new entry here when you add a new section to index.astro.
  // href should match the section's `id` attribute prefixed with `#`.
  navLinks: [
    { href: '#work',       label: 'Work' },
    { href: '#about',      label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#writing',    label: 'Writing' },
    { href: '#contact',    label: 'Contact' },
  ],
};

/**
 * CAPABILITY PILLARS — shown in the "What I Build" section.
 * Add or edit entries to reflect your evolving specializations.
 */
export const pillars = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>',
    title: 'End-to-End Data Pipelines',
    description:
      'Kafka ingestion at 2B+ events/month, Python and PySpark transformations, dbt modeling, dimensional schemas — the whole chain from raw source to analytics-ready table.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>',
    title: 'Cloud Data Platforms',
    description:
      'AWS (Glue, Athena, Spark, S3), Snowflake, Databricks, DuckDB. I care about what each tool actually costs and whether engineers will be able to maintain it six months later.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',
    title: 'Analytics & BI',
    description:
      'Executive dashboards, D3.js data stories, self-serve reporting. I think about who is going to open this dashboard at 8am and what they actually need to see — not just what the data model can technically produce.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="32" height="32"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>',
    title: 'ML-Enabling Infrastructure',
    description:
      'Feature pipelines and data layers for real-time ML inference — health wearable telemetry at 10M+ user scale, high-frequency biosensor research at 200Hz. The ML model is only as good as the data it gets.',
  },
];
