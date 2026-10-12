/**
 * Internationalisation helpers.
 *
 * How it fits together:
 *   - The page is built once per language (`/` in Serbian, `/en/` in
 *     English), each with its own <html lang>, title and description.
 *   - The body of both builds contains the text in BOTH languages, each
 *     wrapped in a `data-lang` element (see ui/Localized.astro); CSS in
 *     global.css shows only the one matching <html lang>.
 *   - The script in BaseLayout.astro switches <html lang> on the fly, so
 *     changing language needs no page load, and remembers the choice.
 *
 * Text lives in ./translations.ts. Components read it through `tr`, which
 * returns the value in every language at once.
 */
import { dictionaries, type Dictionary } from "./translations";

export const languages = ["sr", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "sr";

/** A value in every language. */
export type Localized<T = string> = Record<Lang, T>;

/** Native names, used as the accessible names of the switcher's options. */
export const languageNames: Localized = { sr: "Srpski", en: "English" };

/** Open Graph locale codes. */
export const ogLocales: Localized = { sr: "sr_RS", en: "en_US" };

/** Narrow an arbitrary string (e.g. Astro.currentLocale) to a language. */
export const toLang = (value: string | undefined): Lang =>
  languages.find((lang) => lang === value) ?? defaultLang;

/** Site-relative URL of the page in a language: "/" or "/en/". */
export const langPath = (lang: Lang): string => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  return lang === defaultLang ? base : `${base}${lang}/`;
};

/**
 * Read one value from the dictionaries, in every language:
 *   tr((d) => d.nav.home)  →  { sr: "Početna", en: "Home" }
 */
export const tr = <T,>(pick: (dictionary: Dictionary) => T): Localized<T> => ({
  sr: pick(dictionaries.sr),
  en: pick(dictionaries.en),
});

/** The same text in every language (names, brands). */
export const same = <T,>(value: T): Localized<T> => ({ sr: value, en: value });

/** One property of a localized object: field(entry, "title"). */
export const field = <T, K extends keyof T>(
  value: Localized<T>,
  key: K,
): Localized<T[K]> => ({ sr: value.sr[key], en: value.en[key] });

/**
 * Turn a localized list into a list of localized items, matched by
 * position. Throws (failing the build) if the lists differ in length.
 */
export const zip = <T,>(lists: Localized<readonly T[]>): Localized<T>[] => {
  if (lists.sr.length !== lists.en.length) {
    throw new Error(
      `Translations are out of sync: a list has ${lists.sr.length} items in Serbian and ${lists.en.length} in English.`,
    );
  }
  return lists.sr.map((item, index) => ({ sr: item, en: lists.en[index] }));
};

/**
 * Attributes for a translated HTML attribute (alt, aria-label, content…).
 * The attribute is rendered in the page's language, with both versions
 * alongside so the language script can swap it:
 *   <img {...localizedAttr("alt", text, lang)} />
 */
export const localizedAttr = (
  name: string,
  text: Localized,
  lang: Lang,
): Record<string, string> => ({
  [name]: text[lang],
  "data-i18n": name,
  [`data-sr-${name}`]: text.sr,
  [`data-en-${name}`]: text.en,
});
