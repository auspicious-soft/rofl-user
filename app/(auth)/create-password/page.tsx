"use client";

import { ArrowRight, Lock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import AuthLayout from "@/app/components/AuthLayout";
import { ClosedEye, Eye } from "@/app/utils/icons";

export default function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /**
     * Call your API here
     * await resetPassword(...)
     * On success:
     */
    setShowSuccessModal(true);
  };

  return (
    <>
      <AuthLayout logoClassName="mt-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 border-none p-5 rounded-3xl bg-linear-to-b from-[#39207A] from-0% via-[#000000] via-15% to-[#000000] to-100%"
        >
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] bricolage text-[#F2482D]">
              Create Password
            </h1>
            <p className="mt-2 text-base font-normal text-white">
              Create a strong new password and confirm it to secure access.
            </p>
          </div>

          {/* New Password */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Lock size={16} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Set New Password"
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

          {/* Confirm Password */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Lock size={16} />
            </span>
            <input
              type={confirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
              className="w-full rounded-xl border border-gray-200 pl-10 pr-10 py-3 text-sm bg-[#272727] text-white focus:outline-none focus:ring-2 focus:ring-[#F2482D]"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              onClick={() => setConfirmPassword(!confirmPassword)}
            >
              {confirmPassword ? <ClosedEye /> : <Eye />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F2482D] text-white text-base font-medium border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#c42e17] transition"
          >
            Set Password
            <ArrowRight size={20} />
          </button>

          {/* Login Link */}
          <p className="text-center text-sm font-normal text-white">
            Remember Password?{" "}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="font-medium underline hover:text-[#c42e17]"
            >
              Login
            </button>
          </p>
        </form>
      </AuthLayout>

      {/* ✅ SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-3xl bg-[#08080A] p-6 text-center shadow-xl">
            <Image
              src="/resetLogo.svg"
              alt="Password Updated"
              width={112}
              height={112}
              className="mx-auto mb-4"
            />

            <h2 className="text-4xl font-extrabold bricolage text-[#F2482D] drop-shadow-sm">
              Password Updated
            </h2>

            <p className="mt-2 text-sm text-[#464646]">
              Your password has been updated successfully!
            </p>

            <button
              className="mt-6 w-full rounded-xl bg-[#F2482D] py-3 text-white font-medium border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#c42e17] transition flex items-center justify-center gap-2"
              onClick={() => {
                setShowSuccessModal(false);
                router.push("/");
              }}
            >
              Continue
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
