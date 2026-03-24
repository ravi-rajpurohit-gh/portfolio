/**
 * PROJECTS DATA — src/data/projects.ts
 * ======================================
 * All portfolio projects shown on the homepage Work section.
 *
 * TO ADD A NEW PROJECT:
 *   1. Add a new object to the `projects` array below (most impactful first).
 *   2. If it has a case study, set `hasCaseStudy: true` and `caseStudyUrl`.
 *   3. Create the case study page at src/pages/projects/your-slug.astro
 *      using CaseStudy layout as a template from an existing case study.
 *
 * TO ADD A LIVE URL LATER (e.g. once ChatPilot is deployed):
 *   Just add `liveUrl: 'https://...'` to the relevant entry.
 *
 * gradient: Tailwind from-X to-Y classes for the card preview strip.
 *   Suggestions: from-blue-600 to-purple-700 | from-orange-500 to-red-600
 *                from-emerald-600 to-teal-700 | from-violet-600 to-pink-700
 *
 * Imported by: src/components/Projects.astro
 */

export interface Project {
  title: string;
  /** Short descriptor shown below title in accent color */
  subtitle: string;
  description: string;
  /** Tech stack pill badges */
  tags: string[];
  /** Tailwind gradient class pair for the card preview area (used as fallback when no imageUrl) */
  gradient: string;
  /** Optional screenshot shown in the card header. Path relative to /public, e.g. '/images/ss_placesOps.png' */
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  /** Link to a Medium article about this project */
  mediumUrl?: string;
  hasCaseStudy: boolean;
  /** Relative path to the case study page, e.g. '/projects/places-ops' */
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'PlacesOps',
    subtitle: 'BI Dashboard & Modern Data Stack Prototype',
    description:
      'A BI dashboard prototype built on DuckDB, dbt-core, and Streamlit. Two tabs for two audiences: a capital expenditure view for business stakeholders, and a pipeline health monitor for data engineers — both powered by the same fact table.',
    tags: ['dbt', 'DuckDB', 'Streamlit', 'Python', 'SQL'],
    gradient: 'from-blue-600 to-purple-700',
    imageUrl: '/images/ss_placesOps.png',
    liveUrl: 'https://places-ops.streamlit.app/',
    hasCaseStudy: true,
    caseStudyUrl: '/projects/places-ops',
  },
  {
    title: 'App Store Ecosystem Analytics',
    subtitle: 'Interactive Data Storytelling with D3.js',
    description:
      '500MB of raw Kaggle data, pre-aggregated down to 50KB via Python, rendered as a smooth animated bar chart race in D3.js. 13 years of App Store genre competition in one visualization. Published on Medium.',
    tags: ['D3.js', 'Python', 'Pandas', 'HTML/CSS'],
    gradient: 'from-orange-500 to-red-600',
    imageUrl: '/images/ss_appStoreTrends.svg',
    mediumUrl:
      'https://ravi-rajpurohit.medium.com/the-genre-wars-how-i-visualized-13-years-of-app-store-history-without-crashing-your-browser-f56817e2b52d',
    hasCaseStudy: true,
    caseStudyUrl: '/projects/app-store-trends',
  },
  {
    title: 'Uber NYC Dashboard',
    subtitle: 'Geospatial Analytics Dashboard',
    description:
      'Streamlit dashboard exploring Uber pickup and dropoff patterns across New York City. Neighborhood-level breakdowns, time filters, and statistical summaries — built to make the spatial patterns in the data easy to read.',
    tags: ['Streamlit', 'Pandas', 'NumPy', 'Python'],
    gradient: 'from-emerald-600 to-teal-700',
    imageUrl: '/images/ss_uberDashboard.png',
    liveUrl: 'https://uber-nyc-dashboard.streamlit.app/',
    hasCaseStudy: false,
  },
  {
    title: 'ChatPilot',
    subtitle: 'Multi-Provider AI Chat Application',
    description:
      'AI chat application with support for multiple LLM providers (Gemini, OpenAI) via a Streamlit interface. Actively developed — model switching and prompt memory are on the roadmap.',
    tags: ['Streamlit', 'Gemini API', 'OpenAI API', 'Python'],
    gradient: 'from-violet-600 to-pink-700',
    githubUrl: 'https://github.com/ravi-rajpurohit-gh/chat-pilot',
    hasCaseStudy: false,
  },
];
