import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

export function Invitation({ content }: { content: Dictionary["invitation"] }) {
  return (
    <section id="invitation" className="section invitation">
      <Reveal>
        <h2 className="section__title">{content.title}</h2>
        <p className="section__body">{content.body}</p>
      </Reveal>
    </section>
  );
}
