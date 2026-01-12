import React from "react";
import { ChevronRight, Filter } from "lucide-react";

const DashboardHeader = ({
  project,
  activeTab,
  onTabChange,
  onFilterClick, // Added handler for filter
}) => {
  // 1. Guard clause: Don't render if project data is missing
  if (!project) return null;

  // 2. Dynamic Progress Calculation (Optional: depends on your data structure)
  // Assuming project has completedIssues and totalIssues, or a direct progress value
  const progressPercentage = project.progress || 70;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left Side: Breadcrumbs & Title */}
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
              <span>Projects</span>
              <ChevronRight className="w-3 h-3" />
              <span>Backend Infrastructure</span>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-slate-900">
                {project.name}
              </h1>
              {project.status && (
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-md border border-green-200 uppercase">
                  {project.status}
                </span>
              )}
            </div>
          </div>

          {/* Right Side: Sprint Info & Controls */}
          <div className="flex flex-col sm:items-end gap-2">
            {/* Sprint Progress */}
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="text-slate-700">{project.sprint}</span>

              {/* Accessible Progress Bar */}
              <div
                className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={progressPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              <span className="text-slate-500 text-xs whitespace-nowrap">
                {project.daysLeft} days left
              </span>
            </div>

            {/* Tab Controls */}
            <div className="flex items-center gap-2">
              <TabButton
                active={activeTab === "my-issues"}
                onClick={() => onTabChange("my-issues")}
              >
                My Issues
              </TabButton>

              <TabButton
                active={activeTab === "all-issues"}
                onClick={() => onTabChange("all-issues")}
              >
                All Issues
              </TabButton>

              <button
                onClick={onFilterClick}
                className="p-1.5 rounded-md bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
                aria-label="Filter issues"
              >
                <Filter className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Extracted small component for cleaner code
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`text-xs px-3 py-1.5 rounded-md transition-colors font-medium ${
      active
        ? "bg-slate-900 text-white shadow-sm"
        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
    }`}
  >
    {children}
  </button>
);

export default DashboardHeader;
