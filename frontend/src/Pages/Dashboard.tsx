import StatCard from "../components/StatCard";
import { GoPeople } from "react-icons/go";
import type { StatCardTypes } from "../types/buttonTypes";

const Dashboard = () => {
  const cards: StatCardTypes[] = [
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

  return (
    <div className="flex bg-base-200 w-full overflow-auto p-12">
      <div className="flex flex-wrap w-full bg-base-200 gap-4 mb-10">
        {cards.map((card) => (
          <StatCard Icon={card.Icon} title={card.title} value={card.value} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
