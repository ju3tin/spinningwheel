"use client";

import { useState } from "react";
import { CanvasWheel } from "@/components/wheel/canvas-wheel";
import { WheelControls } from "@/components/wheel/wheel-controls";
import { WinnerDialog } from "@/components/wheel/winner-dialog";
import { triggerConfetti } from "@/lib/confetti";

export default function WhatToEatPage() {
  const [items, setItems] = useState<string[]>([
    "Pizza 🍕", "Burger 🍔", "Sushi 🍣", "Tacos 🌮", "Pasta 🍝", "Salad 🥗", "Noodles 🍜", "Steak 🥩"
  ]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-black text-white">What to Eat Wheel</h1>
        <p className="mt-2 text-sm text-slate-400">
          Can't decide on dinner or lunch? Spin the food roulette!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex justify-center rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
          <CanvasWheel
            items={items}
            soundEnabled={soundEnabled}
            onSpinEnd={(res) => { setWinner(res.text); triggerConfetti(); }}
          />
        </div>
        <div className="lg:col-span-5">
          <WheelControls
            items={items}
            onChange={setItems}
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled(!soundEnabled)}
          />
        </div>
      </div>
      <WinnerDialog winner={winner} onClose={() => setWinner(null)} />
    </div>
  );
}
