import { useState, useEffect } from "react";
import { useModal } from "../../context/ModalContext";
import { type EditMemberData } from "../../types/types";

interface EditMemberModalProps {
  onSubmit: (data: EditMemberData) => void;
}

const STATUS_OPTIONS = ["active", "expired", "frozen", "pending"] as const;

const EditMemberModal = ({ onSubmit }: EditMemberModalProps) => {
  const { isEditMemberOpen, editingMember, closeEditMember } = useModal();

  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("Gold");
  const [status, setStatus] = useState<EditMemberData["status"]>("active");
  const [expiry, setExpiry] = useState("");

  const [visible, setVisible] = useState(false);

  // Pre-fill fields when editingMember changes
  useEffect(() => {
    if (editingMember) {
      setFn(editingMember.fn);
      setLn(editingMember.ln);
      setEmail(editingMember.email);
      setPhone(editingMember.phone);
      setPlan(editingMember.plan);
      setStatus(editingMember.status);
      setExpiry(editingMember.expiry);
    }
  }, [editingMember]);

  // Transition
  useEffect(() => {
    if (isEditMemberOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isEditMemberOpen]);

  if (!isEditMemberOpen && !visible) return null;
  if (!editingMember) return null;

  const handleSubmit = () => {
    onSubmit({
      ...editingMember,
      fn, ln, email, phone, plan, status, expiry,
    });
    closeEditMember();
  };

  return (
    <div
      onClick={closeEditMember}
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
        visible ? "bg-black/30" : "bg-black/0"
      }`}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`bg-base-100 rounded-2xl w-full max-w-lg p-8 shadow-xl transition-all duration-300 ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display text-3xl text-primary">EDIT MEMBER</h2>
            <p className="text-subtext text-xs font-mono mt-1">
              {editingMember.fn} {editingMember.ln}
            </p>
          </div>
          <button
            onClick={closeEditMember}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-outlineColor text-subtext hover:border-primary hover:text-primary transition text-sm"
          >
            ✕
          </button>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-4">

          {/* First + Last */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-subtext font-mono tracking-widest text-xs">FIRST NAME</label>
              <input
                className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm outline-none text-primary focus:border-primary transition"
                value={fn}
                onChange={e => setFn(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-subtext font-mono tracking-widest text-xs">LAST NAME</label>
              <input
                className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm outline-none text-primary focus:border-primary transition"
                value={ln}
                onChange={e => setLn(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-subtext font-mono tracking-widest text-xs">EMAIL</label>
            <input
              type="email"
              className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm outline-none text-primary focus:border-primary transition"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-subtext font-mono tracking-widest text-xs">PHONE</label>
            <input
              type="tel"
              className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm outline-none text-primary focus:border-primary transition"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          {/* Plan + Status */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-subtext font-mono tracking-widest text-xs">PLAN</label>
              <select
                className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm outline-none text-primary focus:border-primary transition"
                value={plan}
                onChange={e => setPlan(e.target.value)}
              >
                <option>Gold</option>
                <option>Silver</option>
                <option>Basic</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-subtext font-mono tracking-widest text-xs">STATUS</label>
              <select
                className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm outline-none text-primary focus:border-primary transition"
                value={status}
                onChange={e => setStatus(e.target.value as EditMemberData["status"])}
              >
                {STATUS_OPTIONS.map(s => (
                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Expiry */}
          <div className="flex flex-col gap-1">
            <label className="text-subtext font-mono tracking-widest text-xs">EXPIRY DATE</label>
            <input
              type="date"
              className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm outline-none text-primary focus:border-primary transition"
              value={expiry}
              onChange={e => setExpiry(e.target.value)}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-outlineColor mt-6 mb-5" />

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={closeEditMember}
            className="px-5 py-2.5 rounded-xl border border-outlineColor text-sm text-subtext hover:text-primary hover:border-primary transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2.5 rounded-xl bg-primary text-base-100 text-sm font-medium hover:bg-buttonHover transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMemberModal;