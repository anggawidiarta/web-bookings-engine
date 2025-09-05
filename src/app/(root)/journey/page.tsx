import Link from "next/link";

export default function Journey() {
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

      {/* Journey Section */}
      <section
        id="journey"
        className="border-t border-[--color-border] bg-background"
      >
        <div className="flex flex-col gap-10 px-20 py-14 mx-auto md:py-20">
          {/* Intro heading and description */}

          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl place-self-center">
            A fully guided odyssey from Barkaa&apos;s farmlands to Al
            Hajar&apos;s peaks and Sharqiyah&apos;s dunes. Chauffeured by your
            dedicated Murshid, each reveals Oman&apos;s natural and cultural
            soul
          </h2>

          {/* divider */}
          <div className="flex justify-center mt-8">
            <div className="relative w-28 h-px bg-black">
              <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
            </div>
          </div>

          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-3xl place-self-center">
            Your journey ascends through three distinct realms of Oman: Barkaa,
            Al Hajar, and Sharqiyah
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Barkaa */}
            <div className="flex flex-col h-full">
              <div className="overflow-hidden border h-[550px] w-full border-[--color-border] bg-[#efefef]" />
              <div className="flex flex-col flex-1 mt-8">
                <h3 className="font-serif text-2xl">Barkaa</h3>
                <div className="mt-2 text-[12px] tracking-[0.25em] uppercase text-foreground/70">
                  The Farmlands
                </div>
                <p className="mt-6 mb-6 text-[--color-muted] text-sm leading-relaxed">
                  A hidden oasis, set within a walled garden, with acres of date
                  plantations, reflection ponds and Falaj water channels.
                </p>
                <Link
                  href="#barkaa"
                  className="mt-auto inline-block text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground underline underline-offset-8"
                >
                  Learn more about Barkaa
                </Link>
              </div>
            </div>

            {/* Hajar */}
            <div className="flex flex-col h-full">
              <div className="overflow-hidden border h-[550px] w-full border-[--color-border] bg-[#efefef]" />
              <div className="flex flex-col flex-1 mt-8">
                <h3 className="font-serif text-2xl">Hajar</h3>
                <div className="mt-2 text-[12px] tracking-[0.25em] uppercase text-foreground/70">
                  The Mountains
                </div>
                <p className="mt-6 text-[--color-muted] text-sm leading-relaxed">
                  Elevation = 2,350 metres (7,710 feet)
                </p>
                <p className="mt-3 mb-6 text-[--color-muted] text-sm leading-relaxed">
                  Perched on a cliff edge, high in the mountains of northern
                  Oman, The Malkai, Hajar is oriented to drama, excitement and
                  exploration.
                </p>
                <Link
                  href="#hajar"
                  className="mt-auto inline-block text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground underline underline-offset-8"
                >
                  Learn more about Hajar
                </Link>
              </div>
            </div>

            {/* Sharqiyah */}
            <div className="flex flex-col h-full">
              <div className="overflow-hidden border h-[550px] w-full border-[--color-border] bg-[#efefef]" />
              <div className="flex flex-col flex-1 mt-8">
                <h3 className="font-serif text-2xl">Sharqiyah</h3>
                <div className="mt-2 text-[12px] tracking-[0.25em] uppercase text-foreground/70">
                  The Desert
                </div>
                <p className="mt-6 text-[--color-muted] text-sm leading-relaxed">
                  Elevation = 205 metres (673 feet)
                </p>
                <p className="mt-3 mb-6 text-[--color-muted] text-sm leading-relaxed">
                  In a vast landscape of shifting sands and towering dunes, The
                  Malkai, Sharqiyah is a serene sanctuary that echoes the
                  tranquillity and stillness of the desert.
                </p>
                <Link
                  href="#sharqiyah"
                  className="mt-auto inline-block text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground underline underline-offset-8"
                >
                  Learn more about Sharqiyah
                </Link>
              </div>
            </div>
          </div>

          {/* Two column content: media + copy */}
          <div className="grid relative grid-cols-1 gap-10 -mx-24 mt-10 w-full md:grid-cols-2">
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
