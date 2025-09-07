"use client";
import countries from "@/app/constants/countries";
import { useState } from "react";

interface StepContactFormProps {
  onNext: () => void;
}

export default function StepContactForm(props: StepContactFormProps) {
  const [travelPartner, setTravelPartner] = useState<string>("");
  return (
    <form
      className="flex flex-col gap-4 max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        props.onNext();
      }}
    >
      <div className="grid grid-cols-[110px_1fr_1fr] gap-3">
        <select className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]">
          <option>Title</option>
          <option>Mr</option>
          <option>Mrs</option>
          <option>Ms</option>
          <option>Dr</option>
        </select>
        <input
          className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
          placeholder="First Name"
        />
        <input
          className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
          placeholder="Last Name"
        />
      </div>

      <div className="grid grid-cols-[3fr_1fr] gap-3">
        <input
          type="email"
          className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
          placeholder="Email address"
        />
        <div className="grid grid-cols-[80px_1fr] gap-2">
          <select className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]">
            <option>+44</option>
            <option>+1</option>
            <option>+62</option>
          </select>
          <input
            className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <select className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]">
          <option>Your Country</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>

        <div className="border-t border-border" />

        <select
          value={travelPartner}
          onChange={(e) => setTravelPartner(e.target.value)}
          className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
        >
          <option disabled>I am a...</option>
          <option value="solo-traveler">Solo Traveler</option>
          <option value="couple">Couple</option>
          <option value="family">Family</option>
          <option value="group">Group</option>
          <option value="travel-partner">Travel Partner</option>
        </select>

        {travelPartner === "travel-partner" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <input
                className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
                placeholder="Agent Name"
              />
              <input
                className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
                placeholder="Company"
              />
            </div>
            <div className="border-b border-border" />
          </>
        )}
      </div>

      <textarea
        className="mt-1 h-28 rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
        placeholder="Share any additional information concerning your booking?"
      />

      <label className="flex items-start gap-3 text-[12px]">
        <input
          type="checkbox"
          className="mt-1 w-4 h-4 border accent-black border-border"
        />
        <span>
          I consent to my submitted data being collected and managed as per
          Privacy Policy.
        </span>
      </label>
      <label className="flex items-start gap-3 text-[12px]">
        <input
          type="checkbox"
          className="mt-1 w-4 h-4 border accent-black border-border"
        />
        <span>
          I sign-up to receive news about new openings and inspiration from The
          Malkai
        </span>
      </label>

      <button
        type="submit"
        className="mt-2 w-fit inline-flex items-center px-5 py-2 text-[14px] font-medium text-white bg-black hover:bg-black/90"
      >
        Next : Review Details
      </button>
    </form>
  );
}
