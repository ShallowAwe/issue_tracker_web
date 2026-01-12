import React from "react";
import {
  Mail,
  MoreVertical,
  Plus,
  Search,
  Shield,
  Code,
  PenTool,
  BarChart,
  MessageSquare,
} from "lucide-react";

const TeamPage = () => {
  // Mock Data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Engineering Lead",
      department: "Engineering",
      email: "sarah@company.com",
      status: "online",
      workload: 85, // percentage
      tasks: 12,
      avatarColor: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 2,
      name: "Mike Ross",
      role: "Senior Developer",
      department: "Engineering",
      email: "mike@company.com",
      status: "busy",
      workload: 92,
      tasks: 15,
      avatarColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 3,
      name: "Jessica Pearson",
      role: "Product Manager",
      department: "Product",
      email: "jessica@company.com",
      status: "offline",
      workload: 45,
      tasks: 5,
      avatarColor: "bg-emerald-100 text-emerald-600",
    },
    {
      id: 4,
      name: "Alex Doe",
      role: "UI/UX Designer",
      department: "Design",
      email: "alex@company.com",
      status: "online",
      workload: 60,
      tasks: 8,
      avatarColor: "bg-purple-100 text-purple-600",
    },
    {
      id: 5,
      name: "David Smith",
      role: "Frontend Dev",
      department: "Engineering",
      email: "david@company.com",
      status: "offline",
      workload: 20,
      tasks: 3,
      avatarColor: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* 1. Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Team Members</h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage permissions and view team capacity.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search team..."
              className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-sm active:scale-95">
            <Plus className="w-4 h-4" />
            <span>Invite Member</span>
          </button>
        </div>
      </div>

      {/* 2. Team Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Total Members" value="24" trend="+2 this month" />
        <StatCard
          label="Online Now"
          value="18"
          trend="75% active"
          positive={true}
        />
        <StatCard
          label="Avg. Workload"
          value="68%"
          trend="High capacity"
          positive={false}
        />
      </div>

      {/* 3. Member Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}

        {/* Add New Placeholer Card */}
        <button className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:bg-blue-50/50 transition-all group h-full min-h-[240px]">
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Plus className="w-6 h-6 text-slate-400 group-hover:text-blue-600" />
          </div>
          <span className="font-medium text-slate-600 group-hover:text-blue-700">
            Add New Member
          </span>
        </button>
      </div>
    </div>
  );
};

// --- Sub-Components ---

const TeamMemberCard = ({ member }) => {
  // Determine role icon
  const RoleIcon =
    member.department === "Engineering"
      ? Code
      : member.department === "Design"
      ? PenTool
      : member.department === "Product"
      ? BarChart
      : Shield;

  // Status Color Logic
  const statusColor =
    member.status === "online"
      ? "bg-green-500"
      : member.status === "busy"
      ? "bg-red-500"
      : "bg-slate-300";

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
      {/* Top Banner (Optional visual flair) */}
      <div className="h-16 bg-linear-to-r from-slate-50 to-slate-100 border-b border-slate-100"></div>

      {/* Card Content */}
      <div className="px-5 pb-5">
        {/* Header: Avatar & Menu */}
        <div className="flex justify-between items-start -mt-8 mb-3">
          <div className="relative">
            <div
              className={`w-16 h-16 rounded-full border-4 border-white ${member.avatarColor} flex items-center justify-center text-xl font-bold shadow-sm`}
            >
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            {/* Online Dot */}
            <div
              className={`absolute bottom-1 right-1 w-3.5 h-3.5 border-2 border-white rounded-full ${statusColor}`}
              title={member.status}
            ></div>
          </div>
          <button className="text-slate-400 hover:text-slate-600 p-1">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        {/* Info */}
        <div className="mb-4">
          <h3 className="font-bold text-slate-900 text-lg leading-tight">
            {member.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1 text-slate-500 text-sm">
            <RoleIcon className="w-3.5 h-3.5" />
            <span>{member.role}</span>
          </div>
        </div>

        {/* Workload Indicator */}
        <div className="space-y-2 mb-5">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-slate-500">Workload</span>
            <span
              className={
                member.workload > 80 ? "text-red-600" : "text-slate-700"
              }
            >
              {member.workload}% ({member.tasks} tasks)
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                member.workload > 80
                  ? "bg-red-500"
                  : member.workload > 50
                  ? "bg-blue-500"
                  : "bg-green-500"
              }`}
              style={{ width: `${member.workload}%` }}
            ></div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-slate-100">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium transition-colors border border-slate-200">
            <Mail className="w-3.5 h-3.5" /> Email
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium transition-colors border border-slate-200">
            <MessageSquare className="w-3.5 h-3.5" /> Chat
          </button>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, trend, positive }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">
        {label}
      </p>
      <h4 className="text-2xl font-bold text-slate-900 mt-1">{value}</h4>
    </div>
    <span
      className={`text-xs font-medium px-2 py-1 rounded-full ${
        positive ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
      }`}
    >
      {trend}
    </span>
  </div>
);

export default TeamPage;
