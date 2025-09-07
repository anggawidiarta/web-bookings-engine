import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";

interface HeaderProps {
  isBooking?: boolean;
  classname?: {
    logoClassName?: ComponentProps<"img">["className"];
  };
}

export default function Header(props: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="px-6 pt-6 mx-auto">
        <div className="relative flex items-center h-20">
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
          <div className="ml-auto flex gap-6 items-center">
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

            <Link href="#menu" className="bg-transparent">
              <Image
                src="/images/search.svg"
                alt="Book Now"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </Link>

            <Link href="#menu" className="bg-transparent">
              <Image
                src="/images/hamburger-menu.svg"
                alt="Book Now"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
