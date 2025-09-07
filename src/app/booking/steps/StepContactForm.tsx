"use client";
import countries from "@/app/constants/countries";

interface StepContactFormProps {
  onNext: () => void;
}

export default function StepContactForm(props: StepContactFormProps) {
  return (
    <form
      className="flex flex-col gap-4 max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        props.onNext();
      }}
    >
      <div className="grid grid-cols-3 gap-3">
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

      <div className="grid grid-cols-3 gap-3">
        <input
          type="email"
          className="col-span-2 rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
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

        <select className="rounded border border-border bg-white/70 px-3 py-2 text-[14px]">
          <option>I am a...</option>
          <option>Solo Traveler</option>
          <option>Couple</option>
          <option>Family</option>
          <option>Group</option>
        </select>
      </div>

      <textarea
        className="mt-1 h-28 rounded border border-border bg-white/70 px-3 py-2 text-[14px]"
        placeholder="Share any additional information concerning your booking?"
      />

      <label className="flex items-start gap-3 text-[12px]">
        <input
          type="checkbox"
          defaultChecked
          className="mt-1 h-4 w-4 accent-black border border-border"
        />
        <span>
          I consent to my submitted data being collected and managed as per
          Privacy Policy.
        </span>
      </label>
      <label className="flex items-start gap-3 text-[12px]">
        <input
          type="checkbox"
          defaultChecked
          className="mt-1 h-4 w-4 accent-black border border-border"
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
