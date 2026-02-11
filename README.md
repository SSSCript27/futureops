# FutureOps 🚀

FutureOps is a DevOps-focused technical publication platform built using **Next.js (static export)** and deployed via **GitHub Pages**.

This repository serves as a public engineering notebook featuring:

- Reliability Engineering practices  
- Kubernetes & Platform Engineering deep dives  
- CI/CD architecture and release safety models  
- Observability strategies and SLO frameworks  
- Cloud cost optimization patterns  
- Incident response and postmortem methodology  

The goal of FutureOps is to document real-world DevOps decision-making, production patterns, and reusable engineering frameworks.

---

## 🌐 Live Site

Once deployed, the site will be available at:

```
https://SSSCript27.github.io/futureops
```

---

## 🏗️ Tech Stack

- **Next.js 14** (Static Export Mode)
- **MDX** for technical articles
- **TailwindCSS** for styling
- **GitHub Actions** for CI/CD
- **GitHub Pages** for hosting

---

## 📂 Project Structure

```
futureops/
│
├── src/
│   ├── app/              # App router pages
│   ├── lib/              # Post utilities & site config
│
├── content/posts/        # MDX blog posts
├── scripts/              # RSS + sitemap generation
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions deploy pipeline
│
├── next.config.mjs
├── package.json
└── README.md
```

---

## ✍️ Writing a New Article

Create a new `.mdx` file inside:

```
content/posts/
```

Example:

```mdx
---
title: "Production-Grade Kubernetes Release Strategy"
date: "2026-02-10"
summary: "A structured model for safe production deployments using SLO gates and rollback automation."
tags: ["kubernetes", "cicd", "reliability-engineering"]
---

## Executive Summary
Describe the production problem, approach, and measurable outcome.

## Context & Constraints
Scale, risk, and operational environment.

## Architecture & Approach
Explain your model and tradeoffs.

## Outcomes
Include measurable improvements (MTTR ↓, latency ↓, cost ↓, etc.)

## Reusable Framework
Checklist, patterns, or configuration snippets.
```

---

## 🚀 Local Development

```bash
npm install
npm run dev
```

Visit:
```
http://localhost:3000/futureops
```

---

## 🛠️ Build & Deploy

Deployment is automated via GitHub Actions.

On push to `main`:
- Site builds
- Static export generated
- Pages deployed automatically

To build manually:

```bash
npm run build
```

---

## 🎯 Purpose

FutureOps is designed to:

- Demonstrate technical leadership
- Document original engineering contributions
- Provide reusable DevOps frameworks
- Build a public portfolio of production-grade knowledge

---

## 📌 Disclaimer

All content published here is generalized and does not include confidential or proprietary information.

---

**Author:** Sumanth Tadikonda  
DevOps / Platform Engineering  
