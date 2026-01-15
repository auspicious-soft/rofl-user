"use client";
import React, { useState } from "react";
import { ArrowDown, ChevronDown } from "lucide-react";

const ProfileDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated");
  };

  return (
    <div className="w-full self-stretch p-10 rounded-4xl inline-flex flex-col items-center gap-7">
      <div className="self-stretch px-32 inline-flex flex-col justify-start items-center gap-7">
        <div className="self-stretch flex flex-col justify-center items-center gap-7">
          {/* Header Section */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch text-center justify-center text-[#F2482D] text-5xl font-extrabold bricolage capitalize leading-18.25">
              Profile Details
            </div>
            <div className="self-stretch text-center justify-start text-white text-lg font-medium leading-9">
              If you need help with entries, payments, prizes, or account-related questions, reach out to us anytime.
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="self-stretch flex flex-col justify-start items-start gap-10">
            {/* Basic Details Section */}
            <div className="self-stretch p-4 rounded-2xl border border-[#E6E6E6] flex flex-col justify-start items-start gap-5">
              <div className="self-stretch justify-start text-white text-xl font-bold leading-9">
                Basic Details
              </div>

              {/* First Name & Last Name */}
              <div className="self-stretch px-10 inline-flex justify-start items-start gap-5">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                  <label className="self-stretch justify-start text-white text-lg font-medium leading-9">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    className="self-stretch w-full h-14 px-7 py-4 bg-[#272727]  text-white placeholder:text-gray-500 outline-none focus:border-[#F2482D]"
                  />
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                  <label className="self-stretch justify-start text-white text-lg font-medium leading-9">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    className="self-stretch w-full h-14 px-7 py-4 bg-[#272727]  text-white placeholder:text-gray-500 outline-none focus:border-[#F2482D]"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="self-stretch px-10 inline-flex justify-start items-start gap-5">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                  <label className="self-stretch justify-start text-white text-lg font-medium leading-9">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="self-stretch w-full h-14 px-7 py-4 bg-[#272727]  text-white placeholder:text-gray-500 outline-none focus:border-[#F2482D]"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address Section */}
            <div className="self-stretch p-4 rounded-2xl border border-[#E6E6E6] flex flex-col justify-start items-start gap-5">
              <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch justify-start text-white text-xl font-bold leading-9">
                  Shipping Address
                </div>
              </div>

              {/* Country & State */}
              <div className="self-stretch px-10 inline-flex justify-start items-start gap-5">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                  <label className="self-stretch justify-start text-white text-lg font-medium leading-9">
                    Country
                  </label>
                  <div className="relative w-full">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="self-stretch w-full px-7 py-4 bg-[#272727]  text-white outline-none focus:border-[#F2482D] appearance-none cursor-pointer"
                    >
                      <option value="">Select Country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                  <label className="self-stretch justify-start text-white text-lg font-medium leading-9">
                    State
                  </label>
                  <div className="relative w-full">
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="self-stretch w-full px-7 py-4 bg-[#272727]  text-white outline-none focus:border-[#F2482D] appearance-none cursor-pointer"
                    >
                      <option value="">Select State</option>
                      <option value="ca">California</option>
                      <option value="ny">New York</option>
                      <option value="tx">Texas</option>
                      <option value="fl">Florida</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Street Address */}
              <div className="self-stretch px-10 inline-flex justify-start items-start gap-5">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                  <label className="self-stretch justify-start text-white text-lg font-medium leading-9">
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    placeholder="Enter your street address"
                    className="self-stretch w-full h-14 px-7 py-4 bg-[#272727]  text-white placeholder:text-gray-500 outline-none focus:border-[#F2482D]"
                  />
                </div>
              </div>

              {/* City & Postal Code */}
              <div className="self-stretch px-10 inline-flex justify-start items-start gap-5">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                  <label className="self-stretch justify-start text-white text-lg font-medium leading-9">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city"
                    className="self-stretch w-full h-14 px-7 py-4 bg-[#272727]  text-white placeholder:text-gray-500 outline-none focus:border-[#F2482D]"
                  />
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                  <label className="self-stretch justify-start text-white text-lg font-medium leading-9">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Enter postal code"
                    className="self-stretch w-full h-14 px-7 py-4 bg-[#272727]  text-white placeholder:text-gray-500 outline-none focus:border-[#F2482D]"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-72 h-14 bg-[#F2482D] rounded-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <span className="text-white text-base font-medium leading-5">
            Update Profile
          </span>
          <ArrowDown className="w-4 h-4 rotate-270 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;