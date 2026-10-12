import emailIcon from '@/assets/images/profile/email-icon.png';
import { siteConfig } from '@/config/site';
import { same, tr } from '@/i18n';
import { socialLinks } from '@/data/socialLinks';
import type { ContactItem } from '@/types/contact';
import type { SocialPlatform } from '@/types/socialLink';

/** What to show as the value for each social profile. */
const socialHandles: Record<SocialPlatform, string> = {
  instagram: '@social.stud1o',
  linkedin: siteConfig.name,
};

/** Rows of the contact section, in display order. */
export const contactItems: ContactItem[] = [
  {
    label: tr((d) => d.contact.email),
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: emailIcon,
  },
  ...socialLinks.map((link) => ({
    label: same(link.label),
    value: socialHandles[link.platform],
    href: link.url,
    icon: link.icon,
    external: true,
  })),
];
