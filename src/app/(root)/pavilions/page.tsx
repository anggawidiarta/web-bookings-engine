import Divider from "@/app/components/Divider";
import {
  journeyIncludesLeft,
  journeyIncludesRight,
} from "@/app/constants/data";
import Link from "next/link";

export default function Pavilions() {
  const amenitiesLeft = [
    "Expansive views",
    "Private sky terrace with large day bed",
    "King-size bed",
    "Bathroom with twin rain showers, soaking tub",
    "Wi‑Fi, TV, sound system, safe",
  ];
  const amenitiesRight = [
    "Sun deck with four sun loungers, built‑in lounge seating, dining area",
    "Private courtyard entrance and breezeway",
    "Living area with reading chairs, writing desk",
    "Twin vanities, dressing areas, separate toilet",
    "Air‑conditioning, underfloor heating",
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
            The Malkai Pavilions
          </h1>
          <h1 className="max-w-5xl font-serif text-6xl leading-tight">
            Rooted in tradition. Refined for today.
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="flex absolute inset-x-0 bottom-6 justify-center pointer-events-none">
          <div className="w-px h-8 bg-white/70" />
        </div>
      </section>

      <section
        id="pavilions"
        className="border-t border-[--color-border] bg-background"
      >
        <div className="flex flex-col gap-10 px-20 py-14 mx-auto md:py-20">
          {/* Intro heading and description */}
          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl place-self-center">
            Inspired by the bayt al-sha&apos;ar tentsof Oman&apos;s nomadic
            Bedouins, The Malkai&apos;s 1-bedroom and 3-bedroom Pavilion suites
            reinterpret tradition through a modern, immersive lens. Seamlessly
            integrated into their natural surroundings, these spacious,
            temperature-controlled retreats pair artisanal detail with
            contemporary design-offering year-round comfort, privacy and
            serenity.
          </h2>

          <Divider />

          {/* Bedrooms */}
          <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2">
            {/* Card 1 */}
            <div className="flex flex-col">
              <div className="overflow-hidden border h-[360px] w-full border-[--color-border] bg-[#efefef]" />
              <div className="pl-16 mt-8">
                <h3 className="font-serif text-2xl">1-bedroom Pavilion </h3>
                <p className="mt-4 text-[--color-muted] text-sm leading-relaxed max-w-xl">
                  A serene retreat for solo travellers or couples, this
                  one-bedroom Pavilion blends refined simplicity with natural
                  elegance. Thoughtfully designed indoor-outdoor living spaces
                  invite you to slow down and reconnect-with yourself, your
                  surroundings, and the stillness of the landscape.
                </p>
                <Link
                  href="#plan"
                  className="inline-block mt-6 text-[12px] tracking-[0.18em] underline underline-offset-8 uppercase text-foreground/90 hover:text-foreground"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col">
              <div className="overflow-hidden border h-[360px] w-full border-[--color-border] bg-[#efefef]" />
              <div className="pl-16 mt-8">
                <h3 className="font-serif text-2xl">3-bedroom Pavilion</h3>
                <p className="mt-4 text-[--color-muted] text-sm leading-relaxed max-w-xl">
                  Perfect for families or small groups, the three-bedroom
                  Pavilion offers generous living spaces, multiple terraces, and
                  uninterrupted views. With separate sleeping quarters, private
                  plunge pools, and shared gathering spaces, it balances privacy
                  and connection in equal measure.
                </p>
                <Link
                  href="#plan"
                  className="inline-block mt-6 text-[12px] tracking-[0.18em] underline underline-offset-8 uppercase text-foreground/90 hover:text-foreground"
                >
                  Plan your stay
                </Link>
              </div>
            </div>
          </div>

          <Divider />

          {/* A Pavilion for every setting */}
          <div className="flex flex-col gap-8 items-center">
            <h2 className="font-serif text-2xl md:text-[28px]">
              A Pavilion for every setting
            </h2>
            <p className="">
              Each Malkai location offers a distinct Pavilion design that
              reflects the landscape
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Barkaa */}
              <div className="flex flex-col h-full">
                <div className="overflow-hidden border h-[550px] w-full border-[--color-border] bg-[#efefef]" />
                <div className="flex flex-col flex-1 mt-8">
                  <h3 className="font-serif text-2xl">Barkaa</h3>
                  <p className="mt-6 mb-6 text-[--color-muted] text-sm leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt accusantium debitis quia voluptatum iste
                    laboriosam? Doloribus est laboriosam molestiae magni atque,
                    harum exercitationem. Nulla, nihil!
                  </p>
                </div>
              </div>

              {/* Hajar */}
              <div className="flex flex-col h-full">
                <div className="overflow-hidden border h-[550px] w-full border-[--color-border] bg-[#efefef]" />
                <div className="flex flex-col flex-1 mt-8">
                  <h3 className="font-serif text-2xl">Hajar</h3>
                  <p className="mt-3 mb-6 text-[--color-muted] text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    ex voluptatum omnis magni nisi adipisci asperiores
                    perspiciatis possimus voluptatem ipsa iste facere,
                    accusantium laboriosam deleniti.
                  </p>
                </div>
              </div>

              {/* Sharqiyah */}
              <div className="flex flex-col h-full">
                <div className="overflow-hidden border h-[550px] w-full border-[--color-border] bg-[#efefef]" />
                <div className="flex flex-col flex-1 mt-8">
                  <h3 className="font-serif text-2xl">Sharqiyah</h3>
                  <p className="mt-3 mb-6 text-[--color-muted] text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore eum amet similique ducimus iure enim maiores
                    perferendis cumque nostrum, fuga asperiores delectus quia
                    eos architecto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Divider />

          {/* Amenities include */}
          <div className="mt-8">
            <h3 className="font-serif text-2xl">Amenities include</h3>
            <div className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2">
              <ul className="border-b divide-y divide-neutral-200 border-neutral-200">
                {amenitiesLeft.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start py-4">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/70" />
                    <p className="text-sm leading-relaxed text-[--color-muted]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <ul className="border-b divide-y divide-neutral-200 border-neutral-200">
                {amenitiesRight.map((item, index) => (
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

          {/* Seven-night journey includes */}
          <div className="mt-2">
            <h3 className="font-serif text-2xl md:text-[28px]">
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
        </div>
      </section>
    </main>
  );
}
