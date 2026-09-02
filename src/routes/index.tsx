import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import heroInterior from "@/assets/hero-interior.jpg";
import dishCoffee from "@/assets/dish-coffee.jpg";
import dishBun from "@/assets/dish-bun.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solstice — Café & Dining Room in the Late Light" },
      {
        name: "description",
        content:
          "Solstice is a golden-hour café and dining room: slow mornings, small-batch roasts, wood-oven bread, and a table waiting for you.",
      },
      { property: "og:title", content: "Solstice — Café & Dining Room" },
      {
        property: "og:description",
        content: "Slow mornings, warm roasts, and a table that's waiting for you. Reserve at Solstice.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-[-12%] top-[-20%] h-[42rem] w-[42rem] rounded-full bg-gradient-to-br from-peach via-brand/45 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-30%] left-[-8%] h-[28rem] w-[28rem] rounded-full bg-peach/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-12 items-center gap-8 px-6 pt-20 pb-24">
          <div className="col-span-12 lg:col-span-5">
            <img
              src={heroInterior}
              alt="Sunlit dining room at Solstice with a set wooden table"
              width={1008}
              height={1200}
              className="aspect-[4/5] w-full rounded-3xl object-cover ring-1 ring-border"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 lg:pl-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-nectar rise-in">
              Roastery, bakery &amp; dining room
            </p>
            <h1 className="wordmark-in text-balance font-display text-[clamp(2.6rem,6vw,5rem)] font-light leading-[0.98] text-primary">
              Slow mornings, <em className="font-normal italic text-nectar">low light</em>, honest bread.
            </h1>
            <p className="rise-in mt-6 max-w-[46ch] text-pretty text-lg text-muted-foreground [animation-delay:200ms]">
              A small room built around a single-origin roast and a wood oven. We open while the light is still
              grey and stay a while after the sun goes down.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/reservations"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:bg-nectar"
              >
                Reserve a table <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-primary ring-1 ring-primary/30 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                View the menu
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs text-muted-foreground">
              <span>Open daily</span>
              <span className="text-border">/</span>
              <span>07:00 — 22:00</span>
              <span className="text-border">/</span>
              <span>14 Rook Lane</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 md:col-span-8">
            <span className="font-mono text-xs text-nectar">(01)</span>
            <h2 className="mt-3 text-balance font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[0.98] text-primary">
              On the counter
            </h2>
            <p className="mt-4 max-w-[46ch] text-pretty text-muted-foreground">
              A short list that changes with the season. Everything roasted and baked in the room you're sitting
              in.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:justify-self-end">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-primary ring-1 ring-primary/30 transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Full menu <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-shadow duration-300 hover:shadow-xl hover:shadow-nectar/20">
            <img
              src={dishCoffee}
              alt="Honey flat white in a ceramic cup on a sunlit counter"
              width={800}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="flex items-baseline justify-between px-5 py-4">
              <div>
                <p className="font-display text-lg text-primary">Honey Flat White</p>
                <p className="text-xs text-muted-foreground">double, wildflower honey</p>
              </div>
              <span className="font-mono text-sm text-nectar">5.5</span>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-shadow duration-300 hover:shadow-xl hover:shadow-nectar/20">
            <img
              src={dishBun}
              alt="Cardamom buns cooling on warm linen"
              width={800}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="flex items-baseline justify-between px-5 py-4">
              <div>
                <p className="font-display text-lg text-primary">Cardamom Bun</p>
                <p className="text-xs text-muted-foreground">baked at dawn, still warm</p>
              </div>
              <span className="font-mono text-sm text-nectar">4.0</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="font-mono text-xs text-nectar">(02)</span>
            <h2 className="mt-3 text-balance font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[0.98] text-primary">
              The house
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="max-w-[52ch] text-pretty text-lg text-muted-foreground">
              We roast in small batches each week and bake by hand every morning. In the evening the counter
              becomes a dining room — twelve tables, one candle each, and a menu that fits on a single card.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
                <p className="text-sm font-medium text-primary">Small-batch roast</p>
                <p className="mt-1 text-xs text-muted-foreground">Roasted weekly, never older than nine days.</p>
              </div>
              <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
                <p className="text-sm font-medium text-primary">Wood oven</p>
                <p className="mt-1 text-xs text-muted-foreground">Bread, pears and squash, all fire-cooked.</p>
              </div>
              <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
                <p className="text-sm font-medium text-primary">Twelve tables</p>
                <p className="mt-1 text-xs text-muted-foreground">Evenings fill fast — reserve ahead.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
