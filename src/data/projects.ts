import type { Project } from "@/types/project";

/**
 * All portfolio projects. Components render from this list.
 *
 * Example entry:
 *
 * import weatherImage from "@/assets/images/projects/weather.png";
 *
 * {
 *   slug: "weather-dashboard",
 *   title: "Weather Dashboard",
 *   summary: "One-line summary.",
 *   technologies: ["Astro", "TypeScript"],
 *   image: weatherImage,
 *   imageAlt: "Screenshot of the dashboard",
 *   links: [{ label: "GitHub", url: "https://github.com/..." }],
 * }
 */
export const projects: Project[] = [];
