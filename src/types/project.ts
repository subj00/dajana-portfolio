import type { ImageMetadata } from "astro";

/** One card of the Portfolio section. */
export interface Project {
  /** Unique, URL-safe identifier, e.g. "social-stud1o". */
  slug: string;
  title: string;
  description: string;
  /** Imported from src/assets so Astro can optimize it. */
  image: ImageMetadata;
  imageAlt: string;
  /**
   * Which part of the image to keep when it is cropped to the card's frame,
   * as a CSS object-position value. Defaults to the centre.
   */
  imagePosition?: string;
}
