// import Link from "next/link";

import Link from "next/link";

export default function Barkaa() {
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
            THE MALKAI, BARKAA
          </h1>
          <h1 className="max-w-5xl font-serif text-6xl leading-tight">
            An extraordinary oasis
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
            A tranquil haven and the first step on your Omani journey, immersed
            in working farms, falaj water rills, and reflection pools.
          </h2>

          {/* divider */}
          <div className="flex justify-center mt-8">
            <div className="relative w-28 h-px bg-black">
              <span className="absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
              <span className="absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background" />
            </div>
          </div>

          {/* Image grid with captions */}
          <div className="flex flex-col gap-12">
            {/* Row 1: wide + portrait */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
              <figure>
                <div className="overflow-hidden border h-[340px] w-full border-[--color-border] bg-[#efefef] md:h-[420px]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  On arrival guests are invited to walk through shallow waters
                  that serve as a welcoming beacon, washing off the world and
                  re-emerging cleansed, to mark the start of their Malkai
                  journey.
                </figcaption>
              </figure>

              <figure>
                <div className="overflow-hidden border h-[340px] w-full border-[--color-border] bg-[#efefef] md:h-[420px]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  Walled‑garden Pavilion suites open onto reflective
                  pools—spaces where Omani craftmanship and contemporary comfort
                  entwine beneath swaying palms.
                </figcaption>
              </figure>
            </div>

            {/* Row 2: square + wide */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
              <figure>
                <div className="overflow-hidden border aspect-square md:aspect-auto md:h-[420px] w-full border-[--color-border] bg-[#efefef]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  Al fresco orchard lunches, farm‑to‑table feasts with coastal
                  sea‑breeze views.
                </figcaption>
              </figure>

              <figure>
                <div className="overflow-hidden border aspect-[16/9] md:aspect-auto md:h-[420px] w-full border-[--color-border] bg-[#efefef]" />
                <figcaption className="mt-3 text-[--color-muted] text-sm leading-relaxed">
                  Barkaa blends Omani landscape influences with an
                  East‑meets‑West planting style and architecture.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Two column content: media + copy */}
          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">Farm-to-fork </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-[16px] leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  labore, suscipit veritatis optio consequatur ut id delectus!
                  Qui omnis consequatur fugit, minima quae assumenda nostrum
                  veniam voluptatibus, porro magni repudiandae expedita
                  cupiditate debitis, libero nobis.
                </p>
              </div>
            </div>
          </div>

          <div className="grid relative grid-cols-1 gap-10 mt-10 w-full md:grid-cols-2">
            <div className="text-right">
              <h3 className="font-serif text-xl md:text-2xl">Farm-to-fork</h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-[16px] leading-relaxed">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                  dolorem incidunt cumque earum fugit excepturi ut dolorum et
                  doloribus repellendus. Natus, totam nemo? Repudiandae iure
                  fuga culpa suscipit. Dicta itaque harum animi laborum tempora
                  necessitatibus.
                </p>
              </div>
            </div>
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
          </div>

          {/* Enrichment cards */}
          <div className="mt-20">
            <h2 className="font-serif text-2xl md:text-[28px] text-center">
              Your journey, enriched.
            </h2>
            <p className="mt-3 text-center text-[--color-muted] text-sm md:text-base">
              Discover how each location connects to the heart of our philosophy
              — through dining, wellness and adventure
            </p>

            <div className="grid grid-cols-1 mt-10 md:grid-cols-3">
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

              <div className="flex flex-col justify-between border-x-0 border-y border-[--color-border] p-8 md:p-10 bg-background">
                <div>
                  <h3 className="font-serif text-2xl">Dining at The Malkai</h3>
                  <p className="mt-4 text-[--color-muted] text-sm leading-relaxed">
                    From cliff‑edge feasts to orchard lunches, every plate tells
                    a local story.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="#dining"
                    className="inline-block underline underline-offset-8 font-sans text-[12px] tracking-[0.18em] uppercase text-foreground/90 hover:text-foreground"
                  >
                    Learn more
                  </Link>
                  <div className="mt-2 h-[1px] w-24 bg-[--color-border]" />
                </div>
              </div>

              <div className="flex flex-col justify-between border border-[--color-border] p-8 md:p-10 bg-background">
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
