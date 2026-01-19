"use client";

import BreadCrumb from "@/app/components/BreadCrumb";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <>
      <BreadCrumb title="Contact Us" />

      <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
        <div className="max-w-6xl mx-auto bg-none p-8 sm:p-10 lg:p-12 ">

          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-[#F2482D] text-3xl sm:text-4xl font-extrabold">
              Send Us A Message
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              If you need help with entries, payments, prizes, or account-related
              questions, reach out to us anytime.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full h-12 px-4 rounded-[10px] bg-[#1c1c1c] text-sm text-white placeholder-gray-500 outline-none border-none focus:border-[#F2482D]"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full h-12 px-4 rounded-[10px] bg-[#1c1c1c] text-sm text-white placeholder-gray-500 outline-none border-none focus:border-[#F2482D]"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-12 px-4 rounded-[10px] bg-[#1c1c1c] text-sm text-white placeholder-gray-500 outline-none border-none focus:border-[#F2482D]"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full h-12 px-4 rounded-[10px] bg-[#1c1c1c] text-sm text-white placeholder-gray-500 outline-none border-none focus:border-[#F2482D]"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-xs text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Enter your message"
                className="w-full px-4 py-3 rounded-[10px] bg-[#1c1c1c] text-sm text-white placeholder-gray-500 outline-none border-none focus:border-[#F2482D] resize-none"
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-10 py-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] rounded-lg bg-[#F2482D] text-white font-semibold flex items-center gap-2 hover:bg-[#e13f26] transition"
              >
                Send Message <ArrowRight />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
