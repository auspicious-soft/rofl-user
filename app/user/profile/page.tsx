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
    <div className="w-full p-4 sm:p-6 lg:p-10 rounded-4xl">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-[#F2482D] text-3xl sm:text-4xl lg:text-5xl font-extrabold bricolage">
            Profile Details
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
            If you need help with entries, payments, prizes, or account-related questions, reach out to us anytime.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-10"
        >
          {/* Basic Details */}
          <div className="w-full p-4 sm:p-6 rounded-2xl border border-[#E6E6E6] flex flex-col gap-6">
            <h2 className="text-white text-lg sm:text-xl font-bold">
              Basic Details
            </h2>

            {/* First + Last */}
            <div className="flex flex-col lg:flex-row gap-5">
              <Input
                label="First Name"
                value={firstName}
                onChange={setFirstName}
                placeholder="Enter your first name"
              />
              <Input
                label="Last Name"
                value={lastName}
                onChange={setLastName}
                placeholder="Enter your last name"
              />
            </div>

            {/* Email */}
            <Input
              label="Email Address"
              value={email}
              onChange={setEmail}
              placeholder="Enter your email address"
              type="email"
            />
          </div>

          {/* Shipping Address */}
          <div className="w-full p-4 sm:p-6 rounded-2xl border border-[#E6E6E6] flex flex-col gap-6">
            <h2 className="text-white text-lg sm:text-xl font-bold">
              Shipping Address
            </h2>

            {/* Country + State */}
            <div className="flex flex-col lg:flex-row gap-5">
              <Select
                label="Country"
                value={country}
                onChange={setCountry}
                options={["United States", "United Kingdom", "Canada", "Australia"]}
              />
              <Select
                label="State"
                value={state}
                onChange={setState}
                options={["California", "New York", "Texas", "Florida"]}
              />
            </div>

            <Input
              label="Street Address"
              value={streetAddress}
              onChange={setStreetAddress}
              placeholder="Enter your street address"
            />

            <div className="flex flex-col lg:flex-row gap-5">
              <Input
                label="City"
                value={city}
                onChange={setCity}
                placeholder="Enter your city"
              />
              <Input
                label="Postal Code"
                value={postalCode}
                onChange={setPostalCode}
                placeholder="Enter postal code"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-72 h-12 sm:h-14 bg-[#F2482D] rounded-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black flex items-center justify-center gap-2.5"
            >
              <span className="text-white text-sm sm:text-base font-medium">
                Update Profile
              </span>
              <ArrowDown className="w-4 h-4 rotate-270 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;

/* ---------- Reusable Components ---------- */

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: any) => (
  <div className="flex-1 flex flex-col gap-2.5">
    <label className="text-white text-sm sm:text-base font-medium">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-12 sm:h-14 px-5 rounded-[10px] bg-[#272727] text-white outline-none"
    />
  </div>
);

const Select = ({ label, value, onChange, options }: any) => (
  <div className="flex-1 flex flex-col gap-2.5">
    <label className="text-white text-sm sm:text-base font-medium">
      {label}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 sm:h-14 px-5 sm:px-7 bg-[#272727] text-white appearance-none cursor-pointer"
      >
        <option value="">Select {label}</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
    </div>
  </div>
);
