"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";

interface Transaction {
  id: string;
  name: string;
  item: string;
  itemPrice: string;
  date: string;
}

const transactionsData: Transaction[] = [
  { id: "12345", name: "alex_jordan", item: "iPhone 17", itemPrice: "17 Tickets", date: "2023-10-01" },
  { id: "67890", name: "chris_smith", item: "Gaming Laptop", itemPrice: "17 Tickets", date: "2023-10-02" },
  { id: "12345", name: "jordan_lee", item: "iPhone 17", itemPrice: "17 Tickets", date: "2023-10-03" },
  { id: "67890", name: "taylor_brown", item: "iPhone 17", itemPrice: "17 Tickets", date: "2023-10-04" },
  { id: "12345", name: "morgan_davis", item: "Gaming Laptop", itemPrice: "17 Tickets", date: "2023-10-10" },
  { id: "67890", name: "jamie_wilson", item: "iPhone 17", itemPrice: "17 Tickets", date: "2023-10-05" },
  { id: "12345", name: "casey_miller", item: "iPhone 17", itemPrice: "17 Tickets", date: "2023-10-06" },
  { id: "67890", name: "riley_anderson", item: "Gaming Laptop", itemPrice: "17 Tickets", date: "2023-10-07" },
  { id: "12345", name: "cameron_thomas", item: "iPhone 17", itemPrice: "17 Tickets", date: "2023-10-08" },
];

export default function TransactionsTable() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-32 py-10">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[900px] bg-[#272727]">

          {/* HEADER */}
          <div className="grid grid-cols-5 bg-[#F2482D] h-12 rounded-md text-white font-medium">
            <HeaderCell sortable label="Sr No." />
            <HeaderCell label="Name" />
            <HeaderCell label="Item" />
            <HeaderCell label="Item Price" />
            <HeaderCell label="Date" />
          </div>

          {/* BODY */}
          <div className="flex flex-col mt-1">
            {transactionsData.map((tx, index) => (
              <div
                key={index}
                className={`grid grid-cols-5 h-12 items-center rounded-md ${
                  index % 2 === 0 ? "bg-black" : "bg-[#272727]"
                }`}
              >
                <BodyCell>{tx.id}</BodyCell>
                <BodyCell>{tx.name}</BodyCell>
                <BodyCell>{tx.item}</BodyCell>
                <BodyCell>{tx.itemPrice}</BodyCell>
                <BodyCell>{tx.date}</BodyCell>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Cells ---------- */

function HeaderCell({
  label,
  sortable = false,
}: {
  label: string;
  sortable?: boolean;
}) {
  return (
    <div className="flex justify-center items-center gap-1 text-center">
      <span>{label}</span>
      {sortable && <ArrowUpDown className="w-4 h-4 opacity-70" />}
    </div>
  );
}

function BodyCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center text-center text-[#E6E6E6] text-sm font-medium">
      {children}
    </div>
  );
}
