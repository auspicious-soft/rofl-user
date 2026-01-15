"use client";
import BreadCrumb from "@/app/components/BreadCrumb";
import TermsAndConditions from "@/app/components/TermsCondition";
import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <>
      <BreadCrumb title="Terms & Conditions" />
      <TermsAndConditions />
    </>
  );
};

export default TermsAndConditionsPage;