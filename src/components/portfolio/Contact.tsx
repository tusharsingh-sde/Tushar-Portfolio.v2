import resumeAsset from "@/assets/resume.asset.json";
import { profile } from "@/data/profile";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "tushar-singh-5037273b4", href: profile.linkedin },
  { label: "GitHub", value: "tusharsingh-sde", href: profile.github },
] as const;

export function Contact() {
  return (
    <section id="contact" className="relative px-6 pt-28 pb-14">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="glass-strong relative overflow-hidden rounded-4xl px-8 py-16 text-center sm:px-16">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            06 — Contact
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Let’s build something real.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to AI/ML and backend internships, hackathon collaborations,
            and interesting problems worth staying up for.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {profile.email}
            </a>
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
            >
              Download résumé ↓
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group bg-card/60 px-5 py-4 text-left transition-colors hover:bg-surface-strong"
              >
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {channel.label}
                </p>
                <p className="mt-1 truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  {channel.value} ↗
                </p>
              </a>
            ))}
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono">{profile.location}</p>
        </footer>
      </div>
    </section>
  );
}