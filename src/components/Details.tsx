import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";
import { JourneyRail } from "./JourneyRail";

type Spot = Dictionary["details"]["ceremony"];

function Stop({
  spot,
  mapCta,
  side,
  delay,
}: {
  spot: Spot;
  mapCta: string;
  side: "left" | "right";
  delay: number;
}) {
  return (
    <article className={`journey__stop journey__stop--${side}`}>
      <Reveal delay={delay}>
        <p className="place__label">{spot.label}</p>
        <p className="place__time">{spot.time}</p>
        <h3 className="place__name">{spot.place}</h3>
        <p className="place__address">{spot.address}</p>
        <a
          className="place__map"
          href={spot.mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          {mapCta}
        </a>
      </Reveal>
    </article>
  );
}

export function Details({ content }: { content: Dictionary["details"] }) {
  return (
    <section className="section details">
      <Reveal>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="section__title details__heading">{content.title}</h2>
      </Reveal>

      <div className="journey">
        <JourneyRail />

        <Stop
          spot={content.ceremony}
          mapCta={content.mapCta}
          side="right"
          delay={80}
        />
        <Stop
          spot={content.banquet}
          mapCta={content.mapCta}
          side="left"
          delay={160}
        />
      </div>
    </section>
  );
}
