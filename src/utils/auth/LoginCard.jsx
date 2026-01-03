import React from "react";

const LoginCard = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin(e);
  };

  return (
    <div className="w-full max-w-md px-6">
      <div className="relative group">
        {/* Enhanced Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition duration-1000"></div>

        {/* Glass Card */}
        <div className="relative backdrop-blur-xl bg-white/40 border border-white/60 shadow-2xl rounded-3xl p-10 overflow-hidden transition-all duration-500">
          {/* Gradient Overlays */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

          {/* Header */}
          <div className="relative mb-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl mb-5 shadow-xl shadow-indigo-500/30 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-white font-black text-2xl tracking-tighter">
                iF
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-2 text-gray-900">
              IssueFlow
            </h1>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600/80">
              Enterprise Central
            </p>
          </div>

          <div className="relative space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold ml-1 uppercase tracking-wider text-gray-700">
                Work Identity
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3.5 border border-white/50 rounded-xl placeholder:text-gray-400 transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm text-gray-900 focus:bg-white/60 focus:border-indigo-400/60 focus:ring-4 focus:ring-indigo-400/20 shadow-sm"
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Access Key
                </label>
                <button
                  type="button"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-500 uppercase transition-colors"
                >
                  Forgot?
                </button>
              </div>
              <input
                type="password"
                required
                className="w-full px-4 py-3.5 border border-white/50 rounded-xl placeholder:text-gray-400 transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm text-gray-900 focus:bg-white/60 focus:border-indigo-400/60 focus:ring-4 focus:ring-indigo-400/20 shadow-sm"
                placeholder="••••••••"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="group relative w-full py-4 mt-6 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 active:scale-[0.98] transition-all duration-200 overflow-hidden"
            >
              <span className="relative z-10">Launch Dashboard</span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <p className="text-[10px] text-center leading-relaxed text-gray-500">
              SECURE ENVIRONMENT <br />
              <span className="opacity-60 tracking-widest uppercase font-bold">
                Encryption Active
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
