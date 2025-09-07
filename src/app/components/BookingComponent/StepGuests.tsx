"use client";

interface StepGuestsProps {
  adultCount: number;
  onChangeAdult: (n: number) => void;
  child0to2: number;
  onChangeChild0to2: (n: number) => void;
  child3to9: number;
  onChangeChild3to9: (n: number) => void;
  child10to17: number;
  onChangeChild10to17: (n: number) => void;
  onNext: () => void;
}

function Counter({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="mb-8">
      <div className="mb-2 font-serif text-[20px]">{label}</div>
      <div className="inline-flex items-center rounded border border-border bg-white/70 text-[14px]">
        <button
          onClick={() => onChange(Math.max(0, value - 1))}
          className="grid h-10 w-10 place-items-center border-r border-border hover:bg-black/5"
          aria-label="decrement"
        >
          −
        </button>
        <div className="px-6 py-2 min-w-10 text-center tabular-nums">
          {String(value).padStart(2, "0")}
        </div>
        <button
          onClick={() => onChange(Math.min(99, value + 1))}
          className="grid h-10 w-10 place-items-center border-l border-border hover:bg-black/5"
          aria-label="increment"
        >
          +
        </button>
      </div>
      {hint && <div className="mt-2 text-[10px] text-muted">{hint}</div>}
    </div>
  );
}

export default function StepGuests(props: StepGuestsProps) {
  return (
    <div>
      <h2 className="sr-only">Guests</h2>
      <Counter
        label="Adults (18+)"
        value={props.adultCount}
        onChange={props.onChangeAdult}
      />
      <div className="font-serif text-[20px] mb-3">Children</div>
      <div className="flex flex-wrap gap-4">
        <div>
          <Counter
            label="Age 0 - 2"
            hint="Age 0 - 2"
            value={props.child0to2}
            onChange={props.onChangeChild0to2}
          />
        </div>
        <div>
          <Counter
            label="Age 3 - 9"
            hint="Age 3 - 9"
            value={props.child3to9}
            onChange={props.onChangeChild3to9}
          />
        </div>
        <div>
          <Counter
            label="Age 10 - 17"
            hint="Age 10 - 17"
            value={props.child10to17}
            onChange={props.onChangeChild10to17}
          />
        </div>
      </div>
      <button
        disabled={props.adultCount < 1}
        onClick={() => {
          if (props.adultCount >= 1) props.onNext();
        }}
        className={
          "mt-6 inline-flex items-center px-5 py-2 text-[14px] font-medium text-white bg-black hover:bg-black/90 " +
          (props.adultCount < 1
            ? "opacity-50 cursor-not-allowed hover:bg-black"
            : "")
        }
      >
        Next : Pick Interests
      </button>
    </div>
  );
}
