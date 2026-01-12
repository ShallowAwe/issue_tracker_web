import React, { useState } from "react";
import {
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  User,
  ArrowUpDown,
  CheckSquare,
  Square,
} from "lucide-react";
import PriorityIcon from "../overview/components/PriorityIcon";

const IssueListScreen = () => {
  // Mock Data
  const [issues, setIssues] = useState([
    {
      id: "PRO-241",
      title: "Implement authentication flow",
      status: "In Progress",
      priority: "Critical",
      assignee: "Sarah C.",
      due: "Jan 14",
    },
    {
      id: "PRO-239",
      title: "Fix layout shift on mobile",
      status: "Todo",
      priority: "High",
      assignee: "Mike R.",
      due: "Jan 15",
    },
    {
      id: "PRO-235",
      title: "Update dependencies",
      status: "Done",
      priority: "Low",
      assignee: "Alex D.",
      due: "Jan 10",
    },
    {
      id: "PRO-230",
      title: "Design system dark mode",
      status: "In Progress",
      priority: "Medium",
      assignee: "Sarah C.",
      due: "Jan 20",
    },
    {
      id: "PRO-228",
      title: "API rate limiting",
      status: "Review",
      priority: "High",
      assignee: "System",
      due: "Jan 12",
    },
  ]);

  const [selectedRows, setSelectedRows] = useState([]);

  // Toggle Row Selection
  const toggleSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col h-full">
      {/* 1. Toolbar Section */}
      <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search issues..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm">
            <span>New Issue</span>
          </button>
        </div>
      </div>

      {/* 2. The Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="w-12 px-4 py-3">
                <div className="flex items-center">
                  <Square className="w-4 h-4 text-slate-300 cursor-pointer" />
                </div>
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-700 group">
                <div className="flex items-center gap-1">
                  Issue
                  <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Assignee
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Due
              </th>
              <th className="w-12 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {issues.map((issue) => {
              const isSelected = selectedRows.includes(issue.id);
              return (
                <tr
                  key={issue.id}
                  className={`group transition-colors hover:bg-slate-50 ${
                    isSelected ? "bg-blue-50/30 hover:bg-blue-50/50" : ""
                  }`}
                >
                  {/* Checkbox Column */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleSelect(issue.id)}
                      className="flex items-center text-slate-400 hover:text-blue-600"
                    >
                      {isSelected ? (
                        <CheckSquare className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                  </td>

                  {/* ID & Title Column */}
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                        {issue.title}
                      </span>
                      <span className="text-xs text-slate-500 font-mono mt-0.5">
                        {issue.id}
                      </span>
                    </div>
                  </td>

                  {/* Status Column */}
                  <td className="px-4 py-3">
                    <StatusBadge status={issue.status} />
                  </td>

                  {/* Priority Column (Reusing your component) */}
                  <td className="px-4 py-3">
                    <PriorityIcon priority={issue.priority} />
                  </td>

                  {/* Assignee Column */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold border border-indigo-200">
                        {issue.assignee
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-sm text-slate-600">
                        {issue.assignee}
                      </span>
                    </div>
                  </td>

                  {/* Due Date Column */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5 text-sm text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{issue.due}</span>
                    </div>
                  </td>

                  {/* Actions Column */}
                  <td className="px-4 py-3 text-right">
                    <button className="p-1 rounded hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 3. Footer / Pagination */}
      <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Showing 5 of 24 issues</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Helper Component for Status ---
const StatusBadge = ({ status }) => {
  const styles = {
    Todo: "bg-slate-100 text-slate-600 border-slate-200",
    "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
    Review: "bg-purple-50 text-purple-700 border-purple-200",
    Done: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  const currentStyle = styles[status] || styles["Todo"];

  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${currentStyle}`}
    >
      {status}
    </span>
  );
};

export default IssueListScreen;
