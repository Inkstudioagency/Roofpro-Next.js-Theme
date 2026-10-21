"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ButtonLabel } from "@/components/ui/button-label";
import { NavLink } from "@/components/ui/nav-link";
import { useCollapse } from "@/lib/use-collapse";
import { mainNav, pagesNav } from "@/lib/site";

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const menuId = useId();
  const pagesId = useId();
  const dropdown = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pagesInner = useCollapse(pagesOpen);

  // close everything after navigating
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setPagesOpen(false);
  }

  // close the dropdown on outside click / Escape
  useEffect(() => {
    if (!pagesOpen && !menuOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (pagesOpen && !dropdown.current?.contains(e.target as Node)) setPagesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setPagesOpen(false);
      if (menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [pagesOpen, menuOpen]);

  // while the mobile menu is open: lock page scroll, make the page behind it inert, focus the first link
  useEffect(() => {
    if (!menuOpen) return;
    const { body } = document;
    const overflow = body.style.overflow;
    body.style.overflow = "hidden";
    const behind = Array.from(document.querySelectorAll<HTMLElement>(".page-wrapper > :not(header)"));
    behind.forEach((el) => (el.inert = true));
    document.getElementById(menuId)?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      body.style.overflow = overflow;
      behind.forEach((el) => (el.inert = false));
    };
  }, [menuOpen, menuId]);

  const open = (on: boolean) => (on ? " is-open" : "");

  return (
    <div className="container-main">
      <div className="nav-content-block">
        <NavLink className="brand-logo-block nav-brand" href="/" aria-label="RoofPro home">
          <Image src="/images/Nav-logo.svg" alt="" width={131} height={24} className="brand-logo" priority />
        </NavLink>

        <nav id={menuId} className={`nav-menu-content nav-menu${open(menuOpen)}`} aria-label="Main">
          <div className="nav-link-block">
            {mainNav.map((link) => (
              <NavLink key={link.href} className="nav-link nav-link-base" href={link.href}>
                {link.label}
              </NavLink>
            ))}

            <div
              ref={dropdown}
              className={`nav-link dropdown${open(pagesOpen)}`}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPagesOpen(false);
              }}
            >
              <button
                type="button"
                className={`nav-dropdown-toggle dropdown-toggle button-reset${open(pagesOpen)}`}
                aria-expanded={pagesOpen}
                aria-controls={pagesId}
                onClick={() => setPagesOpen((v) => !v)}
              >
                <div className="nav-dropdown-toggle-content">
                  <div>Pages</div>
                  <div className="nav-dropdown-icon dropdown-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none">
                      <path
                        d="m4 6 4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <div id={pagesId} className={`nav-dropdown-content dropdown-list${open(pagesOpen)}`}>
                <div className="nav-dropdown-inner" {...pagesInner}>
                  <div className="nav-dropdown-link-block">
                    {pagesNav.map((group) => (
                      <div key={group.title} className="nav-dropdown-column">
                        <div className="nav-dropdown-title">{group.title}</div>
                        {group.links.map((link) => (
                          <NavLink
                            key={link.href}
                            className="nav-dropdown-link dropdown-link"
                            href={link.href}
                            // the demo 404 link would otherwise be prefetched and log a 404
                            prefetch={link.href === "/not-found" ? false : undefined}
                          >
                            {link.label}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink className="nav-link nav-link-base" href="/contact">
              Contact
            </NavLink>
            <div className="general-button-block is-1">
              <Link className="primary-button is-small link-block" href="/contact">
                <ButtonLabel>Get a Quote</ButtonLabel>
              </Link>
            </div>
          </div>
        </nav>

        <div className="nav-button-block">
          <div className="general-button-block is-2">
            <Link className="primary-button is-small link-block" href="/contact">
              <ButtonLabel>Get a Quote</ButtonLabel>
            </Link>
          </div>
          <div className="menu-button-block">
            <button
              ref={menuButton}
              type="button"
              className={`menu-button nav-button button-reset${open(menuOpen)}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="menu-button-icon nav-menu-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
