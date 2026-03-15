import StatCard from "../components/StatCard";
import { GoPeople } from "react-icons/go";
import type { CardTypes } from "../types/types";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWarning } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import RecentActivity from "../components/RecentActivity";
import ExpiringThisWeek from "../components/ExpiringThisWeek";

const Dashboard = () => {
  const cards: CardTypes[] = [
    {
      Icon: GoPeople,
      title: "TOTAL MEMBERS",
      value: "999",
    },
    {
      Icon: FaCheckCircle,
      title: "ACTIVE MEMBERSHIPS",
      value: "999",
    },
    {
      Icon: MdOutlineWarning,
      title: "EXPIRING SOON",
      value: "15",
    },
    {
      Icon: FaCalendarCheck,
      title: "TODAY’S CHECK-INS",
      value: "42",
    },
  ];

  return (
    <div className="flex flex-col bg-base-200 w-full overflow-auto px-8 py-12">
      <div
        className="grid w-full gap-4 mb-6 
                grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
      >
        {cards.map((card) => (
          <StatCard Icon={card.Icon} title={card.title} value={card.value} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <RecentActivity />

        <ExpiringThisWeek />
      </div>
    </div>
  );
};

export default Dashboard;
