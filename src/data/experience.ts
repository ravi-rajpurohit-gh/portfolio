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
      'Designed aggregate data layer on AWS (S3, Glue, Athena) consolidating 15+ siloed sources — cut executive report generation from 3 days to under 1 hour.',
      'Built ELT pipelines in Python and PySpark processing 5M+ daily records with 40% latency reduction.',
      'Designed dimensional models (Star schema) and dashboards tracking engagement metrics and behavioral trends.',
    ],
  },
  {
    title: 'Data Engineer — Research Applications',
    company: 'University of Texas at Arlington',
    period: 'Aug 2024 – Jan 2025',
    accent: false,
    bullets: [
      'Built scalable pipelines for high-frequency sensor data at 200Hz, enabling ML inference for research teams.',
      'Automated ETL workflows with Apache Airflow, reducing processing latency by 35%.',
      'Built feature extraction tools in Pandas and NumPy to convert raw biosignal recordings into structured datasets for downstream analysis.',
    ],
  },
  {
    title: 'Data Engineer Intern — Cloud & APIs',
    company: 'Nutanix',
    period: 'May 2023 – Aug 2023',
    accent: false,
    bullets: [
      'Designed pipelines for 500GB+ of daily logs supporting Sales and Support analytics.',
      'Integrated Prometheus and Splunk observability, maintaining 99.9% service availability.',
      'Optimized SQL query performance by 50%, reducing compute costs on the Sales and Support analytics workloads.',
    ],
  },
  {
    title: 'Software Data Engineer — Wearables & MLOps',
    company: 'KaHa Technologies',
    period: 'Jan 2020 – Jul 2022',
    accent: false,
    caseStudyUrl: '/projects/kaha-wearables',
    bullets: [
      'Built end-to-end pipelines on Python + AWS processing 2B+ monthly events for 10M+ wearable users.',
      'Deployed Kafka architecture for real-time telemetry ingestion, reducing data lag to under 5 seconds.',
      'Maintained NoSQL datastores (MongoDB, DynamoDB) supporting 10k concurrent requests.',
    ],
  },
];

/** Education — most recent first */
export const education: Degree[] = [
  {
    degree: 'MS Computer Science',
    school: 'University of Texas at Arlington',
    period: '2022 – 2024',
  },
];
