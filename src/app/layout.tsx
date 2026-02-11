
import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.description}`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-3xl px-5 py-10">
          <header className="mb-10">
            <a href="/futureops/" className="text-2xl font-bold tracking-tight">
              {site.name}
            </a>
            <p className="mt-2 text-slate-600">{site.description}</p>
            <nav className="mt-5 flex gap-4 text-sm">
              <a className="underline underline-offset-4" href="/futureops/">
                Home
              </a>
              <a className="underline underline-offset-4" href="/futureops/blog/">
                Blog
              </a>
              <a className="underline underline-offset-4" href="/futureops/tags/">
                Tags
              </a>
              <a className="underline underline-offset-4" href="/futureops/about/">
                About
              </a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="mt-16 border-t pt-6 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>© {new Date().getFullYear()} {site.author.name}</span>
              <a className="underline underline-offset-4" href="/futureops/rss.xml">
                RSS
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
