"use client";

import { useState } from "react";
import Link from "next/link";
import { CanvasWheel } from "@/components/wheel/canvas-wheel";
import { WheelControls } from "@/components/wheel/wheel-controls";
import { WinnerDialog } from "@/components/wheel/winner-dialog";
import { triggerConfetti } from "@/lib/confetti";
import { PRESETS } from "@/lib/presets";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HomePage() {
  const [items, setItems] = useState<string[]>([
    "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace"
  ]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleSpinEnd = (result: { index: number; text: string }) => {
    setWinner(result.text);
    triggerConfetti();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold text-brand-400 mb-4">
          <Sparkles className="size-3.5" />
          <span>Next.js 15 &bull; React 19 &bull; Tailwind CSS</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
          Random Wheel of Names
        </h1>
        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
          Spin the wheel for giveaways, classroom picks, party games, and decision making. Fully customizable and ready to deploy.
        </p>
      </div>

      {/* Main Wheel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex justify-center rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 backdrop-blur-sm">
          <CanvasWheel
            items={items}
            soundEnabled={soundEnabled}
            onSpinEnd={handleSpinEnd}
          />
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <WheelControls
            items={items}
            onChange={setItems}
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled(!soundEnabled)}
          />

          {/* Quick Preset Cards */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Explore Preset Pages
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {PRESETS.map((preset) => (
                <Link
                  key={preset.id}
                  href={`/${preset.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950 p-3 hover:border-brand-500/50 hover:bg-slate-900 transition-all"
                >
                  <span className="text-xs font-semibold text-white group-hover:text-brand-400 flex items-center justify-between">
                    {preset.name}
                    <ArrowRight className="size-3 text-slate-500 group-hover:text-brand-400 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {preset.items.length} options
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WinnerDialog winner={winner} onClose={() => setWinner(null)} />
    </div>
  );
}
