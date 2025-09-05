import Link from "next/link";

export default function Locations() {
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
            OUR LOCATIONS
          </h1>
          <h1 className="max-w-5xl font-serif text-6xl leading-tight">
            Farmlands. Mountains. Desert.
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
            From Barkaa&apos;s coastal tranquility to the heights of Al Hajar
            and the serenity of Sharqiyah&apos;s dunes, each place serves as a
            gateway to authentic Oman.
          </h2>

          {/* divider */}
          <div className="flex justify-center mt-8">
            <div className="relative w-28 h-px bg-black">
              <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
            </div>
          </div>

          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-3xl place-self-center">
            Your journey ascends through three distinct realms of Oman:
            Barkaa&apos;, Al Hajar, and Sharqiyah
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Barkaa */}
            <div className="flex flex-col h-full">
              <div className="overflow-hidden border h-[550px] w-full border-[--color-border] bg-[#efefef]" />
              <div className="flex flex-col flex-1 mt-8">
                <h3 className="font-serif text-2xl">Barkaa</h3>
                <p className="mt-6 mb-6 text-[--color-muted] text-sm leading-relaxed">
                  Walled gardens, date orchards, coastal calm.
                </p>
                <Link
                  href="#barkaa"
                  className="mt-auto inline-block text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground underline underline-offset-8"
                >
                  DISCOVER BARKAA
                </Link>
              </div>
            </div>

            {/* Hajar */}
            <div className="flex flex-col h-full">
              <div className="overflow-hidden border h-[550px] w-full border-[--color-border] bg-[#efefef]" />
              <div className="flex flex-col flex-1 mt-8">
                <h3 className="font-serif text-2xl">Al Hajar</h3>
                <p className="mt-3 mb-6 text-[--color-muted] text-sm leading-relaxed">
                  Cliff-edge infinity pools, rarefied air.
                </p>
                <Link
                  href="#hajar"
                  className="mt-auto inline-block text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground underline underline-offset-8"
                >
                  DISCOVER HAJAR
                </Link>
              </div>
            </div>

            {/* Sharqiyah */}
            <div className="flex flex-col h-full">
              <div className="overflow-hidden border h-[550px] w-full border-[--color-border] bg-[#efefef]" />
              <div className="flex flex-col flex-1 mt-8">
                <h3 className="font-serif text-2xl">Sharqiyah</h3>
                <p className="mt-3 mb-6 text-[--color-muted] text-sm leading-relaxed">
                  Shifting golden sands, towering dunes.
                </p>
                <Link
                  href="#sharqiyah"
                  className="mt-auto inline-block text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground underline underline-offset-8"
                >
                  DISCOVER SHARQIYAH
                </Link>
              </div>
            </div>
          </div>

          {/* Two column content: media + copy */}
          <div className="grid relative grid-cols-1 gap-24 -mx-24 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>

            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">
                Your journey, enriched
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-sm leading-relaxed">
                <p>
                  Expolore how Dining, Wellness, Adventures & Sustainability are
                  expressed at The Malkai.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="relative w-28 h-px bg-black">
              <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
