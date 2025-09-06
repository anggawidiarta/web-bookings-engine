import Divider from "@/app/components/Divider";
import Link from "next/link";

export default function PlanYourStay() {
  const includesLeft = [
    "Personalised itinerary planning service",
    "Laundry services",
    "Access to cultural sites",
    "Daily excursions with an English-speaking guide, driver and private Land Rover Defender",
    "In-house beverages, including house wines and spirits",
  ];
  const includesRight = [
    "Personal Airport Welcome and Departure Services",
    "Picnics en route to other Malkai sites",
    "All in-house meals",
    "Selected House labels of fine wines and spirits, coffee, tea and soft drinks",
  ];
  const faqs = [
    {
      q: "Is The Malkai suitable for families?",
      a: "Yes. Many experiences are family‑friendly and we can tailor itineraries for all ages, with flexible Pavilion setups and gentle adventures.",
    },
    {
      q: "Are dietary requirements accommodated?",
      a: "Yes. Our chefs tailor menus for all dietary needs, from plant‑based and gluten‑free to specific allergies.",
    },
    {
      q: "How do I reach The Malkai?",
      a: "Fly into Muscat International Airport. Your Murshid greets you at the aircraft door and arranges a seamless transfer to Barkaa (around 30 minutes).",
    },
    {
      q: "Are all activities included in the price?",
      a: "Core experiences are included. Bespoke, private or specialist activities can be arranged at additional cost.",
    },
    {
      q: "Is The Malkai open year‑round?",
      a: "Yes. We operate year‑round. October to April offers the most temperate conditions; each site has its own seasonal character.",
    },
  ];
  const flights = [
    { location: "London, United Kingdom", time: "7h10" },
    { location: "Frankfurt, Germany", time: "6h45" },
    { location: "Paris, France", time: "7h0" },
    { location: "Milan, Italy", time: "6h20" },
    { location: "Istanbul, Turkey", time: "4h50" },
    { location: "Manila, Philippines", time: "8h15" },
    { location: "Jakarta, Indonesia", time: "7h35" },
    { location: "Kuala Lumpur, Malaysia", time: "6h30" },
    { location: "Dubai, UAE", time: "1h10" },
    { location: "Riyadh, Saudi Arabia", time: "2h15" },
    { location: "Colombo, Sri Lanka", time: "4h10" },
    { location: "Mumbai, India", time: "2h40" },
  ];
  const packSections = [
    {
      title: "Light and layered",
      items: [
        "Favour natural fabrics like cotton and linen to stay cool",
        "Choose loose‑fitting styles that allow for air circulation",
        "Opt for light‑coloured clothing to reflect the sun",
        "Evenings can be cool—bring a warm outer layer",
      ],
    },
    {
      title: "Respectful and practical",
      items: [
        "Clothing that covers shoulders and knees is recommended in public spaces",
        "The Malkai provides a kumma or lihaf headwear for religious site visits",
      ],
    },
    {
      title: "Essentials",
      items: [
        "Sunscreen, sunglasses and a wide‑brimmed hat",
        "Women: Maxi dresses, long skirts or loose trousers with tops",
        "Men: Lightweight trousers or shorts with t‑shirts or polos; a long‑sleeved shirt for sun protection and cooler evenings",
      ],
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
        <div className="flex relative z-10 flex-col justify-center items-center px-6 h-full text-center text-white">
          <h1 className="max-w-5xl font-sans uppercase text-[16px] font-light leading-tight">
            Plan your stay
          </h1>
          <h1 className="max-w-5xl font-serif text-6xl leading-tight">
            Practical guidance for your journey
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="flex absolute inset-x-0 bottom-6 justify-center pointer-events-none">
          <div className="w-px h-8 bg-white/70" />
        </div>
      </section>

      {/* Plan Your Stay Section */}
      <section
        id="plan-your-stay"
        className="border-t border-[--color-border] bg-background"
      >
        <div className="flex flex-col gap-10 px-20 py-14 mx-auto md:py-20">
          {/* Intro heading and description */}
          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl place-self-center">
            From when to travel to what to pack, this section offers everything
            you need to prepare for your Malkai experience. Our eam is always
            available to help personalise your journey.
          </h2>

          <Divider />

          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl place-self-center">
            Rates
          </h2>
          <p className="text-center">
            Rates begin at $2,000 per Pavilion per night and vary by season and
            1-bed and 3-bed Pavilion type. Please contact our concierge for
            current availability and tailored itinerary pricing. Our experiences
            are all-inclusive and personalised to your travel preferences.
          </p>

          <Divider />

          <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl place-self-center">
            Flights to Oman
          </h2>
          <p className="text-center">
            Your journey begins in Muscat, Oman&apos;s capital City. There are
            frequent, direct flights global hubs around the world. Upon arrival,
            guests are greeted at the aircraft door by their dedicated Murshid
            and escorted to the Malkai Lounge, where they receive assistance
            through immigration, baggage collection, and customs
          </p>
          <p className="text-center">
            The Malkai journey begins in Barkaa, located just 30 minutes from
            Muscat International Airport.
          </p>

          {/* Two column content: media + copy */}
          <div className="grid relative grid-cols-1 gap-10 -mx-24 mt-10 w-full md:grid-cols-2">
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>

            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">
                Flight times to Muscat
              </h3>
              <div className="mt-4">
                <div className="grid font-bold grid-cols-[1fr_auto] gap-4 text-[13px]">
                  <div className="text-foreground">Location</div>
                  <div className="text-right text-foreground">
                    Approx. Flight Time to Muscat
                  </div>
                </div>
                <ul className="mt-2">
                  {flights.map((f, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[1fr_auto] items-center gap-4 py-4 border-b border-[--color-border]"
                    >
                      <span className="text-[--color-muted] text-sm">
                        {f.location}
                      </span>
                      <span className="text-sm font-medium">{f.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Divider />

          {/* What to pack */}
          <div className="flex flex-col gap-8 mt-12">
            <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl mx-auto">
              What to Pack
            </h2>
            <p className="text-center text-[--color-muted] text-sm md:text-base max-w-4xl mx-auto">
              While there is no dress code at The Malkai, we encourage guests to
              pack for comfort, climate and cultural respect.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {packSections.map((section, idx) => (
                <div key={idx} className="border border-[--color-border] p-8">
                  <h3 className="font-serif text-2xl">{section.title}</h3>
                  <ul className="mt-6 space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="mt-2 w-2 h-2 rounded-full bg-foreground/60" />
                        <span className="text-sm text-[--color-muted] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Travelling with children */}
          <div className="flex flex-col gap-8 mt-12">
            <h2 className="font-serif text-2xl md:text-[28px] text-center max-w-4xl mx-auto">
              Travelling with children
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident consectetur, ducimus fuga quisquam voluptas, odit illo
              cupiditate velit est necessitatibus deserunt explicabo possimus
              cum sequi expedita! Maiores nobis recusandae doloremque?
            </p>
            <div className="grid grid-cols-1 gap-12 w-full md:grid-cols-2">
              {/* Left column */}
              <ul className="divide-y divide-[--color-border]">
                {includesLeft.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start py-5">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/70" />
                    <p className="text-[15px] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              {/* Right column */}
              <ul className="divide-y divide-[--color-border]">
                {includesRight.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start py-5">
                    <span className="mt-2 w-2 h-2 rounded-full bg-foreground/70" />
                    <p className="text-[15px] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid relative grid-cols-1 gap-24 -mr-20 mx-auto mt-10 w-full md:grid-cols-2">
            <div className="max-w-3xl">
              <h3 className="font-serif text-xl md:text-2xl">
                Climate & Seasonality
              </h3>
              <div className="mt-4 space-y-3 text-[--color-muted] text-sm leading-relaxed">
                <p>
                  Oman enjoys sunshine throughout the year. October to April
                  offers the most temperate travel conditions. Barkaa tends to
                  be warm and humid; Al Hajar is crisp and cool due to its
                  elevation; and Sharqiyah Sands is hot and dry-perfect for
                  winter sun seekers. Seasonal highlights include sea turtle
                  nesting, desert wildflowers, and the annual date harvest.
                </p>
              </div>
            </div>
            <div className="overflow-hidden border h-[500px] w-full border-[--color-border] bg-[#efefef] aspect-[16/10] md:aspect-[4/3]"></div>
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
