"use client";
import BreadCrumb from "@/app/components/BreadCrumb";
import TransactionsTable from "@/app/components/TransactionsTable";
import React from "react";


const TransactionsPurchases = () => {
  return (
    <>
      <BreadCrumb title="Transactions & Purchases" />
      <TransactionsTable />
    </>
  );
};

export default TransactionsPurchases;