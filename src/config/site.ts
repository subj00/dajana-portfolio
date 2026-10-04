/**
 * Global website configuration.
 * This is the single place for site-wide information and SEO defaults.
 * All values are placeholders until the real content is provided.
 */

/**
 * Anchor ids of the sections on the single page. Section components use
 * these as their `id`, and the navigation links to them as `#id`.
 */
export const sectionIds = {
  home: "pocetna",
  work: "portfolio",
  experience: "karijera",
  contact: "kontakt",
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];

export interface NavigationItem {
  label: string;
  /** In-page anchor, e.g. "#portfolio". */
  href: `#${SectionId}`;
}

export interface SiteConfig {
  /** Production URL, used for canonical and Open Graph URLs. */
  url: string;
  name: string;
  professionalTitle: string;
  email: string;
  /** Document title of the page. */
  siteTitle: string;
  titleSeparator: string;
  description: string;
  locale: string;
  seo: {
    /** Path inside public/ used for social previews. */
    defaultOgImage?: string;
    twitterCard: "summary" | "summary_large_image";
  };
  navigation: NavigationItem[];
}

export const siteConfig: SiteConfig = {
  url: "https://example.com",

  name: "Dajana Subotić",
  professionalTitle: "Developer",
  email: "hello@example.com",

  siteTitle: "Dajana Subotić — Portfolio",
  titleSeparator: " | ",

  description: "Personal developer portfolio of Dajana Subotić.",
  locale: "en",

  seo: {
    // Add an image to public/ and set its path here, e.g. "/og-image.png".
    defaultOgImage: undefined,
    twitterCard: "summary_large_image",
  },

  navigation: [
    { label: "Početna", href: `#${sectionIds.home}` },
    { label: "Portfolio", href: `#${sectionIds.work}` },
    { label: "Karijera i obrazovanje", href: `#${sectionIds.experience}` },
    { label: "Kontakt", href: `#${sectionIds.contact}` },
  ],
};
