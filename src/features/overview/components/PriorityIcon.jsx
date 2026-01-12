import React from "react";
import {
  AlertOctagon,
  ArrowUp,
  Minus,
  ArrowDown,
  HelpCircle,
} from "lucide-react";

const PriorityIcon = ({ priority }) => {
  // Normalize input to handle "high", "High", "HIGH"
  const normalizedPriority =
    (priority || "Low").charAt(0).toUpperCase() +
    (priority || "Low").slice(1).toLowerCase();

  const config = {
    Critical: {
      icon: AlertOctagon,
      // Red: Strong urgency
      wrapper: "bg-red-50 text-red-700 border-red-200",
      iconColor: "text-red-600",
      animate: true,
    },
    High: {
      icon: ArrowUp,
      // Orange: Attention needed
      wrapper: "bg-orange-50 text-orange-700 border-orange-200",
      iconColor: "text-orange-600",
      animate: false,
    },
    Medium: {
      icon: Minus,
      // Blue: Standard business
      wrapper: "bg-blue-50 text-blue-700 border-blue-200",
      iconColor: "text-blue-600",
      animate: false,
    },
    Low: {
      icon: ArrowDown,
      // Slate: De-emphasized
      wrapper: "bg-slate-50 text-slate-600 border-slate-200",
      iconColor: "text-slate-500",
      animate: false,
    },
  };

  // Fallback for unknown priorities
  const currentConfig = config[normalizedPriority] || {
    icon: HelpCircle,
    wrapper: "bg-gray-50 text-gray-600 border-gray-200",
    iconColor: "text-gray-500",
    animate: false,
  };

  const IconComponent = currentConfig.icon;

  return (
    <div
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-medium w-fit
        ${currentConfig.wrapper}
      `}
    >
      <IconComponent
        className={`
          w-3.5 h-3.5 
          ${currentConfig.iconColor}
          ${currentConfig.animate ? "animate-pulse" : ""}
        `}
        strokeWidth={2.5}
      />
      <span>{normalizedPriority}</span>
    </div>
  );
};

export default PriorityIcon;
