import novaSImage from "@/assets/images/profile/novas.jpg";
import socialStudioImage from "@/assets/images/profile/socialstudio.jpg";
import survivorImage from "@/assets/images/profile/survivor.jpg";
import tvShowImage from "@/assets/images/profile/tvshow.jpg";
import type { Project } from "@/types/project";

/**
 * Portfolio cards, in display order. Titles, descriptions and image alt
 * text are in src/i18n/translations.ts under `portfolio.projects`, keyed
 * by slug.
 */
export const projects: Project[] = [
  {
    slug: "social-stud1o",
    image: socialStudioImage,
    // Tall photo: keep her and the desk, not the ceiling.
    imagePosition: "50% 56%",
  },
  {
    slug: "tv-nova-s",
    image: novaSImage,
  },
  {
    slug: "kuca-sa-1000-vrata",
    image: tvShowImage,
    // Square poster: keep the show title and the face; the caption at the
    // bottom falls outside the frame rather than being cut through.
    imagePosition: "50% 8%",
  },
  {
    slug: "survivor-event",
    image: survivorImage,
  },
];
