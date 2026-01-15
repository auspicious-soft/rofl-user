"use client";
import SectionHeader from "@/app/components/SectionHeader";
import TransactionsTable from "@/app/components/TransactionsTable";
import React from "react";


const TransactionsPurchases = () => {
  return (
    <>
      <SectionHeader title="Transactions & Purchases" />
      <TransactionsTable />
    </>
  );
};

export default TransactionsPurchases;