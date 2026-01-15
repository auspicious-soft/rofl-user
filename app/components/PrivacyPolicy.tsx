

"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="self-stretch px-32 py-10 rounded-4xl inline-flex flex-col justify-start items-center gap-7">
      <div className="self-stretch flex flex-col justify-start items-center gap-7">
        <div className="self-stretch flex flex-col justify-center items-center gap-7">
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch justify-start text-white text-lg font-medium leading-9">
              At ROFL, your privacy is important to us. This Privacy Policy
              explains how we collect, use, store, and protect your personal
              information when you use our platform.
              <br />
              By accessing or using ROFL, you agree to the practices described
              in this policy.
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="flex-1 justify-start text-white text-xl font-bold leading-8">
              1. Information We Collect
            </div>
          </div>
          <div className="self-stretch justify-start">
            <span className="text-white text-sm font-bold leading-6">
              Personal Information
              <br />
            </span>
            <span className="text-[#E6E6E6] text-sm font-normal leading-6">
              We may collect the following details:
              <br />
              Full name
              <br />
              Email address
              <br />
              Contact information
              <br />
              Shipping address (for prize delivery)
              <br />
              Account login details
              <br />
            </span>
            <span className="text-white text-sm font-bold leading-6">
              Payment Information
              <br />
            </span>
            <span className="text-[#E6E6E6] text-sm font-normal leading-6">
              All payment transactions are processed securely through
              third-party payment providers. ROFL does not store your card or
              banking details.
              <br />
            </span>
            <span className="text-white text-sm font-bold leading-6">
              Usage Information
              <br />
            </span>
            <span className="text-[#E6E6E6] text-sm font-normal leading-6">
              We collect non-personal data such as:
              <br />
              Pages visited
              <br />
              Device type and browser
              <br />
              Interaction behavior on the platform
            </span>
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="flex-1 justify-start text-white text-xl font-bold leading-8">
              2. How We Use Your Information
            </div>
          </div>
          <div className="self-stretch justify-start">
            <span className="text-[#E6E6E6] text-sm font-normal leading-6">
              Your information is used to:
              <br />
              Create and manage your account
              <br />
              Process entries and payments
              <br />
              Conduct draws and notify winners
              <br />
              Deliver prizes
              <br />
              Improve platform performance and user experience
              <br />
              Communicate updates, support, and important notices
            </span>
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="flex-1 justify-start text-white text-xl font-bold leading-8">
              3. Sharing of Information
            </div>
          </div>
          <div className="self-stretch justify-start">
            <span className="text-[#E6E6E6] text-sm font-normal leading-6">
              We do not sell or rent your personal information.
              <br />
              Your data may be shared only with:
              <br />
              Payment gateways for transaction processing
              <br />
              Delivery partners for prize shipping
              <br />
              Legal or regulatory authorities when required by law
              <br />
              All partners are required to handle your data securely.
            </span>
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="flex-1 justify-start text-white text-xl font-bold leading-8">
              4. Data Retention
            </div>
          </div>
          <div className="self-stretch justify-start text-[#E6E6E6] text-sm font-normal leading-6">
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this policy or as required by law.
            After this period, your data will be securely deleted or anonymized.
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="flex-1 justify-start text-white text-xl font-bold leading-8">
              5. Your Rights
            </div>
          </div>
          <div className="self-stretch justify-start text-[#E6E6E6] text-sm font-normal leading-6">
            You have the right to:
            <br />
            Access your personal data
            <br />
            Request corrections to your information
            <br />
            Request deletion of your data
            <br />
            Object to processing or restrict its use
            <br />
            Withdraw consent where applicable
            <br />
            To exercise these rights, please contact our support team.
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="flex-1 justify-start text-white text-xl font-bold leading-8">
              6. Changes to This Policy
            </div>
          </div>
          <div className="self-stretch justify-start text-[#E6E6E6] text-sm font-normal leading-6">
            We may update our privacy policy from time to time. Any changes will
            be posted on this page with an updated effective date. We encourage
            you to review this policy periodically to stay informed about how we
            are protecting your information.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
