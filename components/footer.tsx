import parse from "html-react-parser";
import Link from "next/link";
import { Footer as FooterType } from "../typescript/types";

export default function Footer({ footer }: { footer: FooterType }) {
  return (
    <footer className="py-3 my-4 border-top">
      <ul className="nav nav-pills justify-content-center border-bottom pb-3 mb-3">
        {footer.extra_links?.map((link, key: number) => (
          <li key={key} className="nav-item">
            <Link href={link.external_link?.href ?? "#"}>
              <a className="nav-link">{link.external_link?.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <span className="text-center">{parse(footer.copyright)}</span>
    </footer>
  );
}
