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

/** Work history — ordered for impact (current role first, then by scale/recognition) */
export const roles: Role[] = [
  {
    title: 'Data Infrastructure Engineer',
    company: 'State of Michigan — Ottawa Area ISD',
    period: 'Jan 2025 – Present',
    accent: true,
    caseStudyUrl: '/projects/michigan-data-lake',
    bullets: [
      'Built an AWS data lake consolidating 15+ siloed data sources — cut executive report generation from 3 days to under 1 hour.',
      'Designed ELT pipelines in Python and PySpark processing 5M+ daily records; provisioned the full stack as a serverless, event-driven architecture using AWS CloudFormation.',
      'Orchestrated pipeline runs with AWS Step Functions with full audit logging and automated alerting.',
      'Built semantic-layer dashboards in Tableau, Power BI, and QuickSight — translating dimensional models into business-readable language accessible to non-technical stakeholders.',
      'Accelerated team productivity by 20% by integrating AI coding assistants into documentation and development workflows.',
    ],
  },
  {
    title: 'Software Data Engineer — Wearables & MLOps',
    company: 'KaHa Technologies',
    period: 'Jan 2020 – Jul 2022',
    accent: false,
    caseStudyUrl: '/projects/kaha-wearables',
    bullets: [
      'Built a real-time telemetry pipeline on Apache Kafka processing 2B+ monthly events from 10M+ wearbles users with end-to-end lag under 5 seconds.',
      'Designed a multi-store data layer (DynamoDB, S3, Redshift) matched to each access pattern — from low-latency device reads to batch ML training and warehouse analytics.',
      'Built observability and data quality monitoring pipelines with Prometheus, catching bad data upstream of data science workflows and accelerating model iteration speed by 25%.',
      'Established A/B testing infrastructure and self-serve analytics capabilities that empowered product teams to independently evaluate experiments, contributing to 20x company growth over 2 years.',
      'Built a Firebase + BigQuery app performance pipeline tracking connection and sync behavior across Android and iOS devices, with automated daily reports to QA.',
    ],
  },
  {
    title: 'Data Engineer Intern — Cloud & APIs',
    company: 'Nutanix',
    period: 'May 2023 – Aug 2023',
    accent: false,
    caseStudyUrl: '/projects/nutanix-analytics',
    bullets: [
      'Built a GoLang REST API for internal performance analytics, deployed on Kubernetes via Jenkins CI/CD and integrated into IAM via JWT to eliminate re-authentication friction.',
      'Served as the bridge between engineering and analytics to define source-to-target data contracts; delivered role-based dashboards for Support and Sales from 500GB+ of daily product telemetry.',
      'Awarded 2nd place in the company-wide hackathon for prototyping a product recommendation module powered by customer usage signals.',
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
      'Implemented automated data quality tests with dbt and daily job execution monitoring, ensuring signal integrity before data reached ML feature extraction.',
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
      { title: 'Chef', url: '/images/chef_pic.jpg' },
      { title: 'Python Tutor' },
      { title: 'Staff Manager' },
    ],
  },
];
