import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { PHOTOS } from "@/lib/venues";
import { Countdown } from "./Countdown";

export function Hero({ content }: { content: Dictionary["hero"] }) {
  return (
    <header className="hero">
      <Image
        src={PHOTOS.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero__image"
      />
      <div className="hero__blur" aria-hidden />
      <div className="hero__veil" aria-hidden />
      <div className="hero__content">
        <h1 className="hero__names fade-up">
          <span className="hero__name">{content.nameGroom}</span>
          <span className="hero__infinity" aria-hidden>
            ∞
          </span>
          <span className="hero__name">{content.nameBride}</span>
        </h1>
        <p className="hero__date fade-up fade-up--2">{content.date}</p>
        <div className="hero__countdown fade-up fade-up--3">
          <Countdown labels={content.countdown} />
        </div>
      </div>
      <a href="#invitation" className="hero__scroll fade-up fade-up--4">
        <span className="hero__chevron" aria-hidden />
      </a>
    </header>
  );
}
