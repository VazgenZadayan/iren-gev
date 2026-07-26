"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

export function LocaleAttributes({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.body.dataset.locale = locale;
  }, [locale]);

  return null;
}
