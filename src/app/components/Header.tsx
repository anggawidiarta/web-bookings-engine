import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="px-6 pt-6 mx-aut">
        <div className="flex justify-between items-center h-20">
          <div className="w-24" />
          <Link href="/" aria-label="The Malkai">
            <Image
              src="/images/header-logo.svg"
              alt="The Malkai"
              width={220}
              height={64}
              className="brightness-0 invert"
              priority
            />
          </Link>
          <div className="flex gap-3 justify-end items-center w-24">
            <Link
              href="#enquire"
              className="inline-flex h-8 items-center px-12 py-6 text-[20px] font-medium text-white bg-black/90 hover:bg-black"
            >
              Enquire
            </Link>
            <button
              aria-label="Search"
              className="grid place-items-center w-12 h-12 text-white hover:opacity-90"
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
  );
}
