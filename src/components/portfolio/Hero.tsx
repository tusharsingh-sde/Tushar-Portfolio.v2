import { profile, heroStats } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
    >
      <p data-hero-anim className="chip mb-6">
        AI/ML × Backend Engineering
      </p>

      <h1
        data-hero-anim
        className="glow-text font-display max-w-5xl text-5xl leading-[1.02] font-bold tracking-tight sm:text-7xl md:text-8xl"
      >
        {profile.name}
      </h1>

      <p
        data-hero-anim
        className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        {profile.tagline} — fast, scalable APIs and containerized
        architectures that make them usable in the real world.
      </p>

      <div data-hero-anim className="mt-10 grid grid-cols-3 gap-6 sm:gap-14">
        {heroStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="font-display text-3xl font-bold text-primary sm:text-4xl">
              {stat.value}
            </span>
            <span className="max-w-28 text-[11px] leading-snug text-muted-foreground sm:text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div data-hero-anim className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          View projects
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="glass rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
        >
          GitHub ↗
        </a>
      </div>

      <div
        data-hero-anim
        className="absolute bottom-8 flex flex-col items-center gap-2 text-[11px] tracking-widest text-muted-foreground uppercase"
      >
        Scroll to explore
        <span className="block h-8 w-px animate-pulse bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
