import PlanCard from "../components/PlanCard";
import type { PlanCardProps } from "../types/types";

const MembershipPlans = () => {
  const plans: PlanCardProps[] = [
    {
      tier: "Gold",
      price: 3500,
      active: 3,
      revenue: 10500,
      description:
        "Our premium all-inclusive membership for serious athletes who want the full BKL GYM experience.",
      features: [
        "Gym Floor Access",
        "Group Classes (Unlimited)",
        "Personal Training (4 sessions/mo)",
        "Locker Room & Towel Service",
        "Sauna",
        "Protein",
      ],
      onClickDetails: () => alert("Gold"),
    },
    {
      tier: "Silver",
      price: 2000,
      active: 1,
      revenue: 2000,
      description:
        "A solid all-around membership with access to all group classes and full gym facilities.",
      features: [
        "Gym Floor Access",
        "Group Classes (Unlimited)",
        "Trainer",
        "Locker Room & Towel Service",
      ],
      onClickDetails: () => alert("Silver"),
    },
    {
      tier: "Basic",
      price: 1000,
      active: 1,
      revenue: 1000,
      description:
        "Entry-level access for members who want to use the gym floor on their own schedule.",
      features: [
        "Gym Floor Access",
        "Group Classes",
        "Trainer",
        "Locker",
        "Sauna",
        "Protein",
      ],
      onClickDetails: () => alert("Basic"),
    },
  ];

  return (
    <div className="w-full p-12 overflow-auto">
      <div
        className="
          grid
          gap-6
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {plans.map((plan) => (
          <PlanCard
            tier={plan.tier}
            price={plan.price}
            active={plan.active}
            revenue={plan.revenue}
            description={plan.description}
            features={plan.features}
            onClickDetails={plan.onClickDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
