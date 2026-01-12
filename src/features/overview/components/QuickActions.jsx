import React from "react";
import { Plus, Layers, Layout, FileText, Settings } from "lucide-react";

const QuickActions = ({ onCreateClick, onNavigate }) => {
  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 h-auto">
      {/* Section Header - Adds visual structure */}
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {/* Primary Action - visually distinct */}
        <button
          onClick={onCreateClick}
          className="col-span-2 group relative flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
            <Plus className="w-4 h-4" strokeWidth={3} />
          </div>
          <span>Create New Issue</span>
        </button>

        {/* Secondary Actions */}
        <ActionButton
          icon={Layers}
          label="Kanban Board"
          onClick={() => onNavigate("board")}
        />

        <ActionButton
          icon={Layout}
          label="Backlog"
          onClick={() => onNavigate("backlog")}
        />

        <ActionButton
          icon={FileText}
          label="Reports"
          onClick={() => onNavigate("reports")}
        />

        <ActionButton
          icon={Settings}
          label="Settings"
          onClick={() => onNavigate("settings")}
        />
      </div>
    </section>
  );
};

// Extracted for consistency and cleaner code
const ActionButton = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-2 bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-blue-600 p-3 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-sm active:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
  >
    <Icon className="w-5 h-5 opacity-75" />
    <span className="text-xs">{label}</span>
  </button>
);

export default QuickActions;
