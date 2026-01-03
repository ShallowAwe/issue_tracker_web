import React from "react";
import Sidebar from "./SideBar.jsx";
const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-50 text-gray-900 font-sans">
      {/* Sidebar - Fixed Width */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 h-screen overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">{children}</div>

        {/* Custom Scrollbar Styles for this container */}
        <style jsx>{`
          main::-webkit-scrollbar {
            width: 8px;
          }
          main::-webkit-scrollbar-track {
            background: transparent;
          }
          main::-webkit-scrollbar-thumb {
            background-color: #cbd5e1; /* slate-300 */
            border-radius: 20px;
            border: 3px solid transparent;
            background-clip: content-box;
          }
          main::-webkit-scrollbar-thumb:hover {
            background-color: #94a3b8; /* slate-400 */
          }
        `}</style>
      </main>
    </div>
  );
};

export default AppLayout;
