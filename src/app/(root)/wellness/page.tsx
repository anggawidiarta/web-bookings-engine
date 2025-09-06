"use client";

import Link from "next/link";
import Divider from "@/app/components/Divider";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Wellness() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ourPillars = [
    {
      title: "Spa Treatments",
      desc: "Lorem ipsum dolor sit amet, consectur adipiscing elit. Sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. View sample",
    },
    {
      title: "Mindfullness & Movement",
      desc: "Open-air pavilions in each location provide serene spaces for pilates. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    },
    {
      title: "Starlit dunes dinner in Sharqiyah",
      desc: "An intimate table set among the sands, with a sky of a thousand stars and traditional music.",
    },
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
            Wellness At The Malkai
          </h1>
          <h1 className="max-w-5xl font-serif text-6xl leading-tight">
            Ancient traditions meet modern ritual
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="flex absolute inset-x-0 bottom-6 justify-center pointer-events-none">
          <div className="w-px h-8 bg-white/70" />
        </div>
      </section>

      {/* Location Section */}
      <section
        id="journey"
        className="border-t border-[--color-border] bg-background"
      >
        <div className="flex flex-col gap-10 px-20 py-14 mx-auto md:py-20">
          {/* Intro heading and description */}
          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl place-self-center">
            At The Malkai, wellness is woven into the very fabric of your
            journey. It is a way of life, seamlessly integrated into the rythms
            of your stay and drawing deep inspiration from Oman&apos;s ancient
            healing and beauty traditions.
          </h2>

          <Divider />

          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden -ml-24 border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">
                Integrated Wellness
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-[16px] leading-relaxed">
                <p>
                  Our approach is holistic, grounded in five core pillars Spa,
                  Fitness, Mindfulnes, Sleep, and Nutrition. Every element is
                  designed to be customized to your lifestyle, offering moments
                  of restoration and connection throughout your exploration of
                  Oman.
                </p>
              </div>
            </div>
          </div>

          <Divider />

          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="text-right">
              <h3 className="font-serif text-xl md:text-2xl">
                Restorative rituals
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-[16px] leading-relaxed">
                <p>
                  We offer a range of signature spa therapies, organic
                  treatments, and Omani healing traditions, many of which can be
                  arranged in the quiet privacy of your Pavilion. These
                  practices incorporate local Omani ingredients, such as rose
                  water, incense, and frankicense, honouring age-old traditions
                  of well-being.
                </p>
              </div>
            </div>
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
          </div>

          <Divider />

          <div className="mt-16">
            <h2 className="font-serif text-2xl md:text-[28px]">Our pillars</h2>

            <div className="relative mt-6 -mr-20">
              <Swiper
                modules={[Navigation, A11y]}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                navigation={{
                  nextEl: ".pd-next",
                  prevEl: ".pd-prev",
                }}
                className="bg-[#efefef] h-[420px] md:h-[540px]"
              >
                {ourPillars.map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="w-full h-full" />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom nav buttons */}
              <div className="flex absolute bottom-4 left-4 z-10 gap-2">
                <button
                  aria-label="Previous"
                  className="pd-prev grid place-items-center w-9 h-9 bg-white/95 border border-[--color-border] hover:bg-white"
                >
                  <span className="-mt-0.5">‹</span>
                </button>
                <button
                  aria-label="Next"
                  className="pd-next grid place-items-center w-9 h-9 bg-white/95 border border-[--color-border] hover:bg-white"
                >
                  <span className="-mt-0.5">›</span>
                </button>
              </div>
            </div>

            {/* Captions below - current and next */}
            <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2">
              <div>
                <h3 className="font-serif text-2xl">
                  {ourPillars[activeIndex]?.title}
                </h3>
                <p className="mt-3 text-[--color-muted] text-sm leading-relaxed max-w-xl">
                  {ourPillars[activeIndex]?.desc}
                </p>
                <div className="mt-6 h-[2px] bg-[--color-border] relative max-w-[260px]">
                  <div
                    className="absolute top-0 left-0 h-full bg-black"
                    style={{
                      width: `${
                        ((activeIndex + 1) / ourPillars.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl">
                  {ourPillars[(activeIndex + 1) % ourPillars.length]?.title}
                </h3>
                <p className="mt-3 text-[--color-muted] text-sm leading-relaxed max-w-xl">
                  {ourPillars[(activeIndex + 1) % ourPillars.length]?.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden -ml-24 border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">
                Facilities for Wellbeing
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-[16px] leading-relaxed">
                <p>
                  Each Malkai location offers facilities to support your
                  physical well-being. Guests have access to given gym
                  facilities and running trails, allowing for invigorating
                  activity amidst breathtaking natural surroundings.
                </p>
              </div>
            </div>
          </div>

          <Divider />

          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="space-y-6 text-left">
              <h2 className="font-serif text-6xl font-semibold md:text-[28px]">
                Immersive pools
              </h2>
              <h3 className="font-serif text-2xl md:text-[28px]">
                Our swimming pools invite moments of cool respite and tranquil
                contemplation
              </h3>
              <ul className="divide-y divide-[--color-border]">
                <li className="py-5">
                  <div className="flex gap-4">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-foreground/60" />
                    <p className="text-[--color-muted] text-sm md:text-base leading-relaxed">
                      At The Malkai, Barkaa, a 50 metre infinity swimming pool
                      offers an expansive horizon fringed with date palms.
                    </p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex gap-4">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-foreground/60" />
                    <p className="text-[--color-muted] text-sm md:text-base leading-relaxed">
                      The Malkai, Hajar features a 30 metre infinity pool with
                      sweeping mountain views, perched dramatically on the cliff
                      edge.
                    </p>
                  </div>
                </li>
                <li className="py-5">
                  <div className="flex gap-4">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-foreground/60" />
                    <p className="text-[--color-muted] text-sm md:text-base leading-relaxed">
                      In the desert serenity of The Malkai, Sharqiyah, discover
                      a square, 25 metre shaded experience pool
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
          </div>

          <Divider />

          <div className="flex flex-col gap-12">
            {/* Row 1: wide + portrait */}
            <div className="grid grid-cols-1">
              <figure>
                <div className="overflow-hidden border h-[340px] w-full border-[--color-border] bg-[#efefef] md:h-[420px]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  Sand-dune sunrise yoga at Sharqiyah.
                </figcaption>
              </figure>
            </div>

            {/* Row 2: square + wide */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <figure>
                <div className="overflow-hidden border aspect-square md:aspect-auto md:h-[420px] w-full border-[--color-border] bg-[#efefef]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  Mountain-air meditation in Al Hajar.
                </figcaption>
              </figure>

              <figure>
                <div className="overflow-hidden border aspect-[16/9] md:aspect-auto md:h-[420px] w-full border-[--color-border] bg-[#efefef]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  Orchard juice bars in Barkaa.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Enrichment cards */}
          <div className="mt-20">
            <div className="grid grid-cols-1 mt-10 md:grid-cols-3">
              <div className="flex gap-8 flex-col justify-between border border-[--color-border] p-8 md:p-10 bg-background">
                <h3 className="font-serif text-2xl">Wellness at The Malkai</h3>
                <p>
                  Ancient rituals. Open-air sanctuaries. A philosophy of
                  stillness and renewal.
                </p>
                <div>
                  <Link
                    href="#wellness"
                    className="inline-block underline underline-offset-8 font-sans text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground"
                  >
                    Learn more
                  </Link>
                  <div className="mt-2 h-[1px] w-24 bg-[--color-border]" />
                </div>
              </div>

              <div className="flex gap-8 flex-col justify-between border-x-0 border-y border-[--color-border] p-8 md:p-10 bg-background">
                <h3 className="font-serif text-2xl">Adventures Across Oman</h3>
                <p className="P">
                  Private islands, desert safaris, canyon hikes-tailored to you.
                </p>
                <div>
                  <Link
                    href="#dining"
                    className="inline-block underline underline-offset-8 font-sans text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground"
                  >
                    Learn more
                  </Link>
                  <div className="mt-2 h-[1px] w-24 bg-[--color-border]" />
                </div>
              </div>

              <div className="flex gap-8 flex-col justify-between border border-[--color-border] p-8 md:p-10 bg-background">
                <h3 className="font-serif text-2xl">The Malkai Locations</h3>
                <p className="">
                  Farmlands. Mountains. Desert. Your Malkai journey,
                  breathtaking at every turn.
                </p>
                <div>
                  <Link
                    href="#adventures"
                    className="inline-block underline underline-offset-8 font-sans text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground"
                  >
                    Learn more
                  </Link>
                  <div className="mt-2 h-[1px] w-24 bg-[--color-border]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
