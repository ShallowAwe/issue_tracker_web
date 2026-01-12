import React from "react";

const UpcomingDeadlines = ({ deadlines }) => (
  <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
    <div className="px-5 py-4 border-b border-slate-100">
      <h2 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
        Deadlines
      </h2>
    </div>
    <div className="p-2">
      {deadlines.map((item, i) => (
        <div
          key={i}
          className={`p-3 rounded-lg flex items-center justify-between mb-1 ${
            item.overdue
              ? "bg-red-50 border border-red-100"
              : "hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                item.overdue ? "bg-red-500" : "bg-green-500"
              }`}
            ></div>
            <div className="truncate">
              <div
                className={`text-sm font-medium truncate ${
                  item.overdue ? "text-red-900" : "text-slate-700"
                }`}
              >
                {item.title}
              </div>
              <div className="text-xs text-slate-400 font-mono">{item.id}</div>
            </div>
          </div>
          <div
            className={`text-xs font-semibold whitespace-nowrap ${
              item.overdue ? "text-red-600" : "text-slate-500"
            }`}
          >
            {item.due}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default UpcomingDeadlines;
