import { useEffect } from "react";
import gsap from "gsap";
import { PortfolioScene } from "@/components/three/PortfolioScene";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { TrackRecord } from "./TrackRecord";
import { Vision } from "./Vision";
import { Contact } from "./Contact";
import { useReveal } from "@/hooks/use-reveal";
import { attachPointer, attachScroll } from "@/lib/motion-state";

export function Portfolio() {
  useReveal();

  useEffect(() => {
    const detachPointer = attachPointer();
    const detachScroll = attachScroll();

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-anim]", {
        y: 36,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.25,
      });
    });

    return () => {
      detachPointer();
      detachScroll();
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative">
      {/* 3D core — fixed backdrop, reacts to cursor and scroll */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <PortfolioScene />
      </div>

      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TrackRecord />
        <Vision />
        <Contact />
      </main>
    </div>
  );
}
