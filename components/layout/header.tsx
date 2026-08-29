"use client";

import Link from "next/link";
import { Sparkles, Github, ExternalLink } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-amber-500 shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="size-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-white tracking-tight">
              SpinWheel <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-400">Next.js</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <Link href="/yes-or-no" className="hover:text-white transition-colors">Yes or No</Link>
          <Link href="/what-to-eat" className="hover:text-white transition-colors">What to Eat</Link>
          <Link href="/random-number" className="hover:text-white transition-colors">Random Numbers</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/spinwheel-to/nextjs-spin-wheel"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all"
          >
            <Github className="size-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://spinwheel.to"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600 transition-all"
          >
            <span>Visit SpinWheel.to</span>
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
