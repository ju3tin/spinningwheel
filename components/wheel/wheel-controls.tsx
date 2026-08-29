"use client";

import { Shuffle, SortAsc, Volume2, VolumeX } from "lucide-react";

interface WheelControlsProps {
  items: string[];
  onChange: (newItems: string[]) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export function WheelControls({
  items,
  onChange,
  soundEnabled,
  onToggleSound,
}: WheelControlsProps) {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = e.target.value.split("\n").filter((l) => l.trim() !== "");
    onChange(lines);
  };

  const shuffle = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    onChange(shuffled);
  };

  const sort = () => {
    const sorted = [...items].sort((a, b) => a.localeCompare(b));
    onChange(sorted);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Wheel Segments ({items.length})
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            onClick={shuffle}
            title="Shuffle Items"
            className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <Shuffle className="size-3.5" />
            <span>Shuffle</span>
          </button>
          <button
            onClick={sort}
            title="Sort Alphabetically"
            className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <SortAsc className="size-3.5" />
            <span>Sort</span>
          </button>
        </div>
      </div>

      <textarea
        value={items.join("\n")}
        onChange={handleTextChange}
        rows={7}
        placeholder="Type items here (one per line)..."
        className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-sm text-slate-200 placeholder-slate-600 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 font-mono leading-relaxed resize-none"
      />

      <div className="flex items-center justify-between border-t border-slate-800/80 pt-3">
        <span className="text-xs font-medium text-slate-400">Sound Effects</span>
        <button
          onClick={onToggleSound}
          className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white"
        >
          {soundEnabled ? <Volume2 className="size-4 text-brand-400" /> : <VolumeX className="size-4 text-slate-500" />}
          <span>{soundEnabled ? "Audio On" : "Muted"}</span>
        </button>
      </div>
    </div>
  );
}
