import { useModal } from "../context/ModalContext";
import type { EditMemberData } from "../types/types";

const MembersTable = () => {
  const { openEditMember } = useModal();

  const members = [
    {
      name: "Marcus Reyes",
      email: "marcus.r@gmail.com",
      plan: "Gold",
      status: "active",
      expiry: "2026-04-09",
      phone: "09171234001",
    },
    {
      name: "Lena Santos",
      email: "lena.s@gmail.com",
      plan: "Silver",
      status: "active",
      expiry: "2026-03-20",
      phone: "09181234002",
    },
    {
      name: "Jude Villanueva",
      email: "jude.v@gmail.com",
      plan: "Basic",
      status: "expired",
      expiry: "2026-03-12",
      phone: "09191234003",
    },
    {
      name: "Jude Villanueva",
      email: "jude.v@gmail.com",
      plan: "Basic",
      status: "expired",
      expiry: "2026-03-12",
      phone: "09191234003",
    },
    {
      name: "Jude Villanueva",
      email: "jude.v@gmail.com",
      plan: "Basic",
      status: "expired",
      expiry: "2026-03-12",
      phone: "09191234003",
    },
    {
      name: "Jude Villanueva",
      email: "jude.v@gmail.com",
      plan: "Basic",
      status: "expired",
      expiry: "2026-03-12",
      phone: "09191234003",
    },
  ];

  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  }

  function statusColor(status: string) {
    if (status === "active") return "bg-green-200 text-green-700";
    if (status === "expired") return "bg-red-200 text-red-700";
    if (status === "frozen") return "bg-blue-200 text-blue-700";
    return "bg-gray-200";
  }

  const planColor = (plan: string) => {
    if (plan === "Gold") return "text-gold bg-gold2";
    if (plan === "Silver") return "text-silver bg-silver2";
    return "bg-gray-100";
  };

  return (
    <div className="border border-outlineColor rounded-xl">
      {/* Filters */}
      <div className="flex gap-4 p-4 bg-base-100 rounded-xl text-primary">
        <input
          placeholder="Search members..."
          className="border border-outlineColor rounded-xl px-3 py-2 text-primary"
        />

        <select className="border border-outlineColor rounded-xl px-3 py-2 cursor-pointer text-primary">
          <option>All Status</option>
        </select>

        <select className="border border-outlineColor rounded-xl px-3 py-2 cursor-pointer text-primary">
          <option>All Plans</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-base-100 overflow-hidden border-y rounded-b-xl border-outlineColor">
        {/* Header */}
        <div className="grid grid-cols-6 p-3 bg-base-300 text-sm font-semibold">
          <div className="text-subtext">MEMBER</div>
          <div className="text-subtext">PLAN</div>
          <div className="text-subtext">STATUS</div>
          <div className="text-subtext">EXPIRY</div>
          <div className="text-subtext">PHONE</div>
          <div className="text-subtext">ACTIONS</div>
        </div>

        {/* Rows */}
        {members.map((member, index) => (
          <div
            key={index}
            className="grid grid-cols-6 p-3 items-center border-t border-outlineColor"
          >
            {/* MEMBER */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-base-100 rounded-lg flex items-center justify-center">
                {getInitials(member.name)}
              </div>

              <div>
                <div className="text-primary">{member.name}</div>
                <div className="text-sm text-subtext">{member.email}</div>
              </div>
            </div>

            {/* PLAN */}
            <div>
              <span
                className={`px-2 py-1 rounded text-sm font-semibold ${planColor(member.plan)}`}
              >
                {member.plan}
              </span>
            </div>

            {/* STATUS */}
            <div>
              <span
                className={`px-2 py-1 rounded-full text-sm ${statusColor(
                  member.status,
                )}`}
              >
                {member.status}
              </span>
            </div>

            {/* EXPIRY */}
            <div className="font-sans text-primary">{member.expiry}</div>

            {/* PHONE */}
            <div className="font-sans text-primary">{member.phone}</div>

            {/* ACTIONS */}
            <div className="flex gap-2">
              <button
                className="border px-3 py-1 rounded-xl border-outlineColor text-primary cursor-pointer"
                onClick={() =>
                  openEditMember({
                    id: index,
                    fn: member.name.split(" ")[0],
                    ln: member.name.split(" ").slice(1).join(" "),
                    email: member.email,
                    phone: member.phone,
                    plan: member.plan,
                    status: member.status as EditMemberData["status"],
                    expiry: member.expiry,
                    startDate: "",
                  })
                }
              >
                Edit
              </button>

              <button className="border px-3 py-1 rounded-xl text-red-500">
                Del
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersTable;
