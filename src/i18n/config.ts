export const locales = ["hy", "ru", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "hy";

export const localeNames: Record<Locale, string> = {
  hy: "Հայերեն",
  ru: "Русский",
  en: "English",
  de: "Deutsch",
};

export const localeShort: Record<Locale, string> = {
  hy: "HY",
  ru: "RU",
  en: "EN",
  de: "DE",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
