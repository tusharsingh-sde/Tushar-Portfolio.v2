import { skillGroups, marqueeTech } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            02 — Capabilities
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Full-lifecycle autonomy
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Train the model, wire the API, containerize it, deploy it — and
            build the 3D dashboard that visualizes it.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              data-reveal
              data-reveal-delay={String(i * 0.08)}
              className="glass group rounded-3xl p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite tech marquee */}
      <div data-reveal className="relative mt-16 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-10">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-sm whitespace-nowrap text-muted-foreground"
            >
              {tech} <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
