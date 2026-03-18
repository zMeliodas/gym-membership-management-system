import RevenueByPlan from "../components/RevenueByPlan";
import SummaryCard from "../components/SummaryCard";
import type { PlanRevenue, SummaryData } from "../types/types";

const plans: PlanRevenue[] = [
  { label: "Gold", amount: 10500, color: "#d9ff00" },
  { label: "Silver", amount: 50500, color: "#9ca3af" },
  { label: "Basic", amount: 25000, color: "#6b7280" },
];

const summary: SummaryData = {
  monthlyRevenue: 13500,
  activeMembers: 5,
  avgRevenue: 2700,
  expired: 1000,
};

const Revenue = () => {
  return (
    <div className="flex gap-6 p-6">
      <RevenueByPlan plans={plans} />
      <SummaryCard data={summary} />
    </div>
  );
};

export default Revenue;
