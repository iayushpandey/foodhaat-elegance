import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { OwnerCard } from "./OwnerCard";

interface Owner {
  name: string;
  designation: string;
  phone: string;
  image: string;
}

interface OwnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  owner: Owner;
}

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function OwnerModal({ isOpen, onClose, owner }: OwnerModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus the close button after open animation
      setTimeout(() => closeButtonRef.current?.focus(), 350);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC key to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();

      // Focus trap
      if (e.key === "Tab" && isOpen && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Meet ${owner.name}, ${owner.designation}`}
          >
            <motion.div
              key="modal"
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm mx-auto"
              style={{ borderRadius: "24px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glassmorphism card */}
              <div
                style={{
                  borderRadius: "24px",
                  background:
                    "linear-gradient(145deg, rgba(30, 25, 15, 0.92) 0%, rgba(18, 14, 8, 0.96) 100%)",
                  border: "1px solid rgba(200, 162, 79, 0.25)",
                  boxShadow:
                    "0 32px 64px -12px rgba(0,0,0,0.85), 0 0 0 1px rgba(200,162,79,0.1), inset 0 1px 0 rgba(245,230,163,0.08)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  overflow: "hidden",
                }}
              >
                {/* Top gold shimmer line */}
                <div
                  style={{
                    height: "2px",
                    background: "linear-gradient(90deg, transparent 0%, #C8A24F 30%, #F5E6A3 50%, #C8A24F 70%, transparent 100%)",
                    opacity: 0.9,
                  }}
                />

                {/* Content */}
                <div className="px-8 py-8 flex flex-col gap-6">
                  {/* Close button */}
                  <div className="flex justify-end -mt-2 -mr-2">
                    <motion.button
                      ref={closeButtonRef}
                      onClick={onClose}
                      whileHover={{ scale: 1.12, rotate: 90 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex items-center justify-center w-9 h-9 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{
                        background: "rgba(200, 162, 79, 0.12)",
                        border: "1px solid rgba(200, 162, 79, 0.25)",
                        color: "rgba(245, 230, 163, 0.8)",
                        // @ts-ignore
                        "--tw-ring-color": "#C8A24F",
                      }}
                      aria-label="Close modal"
                    >
                      <X className="h-4 w-4" />
                    </motion.button>
                  </div>

                  {/* Owner Card */}
                  <OwnerCard owner={owner} />

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 mt-1">
                    {/* Call Now Button */}
                    <motion.a
                      href={`tel:${owner.phone}`}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      className="relative inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-sm font-semibold overflow-hidden focus:outline-none focus-visible:ring-2"
                      style={{
                        background: "linear-gradient(135deg, #C8A24F 0%, #F5E6A3 50%, #C8A24F 100%)",
                        color: "#1a1005",
                        boxShadow: "0 8px 24px -6px rgba(200,162,79,0.6), 0 0 0 1px rgba(200,162,79,0.3)",
                        letterSpacing: "0.03em",
                        // @ts-ignore
                        "--tw-ring-color": "#C8A24F",
                      }}
                      aria-label="Call Hemant Srivastava"
                    >
                      <motion.span
                        className="absolute inset-0 rounded-2xl opacity-0"
                        whileHover={{ opacity: 1 }}
                        style={{
                          background: "linear-gradient(135deg, #F5E6A3 0%, #C8A24F 50%, #8B6914 100%)",
                        }}
                        transition={{ duration: 0.25 }}
                      />
                      <Phone className="relative z-10 h-4 w-4" />
                      <span className="relative z-10">Call Now</span>
                    </motion.a>

                    {/* WhatsApp Button */}
                    <motion.a
                      href={`https://wa.me/${owner.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      className="relative inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-sm font-semibold overflow-hidden focus:outline-none focus-visible:ring-2"
                      style={{
                        background: "rgba(37, 211, 102, 0.12)",
                        border: "1px solid rgba(37, 211, 102, 0.35)",
                        color: "#25D366",
                        boxShadow: "0 8px 24px -6px rgba(37,211,102,0.2)",
                        letterSpacing: "0.03em",
                        // @ts-ignore
                        "--tw-ring-color": "#25D366",
                      }}
                      aria-label="WhatsApp Hemant Srivastava"
                    >
                      <motion.span
                        className="absolute inset-0 rounded-2xl opacity-0"
                        whileHover={{ opacity: 1 }}
                        style={{
                          background: "rgba(37, 211, 102, 0.18)",
                        }}
                        transition={{ duration: 0.25 }}
                      />
                      <WhatsAppIcon className="relative z-10 h-4 w-4" />
                      <span className="relative z-10">WhatsApp</span>
                    </motion.a>
                  </div>
                </div>

                {/* Bottom gold shimmer line */}
                <div
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, transparent 0%, rgba(200,162,79,0.4) 50%, transparent 100%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
