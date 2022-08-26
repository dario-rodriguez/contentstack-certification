import Link from "next/link";
import { Category, MenuItem } from "../typescript/types";

export default function NavItem({
  item,
  itemKey,
}: {
  item: MenuItem;
  itemKey: number;
}) {
  if (item.submenu?.length) {
    return (
      <li className="nav-item dropdown" key={itemKey}>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {item.menu_text}
        </a>
        <ul className="dropdown-menu">
          {item.submenu.map((subitem, subkey) => {
            return (
              <li key={15 + subkey}>
                <Link
                  href={
                    subitem.external_link ||
                    (subitem.submenu_link as Category[])![0].url ||
                    "#"
                  }
                >
                  <a className="dropdown-item">{subitem.submenu_text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <li className="nav-item" key={itemKey}>
      <Link
        href={
          (item.linked_page &&
            item.linked_page[0] &&
            item.linked_page[0].url) ??
          "/asdf"
        }
      >
        <a className="nav-link active" aria-current="page">
          {item.menu_text ?? "asdf"}
        </a>
      </Link>
    </li>
  );
}
