import type { ImageMetadata } from "astro";
import type { Dictionary } from "@/i18n/translations";

/** Slugs that have text in the translations (`portfolio.projects`). */
export type ProjectSlug = keyof Dictionary["portfolio"]["projects"];

/** One card of the Portfolio section. Its text lives in the translations. */
export interface Project {
  slug: ProjectSlug;
  /** Imported from src/assets so Astro can optimize it. */
  image: ImageMetadata;
  /**
   * Which part of the image to keep when it is cropped to the card's frame,
   * as a CSS object-position value. Defaults to the centre.
   */
  imagePosition?: string;
}
