import { visionPhases, focusAreas } from "@/data/profile";

export function Vision() {
  return (
    <section id="vision" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            05 — Vision
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Out of the sandbox,
            <br />
            <span className="text-muted-foreground">into the real world.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {visionPhases.map((phase, i) => (
            <div
              key={phase.phase}
              data-reveal
              data-reveal-delay={String(i * 0.1)}
              className="glass flex flex-col rounded-3xl p-7"
            >
              <p className="font-mono text-[11px] tracking-widest text-primary uppercase">
                {phase.phase}
              </p>
              <h3 className="font-display mt-3 text-2xl font-bold">{phase.title}</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {phase.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div data-reveal className="glass mt-10 rounded-3xl p-7">
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Currently focused on
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="chip">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
