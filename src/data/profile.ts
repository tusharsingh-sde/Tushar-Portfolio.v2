export const profile = {
  name: "Tushar Singh",
  role: "AI/ML & Backend Engineer",
  tagline:
    "I build AI-powered backends and computer-vision systems that actually make it past the local server.",
  email: "tusharsingh.sde@gmail.com",
  phone: "+91 7017610565",
  linkedin: "https://www.linkedin.com/in/tushar-singh-5037273b4",
  github: "https://github.com/tusharsingh-sde",
  location: "Meerut, UP · Greater Delhi Area, India",
} as const;

export const heroStats = [
  { value: "7+", label: "National hackathon finals" },
  { value: "8", label: "Production-built projects" },
  { value: "2028", label: "B.Tech CSE · MIET, AKTU" },
] as const;

export const aboutFacts = [
  { k: "Institution", v: "MIET, Meerut (AKTU)" },
  { k: "Standing", v: "3rd year · CGPA 7.63 / 10" },
  { k: "Currently building", v: "SignBridge AI" },
  { k: "Deep-diving", v: "Agentic AI · LangGraph · Go" },
  { k: "Crew", v: "The Syntax Squad" },
] as const;

export const skillGroups = [
  {
    title: "AI / ML & Computer Vision",
    skills: [
      "PyTorch",
      "YOLOv8 / v11",
      "ByteTrack",
      "OpenCV",
      "MediaPipe",
      "RemoteCLIP",
      "U-Net",
      "LangChain",
      "RAG",
      "FAISS",
      "ChromaDB",
      "HuggingFace",
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "WebSockets",
      "REST",
      "Java",
      "C",
      "Pydantic",
      "Go (exploring)",
    ],
  },
  {
    title: "Data & Infrastructure",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Docker",
      "Docker Compose",
      "Azure VM",
      "Nginx",
      "Caddy",
      "AWS Bedrock",
    ],
  },
  {
    title: "Web & 3D",
    skills: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Three.js",
      "Tailwind CSS",
      "Leaflet",
      "Vite",
    ],
  },
] as const;

export const marqueeTech = [
  "Python",
  "FastAPI",
  "PyTorch",
  "YOLO",
  "LangChain",
  "FAISS",
  "Docker",
  "React",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Azure",
  "OpenCV",
  "MediaPipe",
  "ChromaDB",
  "Gemini",
  "WebSockets",
  "Three.js",
] as const;

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  award?: string;
  role?: string;
  repo?: string;
  featured?: boolean;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    name: "Antriksha Search Engine",
    subtitle: "Cross-modal satellite image retrieval",
    description:
      "Searches 16,000+ SAR & Optical satellite scenes across modalities using RemoteCLIP ViT-B/32 embeddings and a bifurcated FAISS routing layer — exact L2 retrieval over 32,000+ vectors in ~0.04s.",
    stack: ["RemoteCLIP", "FAISS", "PyTorch", "Python"],
    award: "ISRO BAH 2026 · Grand Finale Qualified",
    role: "Lead ML Architect",
    repo: "https://github.com/tusharsingh-sde/ASE-Antrikhsa-Search-Engine",
    featured: true,
  },
  {
    name: "RoadGuard AI",
    subtitle: "Pothole detection & repair-cost estimation",
    description:
      "Real-time pothole detection with YOLOv11 + ByteTrack tracking, physical dimension and repair-cost estimation, live satellite mapping, and automated PDF audit reports — Dockerized on an Azure VM behind Caddy.",
    stack: ["YOLOv11", "FastAPI", "ByteTrack", "Next.js", "Docker"],
    award: "Smart India Hackathon 2026 · Grand Finalist",
    role: "Full-Stack & AI Lead",
    repo: "https://github.com/tusharsingh-sde/RoadGuardAI",
    featured: true,
  },
  {
    name: "JurixAI",
    subtitle: "RAG-based Indian legal assistant",
    description:
      "Empathetic, law-grounded guidance in English, Hindi and Hinglish — Groq Llama-3.3-70B with Gemini fallback, ChromaDB retrieval across 8 legal corpora, and OCR-powered document risk scanning.",
    stack: ["LangChain", "ChromaDB", "Groq", "Gemini", "FastAPI"],
    role: "Creator",
    repo: "https://github.com/tusharsingh-sde/JurixAI",
  },
  {
    name: "HazardLens",
    subtitle: "Edge AI surveillance command center",
    description:
      "Zero-cloud hazard detection: dual YOLOv8 engines for fire/smoke and crowd density at 25+ FPS, with offline Hindi neural voice alerts via Edge-TTS and an alert-arbiting FSM.",
    stack: ["YOLOv8", "OpenCV", "Edge-TTS", "Streamlit"],
    award: "Microsoft Build With Bharat 1.0 · Finalist",
    role: "Edge AI Lead",
    repo: "https://github.com/tusharsingh-sde/HazardLens",
  },
  {
    name: "CloudMask AI",
    subtitle: "Satellite cloud segmentation + 3D WebGL",
    description:
      "Custom 4-band U-Net segmenting clouds in Landsat 8 multispectral imagery with mixed-precision training — served over FastAPI into a Three.js 3D orbital Earth visualizer.",
    stack: ["PyTorch", "U-Net", "FastAPI", "Three.js"],
    role: "Creator",
    repo: "https://github.com/tusharsingh-sde/CloudMask-AI",
  },
  {
    name: "SignBridge AI",
    subtitle: "Real-time sign language translation",
    description:
      "Live two-way video calls translated in real time — MediaPipe 21-point hand tracking, gesture classification, and Gemini Flash sentence synthesis over ZegoCloud WebRTC.",
    stack: ["MediaPipe", "Gemini", "WebSockets", "WebRTC"],
    role: "Creator",
    repo: "https://github.com/tusharsingh-sde",
    inProgress: true,
  },
  {
    name: "Business Entity Resolution",
    subtitle: "Amazon ML Challenge 2026 pipeline",
    description:
      "Multilingual entity dedup across US, India and France registries — country-partitioned FAISS dense search, hybrid Jaro-Winkler / n-gram re-ranking, and graph-aware clustering.",
    stack: ["FAISS", "PyTorch", "NetworkX", "Pandas"],
    award: "Amazon ML Challenge 2026 · Team Leader",
    role: "ML Pipeline Architect",
  },
  {
    name: "WasteVisor",
    subtitle: "Smart municipal waste monitoring",
    description:
      "Waste classification and overflow monitoring for civic authorities — AWS Bedrock vision models for segregation classes and dispatch optimization for collection fleets.",
    stack: ["AWS Bedrock", "Node.js", "React", "Express"],
    role: "Creator",
  },
];

