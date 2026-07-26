import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

export function Closing({
  src,
  content,
}: {
  src: string;
  content: Dictionary["footer"];
}) {
  return (
    <section className="closing">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="closing__image"
      />
      <div className="closing__blur" aria-hidden />
      <div className="closing__veil" aria-hidden />
      <div className="closing__content">
        <Reveal>
          <p className="closing__line">{content.await}</p>
          <p className="closing__names">{content.names}</p>
        </Reveal>
      </div>
    </section>
  );
}
