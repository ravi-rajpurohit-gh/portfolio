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
      'Designed aggregate data lake on AWS (S3, Glue, Athena, Lake Formation) consolidating 15+ siloed state and district sources — cut executive report generation from 3 days to under 1 hour.',
      'Orchestrated all pipeline runs with AWS Step Functions — every load logged to DynamoDB on start and completion, with SNS alerts on success and failure, giving the team a full audit trail.',
      'Built ELT pipelines in Python and PySpark processing 5M+ daily records, achieving 40% latency reduction through Parquet partitioning and pushdown predicate optimization.',
      'Designed Star schema dimensional models and QuickSight dashboards tracking student engagement, enrollment trends, and behavioral metrics across districts.',
      'Implemented column-level access control via Lake Formation so district staff see only their own data — without requiring separate deployments per district.',
    ],
  },
  {
    title: 'Data Engineer — Research Applications',
    company: 'University of Texas at Arlington',
    period: 'Aug 2024 – Jan 2025',
    accent: false,
    caseStudyUrl: '/projects/uta-biosensor',
    bullets: [
      'Built a signal processing and feature extraction pipeline for wearable PPG sensor data at 200Hz — producing time-domain and frequency-domain HRV features (SDNN, RMSSD, LF/HF) as input for ML stress and recovery models.',
      'Orchestrated all pipeline runs with Apache Airflow DAGs, reducing end-to-end processing latency by 35% through parallel per-subject task execution.',
      'Designed a signal quality gate in the Airflow DAG to flag low-SNR recordings before feature extraction — preventing corrupted inputs from reaching the ML training dataset.',
      'Implemented cubic spline interpolation on R-R interval series before frequency analysis, ensuring accurate LF/HF ratio computation despite the uneven sampling inherent to PPG peak detection.',
    ],
  },
  {
    title: 'Data Engineer Intern — Cloud & APIs',
    company: 'Nutanix',
    period: 'May 2023 – Aug 2023',
    accent: false,
    caseStudyUrl: '/projects/nutanix-analytics',
    bullets: [
      'Built GoLang REST API for performance analytics dashboards, deployed on Kubernetes via Jenkins CI/CD — automated testing ran on every git push, with rolling zero-downtime releases on merge.',
      'Integrated the analytics platform into Nutanix IAM by registering it as a resource in the profile management identity structure, then used JWT for stateless token validation — eliminating the separate re-authentication that had been limiting daily adoption.',
      'Implemented role-based access control at the query layer (not just the UI): Support engineers receive full log access; internal users see only their own component metrics.',
      'Designed data pipelines ingesting 500GB+ of daily product telemetry through Prometheus (metrics) and Splunk (logs), with SQL aggregations achieving a 50% query performance improvement by routing each data type to the appropriate system.',
    ],
  },
  {
    title: 'Software Data Engineer — Wearables & MLOps',
    company: 'KaHa Technologies',
    period: 'Jan 2020 – Jul 2022',
    accent: false,
    caseStudyUrl: '/projects/kaha-wearables',
    bullets: [
      'Built real-time health telemetry pipeline on Apache Kafka processing 2B+ monthly events from 10M+ wearable users, with end-to-end data lag under 5 seconds.',
      'Designed a multi-store data layer: MongoDB for health time-series, DynamoDB for device/session state at 10k concurrent requests, and S3 Parquet for batch ML training — each store matched to its access pattern.',
      'Built a Firebase + BigQuery APM pipeline to instrument app-to-device connection events (BT connect time, sync duration, mode toggles) across Android and iOS — segmented by phone make, model, and OS version to give QA actionable per-device performance data.',
      'Automated daily performance reports delivered to QA team and stakeholders via scheduled BigQuery aggregation jobs, replacing ad-hoc manual analysis.',
      'Implemented schema versioning and firmware-aware normalization in the Kafka consumer to handle concurrent device generations from multiple OEM hardware partners without production incidents.',
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