export const hackathons = [
  { event: "ISRO Bharatiya Antariksh Hackathon 2026", result: "Grand Finale Qualified", role: "Lead ML Architect" },
  { event: "Smart India Hackathon 2026", result: "Grand Finalist", role: "Full-Stack & AI Lead" },
  { event: "Smart India Hackathon 2025", result: "Finalist", role: "Backend Engineer" },
  { event: "Build With Bharat 1.0 · Microsoft", result: "Finalist", role: "Edge AI Lead" },
  { event: "Amazon ML Challenge 2026", result: "Team Leader", role: "ML Pipeline Architect" },
  { event: "HackSynergy", result: "Finalist", role: "Full-Stack Lead" },
  { event: "Bharat Expo 2026", result: "Finalist", role: "System Architect" },
  { event: "LITHOS Hackathon", result: "Finalist", role: "Backend Lead" },
  { event: "DevGathering", result: "Finalist", role: "ML Engineer" },
] as const;

export const visionPhases = [
  {
    phase: "Now → 12 months",
    title: "Agentic depth",
    points: [
      "LangGraph, CrewAI & multi-agent orchestration",
      "LoRA / QLoRA fine-tuning on open weights",
      "Low-latency services in Go · Kafka & Redis",
      "AI/ML or backend internship",
    ],
  },
  {
    phase: "1 → 3 years",
    title: "Production impact",
    points: [
      "Graduate MIET with distinction (2028)",
      "High-impact open-source contributions",
      "Full-time AI/ML or backend SDE role",
      "Scale hackathon MVPs into civic pilots",
    ],
  },
  {
    phase: "3 → 5+ years",
    title: "Systems architecture",
    points: [
      "Principal AI / systems architect",
      "Spatial & multimodal AI for infrastructure",
      "Founding-engineer or deep-tech venture",
    ],
  },
] as const;

export const focusAreas = [
  "Agentic AI",
  "LangGraph",
  "LoRA / QLoRA",
  "Go microservices",
  "TensorRT & ONNX",
  "MCP",
  "SAR/Optical fusion",
] as const;
