import instagramLogo from "@/assets/images/profile/instagram-logo.png";
import linkedinLogo from "@/assets/images/profile/linkedin-logo.png";
import type { SocialLink } from "@/types/socialLink";

export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/social.stud1o/",
    icon: instagramLogo,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/dajana-suboti%C4%87-9a8359226/?isSelfProfile=true",
    icon: linkedinLogo,
  },
];
