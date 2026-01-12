import React from "react";
import {
  MessageSquare,
  GitCommit,
  CheckCircle2,
  FileUp,
  AlertCircle,
} from "lucide-react";

const RecentActivityFeed = ({ activities }) => {
  // Helper to determine icon and color based on action type
  const getActivityConfig = (type) => {
    switch (type) {
      case "comment":
        return {
          icon: MessageSquare,
          bg: "bg-blue-100",
          text: "text-blue-600",
          border: "border-blue-200",
        };
      case "completed":
        return {
          icon: CheckCircle2,
          bg: "bg-emerald-100",
          text: "text-emerald-600",
          border: "border-emerald-200",
        };
      case "upload":
        return {
          icon: FileUp,
          bg: "bg-slate-100",
          text: "text-slate-600",
          border: "border-slate-200",
        };
      case "bug":
        return {
          icon: AlertCircle,
          bg: "bg-rose-100",
          text: "text-rose-600",
          border: "border-rose-200",
        };
      default:
        return {
          icon: GitCommit,
          bg: "bg-gray-100",
          text: "text-gray-500",
          border: "border-gray-200",
        };
    }
  };

  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm h-auto flex flex-col">
      <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
        <h2 className="font-bold text-slate-800 text-sm">Recent Activity</h2>
        <div
          className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
          title="Live updates"
        ></div>
      </div>

      <div className="p-5 flex-1 overflow-y-auto">
        <ul className="relative space-y-6">
          {/* Continuous Timeline Line */}
          <div className="absolute top-2 bottom-2 left-4 w-px bg-slate-200 -z-10"></div>

          {activities?.map((act, i) => {
            const config = getActivityConfig(act.type);
            const Icon = config.icon;

            return (
              <li key={i} className="relative pl-10">
                {/* Timeline Node */}
                <div
                  className={`
                    absolute left-1 top-0.5 w-6 h-6 rounded-full flex items-center justify-center border-2 bg-white
                    ${config.border} ${config.text}
                  `}
                >
                  <Icon className="w-3 h-3" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">
                      {act.user}
                    </span>{" "}
                    {act.action}{" "}
                    <span className="font-medium text-slate-800 hover:underline cursor-pointer decoration-slate-300 underline-offset-2">
                      {act.target}
                    </span>
                    {act.to && (
                      <>
                        <span className="text-slate-400 mx-1">→</span>
                        <span className="font-medium text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                          {act.to}
                        </span>
                      </>
                    )}
                  </p>
                  <span className="text-xs text-slate-400 mt-1 font-medium">
                    {act.time}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <button className="w-full py-3 text-xs font-medium text-slate-500 border-t border-slate-100 hover:bg-slate-50 hover:text-blue-600 transition-colors rounded-b-xl">
        View all history
      </button>
    </section>
  );
};

export default RecentActivityFeed;
