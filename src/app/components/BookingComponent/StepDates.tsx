"use client";
import { useMemo, useState } from "react";

interface StepDatesProps {
  selectedDate: Date | null;
  onChangeDate: (date: Date) => void;
  onNext: () => void;
}

export default function StepDates(props: StepDatesProps) {
  const today = useMemo(() => new Date(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearOptions = useMemo(() => {
    const start = today.getFullYear();
    const yrs: number[] = [];
    for (let y = start; y <= start + 5; y++) yrs.push(y);
    return yrs;
  }, [today]);

  function getMonthMatrix(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    const startWeekday = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: Array<{ day: number | null }>[] = [];
    let week: Array<{ day: number | null }> = [];
    for (let i = 0; i < startWeekday; i++) week.push({ day: null });
    for (let d = 1; d <= daysInMonth; d++) {
      week.push({ day: d });
      if (week.length === 7) {
        cells.push(week);
        week = [];
      }
    }
    if (week.length) {
      while (week.length < 7) week.push({ day: null });
      cells.push(week);
    }
    while (cells.length < 5) cells.push(new Array(7).fill({ day: null }));
    return cells;
  }

  const monthMatrix = useMemo(
    () => getMonthMatrix(viewYear, viewMonth),
    [viewYear, viewMonth]
  );
  const monthLabel = useMemo(
    () =>
      new Date(viewYear, viewMonth, 1)
        .toLocaleString(undefined, { month: "long" })
        .toUpperCase(),
    [viewYear, viewMonth]
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="font-serif text-[20px]">
        Please select your arrival date
      </div>

      <div className="inline-block relative">
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="w-64 inline-flex items-center justify-between rounded border border-border bg-white/70 px-4 py-2 text-[14px] text-foreground shadow-sm hover:bg-white"
        >
          <span className="text-left truncate">
            {props.selectedDate
              ? props.selectedDate.toLocaleDateString(undefined, {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
              : "Choose date"}
          </span>
          <span className="ml-3 text-muted">▾</span>
        </button>

        {isOpen && (
          <div className="absolute z-20 mt-2 w-[260px] rounded border border-black/70 bg-white shadow-lg">
            <div className="flex justify-between items-center px-3 py-2 text-white bg-black rounded-t">
              <span className="text-[12px] font-semibold tracking-wide">
                {monthLabel}
              </span>
              <div className="flex items-center gap-2 text-[12px]">
                <button
                  className="px-1 hover:opacity-80"
                  onClick={() => {
                    const m = viewMonth - 1;
                    if (m < 0) {
                      setViewMonth(11);
                      setViewYear((y) => y - 1);
                    } else setViewMonth(m);
                  }}
                >
                  ‹
                </button>
                <select
                  value={viewMonth}
                  onChange={(e) => setViewMonth(parseInt(e.target.value, 10))}
                  className="bg-white text-black text-[12px] px-1 py-0.5 rounded border border-white/20"
                >
                  {monthNames.map((m, i) => (
                    <option key={m} value={i}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  value={viewYear}
                  onChange={(e) => setViewYear(parseInt(e.target.value, 10))}
                  className="bg-white text-black text-[12px] px-1 py-0.5 rounded border border-white/20"
                >
                  {yearOptions.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <button
                  className="px-1 hover:opacity-80"
                  onClick={() => {
                    const m = viewMonth + 1;
                    if (m > 11) {
                      setViewMonth(0);
                      setViewYear((y) => y + 1);
                    } else setViewMonth(m);
                  }}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="px-2 pb-2">
              <div className="grid grid-cols-7 gap-1 py-2 text-center text-[10px] text-foreground/80">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 px-1 pb-2">
                {monthMatrix.map((week, wi) =>
                  week.map((cell, ci) => {
                    const day = cell.day;
                    const isBlank = day == null;
                    const dateObj = !isBlank
                      ? new Date(viewYear, viewMonth, day)
                      : null;
                    const isSelected =
                      !!dateObj &&
                      props.selectedDate?.toDateString() ===
                        dateObj.toDateString();
                    const isPast =
                      !!dateObj &&
                      dateObj <
                        new Date(
                          today.getFullYear(),
                          today.getMonth(),
                          today.getDate()
                        );
                    return (
                      <button
                        key={`${wi}-${ci}`}
                        disabled={isBlank || isPast}
                        onClick={() => {
                          if (!dateObj) return;
                          props.onChangeDate(dateObj);
                          setIsOpen(false);
                        }}
                        className={
                          "h-8 w-8 border text-[12px] " +
                          (isBlank
                            ? "border-transparent"
                            : isPast
                            ? "border-gray-300 text-gray-300 cursor-not-allowed"
                            : isSelected
                            ? "border-black bg-black text-white"
                            : "border-black/70 hover:bg-black/10")
                        }
                      >
                        {day ?? ""}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        disabled={!props.selectedDate}
        onClick={() => {
          if (props.selectedDate) props.onNext();
        }}
        className={
          "w-fit inline-flex items-center px-5 py-2 text-[14px] font-medium text-white bg-black hover:bg-black/90 " +
          (!props.selectedDate
            ? "opacity-50 cursor-not-allowed hover:bg-black"
            : "")
        }
      >
        Next : Add Guests
      </button>
    </div>
  );
}
