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
    <div className="relative flex flex-col items-center w-full h-80">
    

      {/* DESCRIPTION */}
      {isTop ? (
        <p className="mt-44 text-gray-400 text-sm leading-6 max-w-50 text-center px-4">
          {step.description}
        </p>
      ) : (
        <p className="mb-44 text-gray-400 text-sm leading-6 max-w-50 text-center px-4">
          {step.description}
        </p>
      )}

      {/* SHAPE — FULL WIDTH */}
      <div
        className={[
          "absolute left-1/2 -translate-x-1/2 w-full h-40 flex items-center justify-center",
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
              ? '0 -8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(0, 0, 0, 0.2)'
              : '0 8px 16px rgba(0, 0, 0, 0.3), inset 0 -2px 8px rgba(0, 0, 0, 0.2)'
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
      </div>
    </div>
  );
}