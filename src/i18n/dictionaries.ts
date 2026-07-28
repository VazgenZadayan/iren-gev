import type { Locale } from "./config";
import { VENUES } from "@/lib/venues";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    monogram: string;
    nameBride: string;
    nameGroom: string;
    date: string;
    scrollHint: string;
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  invitation: {
    eyebrow: string;
    title: string;
    body: string;
  };
  details: {
    eyebrow: string;
    title: string;
    ceremony: {
      label: string;
      time: string;
      place: string;
      address: string;
      mapUrl: string;
    };
    banquet: {
      label: string;
      time: string;
      place: string;
      address: string;
      mapUrl: string;
    };
    mapCta: string;
  };
  footer: {
    thanks: string;
    await: string;
    names: string;
  };
  music: {
    play: string;
    pause: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "Gevorg ∞ Iren — Wedding Invitation",
    description: "You are invited to celebrate the wedding of Gevorg ∞ Iren.",
  },
  hero: {
    monogram: "G ∞ I",
    nameBride: "Iren",
    nameGroom: "Gevorg",
    date: "5 September 2026",
    scrollHint: "Open the invitation",
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Min",
      seconds: "Sec",
    },
  },
  invitation: {
    eyebrow: "Invitation",
    title: "SAVE THE DATE",
    body: "We are happy to invite you to celebrate our wedding day - a gathering of love, family, and cherished friends.",
  },
  details: {
    eyebrow: "When & Where",
    title: "The celebration",
    ceremony: {
      label: "Ceremony",
      time: "16:00",
      place: "St. Anna Church",
      address: "Abovyan St. 15, Yerevan",
      mapUrl: VENUES.church.mapUrl,
    },
    banquet: {
      label: "Banquet",
      time: "17:30",
      place: "Prime Garden",
      address: "Yeghvard Hwy 40, Yerevan",
      mapUrl: VENUES.banquet.mapUrl,
    },
    mapCta: "Get directions",
  },
  footer: {
    thanks: "With love",
    await: "With hearts full of love, we are awaiting your presence on our special day.",
    names: "Gevorg ∞ Iren",
  },
  music: {
    play: "Play music",
    pause: "Pause music",
  },
};

const ru: Dictionary = {
  meta: {
    title: "Геворг ∞ Ирен — Свадебное приглашение",
    description: "Приглашаем вас на свадьбу Геворга и Ирен.",
  },
  hero: {
    monogram: "G ∞ I",
    nameBride: "Ирен",
    nameGroom: "Геворг",
    date: "5 сентября 2026",
    scrollHint: "Открыть приглашение",
    countdown: {
      days: "Дней",
      hours: "Часов",
      minutes: "Мин",
      seconds: "Сек",
    },
  },
  invitation: {
    eyebrow: "Приглашение",
    title: "Приглашаем вас стать частью нашего счастья",
    body: "С огромной радостью ждём вас в день нашей свадьбы - торжество любви, семьи и самых дорогих людей",
  },
  details: {
    eyebrow: "Когда и где",
    title: "Празднование",
    ceremony: {
      label: "Венчание",
      time: "16:00",
      place: "Церковь Святой Анны",
      address: "ул. Абовяна 15, Ереван",
      mapUrl: VENUES.church.mapUrl,
    },
    banquet: {
      label: "Банкет",
      time: "17:30",
      place: "Prime Garden",
      address: "Егвардское ш., 40, Ереван",
      mapUrl: VENUES.banquet.mapUrl,
    },
    mapCta: "Построить маршрут",
  },
  footer: {
    thanks: "С любовью",
    await: "С трепетом и любовью - ждём вас",
    names: "Геворг ∞ Ирен",
  },
  music: {
    play: "Включить музыку",
    pause: "Выключить музыку",
  },
};

const hy: Dictionary = {
  meta: {
    title: "Գևորգ ∞ Իռեն — Հարսանեկան հրավեր",
    description: "Հրավիրում ենք ձեզ Գևորգի և Իռենի հարսանիքին։",
  },
  hero: {
    monogram: "G ∞ I",
    nameBride: "Իռեն",
    nameGroom: "Գևորգ",
    date: "5 սեպտեմբերի 2026",
    scrollHint: "Բացել հրավերը",
    countdown: {
      days: "Օր",
      hours: "Ժամ",
      minutes: "Րոպե",
      seconds: "Վրկ",
    },
  },
  invitation: {
    eyebrow: "Հրավեր",
    title: "Հրավիրում ենք դառնալու մեր կյանքի գեղեցիկ օրվա մասնակիցը։",
    body: "Սիրով սպասում ենք Ձեզ մեր հարսանիքին՝ միասին կիսելու մեր երջանկությունն ու տոնելու այս գեղեցիկ օրը։",
  },
  details: {
    eyebrow: "Երբ ԵՎ որտեղ",
    title: "Տոնակատարություն",
    ceremony: {
      label: "Պսակադրություն",
      time: "16:00",
      place: "Սբ. Աննա եկեղեցի",
      address: "Աբովյան 15, Երևան",
      mapUrl: VENUES.church.mapUrl,
    },
    banquet: {
      label: "Հանդիսություն",
      time: "17:30",
      place: "Prime Garden",
      address: "Եղվարդի խճ., 40, Երևան",
      mapUrl: VENUES.banquet.mapUrl,
    },
    mapCta: "Ինչպե՞ս հասնել",
  },
  footer: {
    thanks: "Սիրով",
    await: "Սիրով սպասում ենք Ձեզ՝ դառնալու մեր օրվա մի մասը։",
    names: "Գևորգ ∞ Իռեն",
  },
  music: {
    play: "Միացնել երաժշտությունը",
    pause: "Անջատել երաժշտությունը",
  },
};

const de: Dictionary = {
  meta: {
    title: "Gevorg ∞ Iren — Hochzeitseinladung",
    description: "Wir laden Sie zur Hochzeit von Gevorg ∞ Iren ein.",
  },
  hero: {
    monogram: "G ∞ I",
    nameBride: "Iren",
    nameGroom: "Gevorg",
    date: "5. September 2026",
    scrollHint: "Einladung öffnen",
    countdown: {
      days: "Tage",
      hours: "Std",
      minutes: "Min",
      seconds: "Sek",
    },
  },
  invitation: {
    eyebrow: "Einladung",
    title: "Wir laden Sie ein, unsere Freude zu teilen",
    body: "Mit großer Freude bitten wir Sie, unseren Hochzeitstag mit uns zu feiern — ein Fest der Liebe, der Familie und lieber Freunde.",
  },
  details: {
    eyebrow: "Wann & Wo",
    title: "Die Feier",
    ceremony: {
      label: "Trauung",
      time: "16:00",
      place: "St.-Anna-Kirche",
      address: "Abovyan-Str. 15, Jerewan",
      mapUrl: VENUES.church.mapUrl,
    },
    banquet: {
      label: "Festessen",
      time: "17:30",
      place: "Prime Garden",
      address: "Yeghvard-Autobahn 40, Jerewan",
      mapUrl: VENUES.banquet.mapUrl,
    },
    mapCta: "Route planen",
  },
  footer: {
    thanks: "Mit Liebe",
    await: "Mit Liebe und Vorfreude erwarten wir Sie",
    names: "Gevorg ∞ Iren",
  },
  music: {
    play: "Musik abspielen",
    pause: "Musik pausieren",
  },
};

const dictionaries: Record<Locale, Dictionary> = { hy, ru, en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
