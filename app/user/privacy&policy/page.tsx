"use client";
import BreadCrumb from "@/app/components/BreadCrumb";
import PrivacyPolicy from "@/app/components/PrivacyPolicy";
import React from "react";


const PrivacyPolicyPage = () => {
  return (
    <>
      <BreadCrumb title="Privacy & Policy" />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;