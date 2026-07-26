import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

export function DressCode({ content }: { content: Dictionary["dressCode"] }) {
  return (
    <section className="section dress">
      <Reveal>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="section__title">{content.title}</h2>
        <p className="section__body">{content.body}</p>
        <div className="palette" aria-hidden>
          <span style={{ background: "#1a1a1a" }} />
          <span style={{ background: "#6e655c" }} />
          <span style={{ background: "#a8a29a" }} />
          <span style={{ background: "#d4cfc8" }} />
          <span style={{ background: "#f7f5f2" }} />
        </div>
      </Reveal>
    </section>
  );
}
