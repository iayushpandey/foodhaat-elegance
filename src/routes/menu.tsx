import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Search, Sparkles } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { categoryMeta, menu, type CategoryId } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Food Haat · Pure Veg, Gomti Nagar Lucknow" },
      {
        name: "description",
        content:
          "Explore Food Haat's full pure-veg menu — Indian, Chinese, South Indian, rolls, shakes, burgers, pasta, dosa, desserts and beverages.",
      },
      { property: "og:title", content: "Food Haat Menu — Pure Veg" },
      { property: "og:description", content: "60+ signature pure-veg dishes across ten categories." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<CategoryId | "all">("all");
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  // On mount, scroll to hash category
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionsRef.current[hash]) {
      setTimeout(() => {
        sectionsRef.current[hash]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, []);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categoryMeta.map((c) => ({
      ...c,
      items: menu.filter(
        (m) =>
          m.category === c.id &&
          (q === "" ||
            m.name.toLowerCase().includes(q) ||
            m.desc.toLowerCase().includes(q)),
      ),
    }));
  }, [query]);

  const visible = active === "all" ? grouped : grouped.filter((g) => g.id === active);

  return (
    <div className="bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_180)] pt-32 pb-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.47_0.09_180/0.45),transparent_55%),radial-gradient(circle_at_85%_80%,oklch(0.75_0.12_82/0.25),transparent_55%)]" />
        <div className="container-x relative mx-auto max-w-7xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] backdrop-blur">
            <Leaf className="h-3.5 w-3.5 text-[oklch(0.82_0.12_82)]" /> Our Menu · Pure Veg
          </div>
          <h1 className="animate-fade-up mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl" style={{ animationDelay: "80ms" }}>
            A menu built <span className="text-gradient-gold">around joy.</span>
          </h1>
          <p className="animate-fade-up mt-4 max-w-2xl text-white/70" style={{ animationDelay: "160ms" }}>
            60+ signature vegetarian dishes across ten categories — searchable, filterable,
            and ready when you are.
          </p>

          <div className="animate-fade-up mt-10 flex max-w-xl items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur" style={{ animationDelay: "220ms" }}>
            <Search className="h-4 w-4 text-white/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a dish, e.g. paneer, dosa, shake..."
              className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
            />
          </div>
        </div>
      </section>

      {/* Sticky category filter */}
      <div className="sticky top-16 z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="container-x mx-auto max-w-7xl">
          <div className="scrollbar-none flex items-center gap-2 overflow-x-auto py-4">
            <FilterChip active={active === "all"} onClick={() => setActive("all")}>All</FilterChip>
            {categoryMeta.map((c) => (
              <FilterChip
                key={c.id}
                active={active === c.id}
                onClick={() => {
                  setActive(c.id);
                  setTimeout(() => sectionsRef.current[c.id]?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
                }}
              >
                {c.name}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="container-x mx-auto max-w-7xl py-16">
        {visible.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => { sectionsRef.current[cat.id] = el; }}
            className={idx > 0 ? "mt-24" : ""}
          >
            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.32em] text-primary">Category</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl">{cat.name}</h2>
              </div>
              <div className="text-sm text-muted-foreground">
                {cat.items.length} {cat.items.length === 1 ? "dish" : "dishes"}
              </div>
            </div>

            {cat.items.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
                No matches in {cat.name}.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((m) => (
                  <article
                    key={m.name}
                    className="hover-lift group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[oklch(0.35_0.15_145)]">
                        <span className="grid h-3.5 w-3.5 place-items-center rounded-sm border border-[oklch(0.35_0.15_145)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.35_0.15_145)]" />
                        </span>
                        VEG
                      </div>
                      {m.tag && (
                        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-[oklch(0.82_0.12_82)] to-[oklch(0.68_0.14_78)] px-3 py-1 text-[11px] font-semibold text-[oklch(0.18_0.02_180)] shadow">
                          <Sparkles className="h-3 w-3" /> {m.tag}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl leading-tight">{m.name}</h3>
                        <div className="whitespace-nowrap rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                          ₹{m.price}
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
          : "border border-border bg-background text-foreground/70 hover:border-primary/50 hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}
