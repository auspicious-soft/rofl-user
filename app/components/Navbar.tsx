"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, History, LogOut, User, User2 } from "lucide-react";
import { Lock } from "../utils/icons";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="self-stretch px-10 bg-white rounded-[10px] flex justify-between items-center m-8">
      <div className="w-96 flex justify-start items-center gap-7">
        <Link href="/user/marketplace" className="text-black text-base font-medium ">
          Marketplace
        </Link>
        <Link href="/user/winners" className="text-black text-base font-medium ">
          Winners
        </Link>
        <Link href="/user/faqs" className="text-black text-base font-medium ">
          FAQ’s
        </Link>
        <Link href="/user/list-item" className="text-black text-base font-medium ">
          List Your Item
        </Link>
      </div>

      <Image
        className="w-32 h-16 object-contain"
        src="/images/leftLogo.png"
        alt="Logo 2"
        width={126}
        height={70}
      />
      <div className="relative w-72 flex justify-end items-center gap-7">
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
            <button className="w-full px-4 py-3 flex items-center gap-3 text-sm text-[#464646] hover:bg-white/10">
              <History />
              Transactions / Purchase
            </button>

            <button className="w-full px-4 py-3 flex items-center gap-3 text-sm text-[#464646] hover:bg-white/10">
              <Lock />
              Change Password
            </button>
            <button className="w-full px-4 py-3 flex items-center gap-3 text-sm text-[#464646] hover:bg-white/10">
              <User className="w-4 h-4" />
              My Profile
            </button>

            <button className="w-full px-4 py-3 border-t border-t-[#E2E2E2] outline-none  flex items-center gap-3 text-[#464646] text-sm">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
