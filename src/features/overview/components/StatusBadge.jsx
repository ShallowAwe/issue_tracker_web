import React from "react";

const StatusBadge = ({ status }) => {
  const styles = {
    "To Do": "bg-slate-100 text-slate-700 border-slate-200",
    "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
    Review: "bg-purple-50 text-purple-700 border-purple-200",
    Done: "bg-green-50 text-green-700 border-green-200",
  };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
        styles[status] || styles["To Do"]
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
