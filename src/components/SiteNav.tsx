import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { profile } from "../data/portfolio";

const items = [
  ["Code", "#code"],
  ["Clothing", "#clothing"],
  ["Life", "#life"],
  ["Contact", "#contact"],
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="site-mark" href="#home" aria-label={`${profile.name}, home`}>
        VJ
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
      </button>

      <nav
        className={`site-nav ${open ? "is-open" : ""}`}
        id="site-navigation"
        aria-label="Primary navigation"
      >
        {items.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
