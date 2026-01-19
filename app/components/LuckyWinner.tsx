import React from "react";
import Image from "next/image";
import LayerImage1 from "../../public/images/Layer_1.svg";
import LayerImage2 from "../../public/images/Layer_2.svg";

interface Winner {
  srNo: string;
  name: string;
  item: string;
  date: string;
}

const WINNERS: Winner[] = [
  { srNo: "12345", name: "alex_jordan", item: "iPhone 17", date: "2023-10-01" },
  { srNo: "67890", name: "chris_smith", item: "Gaming Laptop", date: "2023-10-02" },
  { srNo: "12345", name: "jordan_lee", item: "iPhone 17", date: "2023-10-03" },
  { srNo: "67890", name: "taylor_brown", item: "iPhone 17", date: "2023-10-04" },
  { srNo: "12345", name: "morgan_davis", item: "Gaming Laptop", date: "2023-10-10" },
  { srNo: "67890", name: "jamie_wilson", item: "iPhone 17", date: "2023-10-05" },
  { srNo: "12345", name: "casey_miller", item: "iPhone 17", date: "2023-10-06" },
  { srNo: "67890", name: "riley_anderson", item: "Gaming Laptop", date: "2023-10-07" },
  { srNo: "12345", name: "cameron_thomas", item: "iPhone 17", date: "2023-10-08" },
];

export default function LatestWinnersTable() {
  return (
    <section className="relative rounded-[10px] py-6 px-4 sm:px-8 lg:py-10 lg:px-20 space-y-6 lg:space-y-7 overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-center items-center gap-4 sm:gap-10 lg:gap-20">
        <Image
          src={LayerImage1}
          alt="Decorative Layer 1"
          width={40}
          height={40}
          className="hidden sm:block"
        />

        <h2 className="text-[#F2482D] text-2xl sm:text-4xl lg:text-5xl bricolage font-extrabold capitalize text-center">
          Our Latest Lucky Winners
        </h2>

        <Image
          src={LayerImage2}
          alt="Decorative Layer 2"
          width={40}
          height={40}
          className="hidden sm:block"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full border-separate border-spacing-y-1">
          {/* TABLE HEADER */}
          <thead>
            <tr className="bg-[#F2482D] h-10 lg:h-11 rounded-md">
              <th className="w-24 sm:w-36 px-2 text-left text-sm lg:text-base font-medium text-white rounded-l-md">
                Sr No.
              </th>
              <th className="px-2 text-left text-sm lg:text-base font-medium text-white">
                Name
              </th>
              <th className="px-2 text-left text-sm lg:text-base font-medium text-white">
                Item
              </th>
              <th className="w-36 sm:w-56 px-2 text-left text-sm lg:text-base font-medium text-white rounded-r-md">
                Date
              </th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {WINNERS.map((winner, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <tr
                  key={idx}
                  className={`h-11 lg:h-12 ${
                    isEven ? "" : "bg-[#19191D] rounded-md"
                  }`}
                >
                  <td className="w-24 sm:w-36 text-white px-2 text-xs lg:text-sm font-medium text-Stroke rounded-l-md">
                    {winner.srNo}
                  </td>

                  <td className="px-2 text-sm text-white lg:text-base font-medium text-Stroke whitespace-nowrap">
                    {winner.name}
                  </td>

                  <td className="px-2 text-sm text-white lg:text-base font-medium text-Stroke whitespace-nowrap">
                    {winner.item}
                  </td>

                  <td className="w-36 sm:w-56 text-white px-2 text-sm lg:text-base font-medium text-Stroke rounded-r-md whitespace-nowrap">
                    {winner.date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
