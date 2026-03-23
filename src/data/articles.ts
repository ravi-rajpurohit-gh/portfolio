/**
 * ARTICLES / WRITING DATA — src/data/articles.ts
 * ================================================
 * Technical articles shown in the Writing section.
 *
 * TO ADD A NEW ARTICLE:
 *   Add an entry at the top of the array (most recent first).
 *   All fields are required except nothing — url is always required.
 *
 * gradient: Tailwind gradient class pair for the card header strip.
 * tag: Short label shown on the gradient strip (e.g. 'Data Engineering').
 *
 * Imported by: src/components/Writing.astro
 */

export interface Article {
  title: string;
  /** 2-3 sentence summary shown on the card */
  summary: string;
  /** Display date, e.g. 'Jan 2025' */
  date: string;
  /** Display read time, e.g. '8 min read' */
  readTime: string;
  url: string;
  /** Short category label shown on the gradient strip */
  tag: string;
  /** Tailwind from-X to-Y gradient classes for the card header */
  gradient: string;
}

/** Articles — most recent first */
export const articles: Article[] = [
  {
    title:
      'The "Genre Wars": How I Visualized 13 Years of App Store History (Without Crashing Your Browser)',
    summary:
      "A Data Engineer's guide to turning 500MB of raw logs into a silky-smooth 50KB data story using Python and D3.js. Covers pre-aggregation strategy, D3.js animation architecture, and performance optimization.",
    date: 'Jan 2025',
    readTime: '8 min read',
    url: 'https://ravi-rajpurohit.medium.com/the-genre-wars-how-i-visualized-13-years-of-app-store-history-without-crashing-your-browser-f56817e2b52d',
    tag: 'Data Visualization',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'Exploring the Relationship Between PPG Data and Heart Rate Variability',
    summary:
      'An investigation into PPG-based HRV tracking for stress and recovery monitoring. Covers signal processing, data pipeline design for biosensor streams, and insights from real wearable data.',
    date: 'Oct 2024',
    readTime: '6 min read',
    url: 'https://ravi-rajpurohit.medium.com/',
    tag: 'Data Engineering',
    gradient: 'from-blue-600 to-cyan-600',
  },
];
