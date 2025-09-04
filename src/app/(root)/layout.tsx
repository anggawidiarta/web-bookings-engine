import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";

const brandSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const brandSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Malkai — A Pilgrimage of Oman",
  description:
    "A first-of-its-kind immersion into Oman's heritage, culture and diverse natural beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandSans.variable} ${brandSerif.variable} antialiased bg-background text-foreground`}
      >
        <header className="absolute inset-x-0 top-0 z-30 text-white">
          <div className="px-6 mx-auto max-w-6xl">
            <div className="flex justify-between items-center h-20">
              <div className="w-24" />
              <div className="flex flex-1 justify-center">
                <Link href="/" aria-label="The Malkai">
                  <Image
                    src="/images/header-logo.svg"
                    alt="The Malkai"
                    width={160}
                    height={32}
                    priority
                  />
                </Link>
              </div>
              <div className="flex gap-3 justify-end items-center w-24">
                <Link
                  href="#enquire"
                  className="inline-flex h-8 items-center rounded px-3 text-[13px] font-medium text-white bg-black/90 hover:bg-black"
                >
                  Enquire
                </Link>
                <button
                  aria-label="Search"
                  className="grid place-items-center w-9 h-9 text-white hover:opacity-90"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" />
                  </svg>
                </button>
                <button
                  aria-label="Menu"
                  className="grid place-items-center w-9 h-9 text-white hover:opacity-90"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                  >
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        {children}

        <footer className="bg-background text-foreground">
          {/* Begin Your Journey Section */}
          <section
            aria-labelledby="begin-journey"
            className="bg-[#8e8e8e] text-white"
          >
            <div className="px-6 py-16 mx-auto max-w-4xl text-center md:py-20">
              <h2
                id="begin-journey"
                className="font-serif text-3xl md:text-4xl"
              >
                Begin your Journey
              </h2>
              <p className="mt-4 md:text-lg text-white/90">
                Plan an immersive exploration of Oman’s heritage and landscapes.
              </p>
              <div className="mt-8">
                <Link
                  href="#journey"
                  className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium text-white bg-black rounded hover:opacity-90"
                >
                  Start your journey
                </Link>
              </div>
            </div>
          </section>

          {/* Stay informed section */}
          <section
            aria-labelledby="stay-informed"
            className="relative overflow-hidden bg-[#E8E1CD]"
          >
            <div className="px-6 py-16 mx-auto container text-center md:py-20">
              <h2
                id="stay-informed"
                className="font-serif text-3xl md:text-4xl"
              >
                Stay informed
              </h2>
              <p className="mt-4 text-[--color-muted] md:text-lg">
                Be among the first to receive exclusive updates as we approach
                our opening. Please share your contact details with us to
                receive exclusive updates.
              </p>

              <form className="grid grid-cols-1 gap-3 mt-8 sm:grid-cols-2 md:grid-cols-4">
                <input
                  type="text"
                  required
                  placeholder="First Name*"
                  className="border border-[--color-border] bg-white/70 px-[20px] py-[10px] text-sm outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Last Name*"
                  className="border border-[--color-border] bg-white/70 px-[20px] py-[10px] text-sm outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address*"
                  className="border border-[--color-border] bg-white/70 px-[20px] py-[10px] text-sm outline-none sm:col-span-2 md:col-span-1"
                />
                <button
                  type="submit"
                  className="px-[20px] py-[10px] text-sm font-medium text-white bg-black rounded hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>

              <div className="mt-4 flex items-start justify-center gap-3 text-xs text-[--color-muted]">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-[2px] h-3.5 w-3.5 accent-black"
                />
                <label htmlFor="consent" className="italic">
                  consent to my submitted data being collected and stored *
                </label>
              </div>
            </div>
          </section>

          <section className="px-6 py-12 mx-auto max-w-6xl md:py-14">
            <div className="flex flex-col gap-6 items-center">
              <Image
                src="/images/footer-logo.svg"
                alt="The Malkai Emblem"
                width={64}
                height={64}
                className="brightness-0"
              />
              <div className="flex flex-wrap gap-y-2 gap-x-8 justify-center items-center font-serif text-xl md:text-2xl">
                <div className="flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    className="w-5 h-5"
                  >
                    <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1 3.73a1 1 0 0 1-.55 1.16l-2.42 1.1a16 16 0 0 0 8.12 8.12l1.1-2.42a1 1 0 0 1 1.16-.55l3.73 1a1 1 0 0 1 .77 1.04Z" />
                  </svg>
                  <span>+1 (123)-123-1234</span>
                </div>
                <div className="flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    className="w-5 h-5"
                  >
                    <path d="M4 6h16v12H4z" />
                    <path d="m22 7-10 7L2 7" />
                  </svg>
                  <span>enquiries@themalkai.com</span>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-8">
              <div className="h-4 w-4 rounded-full border border-[--color-border]" />
              <div className="flex-1 h-px bg-black" />
              <div className="h-4 w-4 rounded-full border border-[--color-border]" />
            </div>

            <div className="flex justify-between items-start mt-10">
              <div>
                <h4 className="font-serif text-xl">Discover</h4>
                <ul className="mt-4 space-y-2 text-[--color-muted]">
                  <li>
                    <Link href="#">Dining</Link>
                  </li>
                  <li>
                    <Link href="#">Wellness</Link>
                  </li>
                  <li>
                    <Link href="#">Adventure</Link>
                  </li>
                  <li>
                    <Link href="#">Sustainability</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-xl">The Locations</h4>
                <ul className="mt-4 space-y-2 text-[--color-muted]">
                  <li>
                    <Link href="#">Barka</Link>
                  </li>
                  <li>
                    <Link href="#">Al Hajar</Link>
                  </li>
                  <li>
                    <Link href="#">Sharqiyah Sands</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-xl">The Pavilions</h4>
                <ul className="mt-4 space-y-2 text-[--color-muted]">
                  <li>
                    <Link href="#">1 Bedroom</Link>
                  </li>
                  <li>
                    <Link href="#">3 Bedroom</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-xl">The Journey</h4>
                <ul className="mt-4 space-y-2 text-[--color-muted]">
                  <li>
                    <Link href="#">Our Story</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm tracking-wide text-[--color-muted]">
                  FOLLOW US
                </div>
                <div className="mt-3">
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[--color-border]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      className="w-4 h-4"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <path d="M16 11.37A3.37 3.37 0 1 1 12.63 8 3.37 3.37 0 0 1 16 11.37Z" />
                      <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
                <div className="mt-6 text-sm tracking-wide text-[--color-muted]">
                  NEWSLETTER
                </div>
                <form className="flex mt-3">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="h-10 flex-1 rounded-l border border-[--color-border] bg-transparent px-3 text-sm outline-none"
                  />
                  <button
                    type="submit"
                    className="h-10 rounded-r border border-l-0 border-[--color-border] px-3 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-4 h-4"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center items-center mt-10 text-sm">
              <Link href="#" className="hover:opacity-80">
                Plan Your Stay
              </Link>
              <span className="inline-block h-1 w-1 rotate-45 bg-[--color-muted]" />
              <Link href="#" className="hover:opacity-80">
                Stories
              </Link>
              <span className="inline-block h-1 w-1 rotate-45 bg-[--color-muted]" />
              <Link href="#" className="hover:opacity-80">
                Travel Partners
              </Link>
              <span className="inline-block h-1 w-1 rotate-45 bg-[--color-muted]" />
              <Link href="#" className="hover:opacity-80">
                Press Room
              </Link>
              <span className="inline-block h-1 w-1 rotate-45 bg-[--color-muted]" />
              <Link href="#" className="hover:opacity-80">
                Careers
              </Link>
              <span className="inline-block h-1 w-1 rotate-45 bg-[--color-muted]" />
              <Link href="#" className="hover:opacity-80">
                Privacy Policy
              </Link>
              <span className="inline-block h-1 w-1 rotate-45 bg-[--color-muted]" />
              <Link href="#" className="hover:opacity-80">
                Terms & Conditions
              </Link>
            </div>

            <div className="flex items-center mt-8">
              <div className="h-4 w-4 rounded-full border border-[--color-border]" />
              <div className="flex-1 h-px bg-black" />
              <div className="h-4 w-4 rounded-full border border-[--color-border]" />
            </div>

            <div className="mt-6 text-center text-xs text-[--color-muted]">
              © {new Date().getFullYear()} THE MALKAI
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
