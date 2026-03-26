/**
 * TOOLKIT DATA — src/data/toolkit.ts
 * =====================================
 * Tools shown in the "My Toolkit" section on the homepage.
 *
 * Each tool has a display name and an optional Simple Icons slug.
 * Icons are loaded from cdn.simpleicons.org at runtime.
 * If an icon slug is wrong or the CDN is unreachable, the chip degrades
 * gracefully to a text-only badge — no broken images, no layout shift.
 *
 * To find a slug: simpleicons.org → search the tool → slug is in the URL
 * e.g. simpleicons.org/icons/python → slug is "python"
 *
 * To add a tool without an icon: omit the `icon` field entirely.
 */

export interface Tool {
  name: string;
  /** Simple Icons slug. Omit if no icon exists for this tool. */
  icon?: string;
}

export interface ToolGroup {
  label: string;
  tools: Tool[];
}

export const toolkit: ToolGroup[] = [
  {
    label: 'Data Engineering & Orchestration',
    tools: [
      { name: 'Python',         icon: 'python' },
      { name: 'Apache Spark',   icon: 'apachespark' },
      { name: 'Apache Kafka',   icon: 'apachekafka' },
      { name: 'Apache Airflow', icon: 'apacheairflow' },
      { name: 'dbt',            icon: 'dbt' },
      { name: 'Go',             icon: 'go' },
      { name: 'SQL' },
    ],
  },
  {
    label: 'Cloud & Data Platforms',
    tools: [
      { name: 'AWS',        icon: 'amazonaws' },
      { name: 'Snowflake',  icon: 'snowflake' },
      { name: 'Databricks', icon: 'databricks' },
      { name: 'BigQuery',   icon: 'googlebigquery' },
      { name: 'Firebase',   icon: 'firebase' },
      { name: 'DuckDB',     icon: 'duckdb' },
    ],
  },
  {
    label: 'Databases & Storage',
    tools: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB',    icon: 'mongodb' },
      { name: 'DynamoDB',   icon: 'amazondynamodb' },
      { name: 'Cassandra',  icon: 'apachecassandra' },
      { name: 'Amazon S3',  icon: 'amazons3' },
      { name: 'Redis',      icon: 'redis' },
    ],
  },
  {
    label: 'Visualization & Analytics',
    tools: [
      { name: 'D3.js',      icon: 'd3dotjs' },
      { name: 'Streamlit',  icon: 'streamlit' },
      { name: 'Power BI',   icon: 'powerbi' },
      { name: 'Tableau',    icon: 'tableau' },
      { name: 'Plotly',     icon: 'plotly' },
    ],
  },
  {
    label: 'Infrastructure & DevOps',
    tools: [
      { name: 'Docker',          icon: 'docker' },
      { name: 'Kubernetes',      icon: 'kubernetes' },
      { name: 'Terraform',       icon: 'terraform' },
      { name: 'GitHub Actions',  icon: 'githubactions' },
      { name: 'Jenkins',         icon: 'jenkins' },
    ],
  },
];
