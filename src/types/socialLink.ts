export type SocialPlatform = "instagram" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  /** Monochrome logo, imported from src/assets. */
  icon: ImageMetadata;
}
