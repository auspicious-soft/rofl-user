import FeaturedProducts from "@/app/components/FeaturedProducts";
import HeroSection from "@/app/components/HeroSection";
import HowItWorks from "@/app/components/HowItWork";
import LatestWinnersTable from "@/app/components/LuckyWinner";
import FeedbackSection from "@/app/components/Testimonial";
import React from "react";

const DashBoard = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <HowItWorks />
      <LatestWinnersTable />
      <FeedbackSection />
    </div>
  );
};

export default DashBoard;
