import emailIcon from "@/assets/images/profile/email-icon.png";
import phoneIcon from "@/assets/images/profile/phone-icon.png";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/data/socialLinks";
import type { ContactItem } from "@/types/contact";
import type { SocialPlatform } from "@/types/socialLink";

/** Phone number in international format, without spaces (used in tel:). */
const phone = "+381692020197";
/** The same number as shown to visitors. */
const phoneDisplay = "+381 69 202 0197";

/** What to show as the value for each social profile. */
const socialHandles: Record<SocialPlatform, string> = {
  instagram: "@social.stud1o",
  linkedin: siteConfig.name,
};

/** Rows of the contact section, in display order. */
export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: emailIcon,
  },
  {
    label: "Telefon",
    value: phoneDisplay,
    href: `tel:${phone}`,
    icon: phoneIcon,
  },
  ...socialLinks.map((link) => ({
    label: link.label,
    value: socialHandles[link.platform],
    href: link.url,
    icon: link.icon,
    external: true,
  })),
];
