import React from "react";
import {
  Timer,
  Zap,
  CheckCircle2,
  CircleDashed,
  ChevronRight,
} from "lucide-react";
import BentoCard from "./BentoCard";

const SprintProgressWidget = () => {
  // Mock Data
  const stats = {
    completed: 12,
    total: 18,
    daysLeft: 4,
    name: "Sprint 24-B",
    goal: "User Auth & Payments",
  };

  const percentage = Math.round((stats.completed / stats.total) * 100);

  return (
    <BentoCard
      title="Current Sprint"
      icon={Timer}
      className="h-full"
      padding="p-6"
      headerSpacing="mb-4"
      action={
        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors group">
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
        </button>
      }
    >
      <div className="flex flex-col gap-5 mt-1">
        {/* Header Stats */}
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                {stats.name}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
              {percentage}%
            </h2>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-1 text-amber-600 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-lg mb-1">
              <Timer className="w-3.5 h-3.5" />
              <span className="text-xs font-bold">
                {stats.daysLeft} days left
              </span>
            </div>
            <p className="text-xs text-gray-400">Ends Friday</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-gray-500">
            <span>Progress</span>
            <span>
              {stats.completed} / {stats.total} pts
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-100">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out bg-linear-gradient-to-r from-indigo-500 to-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.3)]"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Bottom Details Grid */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          {/* Completed Block */}
          <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex flex-col gap-1 hover:border-emerald-200 transition-colors">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wide">
                Done
              </span>
            </div>
            <p className="text-lg font-bold text-gray-700 leading-none mt-1">
              {stats.completed}{" "}
              <span className="text-xs font-normal text-gray-400">issues</span>
            </p>
          </div>

          {/* Remaining Block */}
          <div className="p-3 bg-orange-50/50 border border-orange-100 rounded-xl flex flex-col gap-1 hover:border-orange-200 transition-colors">
            <div className="flex items-center gap-1.5 text-orange-600">
              <CircleDashed className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wide">
                ToDo
              </span>
            </div>
            <p className="text-lg font-bold text-gray-700 leading-none mt-1">
              {stats.total - stats.completed}{" "}
              <span className="text-xs font-normal text-gray-400">issues</span>
            </p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
};

export default SprintProgressWidget;
