import StatCard from "../components/StatCard";
import { GoPeople } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";
import type { ButtonTypes, CardTypes } from "../types/types";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWarning } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
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
      title: "TODAY'S ATTENDANCE",
      value: "42",
    },
    {
      Icon: FaMoneyBillWave,
      title: "MONTHLY REVENUE",
      value: "₱45,000",
    },
  ];

  const buttons: ButtonTypes[] = [
    {
      Icon: IoAddCircleOutline,
      title: "Add Members",
      link: "/members/new",
    },
    {
      Icon: IoCalendarClearOutline,
      title: "Schedule Class",
      link: "/schedule",
    },
    {
      Icon: FaRegCalendarCheck,
      title: "Attendance",
      link: "/schedule",
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
            <QuickActionButton
              link={button.link}
              Icon={button.Icon}
              title={button.title}
            />
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
