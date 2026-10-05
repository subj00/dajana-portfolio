export interface ContactItem {
  /** Small label above the value, e.g. "Email". */
  label: string;
  /** Text shown to the visitor. */
  value: string;
  /** Link target: mailto:, tel: or a URL. */
  href: string;
  /** Monochrome icon, imported from src/assets. */
  icon: ImageMetadata;
  /** Open in a new tab (external profiles). */
  external?: boolean;
}
