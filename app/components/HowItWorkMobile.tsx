import Image from "next/image";

interface CardProps {
  step: {
    title: string;
    description: string;
    variant: "light" | "primary";
  };
  index: number;
}

export default function HowItWorksCardMobile({ step, index }: CardProps) {
  const isPrimary = step.variant === "primary";
  const isTop = index % 2 === 0;

  const bg = isPrimary ? "bg-[#F2482D]" : "bg-white";
  const titleColor = isPrimary ? "text-white" : "text-[#F2482D]";

  return (
    <div
      className={`relative max-w-[345px] flex items-center gap-1 h-36 md:h-40
        ${isTop ? "flex-row" : "flex-row-reverse md:flex-row"}
      `}
    >
      {/* SHAPE — UNCHANGED */}
      <div
        className={[
          "relative w-full  h-36 flex items-center justify-center",
          "flex-1",
          bg,
          "rounded-t-full",
        ].join(" ")}
      >
        {/* NOTCH */}
        <div
          className={[
            "absolute left-1/2 -translate-x-1/2 w-8 h-5 bg-black z-10",
            "bottom-0 rounded-t-full",
          ].join(" ")}
          style={{
            boxShadow:
              "0 -8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        />

        {/* TITLE */}
        {/* TITLE */}
        <h3
          className={[
            "absolute inset-0 flex items-center justify-center",
            "text-sm font-bold text-center leading-6 z-10 px-6",
            "translate-y-2",
            titleColor,
          ].join(" ")}
          style={{ maxWidth: "160px", lineHeight: "1.2" }}
        >
          {step.title}
        </h3>

        {/* ELLIPSE — UNCHANGED */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src="/images/elipse.png"
            alt="Ellipse"
            width={80}
            height={80}
            className={"mb-20"}
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="flex-1 text-gray-400 text-sm font-normal leading-4 max-w-50 text-center">
        {step.description}
      </p>
    </div>
  );
}
