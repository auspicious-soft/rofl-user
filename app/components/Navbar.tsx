"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, History, LogOut, User, User2 } from "lucide-react";
import { Lock } from "../utils/icons";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
   const closeAll = () => {
    setOpen(false);
    setMobileOpen(false);
  };
  return (
    <div className="self-stretch px-4 sm:px-6 md:px-10 py-3 bg-white rounded-[10px] flex items-center m-4 md:m-8 relative">
      {/* Left: mobile menu button + desktop links */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen((s) => !s)}
          className="md:hidden p-2 rounded-md bg-transparent"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/user/marketplace"
            className="text-black text-base font-medium "
          >
            Marketplace
          </Link>
          <Link
            href="/user/winners"
            className="text-black text-base font-medium "
          >
            Winners
          </Link>
          <Link href="/user/faqs" className="text-black text-base font-medium ">
            FAQ’s
          </Link>
          <Link
            href="https://rofl-admin.vercel.app/register"
            className="text-black text-base font-medium "
          >
            List Your Item
          </Link>
        </div>
      </div>

      {/* Center spacer to allow logo positioning */}
      <div className="flex-1" />

      {/* Logo (center on md+, right on mobile) */}
      <div className="ml-auto md:ml-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        <Image
          className="w-32 h-16 object-contain"
          src="/images/leftLogo.png"
          alt="Logo 2"
          width={126}
          height={70}
        />
      </div>

      {/* Right: login dropdown (hidden on mobile) */}
      <div className="relative w-72 flex justify-end items-center gap-7 hidden md:flex">
        {/* Trigger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="px-5 py-2 bg-[#F2482D] rounded-[10px] outline outline-offset-1 flex items-center gap-3 text-white"
        >
          <User2 className="w-4 h-4" />

          <span className="text-base font-medium ">Login</span>

          {/* Dropdown Icon */}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute top-full px-2 right-0 mt-2 max-w-100 rounded-xl bg-[#FFFFFF] border-none shadow-xl overflow-hidden z-50">
            <Link href={"/user/transaction&purchase"} className="w-full px-4 py-3 flex items-center gap-3 text-sm text-[#464646] hover:bg-white/10">
              <History />
              Transactions / Purchase
            </Link>

            <Link href={"/user/profile/change-password"} className="w-full px-4 py-3 flex items-center gap-3 text-sm text-[#464646] hover:bg-white/10">
              <Lock />
              Change Password
            </Link>
            <Link href={"/user/profile"} className="w-full px-4 py-3 flex items-center gap-3 text-sm text-[#464646] hover:bg-white/10">
              <User className="w-4 h-4" />
              My Profile
            </Link>

            <button className="w-full px-4 py-3 border-t border-t-[#E2E2E2] outline-none  flex items-center gap-3 text-[#464646] text-sm">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40">
          <div className="flex flex-col text-black px-4 py-4 gap-2">
            <Link href="/user/marketplace" onClick={closeAll} className="py-2 text-sm font-medium">
              Marketplace
            </Link>
            <Link href="/user/winners" onClick={closeAll} className="py-2 text-sm font-medium">
              Winners
            </Link>
            <Link href="/user/faqs" onClick={closeAll} className="py-2 text-sm font-medium">
              FAQ’s
            </Link>
            <Link href="https://rofl-admin.vercel.app/register" onClick={closeAll} className="py-2 text-sm font-medium">
              List Your Item
            </Link>
            {/* <button
              onClick={() => {
                setOpen(true);
                setMobileOpen(false);
              }}
              className="py-2 text-sm text-left font-medium"
            >
              Login / Account
            </button> */}
            {/* <hr className="my-2" /> */}
            <Link href={"/user/transaction&purchase"} onClick={closeAll} className="py-2 text-sm text-left">
              Transactions / Purchase
            </Link>
            <Link href={"/user/profile/change-password"} onClick={closeAll} className="py-2 text-sm text-left">Change Password</Link>
            <Link href={"/user/profile"} onClick={closeAll} className="py-2 text-sm text-left">My Profile</Link>
            <button className="py-2 text-sm text-left text-red-600">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
