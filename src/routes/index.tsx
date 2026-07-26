import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Clock,
  Leaf,
  MapPin,
  Phone,
  Sparkles,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-food.jpg";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { categoryMeta } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Food Haat — Pure Veg Restaurant in Gomti Nagar, Lucknow" },
      {
        name: "description",
        content:
          "Food Haat is a premium pure-veg restaurant in Gomti Nagar, Lucknow serving Indian, South Indian, Chinese, rolls, shakes and burgers. Fresh, hygienic and family friendly.",
      },
      { property: "og:title", content: "Food Haat — Pure Veg Restaurant, Gomti Nagar" },
      { property: "og:description", content: "Fresh · Hygienic · Affordable · Family friendly. ₹200–₹400 · Gomti Nagar, Lucknow." },
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
  component: Home,
});

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Why />
      <Categories />
      <About />
      <Reviews />
      <Location />
      <Footer />
      <FloatingActions />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Signature pure-veg thali at Food Haat"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        width={1920}
        height={1200}
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.47_0.09_180/0.35),transparent_55%)]" />

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="container-x mx-auto max-w-7xl pt-28 pb-20 text-white">
          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] backdrop-blur">
              <Leaf className="h-3.5 w-3.5 text-[oklch(0.82_0.12_82)]" />
              Pure Veg · Gomti Nagar, Lucknow
            </div>

            <h1
              className="animate-fade-up mt-6 font-display text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-[92px]"
              style={{ animationDelay: "80ms" }}
            >
              <span className="block">Pure Veg.</span>
              <span className="block text-gradient-gold">Pure Joy.</span>
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/85"
              style={{ animationDelay: "180ms" }}
            >
              Serving delicious Indian, South Indian, Chinese, rolls, shakes and
              continental favourites in the heart of Gomti Nagar — freshly cooked,
              hygienically served, thoughtfully priced.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "260ms" }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[oklch(0.18_0.02_180)] shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
              >
                View Menu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+919506844000"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="https://wa.me/919506844000?text=Hi%20Food%20Haat%2C%20I%27d%20like%20to%20reserve%20a%20table."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[oklch(0.82_0.12_82)] to-[oklch(0.68_0.14_78)] px-7 py-4 text-sm font-semibold text-[oklch(0.18_0.02_180)] shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
              >
                Reserve a Table
              </a>
            </div>

            <div
              className="animate-fade-up mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6 text-white/80"
              style={{ animationDelay: "360ms" }}
            >
              <Stat k="4.7★" v="Rated by guests" />
              <Stat k="₹200–400" v="Meal for two" />
              <Stat k="11–11" v="Open daily" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="h-10 w-6 rounded-full border border-white/40 p-1">
          <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-white">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{v}</div>
    </div>
  );
}

