import React, { useState } from "react";

const IssueTrendsChart = ({ data }) => {
  // Fallback data if none provided
  const chartData = data || [
    { label: "W1", total: 45, closed: 30 },
    { label: "W2", total: 50, closed: 45 },
    { label: "W3", total: 40, closed: 35 },
    { label: "W4", total: 60, closed: 60 },
    { label: "W5", total: 55, closed: 50 },
    { label: "W6", total: 80, closed: 75 },
    { label: "W7", total: 70, closed: 65 },
    { label: "W8", total: 85, closed: 80 },
    { label: "W9", total: 75, closed: 70 },
    { label: "W10", total: 95, closed: 90 },
    { label: "W11", total: 65, closed: 60 },
    { label: "W12", total: 90, closed: 85 },
  ];

  // Calculate max value to scale the bars relative to the container
  const maxValue = Math.max(...chartData.map((d) => d.total));
  const yAxisLabels = [100, 75, 50, 25, 0]; // Percentages or raw values depending on need

  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-bold text-slate-900">Velocity Trend</h2>
          <p className="text-xs text-slate-500">
            Issues closed vs total (Last 12 Weeks)
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-600"></span>
            <span>Closed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-100"></span>
            <span>Open / Remaining</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-64 w-full flex">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between text-xs text-slate-400 pr-4 py-2 h-full">
          {yAxisLabels.map((label, i) => (
            <span key={i}>{label}%</span>
          ))}
        </div>

        {/* Grid and Bars Container */}
        <div className="relative flex-1 h-full border-l border-b border-slate-100">
          {/* Background Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {yAxisLabels.map((_, i) => (
              <div
                key={i}
                className={`w-full border-t border-slate-100 border-dashed h-0 ${
                  i === yAxisLabels.length - 1 ? "border-transparent" : ""
                }`}
              ></div>
            ))}
          </div>

          {/* Bars */}
          <div className="absolute inset-0 flex items-end justify-between px-2 pt-2">
            {chartData.map((d, i) => {
              // Calculate heights as percentage of Max Value
              const totalHeight = (d.total / maxValue) * 100;
              const closedHeight = (d.closed / d.total) * 100; // Relative to the total bar

              return (
                <div
                  key={i}
                  className="relative group w-full mx-1 h-full flex items-end"
                >
                  {/* Tooltip (Hidden by default, shown on hover) */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 w-32">
                    <div className="bg-slate-800 text-white text-xs rounded-lg py-2 px-3 shadow-xl">
                      <div className="font-semibold mb-1 border-b border-slate-700 pb-1 text-center">
                        {d.label}
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-slate-400">Total:</span>
                        <span>{d.total}</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-blue-300">Closed:</span>
                        <span>{d.closed}</span>
                      </div>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="w-2 h-2 bg-slate-800 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
                  </div>

                  {/* The Bar Container (Represents Total) */}
                  <div
                    style={{ height: `${totalHeight}%` }}
                    className="w-full bg-blue-50 rounded-t-sm relative transition-all duration-500 overflow-hidden"
                  >
                    {/* The Inner Bar (Represents Closed) */}
                    <div
                      style={{ height: `${closedHeight}%` }}
                      className="absolute bottom-0 w-full bg-blue-600 rounded-t-sm transition-all duration-700 ease-out group-hover:bg-blue-700"
                    ></div>
                  </div>

                  {/* X-Axis Label */}
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-medium">
                    {d.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssueTrendsChart;
