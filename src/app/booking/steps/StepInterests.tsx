"use client";

interface StepInterestsProps {
  selected: string[];
  onToggle: (name: string) => void;
  onNext: () => void;
}

const DEFAULT_OPTIONS: string[] = [
  "Outdoor Pursuits",
  "Festival Celebrations & Events",
  "Nature Conservation",
  "Health & Wellness",
  "Solo Travel",
  "Group / Family Travel",
  "Local Culture",
  "Spirituality",
  "Romance",
];

export default function StepInterests(props: StepInterestsProps) {
  const options = DEFAULT_OPTIONS;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {options.map((opt) => {
          const checked = props.selected.includes(opt);
          return (
            <label
              key={opt}
              className="flex items-center gap-3 text-[14px] cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => props.onToggle(opt)}
                className="w-4 h-4 border accent-black border-border"
              />
              <span>{opt}</span>
            </label>
          );
        })}
      </div>

      <button
        onClick={props.onNext}
        className="w-fit inline-flex items-center px-5 py-2 text-[14px] font-medium text-white bg-black hover:bg-black/90"
      >
        Next : Your Details
      </button>
    </div>
  );
}
