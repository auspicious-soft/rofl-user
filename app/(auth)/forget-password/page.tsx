"use client";

import { ArrowRight, MailOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthLayout from "@/app/components/AuthLayout";

export default function Home() {
  const router = useRouter();

  return (
    <AuthLayout logoClassName="mt-40">
      <form className="space-y-5 border-none p-5 rounded-3xl bg-linear-to-b from-[#39207A] from-0% via-[#000000] via-15% to-[#000000] to-100%">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] bricolage text-[#F2482D]">
            Forgot Password?
          </h1>
          <p className="mt-2 text-base font-normal text-white">
            Reset your password by email link and set a new one securely
          </p>
        </div>

        {/* Email */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <MailOpen size={16} />
          </span>
          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-3 text-sm
               bg-[#272727] text-white placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-[#F2482D]"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F2482D] text-white text-base font-medium border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#c42e17] transition"
        >
          Verify Email
          <ArrowRight size={20} />
        </button>

        {/* Divider */}
        <div className="text-center text-sm font-medium">
          Remember Password?<span className="underline ml-1">Login</span>
        </div>


      </form>
    </AuthLayout>
  );
}
