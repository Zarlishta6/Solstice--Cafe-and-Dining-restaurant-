import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import reserveTable from "@/assets/reserve-table.jpg";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Book a Table at Solstice" },
      {
        name: "description",
        content:
          "Book a table at Solstice. Twelve tables, evening seatings from 17:00, and a short candlelit menu.",
      },
      { property: "og:title", content: "Reservations — Solstice" },
      { property: "og:description", content: "Evenings fill fast. Reserve your table at Solstice." },
    ],
  }),
  component: ReservationsPage,
});

const times = ["07:30", "09:00", "11:30", "13:00", "17:00", "18:30", "20:00", "21:15"];

type Booking = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const empty: Booking = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "18:30",
  guests: "2",
  notes: "",
};

function fieldClass() {
  return "mt-2 w-full rounded-xl border border-input bg-popover px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-nectar focus:ring-2 focus:ring-ring/30";
}

function ReservationsPage() {
  const [form, setForm] = useState<Booking>(empty);
  const [confirmed, setConfirmed] = useState<Booking | null>(null);
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof Booking, value: string) => setForm((f) => ({ ...f, [key]: value }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.date) {
      setError("Please add your name, email and a date.");
      return;
    }
    setError(null);
    setConfirmed(form);
  }

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-[-10%] top-[-24%] h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-peach via-brand/40 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-nectar rise-in">
            Counter &amp; dining room
          </p>
          <h1 className="wordmark-in text-balance font-display text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[0.95] text-primary">
            Reserve a table
          </h1>
          <p className="rise-in mt-6 max-w-[52ch] text-pretty text-lg text-muted-foreground [animation-delay:200ms]">
            Twelve tables, one candle each. Morning seatings are walk-in friendly; evenings we ask you to book.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <img
              src={reserveTable}
              alt="Candlelit table set for two at dusk"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover ring-1 ring-border"
            />
            <div className="mt-8 space-y-4">
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <p className="text-sm text-muted-foreground">Morning service</p>
                <span className="font-mono text-sm text-nectar">07:00 — 14:00</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <p className="text-sm text-muted-foreground">Evening service</p>
                <span className="font-mono text-sm text-nectar">17:00 — 22:00</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <p className="text-sm text-muted-foreground">Large parties</p>
                <span className="font-mono text-sm text-nectar">(212) 555-0148</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            {confirmed ? (
              <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
                  Table held
                </p>
                <h2 className="mt-4 font-display text-4xl font-light">Thank you, {confirmed.name}.</h2>
                <p className="mt-4 text-primary-foreground/80">
                  We've pencilled in {confirmed.guests}{" "}
                  {Number(confirmed.guests) === 1 ? "guest" : "guests"} on{" "}
                  <span className="font-mono">{confirmed.date}</span> at{" "}
                  <span className="font-mono">{confirmed.time}</span>. A confirmation is on its way to{" "}
                  {confirmed.email}.
                </p>
                {confirmed.notes ? (
                  <p className="mt-4 text-sm text-primary-foreground/70">Note to the kitchen: {confirmed.notes}</p>
                ) : null}
                <button
                  type="button"
                  onClick={() => {
                    setConfirmed(null);
                    setForm(empty);
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-nectar"
                >
                  Book another table
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-card p-8 ring-1 ring-border"
                noValidate
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Name
                    </span>
                    <input
                      className={fieldClass()}
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Email
                    </span>
                    <input
                      type="email"
                      className={fieldClass()}
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Phone
                    </span>
                    <input
                      type="tel"
                      className={fieldClass()}
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="Optional"
                    />
                  </label>

                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Date
                    </span>
                    <input
                      type="date"
                      className={fieldClass()}
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                    />
                  </label>

                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Time
                    </span>
                    <select
                      className={fieldClass()}
                      value={form.time}
                      onChange={(e) => set("time", e.target.value)}
                    >
                      {times.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Guests
                    </span>
                    <select
                      className={fieldClass()}
                      value={form.guests}
                      onChange={(e) => set("guests", e.target.value)}
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8"].map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Anything we should know
                    </span>
                    <textarea
                      rows={3}
                      className={fieldClass()}
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      placeholder="Allergies, occasions, a quiet corner…"
                    />
                  </label>
                </div>

                {error ? <p className="mt-5 text-sm text-destructive">{error}</p> : null}

                <button
                  type="submit"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:bg-nectar"
                >
                  Confirm reservation{" "}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
