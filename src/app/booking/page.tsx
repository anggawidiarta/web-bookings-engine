"use client";
import { useMemo, useState } from "react";
import StepDuration from "@/app/booking/steps/StepDuration";
import StepDates from "@/app/booking/steps/StepDates";
import StepGuests from "@/app/booking/steps/StepGuests";
import StepInterests from "@/app/booking/steps/StepInterests";
import StepContactForm from "@/app/booking/steps/StepContactForm";
import StepReview from "@/app/booking/steps/StepReview";

export default function Booking() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [duration, setDuration] = useState<string>("7 Days");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [adultCount, setAdultCount] = useState<number>(0);
  const [child0to2, setChild0to2] = useState<number>(0);
  const [child3to9, setChild3to9] = useState<number>(0);
  const [child10to17, setChild10to17] = useState<number>(0);
  const [interests, setInterests] = useState<string[]>([]);

  const parsedDurationDays = useMemo(() => {
    const match = duration.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }, [duration]);

  const endDate = useMemo(() => {
    if (!selectedDate || parsedDurationDays <= 0) return null;
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + (parsedDurationDays - 1));
    return d;
  }, [selectedDate, parsedDurationDays]);

  const steps = [
    "Journey Duration",
    "Select Dates",
    "Add # Guests",
    "Pick Interests",
    "Contact Form",
    "Review",
  ];

  return (
    <main className="px-6 pt-28 pb-24 mx-auto max-w-6xl mt-8">
      <nav className="mb-10 flex flex-wrap items-center gap-2 text-[12px] tracking-wide text-muted">
        {steps.map((label, index) => (
          <div key={label} className="flex items-center">
            <span
              className={
                index === currentStep
                  ? "text-foreground font-bold"
                  : "text-muted"
              }
            >
              {label}
            </span>
            {index < steps.length - 1 && <span className="mx-2">•</span>}
          </div>
        ))}
      </nav>

      <div className="flex justify-between items-start mb-8">
        <h1 className="font-serif text-[40px] leading-tight">
          {currentStep === 0
            ? "Select Journey Duration"
            : currentStep === 1
            ? "Select Dates"
            : currentStep === 2
            ? "Add # Guests"
            : currentStep === 3
            ? "Pick Your Interests"
            : currentStep === 4
            ? "Fill Your Details"
            : "Review Your Details"}
        </h1>
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
            className="inline-flex items-center gap-2 rounded bg-black px-3 py-1.5 text-[12px] font-medium text-white hover:bg-black/90"
          >
            <span>‹</span> Back
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <section className="max-w-xl md:col-span-7" id="steps">
          {currentStep === 0 && (
            <StepDuration
              value={duration}
              onChange={setDuration}
              onNext={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 1 && (
            <StepDates
              selectedDate={selectedDate}
              onChangeDate={setSelectedDate}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <StepGuests
              adultCount={adultCount}
              onChangeAdult={setAdultCount}
              child0to2={child0to2}
              onChangeChild0to2={setChild0to2}
              child3to9={child3to9}
              onChangeChild3to9={setChild3to9}
              child10to17={child10to17}
              onChangeChild10to17={setChild10to17}
              onNext={() => setCurrentStep(3)}
            />
          )}

          {currentStep === 3 && (
            <StepInterests
              selected={interests}
              onToggle={(name) =>
                setInterests((arr) =>
                  arr.includes(name)
                    ? arr.filter((n) => n !== name)
                    : [...arr, name]
                )
              }
              onNext={() => setCurrentStep(4)}
            />
          )}

          {currentStep === 4 && (
            <StepContactForm onNext={() => setCurrentStep(5)} />
          )}

          {currentStep === 5 && <StepReview />}
        </section>

        {/* Summary Section */}
        <aside className="md:col-span-5" id="summary">
          <div className="p-6 rounded border shadow-sm border-border bg-white/80">
            <div className="mb-4 font-serif text-[20px]">Summary</div>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-muted">Journey Duration</span>
              <span>{duration}</span>
            </div>
            {currentStep >= 1 && (
              <>
                <div className="my-4 border-t border-border" />
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-muted">Arrival Date</span>
                  <span>
                    {selectedDate
                      ? selectedDate.toLocaleDateString(undefined, {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })
                      : "—"}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[12px]">
                  <span className="text-muted">Departure</span>
                  <span>
                    {endDate
                      ? endDate.toLocaleDateString(undefined, {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })
                      : "—"}
                  </span>
                </div>
              </>
            )}

            {currentStep >= 2 && (
              <>
                <div className="my-4 border-t border-border" />
                <div className="mb-3 font-serif text-[16px]">No. of Guests</div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="mb-2 text-[12px] text-foreground">
                      Adults (18+)
                    </div>
                    <div className="tabular-nums">
                      {String(adultCount).padStart(2, "0")}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-[12px] text-foreground">
                      Children
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-[12px] text-foreground">
                      <div>
                        <div className="text-muted">Age 0 - 2</div>
                        <div className="tabular-nums">
                          {String(child0to2).padStart(2, "0")}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted">Age 3 - 9</div>
                        <div className="tabular-nums">
                          {String(child3to9).padStart(2, "0")}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted">Age 10 - 17</div>
                        <div className="tabular-nums">
                          {String(child10to17).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {currentStep >= 3 && (
              <>
                <div className="my-4 border-t border-border" />
                <div className="mb-3 font-serif text-[16px]">
                  Pick Interests
                </div>
                <div className="text-[12px] leading-relaxed">
                  {interests.length > 0 ? interests.join(", ") : "—"}
                </div>
              </>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