function Why() {
  const items = [
    { icon: Leaf, title: "100% Pure Veg", desc: "Every dish, every ingredient — always vegetarian." },
    { icon: Sparkles, title: "Fresh Ingredients", desc: "Sourced daily from trusted local partners." },
    { icon: Wallet, title: "Affordable Prices", desc: "Premium taste at ₹200–₹400 for two." },
    { icon: Users, title: "Family Friendly", desc: "Warm, welcoming space for every generation." },
    { icon: ShieldCheck, title: "Hygienic Kitchen", desc: "FSSAI standards, spotless prep, safe serve." },
    { icon: Zap, title: "Quick Service", desc: "Thoughtful, attentive, and never rushed." },
  ];
  return (
    <section className="bg-[var(--color-cream)] py-24">
      <div className="container-x mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.32em] text-primary">Why Food Haat</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Crafted for the way you dine.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Six promises we uphold at every table — from the kitchen to the cutlery.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="hover-lift group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[oklch(0.75_0.12_82/0.08)] blur-2xl transition-opacity group-hover:bg-[oklch(0.75_0.12_82/0.18)]" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.52_0.09_180)] to-[oklch(0.38_0.08_185)] text-primary-foreground shadow-[var(--shadow-elegant)]">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const navigate = useNavigate();
  const show = categoryMeta.slice(0, 6);
  return (
    <section className="bg-background py-24">
      <div className="container-x mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">Popular Categories</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Taste what everyone's loving.</h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Explore full menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {show.map((c) => (
            <button
              key={c.id}
              onClick={() => navigate({ to: "/menu", hash: c.id })}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl text-left shadow-[var(--shadow-card)]"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width={800}
                height={800}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-[0.28em] text-[oklch(0.82_0.12_82)]">Explore</span>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-display text-3xl">{c.name}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--color-cream)] py-28">
      <div className="container-x mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[oklch(0.82_0.12_82/0.3)] to-transparent blur-2xl" />
          <img
            src={heroImg}
            alt="Food Haat kitchen"
            width={1200}
            height={1200}
            loading="lazy"
            className="relative aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow-elegant)]"
          />
          <div className="absolute -bottom-8 -right-4 hidden rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:block">
            <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Since</div>
            <div className="font-display text-4xl text-primary">2015</div>
            <div className="text-xs text-muted-foreground">Serving Lucknow</div>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.32em] text-primary">Our Story</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            A pure-veg kitchen with a heart of hospitality.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            At Food Haat we believe great food is a small act of love. Our kitchen
            brings together India's most-loved regional flavours — from a crisp
            Mysore dosa to a bubbling Punjabi dal makhani, alongside Indo-Chinese
            classics and continental bites — all crafted with fresh ingredients and
            uncompromising hygiene.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every plate is proudly pure vegetarian. Every meal is served with the
            warmth Gomti Nagar has come to know us for.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat2 k="10+" v="Years" />
            <Stat2 k="50k+" v="Happy guests" />
            <Stat2 k="60+" v="Signature dishes" />
          </div>
        </div>
      </div>
    </section>
  );
}
function Stat2({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
    </div>
  );
}

function Reviews() {
  const reviews = [
    { text: "Awesome and fast service. Delicious food at affordable prices.", name: "Ananya S.", role: "Frequent guest" },
    { text: "Nice place to enjoy food with friends and family. Loved the paneer tikka roll!", name: "Rohit K.", role: "Local foodie" },
    { text: "Consistently fresh and hygienic. Our family's go-to for weekend dinners in Gomti Nagar.", name: "Meera & Arjun", role: "Regulars" },
  ];
  return (
    <section className="bg-background py-24">
      <div className="container-x mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.32em] text-primary">Loved by guests</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Kind words from our table.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="hover-lift relative rounded-3xl border border-border/60 bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-1 text-[oklch(0.75_0.12_82)]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.52_0.09_180)] to-[oklch(0.38_0.08_185)] text-primary-foreground font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-[var(--color-cream)] py-24">
      <div className="container-x mx-auto grid max-w-7xl gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <span className="text-xs uppercase tracking-[0.32em] text-primary">Visit us</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Come, dine with us.</h2>
          <p className="mt-4 text-muted-foreground">
            Nestled in the heart of Gomti Nagar — easy to find, easier to love.
          </p>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><MapPin className="h-4 w-4" /></span>
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-muted-foreground">Gomti Nagar, Lucknow, Uttar Pradesh</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Phone className="h-4 w-4" /></span>
              <div>
                <div className="font-semibold">Phone</div>
                <a href="tel:+919506844000" className="text-muted-foreground hover:text-primary">+91 9506 844 000</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Clock className="h-4 w-4" /></span>
              <div>
                <div className="font-semibold">Opening Hours</div>
                <div className="text-muted-foreground">Mon – Sun · 11:00 AM – 11:00 PM</div>
              </div>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+919506844000" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href="https://wa.me/919506844000?text=Hi%20Food%20Haat%2C%20I%27d%20like%20to%20reserve%20a%20table."
              target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5"
            >
              Reserve on WhatsApp
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Food Haat location"
              src="https://www.google.com/maps?q=Gomti+Nagar,+Lucknow&output=embed"
              className="h-[460px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
