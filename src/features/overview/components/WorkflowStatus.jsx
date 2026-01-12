import React from "react";
import { Layers, AlertTriangle } from "lucide-react";

const WorkflowStatus = ({ stats }) => (
  <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-semibold text-slate-900 flex items-center gap-2">
        <Layers className="w-4 h-4 text-slate-500" />
        Workflow Health
      </h2>
    </div>

    <div className="space-y-4">
      <div className="flex h-4 w-full rounded-full overflow-hidden">
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{ width: `${(stat.count / 56) * 100}%` }}
            className={`${stat.color} hover:opacity-90 transition-opacity`}
            title={`${stat.status}: ${stat.count}`}
          ></div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 pt-2">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-bold text-slate-900">
              {stat.count}
            </div>
            <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">
              {stat.status}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
        <div>
          <h4 className="text-sm font-medium text-amber-900">
            Bottleneck Detected
          </h4>
          <p className="text-xs text-amber-700 mt-0.5">
            "In Progress" items have increased by 40% this week. Consider
            limiting WIP.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WorkflowStatus;
