import type { PlanRevenue } from "../types/types";
import RevenueBar from "./RevenueBar";

type Props = {
  plans: PlanRevenue[];
};

const RevenueByPlan = ({ plans }: Props) => {
  const max = Math.max(...plans.map((p) => p.amount));

  return (
    <div className="bg-base-200 border border-outlineColor rounded-2xl p-6 w-full">
      <p className="text-xs tracking-widest text-primary mb-6">
        REVENUE BY PLAN
      </p>

      {plans.map((plan) => (
        <RevenueBar
          key={plan.label}
          label={plan.label}
          amount={plan.amount}
          max={max}
          color={plan.color}
        />
      ))}
    </div>
  );
};

export default RevenueByPlan;