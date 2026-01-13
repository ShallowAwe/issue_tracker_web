import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import { logout } from "../../store/slices/authSlice"; // Import logout action
import { clearUserDetails } from "../../store/slices/userDetailsSlice"; // Import clear user details action
import {
  LayoutDashboard,
  KanbanSquare,
  ListTodo,
  BarChart2,
  Settings,
  Plus,
  FolderGit2,
  Users,
  LogOut,
  ChevronDown, // Added for the project dropdown look
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch(); // Get dispatch function from Redux

  // Get user details from Redux store
  const userDetails = useSelector((state) => state.userDetails);

  // Handle logout by dispatching Redux actions
  const handleLogout = () => {
    dispatch(logout()); // Clear auth state in Redux
    dispatch(clearUserDetails()); // Clear user details in Redux
    localStorage.removeItem("token"); // Clear token from localStorage
    navigate("/"); // Redirect to login page
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "My Issues", icon: ListTodo, badge: 3, path: "/issues" },
    { name: "Board", icon: KanbanSquare },
    { name: "Backlog", icon: FolderGit2 },
    { name: "Reports", icon: BarChart2 },
    { name: "Team", icon: Users, path: "/teams" },
  ];

  return (
    <aside className="w-64 h-screen bg-slate-50 border-r border-gray-200 flex flex-col fixed left-0 top-0 z-50 transition-all duration-300">
      {/* Brand & Project Switcher */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-indigo-200 shadow-md">
            <KanbanSquare className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            IssueFlow
          </h1>
        </div>

        {/* <button className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition-colors group">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-5 h-5 rounded bg-white border border-gray-200 text-indigo-600 flex items-center justify-center text-xs font-bold shadow-sm">
              P
            </div>
            <span className="text-sm font-medium text-gray-700 truncate group-hover:text-gray-900">
              Platform Revamp
            </span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
        </button> */}
      </div>

      {/* Primary Action */}
      <div className="px-6 mb-2">
        <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200">
          <Plus size={18} strokeWidth={2.5} />
          New Issue
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-6 space-y-1 overflow-y-auto">
        <p className="px-4 mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
          Menu
        </p>

        {menuItems.map((item) => {
          const isActive = item.path && location.pathname === item.path;
          return (
            <button
              key={item.name}
              onClick={() => item.path && navigate(item.path)}
              disabled={!item.path}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-all duration-200 group ${
                isActive
                  ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100"
                  : item.path
                  ? "text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                  : "text-gray-400 cursor-not-allowed opacity-60"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  size={18}
                  className={
                    isActive
                      ? "text-indigo-600"
                      : item.path
                      ? "text-gray-400 group-hover:text-gray-600"
                      : "text-gray-300"
                  }
                />
                {item.name}
              </div>

              {/* Optional Badge */}
              {item.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* System Section */}
        <div className="mt-8 pt-4 border-t border-gray-100">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
            <Settings size={18} className="text-gray-400" />
            Settings
          </button>
        </div>
      </nav>

      {/* Footer / User Profile */}
      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all cursor-pointer border border-transparent hover:border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
              alt="User"
              className="w-9 h-9 rounded-full bg-indigo-100 border border-indigo-50"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-gray-700 truncate">
                {/* Display user name from Redux if available, otherwise default */}
                {userDetails.isLoaded
                  ? `${userDetails.firstName || ""} ${
                      userDetails.lastName || ""
                    }`.trim() || userDetails.username
                  : "Loading..."}
              </p>
              <p className="text-[10px] font-medium text-gray-500 truncate">
                {/* Display user email from Redux if available, otherwise default */}
                {userDetails.isLoaded ? userDetails.email : ""}
              </p>
            </div>
          </div>

          {/* Logout button - dispatches Redux logout action */}
          <button
            onClick={handleLogout}
            className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
