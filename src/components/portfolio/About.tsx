import { profile, aboutFacts } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.3fr]">
        <div data-reveal>
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            01 — About
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Not notebook models.
            <br />
            <span className="text-muted-foreground">Real systems.</span>
          </h2>
        </div>

        <div className="space-y-8">
          <blockquote data-reveal className="glass rounded-3xl p-6 text-lg leading-relaxed">
            “I don’t just train models in notebooks — I build the fast,
            scalable APIs, microservices, and containerized architectures that
            make them usable in the real world.”
          </blockquote>

          <div data-reveal data-reveal-delay="0.1" className="space-y-4 text-muted-foreground">
            <p>
              A 3rd-year B.Tech CSE undergraduate who bridges theoretical
              machine learning and production-grade backend engineering —
              wrapping vision-language models, retrieval systems and CV
              pipelines into hardened, low-latency microservices, REST/WebSocket
              APIs, and Dockerized deployments on cloud VMs.
            </p>
            <p>
              The defining habit: <span className="text-foreground">competitive hackathon building</span>.
              7+ national-level finals — including ISRO’s Bharatiya Antariksh
              Hackathon and Smart India Hackathon — have wired an instinct for
              fast architectural calls, 24–36 hour debug sprints, and leading
              multidisciplinary squads to shipped MVPs.
            </p>
          </div>

          <dl data-reveal data-reveal-delay="0.15" className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {aboutFacts.map((fact) => (
              <div key={fact.k} className="bg-card/60 px-5 py-4">
                <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {fact.k}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{fact.v}</dd>
              </div>
            ))}
            <div className="bg-card/60 px-5 py-4">
              <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Based in
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}