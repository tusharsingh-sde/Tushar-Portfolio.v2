# Project Guidelines & Architecture

## Overview
This repository contains the personal engineering portfolio for **Tushar Singh**, an AI/ML and Backend Engineer.

## Tech Stack
- **Framework**: TanStack Start + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Obsidian & Solar theme design tokens
- **3D Canvas**: Three.js + React Three Fiber + Drei (Interactive orbital core)
- **Animations**: GSAP + ScrollTrigger for scroll-based reveals
- **Icons**: Lucide React
- **Component Primitives**: Radix UI

## Codebase Structure
- `src/components/portfolio/`: Main portfolio sections (Hero, About, Skills, Projects, TrackRecord, Vision, Contact, Nav)
- `src/components/three/`: Three.js 3D backdrop scene (`PortfolioScene.tsx`)
- `src/data/profile.ts`: Core data source for bio, stats, hackathons, projects, and skills
- `src/styles.css`: Tailwind v4 theme configuration, liquid glass surfaces, and radiant glow text utilities
- `src/routes/`: TanStack Router file-based route definitions
