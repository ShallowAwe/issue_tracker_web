import React from "react";
import { User, Clock } from "lucide-react";
import PriorityIcon from "./PriorityIcon";
import StatusBadge from "./StatusBadge";

const MyIssuesList = ({ issues }) => (
  <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
    <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
      <h2 className="font-semibold text-slate-900 flex items-center gap-2">
        <User className="w-4 h-4 text-slate-500" />
        My Work
      </h2>
      <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
        {issues.length} Active
      </span>
    </div>
    <div className="divide-y divide-slate-100">
      {issues.map((issue) => (
        <div
          key={issue.id}
          className="px-6 py-4 hover:bg-slate-50 transition-colors group cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
                  {issue.id}
                </span>
                <span className="text-sm font-medium text-slate-900">
                  {issue.title}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <PriorityIcon priority={issue.priority} />
                <div
                  className={`flex items-center gap-1 text-xs ${
                    issue.due === "Today"
                      ? "text-amber-600 font-medium"
                      : "text-slate-500"
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  {issue.due}
                </div>
              </div>
            </div>
            <StatusBadge status={issue.status} />
          </div>
        </div>
      ))}
    </div>
    <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-center">
      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
        View all my issues
      </button>
    </div>
  </section>
);

export default MyIssuesList;
