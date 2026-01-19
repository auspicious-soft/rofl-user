import Image from "next/image";

interface CardProps {
  step: {
    title: string;
    description: string;
    variant: "light" | "primary";
  };
  index: number;
}

export default function HowItWorksCard({ step, index }: CardProps) {
  const isPrimary = step.variant === "primary";
  const isTop = index % 2 === 0;

  const bg = isPrimary ? "bg-[#F2482D]" : "bg-white";
  const titleColor = isPrimary ? "text-white" : "text-[#F2482D]";

  return (
    <div className="relative flex flex-col items-center w-full h-120">
      {/* DESCRIPTION */}
     {isTop ? (
        <p className="mt-70 text-gray-400 text-sm leading-6 max-w-50 text-center ">
          {step.description}
        </p>
      ) : (
        <p className="mt-36 text-gray-400 text-sm leading-6 max-w-50 text-center">
          {step.description}
        </p>
      )}

      {/* SHAPE — FULL WIDTH */}
      <div
        className={[
          "absolute left-1/2 -translate-x-1/2 w-full h-60 flex items-center justify-center",
          bg,

          isTop ? "top-0 rounded-t-full" : "bottom-0 rounded-b-full",
        ].join(" ")}
      >
        {/* NOTCH with shadow */}
        <div
          className={[
            "absolute left-1/2 -translate-x-1/2 w-14 h-7 bg-black z-10",
            isTop ? "bottom-0 rounded-t-full" : "top-0 rounded-b-full",
          ].join(" ")}
          style={{
            boxShadow: isTop
              ? "0 -8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(0, 0, 0, 0.2)"
              : "0 8px 16px rgba(0, 0, 0, 0.3), inset 0 -2px 8px rgba(0, 0, 0, 0.2)",
          }}
        />

        {/* TITLE */}
        <h3
          className={[
            "text-xl font-bold text-center px-8 leading-tight relative z-10",
            titleColor,
            isTop ? "mb-4" : "mt-4",
          ].join(" ")}
          style={{ 
            maxWidth: '160px',
            lineHeight: '1.2'
          }}
        >
          {step.title}
        </h3>
        {/* ELLIPSE IMAGE */}
        <div className={`absolute ${isTop ? " mb-36" : "mt-36"} inset-0 flex items-center justify-center z-0`}>
          <Image
            src="/images/elipse.png"
            alt="Ellipse"
            width={100}
            height={100}
            className={`${isTop ? " " : "rotate-180"} `}
          />
        </div>
      </div>
    </div>
  );
}
