import { useState } from "react";
import LoginCard from "./utils/auth/LoginCard";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./features/overview/OverViewScreen";
import DotGrid from "./utils/background/dotgrid";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    // credentials are { email, password }
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // NOT LOGGED IN → glass morphism login with animated DotGrid
  if (!isLoggedIn) {
    return (
      <div className="relative min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4 overflow-hidden">
        <DotGrid
          baseColor="#cbd5e1" // slightly darker for better visibility
          activeColor="#6366f1"
          gap={30}
          dotSize={3}
          proximity={150}
          pushRadius={100}
          pushStrength={15}
          className="z-0"
        />
        <LoginCard onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <AppLayout>
      <Dashboard onLogout={handleLogout} />
    </AppLayout>
  );
}

export default App;
