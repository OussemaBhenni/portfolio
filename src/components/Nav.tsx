"use client";

import { useEffect, useState } from "react";
import { profile, ui, type Lang } from "@/content/data";

const links = ["about", "experience", "projects", "skills", "contact"] as const;

export function Nav({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const other: Lang = lang === "fr" ? "en" : "fr";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur" : "border-b border-transparent"}`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-display font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/60 font-mono text-xs text-accent">{profile.initials}</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l}>
              <a className="transition-colors hover:text-ink" href={`#${l}`}>
                {ui.nav[l][lang]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`/${other}`}
            hrefLang={other}
            className="rounded-md border border-line px-2.5 py-1.5 font-mono text-xs uppercase text-muted transition-colors hover:border-accent/60 hover:text-ink"
            aria-label={other === "en" ? "Switch to English" : "Passer en français"}
          >
            {other}
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener"
            className="hidden rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 sm:inline-block"
          >
            {ui.resume[lang]}
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-md border border-line md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="font-mono text-sm">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a className="block py-2.5 text-muted hover:text-ink" href={`#${l}`} onClick={() => setOpen(false)}>
                {ui.nav[l][lang]}
              </a>
            </li>
          ))}
          <li>
            <a className="mt-2 inline-block rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-bg" href={profile.cv} target="_blank" rel="noopener">
              {ui.resume[lang]}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
