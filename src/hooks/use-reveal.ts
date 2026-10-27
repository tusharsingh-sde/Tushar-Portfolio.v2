import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Reveals every [data-reveal] element as it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: Number(el.dataset["revealDelay"] ?? 0),
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    });
    return () => ctx.revert();
  }, []);
}
