import type { Localized } from "@/i18n";

export interface ContactItem {
  /** Small label above the value, e.g. "Email". */
  label: Localized;
  /** Text shown to the visitor. */
  value: string;
  /** Link target: mailto:, tel: or a URL. */
  href: string;
  /** Monochrome icon, imported from src/assets. */
  icon: ImageMetadata;
  /** Open in a new tab (external profiles). */
  external?: boolean;
}
