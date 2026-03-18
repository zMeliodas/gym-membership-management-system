import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import ThemeToggle from "../../components/ThemeToggle";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
  };

  return (
    <div className="flex w-screen h-screen bg-base-300">
      {/* Left — branding panel */}
      <div className="hidden lg:flex flex-col justify-between w-80 shrink-0 bg-base-200 border-r border-outlineColor p-8">
        <div>
          <h1 className="font-display text-4xl text-primary">GYMSYNC</h1>
          <p className="text-subtext font-mono tracking-widest text-xs mt-1">
            MANAGEMENT SYSTEM
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { label: "Members", value: "1,240" },
            { label: "Active Plans", value: "987" },
            { label: "Check-ins Today", value: "42" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-base-300 border border-outlineColor rounded-xl p-4"
            >
              <p className="text-subtext font-mono tracking-widest text-xs">
                {s.label.toUpperCase()}
              </p>
              <p className="font-display text-3xl text-primary mt-1">
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-subtext font-mono text-xs">v1.0 · Admin</p>
          <ThemeToggle />
        </div>
      </div>

      {/* Right — login form */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8">
            <h1 className="font-display text-4xl text-primary">GYMSYNC</h1>
            <p className="text-subtext font-mono tracking-widest text-xs mt-1">
              MANAGEMENT SYSTEM
            </p>
          </div>

          <h2 className="font-display text-5xl text-primary mb-1">
            WELCOME BACK
          </h2>
          <p className="text-subtext text-sm mb-8">
            Sign in to your admin account
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-subtext font-mono tracking-widest text-xs">
                EMAIL
              </label>
              <input
                type="email"
                autoComplete="email"
                autoFocus
                className="border border-outlineColor rounded-xl py-3 px-4 bg-base-100 text-sm text-primary outline-none focus:border-primary transition placeholder:text-subtext"
                placeholder="admin@gymsync.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-subtext font-mono tracking-widest text-xs">
                  PASSWORD
                </label>
                <button
                  type="button"
                  className="text-xs text-subtext hover:text-primary transition font-mono"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  autoComplete="current-password"
                  className="w-full border border-outlineColor rounded-xl py-3 px-4 pr-11 bg-base-100 text-sm text-primary outline-none focus:border-primary transition placeholder:text-subtext"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-subtext hover:text-primary transition"
                >
                  {showPass ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-xs text-red-600 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl px-4 py-2.5">
                {error}
              </p>
            )}

            {/* Submit */}
            <Button type="submit" Icon={FaArrowRight} title="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
