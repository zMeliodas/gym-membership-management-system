import { useState } from "react";
import { FiEye, FiEyeOff, FiLogOut } from "react-icons/fi";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Plan {
  name: string;
  price: number;
  description: string;
}

const DEFAULT_PLANS: Plan[] = [
  { name: "Gold", price: 3500, description: "All Access + Personal Training" },
  { name: "Silver", price: 2000, description: "Full Gym Access + Classes" },
  { name: "Basic", price: 1000, description: "Gym Floor Access Only" },
];

const PLAN_BADGE: Record<string, string> = {
  Gold: "bg-amber-100 text-amber-800",
  Silver: "bg-neutral-200 text-neutral-600",
  Basic: "bg-stone-100 text-stone-500",
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-3xl text-primary">{title}</h2>
      <p className="text-subtext text-sm mt-1">{description}</p>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-outlineColor my-10" />;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-subtext font-mono tracking-widest text-xs block mb-1.5">
      {children}
    </label>
  );
}

function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full border border-outlineColor rounded-xl py-3 px-4 bg-base-100 text-sm text-primary outline-none focus:border-primary transition placeholder:text-subtext ${className}`}
      {...props}
    />
  );
}

function SaveButton({
  onClick,
  saved,
}: {
  onClick: () => void;
  saved: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
        saved
          ? "bg-green-100 text-green-800 border border-green-200"
          : "bg-primary text-base-100 hover:bg-buttonHover"
      }`}
    >
      {saved ? "✓ Saved" : "Save Changes"}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Account section
// ---------------------------------------------------------------------------

function AccountSection() {
  const [email, setEmail] = useState("admin@gymsync.com");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [emailSaved, setEmailSaved] = useState(false);
  const [passSaved, setPassSaved] = useState(false);
  const [passError, setPassError] = useState("");

  function handleSaveEmail() {
    setEmailSaved(true);
    setTimeout(() => setEmailSaved(false), 2000);
  }

  function handleSavePassword() {
    if (!currentPass || !newPass || !confirmPass) {
      setPassError("All password fields are required.");
      return;
    }
    if (newPass !== confirmPass) {
      setPassError("New passwords do not match.");
      return;
    }
    if (newPass.length < 8) {
      setPassError("Password must be at least 8 characters.");
      return;
    }
    setPassError("");
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
    setPassSaved(true);
    setTimeout(() => setPassSaved(false), 2000);
  }

  return (
    <div>
      <SectionHeader
        title="ADMIN ACCOUNT"
        description="Update your login email and password."
      />

      {/* Email */}
      <div className="w-full">
        <div className="mb-4">
          <Label>EMAIL ADDRESS</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@gymsync.com"
          />
        </div>
        <div className="flex justify-end">
          <SaveButton onClick={handleSaveEmail} saved={emailSaved} />
        </div>
      </div>

      {/* Password */}
      <div className="w-full mt-8">
        <p className="text-subtext font-mono tracking-widest text-xs mb-4">
          CHANGE PASSWORD
        </p>

        <div className="flex flex-col gap-3">
          {[
            {
              label: "CURRENT PASSWORD",
              value: currentPass,
              set: setCurrentPass,
              show: showCurrent,
              toggle: () => setShowCurrent((p) => !p),
            },
            {
              label: "NEW PASSWORD",
              value: newPass,
              set: setNewPass,
              show: showNew,
              toggle: () => setShowNew((p) => !p),
            },
            {
              label: "CONFIRM PASSWORD",
              value: confirmPass,
              set: setConfirmPass,
              show: showConfirm,
              toggle: () => setShowConfirm((p) => !p),
            },
          ].map((field) => (
            <div key={field.label}>
              <Label>{field.label}</Label>
              <div className="relative">
                <Input
                  type={field.show ? "text" : "password"}
                  value={field.value}
                  onChange={(e) => {
                    field.set(e.target.value);
                    setPassError("");
                  }}
                  placeholder="••••••••"
                  className="pr-11"
                />
                <button
                  type="button"
                  onClick={field.toggle}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-subtext hover:text-primary transition"
                >
                  {field.show ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {passError && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 mt-3">
            {passError}
          </p>
        )}

        <div className="flex justify-end mt-4">
          <SaveButton onClick={handleSavePassword} saved={passSaved} />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Plans section
// ---------------------------------------------------------------------------

function PlansSection() {
  const [plans, setPlans] = useState<Plan[]>(DEFAULT_PLANS);
  const [saved, setSaved] = useState(false);

  function updatePlan(
    index: number,
    field: keyof Plan,
    value: string | number,
  ) {
    setPlans((prev) =>
      prev.map((p, i) => (i === index ? { ...p, [field]: value } : p)),
    );
    setSaved(false);
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <SectionHeader
        title="MEMBERSHIP PLANS"
        description="Edit plan pricing and descriptions."
      />

      <div className="flex flex-col gap-4 w-full">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className="bg-base-100 border border-outlineColor rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium font-mono ${PLAN_BADGE[plan.name]}`}
              >
                {plan.name}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>MONTHLY PRICE (₱)</Label>
                <Input
                  type="number"
                  value={plan.price}
                  onChange={(e) =>
                    updatePlan(i, "price", Number(e.target.value))
                  }
                  min={0}
                />
              </div>
              <div>
                <Label>DESCRIPTION</Label>
                <Input
                  type="text"
                  value={plan.description}
                  onChange={(e) => updatePlan(i, "description", e.target.value)}
                  placeholder="Short description..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end w-full mt-4">
        <SaveButton onClick={handleSave} saved={saved} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Logout section
// ---------------------------------------------------------------------------

function LogoutSection({ onLogout }: { onLogout: () => void }) {
  const [confirm, setConfirm] = useState(false);

  return (
    <div>
      <SectionHeader
        title="SESSION"
        description="Sign out of your admin account."
      />

      <div className="w-full bg-base-100 border border-outlineColor rounded-xl p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-primary">Sign out</p>
            <p className="text-xs text-subtext mt-0.5">
              You will be redirected to the login page.
            </p>
          </div>
          {!confirm ? (
            <button
              onClick={() => setConfirm(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs font-medium hover:bg-red-100 transition shrink-0 ml-4"
            >
              <FiLogOut size={13} />
              Log Out
            </button>
          ) : (
            <div className="flex items-center gap-2 ml-4 shrink-0">
              <button
                onClick={() => setConfirm(false)}
                className="px-3 py-2 rounded-xl border border-outlineColor text-xs text-subtext hover:bg-base-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={onLogout}
                className="px-3 py-2 rounded-xl bg-red-600 text-white text-xs font-medium hover:bg-red-700 transition"
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

interface SettingsProps {
  onLogout?: () => void;
}

const Settings = ({ onLogout }: SettingsProps) => {
  function handleLogout() {
    localStorage.removeItem("token");
    onLogout?.();
  }

  return (
    <div className="px-8 py-10 max-w-2xl mx-auto w-full">
      <AccountSection />
      <Divider />
      <PlansSection />
      <Divider />
      <LogoutSection onLogout={handleLogout} />
    </div>
  );
};

export default Settings;
