"use client";

import { Trophy, ExternalLink, RefreshCw } from "lucide-react";

interface WinnerDialogProps {
  winner: string | null;
  onClose: () => void;
}

export function WinnerDialog({ winner, onClose }: WinnerDialogProps) {
  if (!winner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-400 ring-8 ring-brand-500/10">
          <Trophy className="size-7" />
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Winning Result
        </p>

        <h3 className="my-3 text-3xl font-black text-white tracking-tight break-words">
          {winner}
        </h3>

        <p className="mb-6 text-xs text-slate-400">
          Congratulations! Spin again or explore more templates on SpinWheel.to.
        </p>

        <div className="flex flex-col gap-2.5">
          <button
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
          >
            <RefreshCw className="size-4" />
            <span>Spin Again</span>
          </button>

          <a
            href="https://spinwheel.to"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 hover:bg-brand-600 transition-colors"
          >
            <span>Explore 100+ Free Wheels on SpinWheel.to</span>
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
