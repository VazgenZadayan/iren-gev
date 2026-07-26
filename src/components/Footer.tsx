import type { Dictionary } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

export function Footer({ content }: { content: Dictionary["footer"] }) {
  return (
    <footer className="footer">
      <Reveal>
        <p className="footer__thanks">{content.thanks}</p>
        <p className="footer__await">{content.await}</p>
        <p className="footer__names">{content.names}</p>
      </Reveal>
    </footer>
  );
}
