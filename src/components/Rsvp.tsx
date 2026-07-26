import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

export function Rsvp({ content }: { content: Dictionary["rsvp"] }) {
  return (
    <section className="section rsvp">
      <Reveal>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="section__title">{content.title}</h2>
        <p className="section__body">{content.body}</p>
        <p className="rsvp__deadline">{content.deadline}</p>
        <a className="rsvp__phone" href={`tel:${content.phone.replace(/\s/g, "")}`}>
          <span>{content.phoneLabel}</span>
          {content.phone}
        </a>
      </Reveal>
    </section>
  );
}
