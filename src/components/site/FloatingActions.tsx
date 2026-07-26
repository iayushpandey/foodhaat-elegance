import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = "https://wa.me/919506844000?text=Hi%20Food%20Haat%2C%20I%27d%20like%20to%20reserve%20a%20table.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-11 w-11 place-items-center rounded-full bg-background/90 text-foreground shadow-[var(--shadow-card)] backdrop-blur transition-transform hover:scale-105 border border-border"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href="tel:+919506844000"
        aria-label="Call"
        className="grid h-13 w-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-105 h-13"
        style={{ height: 52, width: 52 }}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="group grid place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] transition-transform hover:scale-105 animate-float-slow"
        style={{ height: 56, width: 56 }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
