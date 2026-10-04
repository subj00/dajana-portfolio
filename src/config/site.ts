/**
 * Global website configuration.
 * This is the single place for site-wide information and SEO defaults.
 * All values are placeholders until the real content is provided.
 */

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  /** Production URL, used for canonical and Open Graph URLs. */
  url: string;
  name: string;
  professionalTitle: string;
  email: string;
  /** Default document title. Page titles are rendered as "Page | siteTitle". */
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
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ],
};
