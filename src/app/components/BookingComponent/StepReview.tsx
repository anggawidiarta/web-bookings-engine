"use client";
import type { ReactNode } from "react";

type ReviewRowProps = {
  label: string;
  left?: ReactNode;
  right?: ReactNode;
};

function ReviewRow({ label, left, right }: ReviewRowProps) {
  return (
    <div>
      <div className="grid grid-cols-[45px_1fr_1fr] items-baseline gap-4 py-3">
        <div className="text-muted text-[12px]">{label}</div>
        <div className="text-[14px] leading-6">{left}</div>
        {right !== undefined && (
          <div className="text-[14px] leading-6">{right}</div>
        )}
      </div>
      <div className="border-t border-border" />
    </div>
  );
}

export default function StepReview() {
  return (
    <div className="max-w-2xl">
      <h2 className="sr-only">Review Details</h2>

      {/* Name */}
      <ReviewRow label="Name:" left={<span>Mr. John Doe</span>} />

      {/* Email / Phone */}
      <div>
        <div className="grid grid-cols-[45px_1fr_1fr] items-baseline gap-4 py-3">
          <div className="text-muted text-[12px]">Email:</div>
          <div className="text-[14px] leading-6">john.doe@email.com</div>
          <div className="text-[14px] leading-6">
            <span className="mr-4 text-muted">Phone:</span>
            +44 123 1235
          </div>
        </div>
        <div className="border-t border-border" />
      </div>

      {/* Country */}
      <ReviewRow label="Country:" left={<span>United Kingdom</span>} />

      {/* Travel Partner Details */}
      <div className="py-3">
        <div className="text-[12px] text-muted mb-3">
          Travel Partner Details
        </div>
        <div className="grid grid-cols-[90px_1fr_1fr] items-baseline gap-4">
          <div className="text-muted text-[12px]">Agent Name:</div>
          <div className="text-[14px] leading-6">Jane</div>
          <div className="text-[14px] leading-6">
            <span className="mr-4 text-muted">Company:</span>
            Booking Inc.
          </div>
        </div>
      </div>
      <div className="border-t border-border" />

      {/* Additional information */}
      <div className="py-3">
        <div className="text-[12px] text-muted mb-1">
          Additional information related to the booking
        </div>
        <div className="text-[14px] leading-6">Late Checkout</div>
      </div>
      <div className="border-t border-border" />

      {/* Consents */}
      <div className="mt-4 space-y-2 text-[12px]">
        <label className="flex gap-3 items-start">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 w-4 h-4 border accent-black border-border"
          />
          <span>
            I consent to my submitted data being collected and managed as per
            Privacy Policy.
          </span>
        </label>
        <label className="flex gap-3 items-start">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 w-4 h-4 border accent-black border-border"
          />
          <span>
            I sign-up to receive news about new openings and inspiration from
            The Malkai
          </span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-6">
        <button className="inline-flex items-center px-4 py-2 text-[14px] bg-black text-white hover:bg-black/90">
          Edit Details
        </button>
        <button className="inline-flex items-center px-4 py-2 text-[14px] border border-border bg-white/80">
          Enquire Now
        </button>
      </div>
    </div>
  );
}
