"use client"
import BreadCrumb from '@/app/components/BreadCrumb';
import { FAQAccordion } from '@/app/components/FAQAccordion'
import React from 'react'

const faqs = [
  {
    question: "How does this work?",
    answer:
      "You purchase entries for a chance to win. Once all entries are sold or the draw ends, a winner is selected fairly and transparently.",
  },
  {
    question: "Is this a guaranteed purchase of the product?",
    answer:
      "No. This is a competition-based entry system. Purchasing an entry does not guarantee winning the product.",
  },
  {
    question: "How many entries are available for each item?",
    answer:
      "Each product has a fixed number of entries, which you can see on the product page.",
  },
  {
    question: "How is the winner selected?",
    answer:
      "Winners are selected using a provably fair and randomized draw system.",
  },
  {
    question: "When will the draw end?",
    answer:
      "The draw ends when all entries are sold or the countdown timer reaches zero.",
  },
  {
    question: "Can I buy more than one entry?",
    answer:
      "Yes, you can purchase multiple entries to increase your chances of winning.",
  },
];
const page = () => {
  return (
    <>
    <BreadCrumb title="Frequently Asked Questions"/>
    
   <section className="w-full p-4  py-10 sm:px-6 lg:px-10 ">
       <FAQAccordion faqs={faqs} />
 
   </section>
   </>
  )
}

export default page
