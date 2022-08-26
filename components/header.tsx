import Link from "next/link";
import React from "react";
import { Header as HeaderType } from "../typescript/types";
import NavItem from "./nav-item";

export default function Header({ header }: { header: HeaderType }) {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <img src={header.logo?.url} alt="" width="30" height="24" />
            </a>
          </Link>

          <Link href="/">
            <a className="navbar-brand">{header.title}</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {header.menu?.map((item, idx) => (
                <NavItem item={item} key={idx} itemKey={idx} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
