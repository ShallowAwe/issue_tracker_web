import { useSelector } from "react-redux"; // Import Redux selector hook
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginCard from "./utils/auth/LoginCard";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./features/overview/OverViewScreen";
import IssueListScreen from "./features/issueList/issueList";
import TeamsScreen from "./features/teams/teams";
import DotGrid from "./utils/background/dotgrid";

function App() {
  // Get auth state from Redux store instead of local state
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  // No need for handleLogin and handleLogout - Redux handles this now

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <div className="relative min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4 overflow-hidden">
                <DotGrid
                  baseColor="#cbd5e1"
                  activeColor="#6366f1"
                  gap={30}
                  dotSize={3}
                  proximity={150}
                  pushRadius={100}
                  pushStrength={15}
                  className="z-0"
                />
                <LoginCard />
              </div>
            )
          }
        />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <AppLayout>
                <Dashboard />
              </AppLayout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Protected Issue List Route */}
        <Route
          path="/issues"
          element={
            isLoggedIn ? (
              <AppLayout>
                <IssueListScreen />
              </AppLayout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Teams Route */}
        <Route
          path="/teams"
          element={
            isLoggedIn ? (
              <AppLayout>
                <TeamsScreen />
              </AppLayout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
