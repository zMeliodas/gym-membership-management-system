import { useState } from "react";
import { useModal } from "../../context/ModalContext";
import type { AddMemberModalProps } from "../../types/types";

const AddMemberModal = ({ onSubmit }: AddMemberModalProps) => {
  const { isAddMemberOpen, closeAddMember } = useModal();
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("Gold");
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [duration, setDuration] = useState("1 Month");

  if (!isAddMemberOpen) return null;

  const handleSubmit = () => {
    onSubmit({ fn, ln, email, phone, plan, startDate, duration });
    closeAddMember();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={closeAddMember}
    >
      <div
        className="bg-base-100 rounded-2xl w-full max-w-lg p-8 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-3xl text-primary">ADD MEMBER</h2>
          <button
            onClick={closeAddMember}
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
                className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm text-primary outline-none focus:border-primary transition"
                value={fn}
                onChange={e => setFn(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-subtext font-mono tracking-widest text-xs">LAST NAME</label>
              <input
                className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm text-primary outline-none focus:border-primary transition"
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
              className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm text-primary outline-none focus:border-primary transition"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-subtext font-mono tracking-widest text-xs">PHONE</label>
            <input
              type="tel"
              className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm text-primary outline-none focus:border-primary transition"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          {/* Plan + Start date */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-subtext font-mono tracking-widest text-xs">PLAN</label>
              <select
                className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm text-primary outline-none focus:border-primary transition"
                value={plan}
                onChange={e => setPlan(e.target.value)}
              >
                <option>Gold</option>
                <option>Silver</option>
                <option>Basic</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-subtext font-mono tracking-widest text-xs">START DATE</label>
              <input
                type="date"
                className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm text-primary outline-none focus:border-primary transition"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div>
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-1">
            <label className="text-subtext font-mono tracking-widest text-xs">DURATION (MONTHS)</label>
            <select
              className="border border-outlineColor rounded-xl py-3 px-4 bg-base-300 text-sm text-primary outline-none focus:border-primary transition"
              value={duration}
              onChange={e => setDuration(e.target.value)}
            >
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
            </select>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-outlineColor mt-6 mb-5" />

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={closeAddMember}
            className="px-5 py-2.5 rounded-xl border border-outlineColor text-sm text-primary font-semibold hover:border-primary transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2.5 rounded-xl bg-primary text-base-100 text-sm font-medium hover:bg-white/60 transition"
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;