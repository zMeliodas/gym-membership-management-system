import StatCard from "../components/StatCard";
import { GoPeople } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";
import type { CardTypes } from "../types/types";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import QuickActionButton from "../components/QuickActionButton";
import MembersTable from "../components/MembersTable";
import Button from "../components/Button";

const Dashboard = () => {
  const cards: CardTypes[] = [
    {
      Icon: GoPeople,
      title: "TOTAL MEMBERS",
      value: "999",
    },
    {
      Icon: GoPeople,
      title: "ACTIVE MEMBERSHIP",
      value: "999",
    },
    {
      Icon: GoPeople,
      title: "EXPIRED MEMBERSHIP",
      value: "999",
    },
    {
      Icon: GoPeople,
      title: "REVENUE",
      value: "999",
    },
    {
      Icon: GoPeople,
      title: "REVENUE",
      value: "999",
    },
  ];

  const buttons: CardTypes[] = [
    {
      Icon: IoAddCircleOutline,
      title: "Add Members",
    },
    {
      Icon: IoCalendarClearOutline,
      title: "Schedule Class",
    },
    {
      Icon: FaRegCalendarCheck,
      title: "Attendance",
    },
  ];

  return (
    <div className="flex flex-col bg-base-200 w-full overflow-auto p-12">
      <div
        className="grid w-full gap-4 mb-10 
                grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
      >
        {cards.map((card) => (
          <StatCard Icon={card.Icon} title={card.title} value={card.value} />
        ))}
      </div>

      <div className="flex flex-col gap-6 max-w-5xl">
        <p className="font-poppins text-primary text-xl border-l-4 border-primary pl-2 font-semibold">
          QUICK ACTIONS
        </p>
        <div
          className="grid w-full gap-2 mb-10 
                grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
        >
          {buttons.map((button) => (
            <QuickActionButton Icon={button.Icon} title={button.title} />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-6">
        <div className="flex items-center">
          <p className="flex-1 font-poppins text-primary text-xl border-l-4 border-primary pl-2 font-semibold">
            RECENT MEMBERS
          </p>

          <Button link="/members" title="VIEW ALL MEMBERS" />
        </div>
      </div>

      <div className="mt-4">
        <MembersTable />
      </div>
    </div>
  );
};

export default Dashboard;
