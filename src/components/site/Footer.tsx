import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.16_0.02_180)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,oklch(0.47_0.09_180/0.35),transparent_50%),radial-gradient(circle_at_80%_90%,oklch(0.75_0.12_82/0.18),transparent_50%)]" />
      <div className="container-x relative mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.82_0.12_82)] to-[oklch(0.68_0.14_78)] text-[oklch(0.18_0.02_180)] font-display text-lg font-bold">
              F
            </span>
            <div>
              <div className="font-display text-2xl">Food Haat</div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/60">Pure Veg Restaurant</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            A modern pure-veg kitchen in the heart of Gomti Nagar, serving Indian,
            South Indian, Chinese and continental favourites — freshly cooked, hygienically served.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.24em] text-[oklch(0.82_0.12_82)]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#location" className="hover:text-white">Visit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.24em] text-[oklch(0.82_0.12_82)]">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[oklch(0.82_0.12_82)]" /> +91 9506 844 000</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[oklch(0.82_0.12_82)]" /> Gomti Nagar, Lucknow</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-[oklch(0.82_0.12_82)]" /> 11:00 AM – 11:00 PM</li>
          </ul>
          <a
            href="tel:+919506844000"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[oklch(0.82_0.12_82)] to-[oklch(0.68_0.14_78)] px-5 py-2.5 text-sm font-semibold text-[oklch(0.18_0.02_180)] shadow-[var(--shadow-gold)]"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} Food Haat. All rights reserved.</span>
          <span>Crafted with care in Lucknow.</span>
        </div>
      </div>
    </footer>
  );
}
