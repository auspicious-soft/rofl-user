"use client";
import React, { useState } from "react";
import { ArrowDown, Eye, EyeOff } from "lucide-react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password change submitted");
  };

  const PasswordInput = ({
    label,
    value,
    onChange,
    show,
    setShow,
    placeholder,
  }: any) => (
    <div className="self-stretch px-10 inline-flex justify-start items-start gap-5">
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
        <label className="self-stretch text-white text-lg font-medium leading-9">
          {label}
        </label>

        <div className="relative w-full">
          <input
            type={show ? "text" : "password"}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="self-stretch h-14 w-full px-7 pr-12 py-2.5 bg-[#272727]  text-white outline-none focus:border-[#F2482D]"
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full self-stretch p-10 rounded-4xl inline-flex flex-col items-center gap-7">
      <div className="self-stretch px-32 flex flex-col items-center gap-7">
        <div className="self-stretch flex flex-col items-center gap-7">
          {/* Header */}
          <div className="self-stretch flex flex-col items-start gap-2.5">
            <div className="self-stretch text-center text-[#F2482D] text-5xl font-extrabold">
              Change Password
            </div>
            <div className="self-stretch text-center text-white text-lg font-medium">
              Create a strong new password and confirm it to secure access.
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="self-stretch flex flex-col gap-10"
          >
            <div className="self-stretch p-4 rounded-2xl border border-[#E6E6E6] flex flex-col gap-5">
              <PasswordInput
                label="Old Password"
                value={oldPassword}
                onChange={(e: any) => setOldPassword(e.target.value)}
                show={showOld}
                setShow={setShowOld}
                placeholder="Enter old password"
              />

              <PasswordInput
                label="Set a New Password"
                value={newPassword}
                onChange={(e: any) => setNewPassword(e.target.value)}
                show={showNew}
                setShow={setShowNew}
                placeholder="Enter new password"
              />

              <PasswordInput
                label="Confirm New Password"
                value={confirmPassword}
                onChange={(e: any) => setConfirmPassword(e.target.value)}
                show={showConfirm}
                setShow={setShowConfirm}
                placeholder="Confirm new password"
              />
            </div>

            {/* Submit */}
            <div className="self-stretch flex justify-center">
              <button
                type="submit"
                className="w-72 h-14 bg-[#F2482D] rounded-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black flex items-center justify-center gap-2.5"
              >
                <span className="text-white text-base font-medium">
                  Set Password
                </span>
                <ArrowDown className="w-3 h-3.5 rotate-90 text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
