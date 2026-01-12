import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const IssueSummaryCards = ({ stats, onCardClick }) => {
  // Guard clause: prevent crash if data hasn't loaded yet
  if (!stats || stats.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        // Determine trend color logic
        // If 'inverseTrend' is true, UP is Bad (Red). Otherwise UP is Good (Green).
        const isTrendPositive = stat.trend.startsWith("+");
        const isGoodNews = stat.inverseTrend
          ? !isTrendPositive
          : isTrendPositive;

        const trendColor = isGoodNews ? "text-emerald-600" : "text-rose-600";
        const TrendIcon = isTrendPositive ? ArrowUp : ArrowDown;

        return (
          <div
            key={idx}
            onClick={() => onCardClick && onCardClick(stat.id)}
            className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-slate-500 text-sm font-medium truncate pr-2">
                {stat.label}
              </span>

              {/* Dynamic Icon Container */}
              <div
                className={`p-2 rounded-lg ${stat.bgColor} ${stat.iconColor} bg-opacity-10`}
              >
                <stat.icon className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {stat.value}
              </span>

              {stat.trend && (
                <div
                  className={`flex items-center gap-1 text-xs font-semibold ${trendColor} bg-slate-50 px-1.5 py-0.5 rounded-md`}
                >
                  <TrendIcon className="w-3 h-3" strokeWidth={3} />
                  <span>{stat.trend}</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IssueSummaryCards;
