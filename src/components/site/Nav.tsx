import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x mx-auto flex h-18 max-w-7xl items-center justify-between py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.52_0.09_180)] to-[oklch(0.38_0.08_185)] text-primary-foreground shadow-[var(--shadow-elegant)]">
            <span className="font-display text-lg font-bold">F</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-xl font-semibold ${scrolled ? "text-foreground" : "text-white"}`}>
              Food Haat
            </span>
            <span className={`text-[10px] uppercase tracking-[0.24em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Pure Veg · Lucknow
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {[
            { to: "/", label: "Home" },
            { to: "/menu", label: "Menu" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm font-medium tracking-wide transition-colors ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#about"
            className={`text-sm font-medium tracking-wide transition-colors ${
              scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            About
          </a>
          <a
            href="#location"
            className={`text-sm font-medium tracking-wide transition-colors ${
              scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            Visit
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919506844000"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[oklch(0.82_0.12_82)] to-[oklch(0.68_0.14_78)] px-5 py-2.5 text-sm font-semibold text-[oklch(0.18_0.02_180)] shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container-x mx-auto flex flex-col gap-4 py-6">
            <Link to="/" onClick={() => setOpen(false)} className="text-lg font-medium">Home</Link>
            <Link to="/menu" onClick={() => setOpen(false)} className="text-lg font-medium">Menu</Link>
            <a href="#about" onClick={() => setOpen(false)} className="text-lg font-medium">About</a>
            <a href="#location" onClick={() => setOpen(false)} className="text-lg font-medium">Visit</a>
            <a
              href="tel:+919506844000"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> +91 9506 844 000
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
