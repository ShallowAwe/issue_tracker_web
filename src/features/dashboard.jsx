import React from "react";
import {
  Clock,
  BarChart2,
  Plus,
  ArrowUpRight,
  Calendar,
  LogOut,
} from "lucide-react";

// Modular Imports
// Note: We wrap these in divs in the grid to control their span
import SprintProgressWidget from "../components/dashboard/SprintProgressWidget";
import MyIssuesWidget from "../components/dashboard/MyIssuesWidget";
import VelocityChartWidget from "../components/dashboard/VelocityChartWidget";
import ProjectFeedWidget from "../components/dashboard/ProjectFeedWidget";
import WorkloadWidget from "../components/dashboard/WorkloadWidget";
import BentoCard from "../components/dashboard/BentoCard";

const IssueTrackerDashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen p-4 md:p-8 font-sans bg-slate-50 text-gray-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold border px-2 py-0.5 rounded-md uppercase tracking-wider bg-indigo-50 text-indigo-700 border-indigo-100">
              Project
            </span>
            <span className="text-gray-400 text-sm">/</span>
            <span className="text-sm font-medium text-gray-500">
              Mobile App Redesign
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Sprint 24 Board
          </h1>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-indigo-200 hover:shadow-lg text-sm font-semibold">
            <Plus className="w-4 h-4" /> Create Issue
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* 1. HERO - Sprint Progress (Spans 2 cols, 2 rows) */}
        <div className="md:col-span-2 md:row-span-2">
          <SprintProgressWidget />
        </div>

        {/* 2. Custom Mini-Widget: Avg Velocity */}
        <BentoCard
          title="Avg Velocity"
          icon={BarChart2}
          padding="p-5"
          headerSpacing="mb-3"
        >
          <div className="flex flex-col h-full justify-between mt-2">
            <div className="flex items-end gap-3">
              <span className="text-5xl font-bold text-gray-800 tracking-tight">
                42
              </span>
              <span className="text-sm text-emerald-700 font-bold bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-lg flex items-center gap-1 mb-1.5">
                <ArrowUpRight className="w-3 h-3" /> 12%
              </span>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Performance</span>
                <span>Exceeding</span>
              </div>
              <div className="w-full rounded-full h-2 overflow-hidden bg-gray-100">
                <div className="bg-emerald-500 h-full rounded-full w-[112%]"></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Story points per sprint average
              </p>
            </div>
          </div>
        </BentoCard>

        {/* 3. Custom Mini-Widget: Sprint Countdown (Highlighted Style) */}
        <div className="rounded-3xl p-6 bg-indigo-600 text-white shadow-lg shadow-indigo-200 flex flex-col justify-between relative overflow-hidden group">
          {/* Decorative Circle */}
          <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-500" />

          <div className="flex justify-between items-start z-10">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded text-white/90">
              URGENT
            </span>
          </div>

          <div className="z-10 mt-4">
            <div className="text-4xl font-bold tracking-tight mb-1">3 Days</div>
            <div className="flex items-center gap-2 text-indigo-100 text-sm font-medium opacity-90">
              <Calendar className="w-3.5 h-3.5" />
              Oct 24, 2025
            </div>
          </div>
        </div>

        {/* 4. Team Velocity Chart (Spans 2 cols) */}
        <div className="md:col-span-2">
          <VelocityChartWidget />
        </div>

        {/* 5. My Issues (Tall column) */}
        <div className="md:row-span-2">
          <MyIssuesWidget />
        </div>

        {/* 6. Project Feed (Tall column) */}
        <div className="md:row-span-2">
          <ProjectFeedWidget />
        </div>

        {/* 7. Workload (Spans 2 cols to fill gap) */}
        <div className="md:col-span-2">
          <WorkloadWidget />
        </div>
      </div>
    </div>
  );
};

export default IssueTrackerDashboard;
