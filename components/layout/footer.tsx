import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-slate-300 font-semibold">
            Open-Source Next.js Spin Wheel Template
          </p>
          <p className="text-xs text-slate-500">
            Released under MIT License. Contributions and PRs welcome!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <Link href="/yes-or-no" className="hover:text-white">Yes/No Wheel</Link>
          <Link href="/what-to-eat" className="hover:text-white">Food Decider</Link>
          <Link href="/random-number" className="hover:text-white">Random Numbers</Link>
          <a
            href="https://spinwheel.to"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-400 hover:underline"
          >
            Powered by SpinWheel.to ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
