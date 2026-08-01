import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { OwnerModal } from "./OwnerModal";

const logoUrl = "/foodhaat-logo.png";

const owner = {
  name: "Hemant Srivastava",
  designation: "Founder & Owner",
  phone: "+919506844000",
  image: "/images/owner.jpg",
};

export function Nav() {
  const scrolled = true;
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-x mx-auto flex h-18 max-w-7xl items-center justify-between py-4">
          {/* Logo — clickable to open Owner Modal */}
          <div className="flex items-center gap-1">
            <motion.button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label="Meet our Founder & Owner"
              title="Meet our Founder & Owner"
              whileHover={{ scale: 1.07, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg"
              style={{ cursor: "pointer" }}
            >
              <img
                src={logoUrl}
                alt="Food Haat"
                className="h-[2cm] w-[2cm] object-contain mix-blend-multiply"
              />
            </motion.button>
            <Link to="/" className="group flex items-center">
              <img
                src="/foodhaat-text.png"
                alt="Food Haat - Restaurant Catering Banquet"
                className="h-[1.6cm] w-auto object-contain mix-blend-multiply"
              />
            </Link>
          </div>

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

      {/* Owner Modal — rendered at root level (outside header) */}
      <OwnerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        owner={owner}
      />
    </>
  );
}
