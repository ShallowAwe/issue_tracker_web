import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import Redux dispatch hook
import { loginSuccess } from "../../store/slices/authSlice"; // Import login action
import { login, getUserDetails } from "../../apis/authService";
import { setUserDetails } from "../../store/slices/userDetailsSlice";

const LoginCard = () => {
  const dispatch = useDispatch(); // Get dispatch function from Redux
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    try {
      setLoading(true);
      // Call login API
      const data = await login({ username, password });

      // Dispatch Redux action to update global auth state
      dispatch(loginSuccess({ user: data.user, token: data.token }));

      // Fetch and store user details in Redux
      const userDetails = await getUserDetails();
      dispatch(setUserDetails(userDetails));
    } catch (err) {
      setError(err?.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md px-6 z-50">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 text-white font-bold text-lg mb-4">
            IF
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">IssueFlow</h1>
          <p className="text-sm text-gray-500">Internal Access Portal</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label
              htmlFor="username"
              className="block text-xs font-medium uppercase tracking-wide text-gray-600 mb-1"
            >
              Work username
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none text-gray-900"
              placeholder="name@company.com"
              aria-invalid={!!error}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium uppercase tracking-wide text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none text-gray-900"
              placeholder="••••••••"
              aria-invalid={!!error}
            />
          </div>

          {/* Error Avoidance Section */}
          {error && (
            <div
              role="alert"
              className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition
              ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99]"
              }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-400">
          Authorized personnel only
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
