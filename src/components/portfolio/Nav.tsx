import resumeAsset from "@/assets/resume.asset.json";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Track Record", href: "#record" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
] as const;

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass-strong flex max-w-full items-center gap-1 overflow-x-auto rounded-full py-2 pr-2 pl-4">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight whitespace-nowrap text-foreground"
        >
          TS<span className="text-primary">.</span>
        </a>
        <span className="mx-2 hidden h-4 w-px bg-border sm:block" aria-hidden />
        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={resumeAsset.url}
          target="_blank"
          rel="noreferrer"
          className="ml-1 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Résumé
        </a>
        <a href={`mailto:${profile.email}`} className="sr-only">
          Email {profile.name}
        </a>
      </nav>
    </header>
  );
}