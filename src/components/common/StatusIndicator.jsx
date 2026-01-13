import React from "react";

const StatusIndicator = ({ status = "offline", showLabel = false }) => {
  // Define color mapping based on status
  const getStatusColor = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case "online":
        return "bg-green-500";
      case "busy":
        return "bg-red-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
      default:
        return "bg-gray-400";
    }
  };

  const formatLabel = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-3 w-3 rounded-full border border-white dark:border-gray-800 ${getStatusColor(
          status
        )}`}
        title={formatLabel(status)}
      />
      {showLabel && (
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {formatLabel(status)}
        </span>
      )}
    </div>
  );
};

export default StatusIndicator;
