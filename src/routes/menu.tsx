import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { menuSections } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Solstice Café & Dining Room" },
      {
        name: "description",
        content:
          "The Solstice menu: single-origin pours, wood-oven bread and pastry, and a short list of evening plates.",
      },
      { property: "og:title", content: "Menu — Solstice" },
      {
        property: "og:description",
        content: "Coffee, oven-baked pastry and evening plates, changing with the season.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-[-14%] top-[-28%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-peach via-brand/40 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-nectar rise-in">Season IV</p>
          <h1 className="wordmark-in text-balance font-display text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[0.95] text-primary">
            The menu
          </h1>
          <p className="rise-in mt-6 max-w-[52ch] text-pretty text-lg text-muted-foreground [animation-delay:200ms]">
            Written each week around what the roast and the oven are doing. Prices in pounds, service included.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        {menuSections.map((section) => (
          <section key={section.id} className="border-t border-border py-14">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-display text-3xl font-light text-primary">{section.title}</h2>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between gap-6 border-b border-border pb-3"
                    >
                      <div>
                        <p className="font-display text-lg text-primary">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.note}</p>
                      </div>
                      <span className="shrink-0 font-mono text-sm text-nectar">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <div className="border-t border-border pt-14">
          <Link
            to="/reservations"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:bg-nectar"
          >
            Reserve a table <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
