/**
 * EXPERIENCE DATA — src/data/experience.ts
 * ==========================================
 * Work history and education shown in the Experience section.
 *
 * TO ADD A NEW ROLE:
 *   1. Add an entry at the top of the `roles` array (most recent first).
 *   2. Set `accent: true` only for your current/most recent role.
 *   3. Set `accent: false` on the previously current role.
 *
 * TO ADD A NEW DEGREE:
 *   Add an entry to the `education` array.
 *
 * Imported by: src/components/Experience.astro
 */

export interface Role {
  title: string;
  company: string;
  /** Display string, e.g. 'Jan 2025 – Present' */
  period: string;
  /** 2-3 impact-focused bullet points. Keep them concise. */
  bullets: string[];
  /** Renders a blue dot on the timeline. Set true only for the current role. */
  accent: boolean;
  /** Optional: links a "Case Study →" button on this card to a case study page. */
  caseStudyUrl?: string;
}

export interface Degree {
  degree: string;
  school: string;
  period: string;
  /** Optional campus roles held while at this institution */
  campusRoles?: { title: string; url?: string }[];
}

/** Work history — most recent first */
export const roles: Role[] = [
  {
    title: 'Data Infrastructure Engineer',
    company: 'State of Michigan — Ottawa Area ISD',
    period: 'Jan 2025 – Present',
    accent: true,
    caseStudyUrl: '/projects/michigan-data-lake',
    bullets: [
      'Built an AWS data lake consolidating 15+ siloed K-12 data sources — cut executive report generation from 3 days to under 1 hour.',
      'Designed ELT pipelines in Python and PySpark processing 5M+ daily records.',
      'Orchestrated pipeline runs with AWS Step Functions with full audit logging and automated alerting.',
      'Built dimensional models and QuickSight dashboards for district-level analytics.',
    ],
  },
  {
    title: 'Data Engineer — Research Applications',
    company: 'University of Texas at Arlington',
    period: 'Aug 2024 – Jan 2025',
    accent: false,
    caseStudyUrl: '/projects/uta-biosensor',
    bullets: [
      'Built a signal processing and feature extraction pipeline for wearable PPG sensor data at 200Hz, enabling ML inference for health research.',
      'Orchestrated ETL workflows with Apache Airflow, reducing processing latency by 35%.',
      'Designed data quality gates to validate signal integrity before feature extraction.',
    ],
  },
  {
    title: 'Data Engineer Intern — Cloud & APIs',
    company: 'Nutanix',
    period: 'May 2023 – Aug 2023',
    accent: false,
    caseStudyUrl: '/projects/nutanix-analytics',
    bullets: [
      'Built GoLang REST API for internal performance analytics, deployed on Kubernetes via Jenkins CI/CD.',
      'Integrated platform into Nutanix IAM via JWT — eliminated re-authentication and increased daily adoption among internal teams.',
      'Designed role-based dashboards for Support and Sales teams from 500GB+ of daily product telemetry.',
    ],
  },
  {
    title: 'Software Data Engineer — Wearables & MLOps',
    company: 'KaHa Technologies',
    period: 'Jan 2020 – Jul 2022',
    accent: false,
    caseStudyUrl: '/projects/kaha-wearables',
    bullets: [
      'Built real-time health telemetry pipeline on Apache Kafka processing 2B+ monthly events from 10M+ wearable users, with end-to-end lag under 5 seconds.',
      'Designed a multi-store data layer (MongoDB, DynamoDB, S3) matched to each access pattern — from low-latency device state to batch ML training.',
      'Built a Firebase + BigQuery app performance pipeline tracking connection and sync behavior across Android and iOS devices, with automated daily reports to QA.',
    ],
  },
];

/** Education — most recent first */
export const education: Degree[] = [
  {
    degree: 'MS Computer Science',
    school: 'University of Texas at Arlington',
    period: '2022 – 2024',
    campusRoles: [
      { title: 'Python Tutor' },
      { title: 'Staff Manager' },
      { title: 'Chef', url: '/images/chef_pic.jpg' },
    ],
  },
];
