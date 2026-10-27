import { projects, type Project } from "@/data/profile";

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <a
      href={project.repo ?? "#"}
      target="_blank"
      rel="noreferrer"
      data-reveal
      className={`glass group flex flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-7 ${
        large ? "md:col-span-1" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
          {project.subtitle}
        </p>
        {project.inProgress && (
          <span className="chip shrink-0 text-primary">In development</span>
        )}
      </div>

      <h3
        className={`font-display mt-3 font-bold tracking-tight ${
          large ? "text-3xl" : "text-2xl"
        }`}
      >
        {project.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="font-mono text-[11px] text-primary">{project.award ?? project.role}</span>
        <span className="text-sm text-muted-foreground transition-colors group-hover:text-primary">
          Repo ↗
        </span>
      </div>
    </a>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            03 — Selected work
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Systems that shipped
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.name} project={project} large />
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
