import React from "react";
import {
  Rss,
  GitCommit,
  MessageSquare,
  CheckSquare,
  GitPullRequest,
  ArrowRight,
} from "lucide-react";
import BentoCard from "./BentoCard";

const activities = [
  {
    id: 1,
    user: "Alex",
    action: "pushed 3 commits",
    target: "feat/auth-module",
    time: "2h ago",
    icon: GitCommit,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    id: 2,
    user: "Sarah",
    action: "commented on",
    target: "ISS-29",
    time: "4h ago",
    icon: MessageSquare,
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    id: 3,
    user: "Mike",
    action: "completed sprint",
    target: "Sprint 23",
    time: "Yesterday",
    icon: CheckSquare,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    id: 4,
    user: "Davina",
    action: "merged PR",
    target: "#45 Fix Navbar",
    time: "2 days ago",
    icon: GitPullRequest,
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
];

const ProjectFeedWidget = () => {
  return (
    <BentoCard
      title="Project Feed"
      icon={Rss}
      className="h-full"
      padding="p-4"
      headerSpacing="mb-3"
      action={
        <button className="text-xs font-medium text-gray-400 hover:text-indigo-600 flex items-center gap-1 transition-colors">
          Full History <ArrowRight className="w-3 h-3" />
        </button>
      }
    >
      {/* Container with padding for the timeline line */}
      <div className="relative pl-2 pt-2">
        {/* The vertical timeline line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gray-100 rounded-full"></div>

        <div className="space-y-6">
          {activities.map((item) => (
            <div
              key={item.id}
              className="relative flex gap-4 group cursor-default"
            >
              {/* Timeline Icon Bubble */}
              <div
                className={`
                relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-sm shrink-0
                ${item.color}
              `}
              >
                <item.icon className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer">
                      {item.user}
                    </span>{" "}
                    {item.action}{" "}
                    <span className="font-medium text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded text-xs border border-indigo-100/50 hover:bg-indigo-100 transition-colors cursor-pointer">
                      {item.target}
                    </span>
                  </p>
                  <span className="text-xs font-medium text-gray-400 whitespace-nowrap mt-1 sm:mt-0">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
};

export default ProjectFeedWidget;
