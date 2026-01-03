import React from "react";

const LoginCard = ({ onLogin }) => {
  return (
    <div className="w-full max-w-md px-6 animate-in fade-in zoom-in duration-500">
      {/* Outer Glow Container */}
      <div className="relative group">
        {/* Subtle shadow glow */}
        <div className="absolute -inset-1 bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-4xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>

        <div className="relative backdrop-blur-2xl bg-white/70 border-white/80 shadow-2xl border rounded-4xl p-10 overflow-hidden transition-all duration-500">
          {/* Internal Light Flare */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl"></div>

          {/* Header */}
          <div className="relative mb-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-indigo-500 to-indigo-700 rounded-2xl mb-4 shadow-xl shadow-indigo-500/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-white font-black text-2xl tracking-tighter">
                iF
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-1 text-gray-900">
              IssueFlow
            </h1>
            <p className="text-sm font-medium tracking-wide uppercase opacity-60 text-gray-500">
              Enterprise Central
            </p>
          </div>

          <form onSubmit={onLogin} className="relative space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold ml-1 uppercase tracking-wider text-gray-600">
                Work Identity
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl placeholder:text-gray-400 transition-all duration-300 outline-none bg-white text-gray-900 focus:bg-white focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10"
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-semibold ml-1 uppercase tracking-wider text-gray-600">
                  Access Key
                </label>
                <button
                  type="button"
                  className="text-[10px] font-bold text-indigo-600 hover:text-indigo-500 uppercase select-none"
                >
                  Forgot?
                </button>
              </div>
              <input
                type="password"
                required
                className="w-full px-4 py-3.5 border border-gray-200 rounded-xl placeholder:text-gray-400 transition-all duration-300 outline-none bg-white text-gray-900 focus:bg-white focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/10 active:scale-[0.97] transition-all duration-200 overflow-hidden"
            >
              <span className="relative z-10">Launch Dashboard</span>
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
          </form>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="h-px w-12 bg-gray-200"></div>
            <p className="text-[10px] text-center leading-relaxed text-gray-400">
              SECURE ENVIRONMENT <br />
              <span className="opacity-50 tracking-widest uppercase font-bold">
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
