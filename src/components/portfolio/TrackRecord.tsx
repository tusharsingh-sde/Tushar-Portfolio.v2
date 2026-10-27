import { hackathons } from "@/data/profile";

export function TrackRecord() {
  return (
    <section id="record" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            04 — Track record
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Battle-tested under pressure
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Complete MVPs shipped inside 24–36 hour sprint deadlines, across
            national stages.
          </p>
        </div>

        <div data-reveal className="glass overflow-hidden rounded-3xl">
          <ul className="divide-y divide-border">
            {hackathons.map((row) => (
              <li
                key={row.event}
                className="grid gap-1 px-6 py-5 transition-colors hover:bg-surface-strong sm:grid-cols-[1.6fr_1fr_1fr] sm:items-center sm:gap-4"
              >
                <span className="font-display text-sm font-semibold sm:text-base">
                  {row.event}
                </span>
                <span className="font-mono text-xs text-primary">{row.result}</span>
                <span className="text-xs text-muted-foreground sm:text-sm">{row.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
