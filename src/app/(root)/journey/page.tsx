import Divider from "@/app/components/Divider";
import {
  faqs,
  journeyIncludesLeft,
  journeyIncludesRight,
} from "@/app/constants/data";
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

          <Divider />

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
          {/* Two column content: media + copy */}
          <div className="grid relative grid-cols-1 gap-24 -mx-24 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>

            <div className="max-w-3xl">
              <h3 className="font-serif text-3xl md:text-[32px]">
                (مرشد) Arabic for “guide” or “teacher”
              </h3>
              <div className="mt-4 space-y-4 text-[--color-muted] text-sm leading-relaxed">
                <p>
                  A Murshid, your guide and companion, will tailor your Malkai
                  journey, serving as a guide, butler, concierge, and hiking
                  partner, with every detail tailored to suit your interests and
                  preferences.
                </p>
              </div>
            </div>
          </div>

          <Divider />

          <div className="mx-auto max-w-4xl">
            <h3 className="font-serif text-xl text-center md:text-2xl">
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

          <Divider />
          {/* Travel services cards */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Card 1 */}
              <div className="flex flex-col">
                <div className="overflow-hidden border h-[360px] w-full border-[--color-border] bg-[#efefef]" />
                <div className="pl-16 mt-8">
                  <h3 className="font-serif text-2xl">
                    Airport Meet and Greet
                  </h3>
                  <p className="mt-4 text-[--color-muted] text-sm leading-relaxed max-w-xl">
                    Malkai guests are met at the aircraft door by their Murshid,
                    who will escort them to the Malkai lounge for seamless
                    passage through arrivals, assisting with immigration,
                    baggage collection, and customs.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="#plan"
                      className="inline-block text-[12px] tracking-[0.18em] underline underline-offset-8 uppercase text-foreground/90 hover:text-foreground"
                    >
                      Plan your stay
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col">
                <div className="overflow-hidden border h-[360px] w-full border-[--color-border] bg-[#efefef]" />
                <div className="pl-16 mt-8">
                  <h3 className="font-serif text-2xl">A Private Car</h3>
                  <p className="mt-4 text-[--color-muted] text-sm leading-relaxed max-w-xl">
                    Enjoy the exclusive use of a chauffeured Land Rover
                    Defender, complete with Wi‑Fi and refreshments when
                    travelling between Malkai sites. For those seeking expedited
                    travel, private helicopter charters can be arranged.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="#plan"
                      className="inline-block text-[12px] tracking-[0.18em] underline underline-offset-8 uppercase text-foreground/90 hover:text-foreground"
                    >
                      Plan your stay
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}

          <div className="px-24">
            <h2 className="font-serif text-2xl md:text-[28px]">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 divide-y divide-[--color-border] border-t border-b border-[--color-border]">
              {faqs.map((item, idx) => (
                <details key={idx} className="group" open={idx === 1}>
                  <summary className="flex gap-4 items-start py-5 list-none cursor-pointer">
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full border border-[--color-border] text-[--color-muted]">
                      <span className="block place-items-center leading-none group-open:hidden">
                        +
                      </span>
                      <span className="hidden leading-none group-open:block">
                        −
                      </span>
                    </span>
                    <span className="flex-1 font-serif text-lg md:text-xl">
                      {item.q}
                    </span>
                  </summary>
                  <div className="pl-9 pb-5 -mt-2 text-[--color-muted] text-sm leading-relaxed max-w-4xl">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="#all-faqs"
                className="inline-block px-6 py-3 text-white bg-foreground/90 hover:bg-foreground text-[12px] tracking-[0.18em] uppercase"
              >
                Read all FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
