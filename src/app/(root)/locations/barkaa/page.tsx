// import Link from "next/link";

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
        </div>
      </section>
    </main>
  );
}
