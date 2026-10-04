import type { ImageMetadata } from "astro";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  /** Unique, URL-safe identifier, e.g. "weather-dashboard". */
  slug: string;
  title: string;
  summary: string;
  description?: string;
  /** Technologies used, e.g. ["Astro", "TypeScript"]. */
  technologies: string[];
  /** Imported from src/assets/images/projects so Astro can optimize it. */
  image?: ImageMetadata;
  imageAlt?: string;
  links?: ProjectLink[];
  year?: number;
  featured?: boolean;
}
