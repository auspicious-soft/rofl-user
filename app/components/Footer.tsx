import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative w-full"
      style={{
        backgroundImage: `url('/images/footer-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "25px",
      }}
    >
      <div className="w-full mx-auto px-2 md:px-5 lg:px-5 flex flex-col justify-start items-center gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-24 w-full">
          {/* Brand + Newsletter */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Link href={"/user/dashboard"}>
                <Image
                  className="w-36 h-20"
                  src="/images/leftLogo.png"
                  alt="Logo 1"
                  width={144}
                  height={80}
                  unoptimized
                />
              </Link>
              <p className="text-white text-base leading-7">
                Win amazing prizes with fair draws, secure payments, and trusted
                raffles—all in one place.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white text-base leading-7">
                Subscribe to our newsletter
              </span>

              <div className="pl-5 pr-1 h-12 bg-black rounded-2xl outline outline-[#546A7C] flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent text-zinc-400 text-xs outline-none placeholder:text-zinc-400"
                />
                <button className="h-9 px-4 bg-[#272727] rounded-[10px] text-white text-sm hover:bg-gray-800 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-xl font-bold leading-7">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/user/dashboard"
                className="text-white text-base leading-7 hover:underline"
              >
                Home
              </Link>
              <Link
                href="/user/marketplace"
                className="text-white text-base leading-7 hover:underline"
              >
                Marketplace
              </Link>
              <Link
                href="/user/winners"
                className="text-white text-base leading-7 hover:underline"
              >
                Winners
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col gap-8">
            <h4 className="text-white text-xl font-bold leading-7">
              Customer Service
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/user/faqs"
                className="text-white text-base leading-7 hover:underline"
              >
                FAQ
              </Link>
              <Link
                href="/user/contact-us"
                className="text-white text-base leading-7 hover:underline"
              >
                Contact Us
              </Link>
              <Link
                href="/user/terms&condition"
                className="text-white text-base leading-7 hover:underline"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/user/privacy&policy"
                className="text-white text-base leading-7 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-start items-center gap-4 w-full">
          <div className="self-stretch h-px bg-[#546A7C]" />
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-sm font-normal  leading-7 text-center md:text-left">
              © All Copyrights belong to ROFL. Designed & Developed by
              Auspicioussoft Pvt Ltd.
            </div>
            <div className="flex justify-center md:justify-start items-center gap-4">
              <div className="w-7 h-7 p-2 bg-white rounded-2xl flex justify-center items-center hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="w-4 h-4 text-black" />
              </div>
              <div className="w-7 h-7 p-2 bg-white rounded-2xl flex justify-center items-center hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="w-4 h-4 text-black" />
              </div>
              <div className="w-7 h-7 p-2 bg-white rounded-2xl flex justify-center items-center hover:scale-110 transition-transform cursor-pointer">
                <X className="w-4 h-4 text-black" />
              </div>
              <div className="w-7 h-7 p-2 bg-white rounded-2xl flex justify-center items-center hover:scale-110 transition-transform cursor-pointer">
                <Linkedin className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
