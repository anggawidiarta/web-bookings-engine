"use client";

import Link from "next/link";
import Image from "next/image";
import { ComponentProps, useEffect, useState } from "react";
import { NAV_ITEMS } from "../constants/data";

interface HeaderProps {
  isBooking?: boolean;
  classname?: {
    logoClassName?: ComponentProps<"img">["className"];
  };
}

export default function Header(props: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="px-6 pt-6 mx-auto">
        <div className="flex relative items-center h-20">
          <Link
            href="/"
            aria-label="The Malkai"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src="/images/header-logo.svg"
              alt="The Malkai"
              width={220}
              height={64}
              className={props.classname?.logoClassName}
              priority
            />
          </Link>
          <div className="flex gap-6 items-center ml-auto">
            {props.isBooking ? (
              <Link href="/booking" className="p-2 bg-black">
                <Image
                  src="/images/cross.svg"
                  alt="Book Now"
                  width={24}
                  height={24}
                  className="brightness-0 invert cursor-pointer"
                />
              </Link>
            ) : (
              <Link
                href="#enquire"
                className="inline-flex h-8 items-center px-8 py-6 text-[20px] font-medium text-white bg-black/90 hover:bg-black"
              >
                Enquire
              </Link>
            )}

            <button className="bg-transparent" aria-label="Search">
              <Image
                src="/images/search.svg"
                alt="Search"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>

            <button
              className="bg-transparent"
              aria-label="Open Menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <Image
                src="/images/hamburger-menu.svg"
                alt="Hamburger Menu"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="z-40">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="fixed right-6 top-24 w-80 rounded border shadow-xl backdrop-blur border-border bg-white/95 text-foreground"
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-border">
              <div className="font-serif text-[18px]">Menu</div>
              <button
                aria-label="Close Menu"
                className="grid place-items-center w-9 h-9 rounded hover:bg-black/5"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/images/cross.svg"
                  alt="Close"
                  width={14}
                  height={14}
                />
              </button>
            </div>
            <nav className="p-2">
              <ul className="max-h-[60vh] overflow-auto">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-2 text-[14px] hover:bg-black/5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <Image
                        src="/images/chevron-right.svg"
                        alt="Go"
                        width={14}
                        height={14}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
