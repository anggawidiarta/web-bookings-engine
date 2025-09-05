"use client";
// import Link from "next/link";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Dining() {
  const [activeIndex, setActiveIndex] = useState(0);
  const specialties = [
    {
      name: "Baplo",
      desc: "A spiced seafood soup originating from the coastal town of Barkaa",
    },
    {
      name: "Shuwa",
      desc: "Slow‑cooked marinated lamb or goat, often considered the national dish of Oman",
    },
    {
      name: "Khubz Rkhaal",
      desc: "A crispy flatbread",
    },
    {
      name: "Madrouba",
      desc: "A rice porridge with vegetables",
    },
  ];
  const privateDining = [
    {
      title: "Private island lunch at Barkaa",
      desc: "After exploring The Malkai’s private Dimniyat island, delight in a serene lunch on its UNESCO protected beach.",
    },
    {
      title: "Candelit Bedouin tent at Hajar",
      desc: "Enjoy a private barbecue lunch or dinner at the edge of the canyon surrounded by panoramic views.",
    },
    {
      title: "Starlit dunes dinner in Sharqiyah",
      desc: "An intimate table set among the sands, with a sky of a thousand stars and traditional music.",
    },
  ];
  const menusLeft = [
    { label: "Breakfast Menu", href: "#breakfast" },
    { label: "Lunch Menu", href: "#lunch" },
    { label: "Dinner Menu", href: "#dinner" },
  ];
  const menusRight = [
    { label: "Dessert Menu", href: "#dessert" },
    { label: "Children's Menu", href: "#children" },
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
          <h1 className="max-w-5xl font-sans text-[16px] font-light leading-tight">
            DINING AT THE MALKAI
          </h1>
          <h1 className="max-w-5xl font-serif text-6xl leading-tight">
            Flavors of Oman and beyond
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="flex absolute inset-x-0 bottom-6 justify-center pointer-events-none">
          <div className="w-px h-8 bg-white/70" />
        </div>
      </section>

      {/* Dining Section */}
      <section
        id="dining"
        className="border-t border-[--color-border] bg-background"
      >
        <div className="flex flex-col gap-10 px-20 py-14 mx-auto md:py-20">
          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl place-self-center">
            Guided by a farm-to-fork philosophy, dining at The Malkai is a vital
            part of the immersive journey, offering moments of pause and
            discovery
          </h2>

          {/* divider */}
          <div className="flex justify-center mt-8">
            <div className="relative w-28 h-px bg-black">
              <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
            </div>
          </div>

          {/* Two column content: media + copy */}
          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">Farm-to-fork </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-[16px] leading-relaxed">
                <p>
                  The Malkai&apos;s farm-to-fork philosophy is deeply integrated
                  into the landscape design. Our on-site farm provides fresh,
                  seasonal produce for our kitches and our local communities.
                </p>
                <p>
                  Planted with herbs and fruit trees, such as lime, mango, and
                  guava, The Malkai offers year-round sensory rewards.
                  Oppurtunities are available for guests to participate in
                  foraging tours or outdoor cooking, or simply pick fresh
                  produce from fruit trees situated around the pavilions.
                </p>
              </div>
            </div>
          </div>

          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="text-right">
              <h3 className="font-serif text-xl md:text-2xl">
                The dining experience
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-[16px] leading-relaxed">
                <p>
                  Guests are invited to dine in the inviting tented dining
                  pavilion at each Malkai location. These pavilions offer an
                  array of Omani and global delicacies. At the tented dining
                  pavilion, guests will find an open theatre kitchen, adding to
                  the sensory experience. Here, the focus in on freshness,
                  sustainability, and locally sourced organic ingredients.
                </p>
              </div>
            </div>
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
          </div>

          {/* divider */}
          <div className="flex justify-center mt-8">
            <div className="relative w-28 h-px bg-black">
              <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
            </div>
          </div>

          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">
                A taste of Oman
              </h3>
              {/* Omani specialities list */}
              <div className="flex flex-col mt-4">
                <p className="text-[--color-muted] text-sm leading-relaxed max-w-md">
                  The culinary journey at The Malkai highlights regional Omani
                  dishes. Sample traditional specialities such as
                </p>
                <div>
                  <ul className="divide-y divide-[--color-border] border-b border-[--color-border]">
                    {specialties.map((item, idx) => (
                      <li key={idx} className="py-5">
                        <div className="font-serif text-lg md:text-xl">
                          {item.name}
                        </div>
                        <p className="mt-2 text-[--color-muted] text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="relative w-28 h-px bg-black">
              <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
            </div>
          </div>

          {/* Sample menus */}
          <div className="mt-20">
            <h2 className="font-serif text-2xl md:text-[28px] text-center">
              Sample menus
            </h2>
            <p className="mt-3 text-center text-[--color-muted] text-sm md:text-base max-w-3xl mx-auto">
              Our seasonally changing menus are a celebration of the land and
              its traditions, crafted with care and a deep connection to the
              locale. Menus can be tailored to guests&apos; dietary
              requirements.
            </p>

            <div className="grid grid-cols-1 gap-24 mt-10 md:grid-cols-2">
              <ul>
                {menusLeft.map((m, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 py-4 border-b border-[--color-border]"
                  >
                    <Image
                      src="/images/pdf-svgrepo-com.svg"
                      alt="PDF"
                      width={24}
                      height={24}
                    />
                    <Link
                      href={m.href}
                      className="hover:underline underline-offset-8"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul>
                {menusRight.map((m, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 py-4 border-b border-[--color-border]"
                  >
                    <Image
                      src="/images/pdf-svgrepo-com.svg"
                      alt="PDF"
                      width={24}
                      height={24}
                    />
                    <Link
                      href={m.href}
                      className="hover:underline underline-offset-8"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="relative w-28 h-px bg-black">
              <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
            </div>
          </div>

          {/* Private dining - Swiper carousel */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl md:text-[28px]">
              Private dining
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
                {privateDining.map((_, idx) => (
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
                  {privateDining[activeIndex]?.title}
                </h3>
                <p className="mt-3 text-[--color-muted] text-sm leading-relaxed max-w-xl">
                  {privateDining[activeIndex]?.desc}
                </p>
                <div className="mt-6 h-[2px] bg-[--color-border] relative max-w-[260px]">
                  <div
                    className="absolute top-0 left-0 h-full bg-black"
                    style={{
                      width: `${
                        ((activeIndex + 1) / privateDining.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl">
                  {
                    privateDining[(activeIndex + 1) % privateDining.length]
                      ?.title
                  }
                </h3>
                <p className="mt-3 text-[--color-muted] text-sm leading-relaxed max-w-xl">
                  {
                    privateDining[(activeIndex + 1) % privateDining.length]
                      ?.desc
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Enrichment cards */}
          <div className="mt-20">
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2">
              <div className="flex flex-col justify-between border border-[--color-border] p-8 md:p-10 bg-background">
                <div>
                  <h3 className="font-serif text-2xl">
                    Wellness at The Malkai
                  </h3>
                  <p className="mt-4 text-[--color-muted] text-sm leading-relaxed">
                    Ancient rituals. Open‑air sanctuaries. A philosophy of
                    stillness and renewal.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="#wellness"
                    className="inline-block underline underline-offset-8 font-sans text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground"
                  >
                    Learn more
                  </Link>
                  <div className="mt-2 h-[1px] w-24 bg-[--color-border]" />
                </div>
              </div>

              <div className="flex flex-col justify-between border border-l-0 border-[--color-border] p-8 md:p-10 bg-background">
                <div>
                  <h3 className="font-serif text-2xl">
                    Adventures Across Oman
                  </h3>
                  <p className="mt-4 text-[--color-muted] text-sm leading-relaxed">
                    Private islands, desert safaris, canyon hikes—tailored to
                    you.
                  </p>
                </div>
                <div className="mt-8">
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
