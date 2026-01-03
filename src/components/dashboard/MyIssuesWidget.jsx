import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import BentoCard from "./BentoCard"; // Renamed for clarity

const issues = [
  {
    id: "ISS-102",
    title: "Fix navigation z-index bug",
    priority: "High",
    status: "In Progress",
  },
  {
    id: "ISS-105",
    title: "Update user profile schema",
    priority: "Medium",
    status: "Todo",
  },
  {
    id: "ISS-110",
    title: "Integrate Stripe API",
    priority: "Urgent",
    status: "In Progress",
  },
  {
    id: "ISS-114",
    title: "Mobile responsive tweaks",
    priority: "Low",
    status: "Done",
  },
];

const MyIssuesWidget = () => {
  // Helper for Status Badge Colors
  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "text-blue-700 bg-blue-50 border-blue-100";
      case "Done":
        return "text-green-700 bg-green-50 border-green-100";
      case "Todo":
      default:
        return "text-gray-600 bg-gray-50 border-gray-100";
    }
  };

  // Helper for Priority Dot Colors
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Urgent":
        return "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]";
      case "High":
        return "bg-orange-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-slate-400";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <BentoCard
      title="My Issues"
      icon={CheckCircle2}
      className="h-full"
      padding="p-4"
      headerSpacing="mb-2" // Ensure it fills height in grid
      action={
        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
          View All <ArrowRight className="w-3 h-3" />
        </button>
      }
    >
      <div className="flex flex-col gap-3 mt-2">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="group flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all duration-200 border border-transparent hover:border-gray-100 cursor-pointer"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              {/* Priority Dot */}
              <div
                className={`w-2.5 h-2.5 rounded-full shrink-0 ${getPriorityColor(
                  issue.priority
                )}`}
                title={`Priority: ${issue.priority}`}
              />

              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-700 truncate group-hover:text-indigo-600 transition-colors">
                  {issue.title}
                </p>
                <p className="text-xs text-gray-400 font-mono mt-0.5">
                  {issue.id}
                </p>
              </div>
            </div>

            {/* Status Badge */}
            <span
              className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border ml-2 whitespace-nowrap ${getStatusColor(
                issue.status
              )}`}
            >
              {issue.status}
            </span>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};

export default MyIssuesWidget;
