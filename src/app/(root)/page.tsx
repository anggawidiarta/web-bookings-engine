export default function Home() {
  return (
    <main>
      {/* Full-bleed Hero */}
      <section className="relative h-[88vh] min-h-[560px]">
        {/* Media placeholder (replace with real image/video) */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/35" />
        </div>

        {/* Centered content */}
        <div className="flex relative z-10 flex-col justify-center items-center px-6 h-full text-center text-white">
          <h1 className="max-w-5xl font-serif text-4xl leading-tight ">
            Magic exists if you know where to look
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="flex absolute inset-x-0 bottom-6 justify-center pointer-events-none">
          <div className="w-px h-8 bg-white/70" />
        </div>
      </section>

      {/* Journey / Locations - keep from previous implementation */}
      <section
        id="journey"
        className="border-t border-[--color-border] bg-background"
      >
        <div className="px-6 py-14 mx-auto max-w-6xl md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <article className="group">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-[#e9e2d8] border border-[--color-border]" />
              <div className="mt-4">
                <p className="uppercase tracking-[0.18em] text-[11px] text-[--color-muted]">
                  The Farmlands
                </p>
                <h3 className="mt-1 font-serif text-2xl">Barkaa</h3>
                <p className="mt-2 text-sm text-[--color-muted] max-w-sm">
                  A hidden oasis set within a walled garden, surrounded by date
                  plantations, reflection ponds, and ancient Falaj water
                  channels.
                </p>
              </div>
            </article>
            <article className="group">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-[#dcd7cf] border border-[--color-border]" />
              <div className="mt-4">
                <p className="uppercase tracking-[0.18em] text-[11px] text-[--color-muted]">
                  The Mountains
                </p>
                <h3 className="mt-1 font-serif text-2xl">Hajar</h3>
                <p className="mt-2 text-sm text-[--color-muted] max-w-sm">
                  Perched on a cliff edge high in northern Oman — a dramatic
                  setting for exploration, adventure, and tranquillity.
                </p>
              </div>
            </article>
            <article className="group">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-[#efe6dc] border border-[--color-border]" />
              <div className="mt-4">
                <p className="uppercase tracking-[0.18em] text-[11px] text-[--color-muted]">
                  The Desert
                </p>
                <h3 className="mt-1 font-serif text-2xl">Sharqiyah</h3>
                <p className="mt-2 text-sm text-[--color-muted] max-w-sm">
                  A serene sanctuary amid vast, shifting sands and towering
                  dunes — a gateway into the Sharqiyah sands, where silence and
                  wonder meet.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
