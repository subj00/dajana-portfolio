/**
 * Global website configuration: facts about the site that are the same in
 * every language. Translatable text lives in src/i18n/translations.ts.
 */

/**
 * Anchor ids of the sections on the single page. Section components use
 * these as their `id`, and the navigation links to them as `#id`. They
 * are the same in both languages, so links keep working when it changes.
 */
export const sectionIds = {
  home: "pocetna",
  work: "portfolio",
  experience: "karijera",
  contact: "kontakt",
} as const;

export type SectionKey = keyof typeof sectionIds;
export type SectionId = (typeof sectionIds)[SectionKey];

export interface SiteConfig {
  /** Production URL, used for canonical and Open Graph URLs. */
  url: string;
  name: string;
  professionalTitle: string;
  /** Shown under the name in the footer. */
  disciplines: string[];
  email: string;
  /** Credited in the footer. */
  developer: string;
  seo: {
    /** Path inside public/ used for social previews. */
    defaultOgImage?: string;
    twitterCard: "summary" | "summary_large_image";
  };
  /** Sections linked from the header, in order. Labels: i18n `nav`. */
  navigation: SectionKey[];
}

export const siteConfig: SiteConfig = {
  url: "https://example.com",

  name: "Dajana Subotić",
  professionalTitle: "Digital Marketing Manager",
  disciplines: ["Marketing", "Social Media", "Creative"],
  email: "dajana.socialstud1o@gmail.com",
  developer: "subj",

  seo: {
    // Add an image to public/ and set its path here, e.g. "/og-image.png".
    defaultOgImage: undefined,
    twitterCard: "summary_large_image",
  },

  navigation: ["home", "work", "experience", "contact"],
};
