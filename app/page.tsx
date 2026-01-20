"use client";

import { ArrowRight, Lock, MailOpen } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "./components/AuthLayout";
import { ClosedEye, Eye, Google } from "./utils/icons";
import Image from "next/image";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <AuthLayout logoClassName="mt-5">
      <form className="space-y-5 border-none p-5 rounded-3xl bg-linear-to-b from-[#39207A] from-0% via-[#000000] via-15% to-[#000000] to-100%">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] bricolage text-[#F2482D]">
            Login To Your Account
          </h1>
          <p className="mt-2 text-base font-normal text-white">
            Sign in with email and password to securely access your account.
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

        {/* Password */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Lock size={16} />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-gray-200 pl-10 pr-10 py-3 text-sm bg-[#272727] text-white focus:outline-none focus:ring-2 focus:ring-[#F2482D]"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ClosedEye /> : <Eye />}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <button
            type="button"
            onClick={() => router.push("/forget-password")}
            className="text-xs text-white underline hover:text-[#F2482D]"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F2482D] text-white text-base font-medium border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#c42e17] transition"
        >
          Login
          <ArrowRight size={20} />
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-gray-500">Or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border-none rounded-xl py-3 text-sm font-medium text-white bg-[#272727] transition"
        >
         <Google/>
          Continue with Google
        </button>

        {/* Create Account */}
        <p className="text-left text-sm text-white">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/register")}
            className=" font-medium underline hover:text-[#c42e17]"
          >
            Create One
          </button>
        </p>
      </form>
    </AuthLayout>
  );
}
