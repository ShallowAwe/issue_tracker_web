import { useState } from "react";
import LoginCard from "./utils/auth/LoginCard";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./features/dashboard";
import DotGrid from "./utils/background/dotgrid";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // NOT LOGGED IN → simple, clean login screen with DotGrid background
  if (!isLoggedIn) {
    return (
      <div className="relative min-h-screen bg-slate-50 flex items-center justify-center p-4 overflow-hidden">
        <DotGrid
          baseColor="#e2e8f0" // slate-200 for subtle look on slate-50
          activeColor="#6366f1" // indigo-500 for interaction
          gap={30}
          dotSize={2}
          className="opacity-60"
        />
        <LoginCard onLogin={handleLogin} />
      </div>
    );
  }

  // LOGGED IN → full app shell
  return (
    <AppLayout>
      <Dashboard onLogout={handleLogout} />
    </AppLayout>
  );
}

export default App;
