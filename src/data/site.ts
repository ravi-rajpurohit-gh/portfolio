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
  role: 'Data | Infrastructure | Analytics',
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
  // Shown as 4 numbers at the bottom of the hero section.
  stats: [
    { value: '5+',   label: 'Years experience' },
    { value: '2B+',  label: 'Events/month processed' },
    { value: '10M+', label: 'Users served' },
    { value: '15+',  label: 'Data sources consolidated' },
  ],

  // ── About section skill badges ───────────────────────────────────────────
  // Displayed as pill badges below the about text. Reorder or add freely.
  skills: [
    'AWS', 'dbt', 'Apache Spark', 'Kafka', 'Airflow',
    'Python', 'SQL', 'Snowflake', 'D3.js'
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
    icon: '🔧',
    title: 'End-to-End Data Pipelines',
    description:
      'High-throughput ingestion (Kafka, 2B+ events/month) through analytics-ready layers using dbt, STAR schemas, and dimensional modeling. Built for reliability and observability.',
  },
  {
    icon: '☁️',
    title: 'Cloud Data Platforms',
    description:
      'AWS-native architectures (Glue, Athena, Spark, S3) and modern data stacks (Snowflake, Databricks, DuckDB). Designed for scale, cost-efficiency, and developer experience.',
  },
  {
    icon: '📊',
    title: 'Analytics & BI',
    description:
      'Executive dashboards, D3.js data stories, and self-serve reporting that cuts insight generation from days to minutes. Powered by Generative BI for native natural language questions and answers. Designed for the end user, not just the data model.',
  },
  {
    icon: '🤖',
    title: 'ML-Enabling Infrastructure',
    description:
      'Feature pipelines and data layers that power real-time ML inference — from health wearable telemetry at 10M+ user scale to high-frequency sensor research at 200Hz.',
  },
];
