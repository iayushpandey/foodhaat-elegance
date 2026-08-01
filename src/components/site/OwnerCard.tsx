import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface Owner {
  name: string;
  designation: string;
  phone: string;
  image: string;
}

interface OwnerCardProps {
  owner: Owner;
}

export function OwnerCard({ owner }: OwnerCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      {/* Profile Image */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Golden glow ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #C8A24F, #F5E6A3, #C8A24F, #8B6914, #C8A24F)",
            padding: "3px",
            borderRadius: "50%",
            filter: "blur(0px)",
            boxShadow:
              "0 0 28px 6px rgba(200, 162, 79, 0.55), 0 0 60px 12px rgba(200, 162, 79, 0.2)",
          }}
        />
        <div
          className="relative rounded-full overflow-hidden"
          style={{
            width: "140px",
            height: "140px",
            border: "3px solid transparent",
            background: "linear-gradient(#1a1a1a, #1a1a1a) padding-box, conic-gradient(from 0deg, #C8A24F, #F5E6A3, #C8A24F, #8B6914, #C8A24F) border-box",
          }}
        >
          <img
            src={owner.image}
            alt={owner.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
            style={{ objectPosition: "50% 15%" }}
          />
        </div>
      </motion.div>

      {/* Owner Details */}
      <div className="flex flex-col items-center gap-1">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-2xl font-bold"
          style={{
            fontFamily: '"Fraunces", ui-serif, Georgia, serif',
            background: "linear-gradient(135deg, #C8A24F 0%, #F5E6A3 50%, #C8A24F 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
          }}
        >
          {owner.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium tracking-widest uppercase"
          style={{ color: "rgba(245, 230, 163, 0.7)" }}
        >
          {owner.designation}
        </motion.p>

        <motion.a
          href={`tel:${owner.phone}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-1 inline-flex items-center gap-2 text-sm font-medium transition-all duration-200"
          style={{ color: "rgba(245, 230, 163, 0.85)" }}
          whileHover={{ color: "#F5E6A3", scale: 1.02 }}
        >
          <Phone className="h-3.5 w-3.5" />
          {owner.phone}
        </motion.a>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full flex items-center gap-3"
      >
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(200, 162, 79, 0.5))" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C8A24F" }} />
        <div className="flex-1 h-px" style={{ background: "linear-gradient(270deg, transparent, rgba(200, 162, 79, 0.5))" }} />
      </motion.div>

      {/* Welcome Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-sm leading-relaxed px-2"
        style={{ color: "rgba(255, 248, 230, 0.75)", fontStyle: "italic" }}
      >
        "Welcome to our restaurant. We believe great food brings people together.
        Thank you for choosing us — we look forward to serving you."
      </motion.p>
    </div>
  );
}
