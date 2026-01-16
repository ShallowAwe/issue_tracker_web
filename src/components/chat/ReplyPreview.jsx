import React from "react";
import { X } from "lucide-react";

const ReplyPreview = ({ replyTo, onCancel }) => {
  if (!replyTo) return null;

  return (
    <div className="flex items-center justify-between rounded-lg border-l-4 border-blue-500 bg-gray-100 p-2 dark:bg-gray-800">
      <div className="flex-1 overflow-hidden">
        <span className="block text-xs font-bold text-blue-600 dark:text-blue-400">
          Replying to {replyTo.senderName || "User"}
        </span>
        <p className="truncate text-sm text-gray-600 dark:text-gray-300">
          {replyTo.text}
        </p>
      </div>

      <button
        onClick={onCancel}
        className="ml-2 rounded-full p-1 text-gray-500 hover:bg-gray-200 hover:text-red-500 dark:text-gray-400 dark:hover:bg-gray-700"
        aria-label="Cancel reply"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default ReplyPreview;
