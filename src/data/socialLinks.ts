import { siteConfig } from "@/config/site";
import type { SocialLink } from "@/types/socialLink";

/** Placeholder URLs — replace with real profiles. */
export const socialLinks: SocialLink[] = [
  { platform: "github", label: "GitHub", url: "https://github.com/" },
  { platform: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/" },
  { platform: "email", label: "Email", url: `mailto:${siteConfig.email}` },
];
