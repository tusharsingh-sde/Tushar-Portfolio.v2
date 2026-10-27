import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  ssr: false, // Three.js canvas must never render on the server
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Tushar Singh — AI/ML & Backend Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Tushar Singh — AI/ML & backend engineer building production-grade computer vision, RAG and distributed systems. 7+ national hackathon finals including ISRO BAH 2026 and Smart India Hackathon.",
      },
      { property: "og:title", content: "Tushar Singh — AI/ML & Backend Engineer" },
      {
        property: "og:description",
        content:
          "Production-grade AI systems: satellite vector search, edge computer vision, RAG assistants and scalable backends.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
