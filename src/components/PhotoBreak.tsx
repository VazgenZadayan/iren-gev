import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";

type Variant = "tall" | "wide" | "portrait";

export function PhotoBreak({
  src,
  variant = "tall",
  priority = false,
  position = "center",
}: {
  src: string;
  variant?: Variant;
  priority?: boolean;
  position?: string;
}) {
  return (
    <div
      className={`photo-break photo-break--${variant}`}
      style={{ "--photo-position": position } as CSSProperties}
    >
      <Reveal className="photo-break__reveal">
        <div className="photo-break__frame">
          <Image
            src={src}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 768px) 48rem, 100vw"
            className="photo-break__image"
          />
          <div className="photo-break__blur" aria-hidden />
        </div>
      </Reveal>
    </div>
  );
}
