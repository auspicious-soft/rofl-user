import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <button
            key={index}
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className={`w-full text-left rounded-xl transition overflow-hidden ${
              isOpen ? "bg-[#F2482D]" : "bg-[#1c1c1c]"
            }`}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className={`text-xl font-bold ${isOpen ? "text-white" : "text-gray-200"}`}>
                {faq.question}
              </span>
              <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}><ChevronDown color="white" /></span>
            </div>

            {isOpen && (
              <div className="px-6 pb-5 text-lg font-medium text-white/90">
                {faq.answer}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
