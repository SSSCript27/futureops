
import { site } from "@/lib/site";

export const dynamic = "error";

export default function About() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>About</h1>
      <p>
        I’m {site.author.name}. This site is a public engineering notebook: incident learnings,
        automation patterns, architecture notes, and DevOps/SRE practices I’ve applied in production.
      </p>

      <h2>What you’ll find here</h2>
      <ul>
        <li>Reliability engineering and incident retrospectives</li>
        <li>Platform engineering, Kubernetes, CI/CD, observability</li>
        <li>Security, performance, and cost optimization</li>
        <li>Practical runbooks and reusable templates</li>
      </ul>
    </div>
  );
}
