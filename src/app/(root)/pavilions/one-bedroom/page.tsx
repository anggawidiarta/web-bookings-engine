"use client";
import Divider from "@/app/components/Divider";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function OneBedroom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      caption:
        "Crafted with clean architectural lines and natural materials, the interior features a king bed, a living area with reading nooks, and a spa-style bathroom with twin rain showers, a deep-soaking tub, and a separate dressing space. Yet it is outside where the true spirit of The Malkai is felt—on a private dining deck or shaded terrace that opens onto uninterrupted desert, mountain, or orchard views, inviting quiet moments of reflection beneath vast skies.",
    },
    {
      caption:
        "Generous indoor-outdoor living encourages unhurried days. Wake to first light warming the horizon, then ease into evenings under starlit skies—an atmosphere designed for stillness and connection.",
    },
    {
      caption:
        "Thoughtful amenities and tactile materials create a sanctuary for rest and renewal, while panoramic views ground every moment in the surrounding landscape.",
    },
  ];
  const amenitiesLeft = [
    "Expansive views",
    "Private sky terrace with large day bed",
    "King-size bed",
    "Bathroom with twin rain showers, soaking tub",
    "Wi‑Fi, TV, sound system, safe",
  ];
  const amenitiesRight = [
    "Sun deck with four sun loungers, built‑in lounge seating, dining area",
    "Private courtyard entrance and breezeway",
    "Living area with reading chairs, writing desk",
    "Twin vanities, dressing areas, separate toilet",
    "Air‑conditioning, underfloor heating",
  ];
  const journeyIncludesLeft = [
    "Personalised itinerary planning service",
    "All in‑house meals",
    "Selected House labels of fine wines and spirits, coffee, tea and soft drinks",
    "Laundry services",
    "Access to cultural sites",
  ];
  const journeyIncludesRight = [
    "Personal Airport Welcome and Departure Services",
    "Daily excursions with an English‑speaking guide, driver and private Land Rover Defender",
    "In‑house beverages, including house wines and spirits",
    "Picnics en route to other Malkai sites",
    "Personalised itinerary planning service",
  ];

  return (
    <main>
      {/* Full-bleed Hero */}
      <section className="relative h-[100vh] min-h-[560px]">
        {/* Media placeholder (replace with real image/video) */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/35" />
        </div>

        {/* Centered content */}
        <div className="flex relative z-10 flex-col gap-4 justify-center items-center px-6 h-full text-center text-white">
          <h1 className="max-w-5xl font-sans uppercase text-[16px] font-light leading-tight">
            1-BEDROOM PAVILION
          </h1>
          <h1 className="max-w-5xl font-serif text-6xl leading-tight">
            A serene retreat
          </h1>
          <Link
            href="/pavilions"
            className="inline-block mt-6 text-[12px] tracking-[0.18em] underline underline-offset-8 uppercase"
          >
            BACK TO PAVILIONS
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="flex absolute inset-x-0 bottom-6 justify-center pointer-events-none">
          <div className="w-px h-8 bg-white/70" />
        </div>
      </section>

      <section
        id="one-bedroom"
        className="border-t border-[--color-border] bg-background"
      >
        <div className="flex flex-col gap-10 px-20 py-14 mx-auto md:py-20">
          {/* Intro heading and description */}
          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl place-self-center">
            At 348 square metres (3,472 sq ft), The 1-bedroom Malkai Pavilion is
            a light-filled, expansive sanctuary designed to immerse guests in
            Oman&apos;s raw natural beauty.
          </h2>

          {/* Bedroom slider */}
          <div className="mt-4">
            <div className="relative -mx-20 md:mx-0">
              <Swiper
                modules={[Navigation, A11y]}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                navigation={{ nextEl: ".ob-next", prevEl: ".ob-prev" }}
                className="bg-[#e6e6e6] h-[420px] md:h-[560px]"
              >
                {slides.map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="w-full h-full" />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Nav buttons bottom-left */}
              <div className="flex absolute bottom-6 left-6 z-10 gap-2">
                <button
                  aria-label="Previous"
                  className="ob-prev grid place-items-center w-10 h-8 bg-white/95 border border-[--color-border] hover:bg-white"
                >
                  <span>‹</span>
                </button>
                <button
                  aria-label="Next"
                  className="ob-next grid place-items-center w-10 h-8 bg-white/95 border border-[--color-border] hover:bg-white"
                >
                  <span>›</span>
                </button>
              </div>
            </div>

            {/* Centered caption */}
            <p className="mt-8 text-center text-[--color-muted] text-sm leading-relaxed max-w-4xl mx-auto">
              {slides[activeIndex]?.caption}
            </p>
          </div>

          <Divider />

          {/* Amenities include */}
          <div className="mt-8">
            <h3 className="font-serif text-2xl">Amenities include</h3>
            <div className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2">
              <ul className="border-b divide-y divide-neutral-200 border-neutral-200">
                {amenitiesLeft.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start py-4">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/70" />
                    <p className="text-sm leading-relaxed text-[--color-muted]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <ul className="border-b divide-y divide-neutral-200 border-neutral-200">
                {amenitiesRight.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start py-4">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/70" />
                    <p className="text-sm leading-relaxed text-[--color-muted]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Divider />

          {/* Seven-night journey includes */}
          <div className="mt-2">
            <h3 className="font-serif text-2xl md:text-[28px]">
              A seven-night Malkai journey begins at $2,000 per Pavilion, per
              night and includes
            </h3>
            <div className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2">
              <ul className="border-b divide-y divide-neutral-200 border-neutral-200">
                {journeyIncludesLeft.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start py-4">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/70" />
                    <p className="text-sm leading-relaxed text-[--color-muted]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <ul className="border-b divide-y divide-neutral-200 border-neutral-200">
                {journeyIncludesRight.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start py-4">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/70" />
                    <p className="text-sm leading-relaxed text-[--color-muted]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
