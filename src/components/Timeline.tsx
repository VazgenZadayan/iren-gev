import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

export function Timeline({ content }: { content: Dictionary["timeline"] }) {
  return (
    <section className="section timeline">
      <Reveal>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="section__title">{content.title}</h2>
      </Reveal>

      <ol className="timeline__list">
        {content.items.map((item, index) => (
          <Reveal key={item.time + item.title} delay={index * 60}>
            <li className="timeline__item">
              <time className="timeline__time">{item.time}</time>
              <div>
                <p className="timeline__name">{item.title}</p>
                {item.note ? <p className="timeline__note">{item.note}</p> : null}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
