"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main>
      {/* Full-bleed Hero */}
      <section className="relative h-[100vh] min-h-[560px]" data-aos="fade-down" data-aos-duration="1500">
        {/* Media placeholder (replace with real image/video) */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/35" />
        </div>

        {/* Centered content */}
        <div className="flex relative z-10 flex-col justify-center items-center px-6 h-full text-center text-white">
          <h1 className="max-w-5xl font-serif text-4xl leading-tight">
            Magic exists if you know where to look
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="flex absolute inset-x-0 bottom-6 justify-center pointer-events-none">
          <div className="w-px h-8 bg-white/70" />
        </div>
      </section>

      {/* Homepage Section */}
      <section
        id="homepage"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor="#homepage"
        className="bg-background"
      >
        <div className="flex flex-col gap-10 py-14 mx-auto md:py-20">
          {/* Intro heading and description */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl md:text-[30px]">
              A first-of-its-kind immersion into Oman’s heritage,
              <br className="hidden md:block" /> culture and diverse natural
              beauty.
            </h2>
            <p className="mt-4 text-[--color-muted] md:text-[15px]">
              From the coastal plains of Barkaa, near Muscat, to the soaring Al
              Hajar mountains and onwards to the sweeping dunes of Sharqiya
              Sands, experience Oman’s natural splendour and cultural treasures
              in one extraordinary pilgrimage.
            </p>

            {/* Centered hairline with end dots (divider) */}
            <div className="flex justify-center mt-8">
              <div className="relative w-28 h-px bg-black">
                <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
                <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              </div>
            </div>
          </div>

          {/* Two column content: media + copy */}
          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>

            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">
                An Extraordinary Journey
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-sm leading-relaxed">
                <p>
                  Personalised to each guest, The Malkai journey spans three
                  unparalleled locations. Throughout the trip, guests enjoy
                  exclusive use of a chauffeured Land Rover Defender with a
                  personal guide.
                </p>
                <p>
                  Together, these intimate explorations reveal Oman’s wild
                  beauty, epic vistas and Arabian grandeur.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="#journey"
                  className="inline-block text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground font-sans"
                >
                  Discover the Journey
                </Link>
                <div className="mt-2 h-[1px] w-28 bg-[--color-border]" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="relative w-28 h-px bg-black">
              <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
            </div>
          </div>

          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="text-right">
              <h3 className="font-serif text-xl md:text-2xl">
                An Extraordinary Journey
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-sm leading-relaxed">
                <p>
                  Personalised to each guest, The Malkai journey spans three
                  unparalleled locations. Throughout the trip, guests enjoy
                  exclusive use of a chauffeured Land Rover Defender with a
                  personal guide.
                </p>
                <p>
                  Together, these intimate explorations reveal Oman’s wild
                  beauty, epic vistas and Arabian grandeur.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="#journey"
                  className="inline-block text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground font-sans"
                >
                  Discover the Journey
                </Link>
                <div className="mt-2 h-[1px] w-28 bg-[--color-border]" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[28px]">Ad Dimanyat Island</h1>
                <p className="text-[20px] tracking-widest">BARKAA</p>
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>
      </section>
    </main>
  );
}
