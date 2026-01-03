import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const BentoCard = ({
  children,
  className = "",
  title,
  icon: Icon,
  action,
  padding = "p-6",
  headerSpacing = "mb-4",
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseEnter = () => {
      gsap.to(card, {
        scale: 1, // Fix 3: Kill scale hover
        duration: 0.3,
        ease: "power2.out",
        borderColor: "rgba(99, 102, 241, 0.5)", // Soft indigo border
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.12)",
      });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut",
        borderColor: "rgb(229, 231, 235)", // tailwind gray-200
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      });
    };

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", onMouseEnter);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        bg-white 
        border border-gray-200 
        ${padding} rounded-3xl 
        shadow-md
        flex flex-col 
        transition-colors duration-500 
        ${className}
      `}
    >
      <div className={`flex justify-between items-center ${headerSpacing}`}>
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-indigo-600" />}
          {title && <h3 className="font-bold text-gray-800">{title}</h3>}
        </div>
        {action && <div className="text-gray-500">{action}</div>}
      </div>

      <div className="overflow-hidden relative text-gray-600">{children}</div>
    </div>
  );
};

export default BentoCard;
