"use client";
import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";

interface Transaction {
  id: string;
  name: string;
  item: string;
  itemPrice: string;
  date: string;
}

const transactionsData: Transaction[] = [
  {
    id: "12345",
    name: "alex_jordan",
    item: "iPhone 17",
    itemPrice: "17 Tickets",
    date: "2023-10-01",
  },
  {
    id: "67890",
    name: "chris_smith",
    item: "Gaming Laptop",
    itemPrice: "17 Tickets",
    date: "2023-10-02",
  },
  {
    id: "12345",
    name: "jordan_lee",
    item: "iPhone 17",
    itemPrice: "17 Tickets",
    date: "2023-10-03",
  },
  {
    id: "67890",
    name: "taylor_brown",
    item: "iPhone 17",
    itemPrice: "17 Tickets",
    date: "2023-10-04",
  },
  {
    id: "12345",
    name: "morgan_davis",
    item: "Gaming Laptop",
    itemPrice: "17 Tickets",
    date: "2023-10-10",
  },
  {
    id: "67890",
    name: "jamie_wilson",
    item: "iPhone 17",
    itemPrice: "17 Tickets",
    date: "2023-10-05",
  },
  {
    id: "12345",
    name: "casey_miller",
    item: "iPhone 17",
    itemPrice: "17 Tickets",
    date: "2023-10-06",
  },
  {
    id: "67890",
    name: "riley_anderson",
    item: "Gaming Laptop",
    itemPrice: "17 Tickets",
    date: "2023-10-07",
  },
  {
    id: "12345",
    name: "cameron_thomas",
    item: "iPhone 17",
    itemPrice: "17 Tickets",
    date: "2023-10-08",
  },
];

const TransactionsTable = () => {
  const [transactions] = useState<Transaction[]>(transactionsData);

  return (
    <div className="w-full self-stretch px-4 sm:px-6 md:px-10 lg:px-32 py-10 rounded-4xl inline-flex flex-col justify-center items-center gap-7">
      <div className="w-full overflow-x-auto">
        <div className="min-w-160 flex flex-col justify-start items-start">
          {/* Table Header */}
          <div className="w-full h-11 px-5 bg-[#F2482D] rounded-md border-b border-white/10 inline-flex justify-start items-center">
            <div className="min-w-40 h-10 px-2 py-px flex justify-start items-center overflow-hidden">
              <div className="justify-start text-white text-base font-medium leading-5">
                Sr No.
              </div>
              <div className="w-4 h-4 relative opacity-50 overflow-hidden ml-1">
                <ArrowUpDown className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1 h-10 min-w-40 px-2 py-px flex justify-start items-center overflow-hidden">
              <div className="justify-start text-white text-base font-medium leading-5">
                Name
              </div>
            </div>
            <div className="flex-1 h-10 min-w-40 px-2 py-px flex justify-start items-center overflow-hidden">
              <div className="justify-start text-white text-base font-medium leading-5">
                Item
              </div>
            </div>
            <div className="w-56 h-10 min-w-40 px-2  py-px flex justify-start items-center overflow-hidden">
              <div className="justify-start text-white text-base font-medium leading-5">
                Item Price
              </div>
            </div>
            <div className="w-56 h-10 min-w-40 px-2 py-px flex justify-start items-center overflow-hidden">
              <div className="justify-start text-white text-base font-medium leading-5">
                Date
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="w-full bg-black flex flex-col justify-start items-start">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className={`w-full h-12 px-5 ${
                  index % 2 === 0 ? "bg-black" : "bg-[#272727]"
                } ${
                  index === 0 ? "pt-1" : ""
                } rounded-md border-b border-neutral-600/5 inline-flex justify-start items-center`}
              >
                <div className="min-w-40 h-12 p-2 flex justify-start items-center">
                  <div className="justify-start text-[#E6E6E6] text-sm font-medium leading-5">
                    {transaction.id}
                  </div>
                </div>
                <div className="flex-1 min-w-40 h-12 p-2 flex justify-start items-center">
                  <div className="justify-start text-[#E6E6E6] text-base font-medium leading-5">
                    {transaction.name}
                  </div>
                </div>
                <div className="flex-1 min-w-40 h-12 p-2 flex justify-start items-center">
                  <div className="justify-start text-[#E6E6E6] text-base font-medium leading-5">
                    {transaction.item}
                  </div>
                </div>
                <div className="min-w-40 h-12 p-2 flex justify-start items-center">
                  <div className="justify-start text-[#E6E6E6] text-base font-medium leading-5">
                    {transaction.itemPrice}
                  </div>
                </div>
                <div className="min-w-40 h-12 p-2 flex justify-start items-center">
                  <div className="justify-start text-[#E6E6E6] text-base font-medium leading-5">
                    {transaction.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;