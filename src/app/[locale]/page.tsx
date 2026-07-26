import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LocaleAttributes } from "@/components/LocaleAttributes";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { Details } from "@/components/Details";
import { Closing } from "@/components/Closing";
import { PhotoBreak } from "@/components/PhotoBreak";
import { MusicPlayer } from "@/components/MusicPlayer";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { PHOTOS } from "@/lib/venues";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const ogLocales: Record<Locale, string> = {
  hy: "hy_AM",
  ru: "ru_RU",
  en: "en_US",
  de: "de_DE",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const title = dict.meta.title;
  const description = dict.meta.description;
  const ogImage = {
    url: "/og.jpg",
    width: 1200,
    height: 800,
    alt: title,
  };

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      title,
      description,
      siteName: "Gevorg ∞ Iren",
      url: `/${locale}`,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="page-shell" data-locale={locale}>
      <LocaleAttributes locale={locale} />
      <LanguageSwitcher locale={locale} />
      <MusicPlayer playLabel={dict.music.play} pauseLabel={dict.music.pause} />
      <Hero content={dict.hero} />
      <main>
        <Invitation content={dict.invitation} />
        <PhotoBreak src={PHOTOS.portrait} variant="portrait" position="center 40%" />
        <Details content={dict.details} />
        <Closing src={PHOTOS.lakeside} content={dict.footer} />
      </main>
    </div>
  );
}
