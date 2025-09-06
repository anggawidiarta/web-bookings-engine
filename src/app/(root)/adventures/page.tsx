"use client";

import Link from "next/link";
import Divider from "@/app/components/Divider";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Adventures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ourPillars = [
    {
      title: "Adventure and discovery",
      desc: "Embark on thrilling desert safaris across the Sharqiyah Sands, navigate ancient canyons in the Al Hajar mountains, or discover the pristine marine life of the Ad‑Dimaniyat Islands off the Barkaa coast.",
    },
    {
      title: "Cultural immersion",
      desc: "Connect with Oman’s rich heritage and living culture — learn about traditional falaj irrigation systems, explore storied souqs and forts, and engage with local artisans across the regions.",
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
            Adventures At The Malkai
          </h1>
          <h1 className="max-w-5xl font-serif text-6xl leading-tight">
            Discovery beyond every boundary
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="flex absolute inset-x-0 bottom-6 justify-center pointer-events-none">
          <div className="w-px h-8 bg-white/70" />
        </div>
      </section>

      <section
        id="adventures"
        className="border-t border-[--color-border] bg-background"
      >
        <div className="flex flex-col gap-10 px-20 py-14 mx-auto md:py-20">
          {/* Intro heading and description */}
          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl place-self-center">
            From canyon abseils to desert dune-surfing and private island
            cruises, each curated activity is designed to immerse guests in
            Oman&apos;s wild and wondrous terrain.
          </h2>

          <Divider />

          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden -ml-24 border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">
                Curated for you
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-[16px] leading-relaxed">
                <p>
                  Your Malkai journey is enriched by experience that are deeply
                  personal and authentically Omani. We believe in connecting you
                  to the heart of Oman with adventures that resonate with the
                  land&apos;s spirit, unveil the richness of its culture, and
                  contribute to the preservation of its natural beauty. Our
                  guided excursions are crafted far beyond standard sightseeing,
                  offering privileged access and genuine encounters.
                </p>
              </div>
            </div>
          </div>

          <Divider />

          <div className="mt-16">
            <h2 className="font-serif text-2xl md:text-[28px]">
              A journey to enrich and inspire
            </h2>

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
                Adventures, mixed to taste
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-[16px] leading-relaxed">
                <p>
                  Your personal Murshid is dedicated to understanding your
                  interest and crafting an experience itinerary that perfectly
                  complements your journey. From arranging private charter
                  flight for seamless travel between locations to securing
                  exclusive access for unique encounters, every detail is
                  thoughtfully considered to ensure your Malkai experience is
                  extraordinary.
                </p>
              </div>
            </div>
          </div>

          <Divider />

          <div className="mt-12">
            <h2 className="font-serif text-2xl md:text-[28px]">
              Signature experience
            </h2>
            <p className="mt-3 text-[--color-muted] text-sm md:text-base">
              From canyon abseils to desert dune-surfing and private islands
              cruises, each Malkai location will immerse guests in Oman&apos;s
              wild and wondrous terrain.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
              {/* Barkaa */}
              <div className="border border-[--color-border] p-8">
                <h3 className="font-serif text-2xl">Barkaa</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                    <span className="text-sm text-[--color-muted]">
                      Private excursions to the Dimaniyat islands for
                      snorkelling and secluded beach.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                    <span className="text-sm text-[--color-muted]">
                      Guided tours of local date plantations and traditional
                      farms.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                    <span className="text-sm text-[--color-muted]">
                      Explorations of nearby Muscat&apos;s souqs and cultural
                      landmarks.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Hajar */}
              <div className="border border-[--color-border] p-8">
                <h3 className="font-serif text-2xl">Hajar</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                    <span className="text-sm text-[--color-muted]">
                      Guided hikes and treks through dramatic mountains scenery
                      and wadis.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                    <span className="text-sm text-[--color-muted]">
                      Visits to ancient mountain villages and terraced farms.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                    <span className="text-sm text-[--color-muted]">
                      Stargazing opportunities in the clear, rarefied mountain
                      air.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Sharqiyah */}
              <div className="border border-[--color-border] p-8">
                <h3 className="font-serif text-2xl">Sharqiyah</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                    <span className="text-sm text-[--color-muted]">
                      Sunset camel rides across the golden dunes.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                    <span className="text-sm text-[--color-muted]">
                      Thrilling dune bashing and sand-boarding adventures.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                    <span className="text-sm text-[--color-muted]">
                      Authentic Bedouin tent dining experiences under the stars,
                      accompanied by live Omani music.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Divider />

          <div className="flex flex-col gap-12 mt-16">
            {/* Row 1: wide + portrait */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
              <figure>
                <div className="overflow-hidden border h-[340px] w-full border-[--color-border] bg-[#efefef] md:h-[420px]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  A private tour of the Royal Opera House{" "}
                </figcaption>
              </figure>

              <figure>
                <div className="overflow-hidden border h-[340px] w-full border-[--color-border] bg-[#efefef] md:h-[420px]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  Traverse dramatic canyon and high-altitude trails{" "}
                </figcaption>
              </figure>
            </div>

            {/* Row 2: square + wide */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
              <figure>
                <div className="overflow-hidden border aspect-square md:aspect-auto md:h-[420px] w-full border-[--color-border] bg-[#efefef]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  A sunset camel trek across vast, golden dunes
                </figcaption>
              </figure>

              <figure>
                <div className="overflow-hidden border aspect-[16/9] md:aspect-auto md:h-[420px] w-full border-[--color-border] bg-[#efefef]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  All exercusions are guided by your Murshid.{" "}
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Enrichment cards */}
          <div className="">
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
