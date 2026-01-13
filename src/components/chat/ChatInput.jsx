import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Smile } from "lucide-react";
import ReplyPreview from "./ReplyPreview"; // This file will be created in step 4

const ChatInput = ({ onSendMessage, replyTo, onCancelReply }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message, replyTo);
      setMessage("");
      if (onCancelReply) onCancelReply();

      // Reset height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e) => {
    // Send on Enter (without Shift)
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      {/* Reply Preview Area */}
      {replyTo && (
        <div className="mb-2">
          <ReplyPreview replyTo={replyTo} onCancel={onCancelReply} />
        </div>
      )}

      <div className="flex items-end gap-2 rounded-xl border border-gray-300 bg-gray-50 p-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:bg-gray-800">
        {/* Attachment Button */}
        <button className="rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
          <Paperclip size={20} />
        </button>

        {/* Text Input */}
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows={1}
          className="max-h-32 min-h-[40px] w-full resize-none bg-transparent py-2 text-gray-900 focus:outline-none dark:text-gray-100"
        />

        {/* Emoji Button (Optional placeholder) */}
        <button className="hidden rounded-full p-2 text-gray-500 hover:bg-gray-200 sm:block dark:text-gray-400 dark:hover:bg-gray-700">
          <Smile size={20} />
        </button>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className={`rounded-full p-2 transition-colors ${
            message.trim()
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500"
          }`}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
