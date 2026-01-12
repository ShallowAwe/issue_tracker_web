import React, { useState } from "react";

// Import components
import DashboardHeader from "./components/DashboardHeader";
import IssueSummaryCards from "./components/IssueSummaryCards";
import MyIssuesList from "./components/MyIssuesList";
import QuickActions from "./components/QuickActions";
import UpcomingDeadlines from "./components/UpcomingDeadlines";
import RecentActivityFeed from "./components/RecentActivityFeed";

// Import mock data
import {
  PROJECT_INFO,
  STATS,
  MY_ISSUES,
  ACTIVITY_FEED,
  DEADLINES,
} from "./components/mockData";

// --- SCREENS ---

const OverviewScreen = () => {
  const [activeTab, setActiveTab] = useState("my-issues");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <DashboardHeader
        project={PROJECT_INFO}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Summary Cards - Full Width */}
        <IssueSummaryCards stats={STATS} />

        {/* Quick Actions and My Issues List - Row Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions - 1/3 width */}
          <div className="lg:col-span-1">
            <QuickActions />
          </div>

          {/* My Issues List - 2/3 width */}
          <div className="lg:col-span-2">
            <MyIssuesList issues={MY_ISSUES} />
          </div>
        </div>

        {/* Bottom Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UpcomingDeadlines deadlines={DEADLINES} />
          <RecentActivityFeed activities={ACTIVITY_FEED} />
        </div>
      </main>
    </div>
  );
};

// --- APP ENTRY POINT ---

export default OverviewScreen;
