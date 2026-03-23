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
  /** Tailwind gradient class pair for the card preview area */
  gradient: string;
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
      'End-to-end data pipeline and monitoring dashboard simulating a modern data stack for facilities & operations management. Dual view: a capital expenditure dashboard for business stakeholders and a dbt pipeline health monitor for data engineers.',
    tags: ['dbt', 'DuckDB', 'Streamlit', 'Python', 'SQL'],
    gradient: 'from-blue-600 to-purple-700',
    liveUrl: 'https://places-ops.streamlit.app/',
    hasCaseStudy: true,
    caseStudyUrl: '/projects/places-ops',
  },
  {
    title: 'App Store Ecosystem Analytics',
    subtitle: 'Interactive Data Storytelling with D3.js',
    description:
      'Transformed 500MB of raw Kaggle data into a smooth 50KB interactive bar chart race visualizing 13 years of App Store genre trends. Published on Medium and featured on LinkedIn.',
    tags: ['D3.js', 'Python', 'Pandas', 'HTML/CSS'],
    gradient: 'from-orange-500 to-red-600',
    mediumUrl:
      'https://ravi-rajpurohit.medium.com/the-genre-wars-how-i-visualized-13-years-of-app-store-history-without-crashing-your-browser-f56817e2b52d',
    hasCaseStudy: true,
    caseStudyUrl: '/projects/app-store-trends',
  },
  {
    title: 'Uber NYC Dashboard',
    subtitle: 'Geospatial Analytics Dashboard',
    description:
      'Interactive geospatial analytics dashboard exploring Uber pickup and dropoff patterns across New York City. Features neighborhood-level analysis, time-based filtering, and statistical insights.',
    tags: ['Streamlit', 'Pandas', 'NumPy', 'Python'],
    gradient: 'from-emerald-600 to-teal-700',
    liveUrl: 'https://uber-nyc-dashboard.streamlit.app/',
    hasCaseStudy: false,
  },
  {
    title: 'ChatPilot',
    subtitle: 'Multi-Provider AI Chat Application',
    description:
      'Versatile AI chat application supporting multiple LLM providers (Gemini, OpenAI) with a clean Streamlit interface. Actively developed — planned features include model switching and prompt memory.',
    tags: ['Streamlit', 'Gemini API', 'OpenAI API', 'Python'],
    gradient: 'from-violet-600 to-pink-700',
    githubUrl: 'https://github.com/ravi-rajpurohit-gh/chat-pilot',
    hasCaseStudy: false,
  },
];
