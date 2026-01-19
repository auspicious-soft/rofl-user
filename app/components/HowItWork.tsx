import Image from "next/image";
import HowItWorksCard from "./HowItWorksCard";
import HowItWorksCardMobile from "./HowItWorkMobile";

type StepVariant = "light" | "primary";

interface Step {
  title: string;
  description: string;
  variant: StepVariant;
}

const STEPS: Step[] = [
  {
    title: "Explore What’s Happening",
    description:
      "Find exciting experiences happening right now and choose what interests you.",
    variant: "light",
  },
  {
    title: "Join Instantly",
    description:
      "Jump in instantly with a simple tap and enjoy immediate digital perks.",
    variant: "primary",
  },
  {
    title: "Track The Journey",
    description: "Follow updates in real time and see the progress unfold.",
    variant: "light",
  },
  {
    title: "Celebrate the Outcome",
    description:
      "Enjoy the final moment and share the excitement with everyone.",
    variant: "light",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative flex justify-center bg-black rounded-4xl py-10 overflow-hidden">
      {/* BACKGROUND BLOBS */}
<div className="w-full max-w-[1400px] px-5">
      {/* HEADER */}
      <div className="flex flex-wrap justify-between items-start mb-20 relative z-10">
        <h2 className="text-5xl text-[#F2482D] bricolage font-extrabold leading-[73px] max-w-md">
          How It Works
        </h2>

        <p className="max-w-[520px] text-text-muted text-base leading-7">
          Watch the excitement unfold, follow updates in real time, and share in
          the celebration with a growing community. Whether you’re watching,
          joining, or cheering someone on, every moment feels worth being part
          of.
        </p>
      </div>

      {/* STEPS */}
      <div className="hidden lg:grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 items-center relative z-10">
        {STEPS.map((step, index) => (
          <HowItWorksCard key={index} step={step} index={index} />
        ))}
      </div>
      <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 items-center relative z-10">
        {STEPS.map((step, index) => (
          <HowItWorksCardMobile key={index} step={step} index={index} />
        ))}
      </div>
      </div>
    </section>
  );
}
