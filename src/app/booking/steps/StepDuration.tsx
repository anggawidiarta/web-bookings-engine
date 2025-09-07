"use client";
import { useState } from "react";

interface StepDurationProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export default function StepDuration(props: StepDurationProps) {
  const [open, setOpen] = useState(false);
  const options = ["7 Days", "10 Days", "14 Days"];

  return (
    <div className="flex flex-col gap-6">
      <div className="font-serif text-[20px]">Please select Your Itinerary</div>

      <div className="relative w-64">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full inline-flex items-center justify-between rounded border border-border bg-white/70 px-4 py-2 text-[14px] text-foreground shadow-sm hover:bg-white"
        >
          <span className="text-left truncate">{props.value}</span>
          <span className="ml-3 text-muted">▾</span>
        </button>
        {open && (
          <div className="absolute z-20 mt-2 w-full bg-white rounded border shadow-lg border-border">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  props.onChange(opt);
                  setOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-[14px] hover:bg-black/5"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={props.onNext}
        className="inline-flex w-fit items-center px-5 py-2 text-[14px] font-medium text-white bg-black hover:bg-black/90"
      >
        Next : Select Dates
      </button>
    </div>
  );
}
