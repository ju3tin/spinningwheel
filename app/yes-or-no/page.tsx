"use client";

import { useState } from "react";
import { CanvasWheel } from "@/components/wheel/canvas-wheel";
import { WheelControls } from "@/components/wheel/wheel-controls";
import { WinnerDialog } from "@/components/wheel/winner-dialog";
import { triggerConfetti } from "@/lib/confetti";

export default function YesOrNoPage() {
  const [items, setItems] = useState<string[]>(["Yes", "No", "Yes", "No"]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-black text-white">Yes or No Wheel</h1>
        <p className="mt-2 text-sm text-slate-400">
          Stuck on a 50/50 decision? Let the wheel choose Yes or No for you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex justify-center rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
          <CanvasWheel
            items={items}
            colors={["#10b981", "#ef4444", "#10b981", "#ef4444"]}
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
