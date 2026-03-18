import type { SummaryData } from "../types/types";

type Props = {
  data: SummaryData;
};

const SummaryCard = ({ data }: Props) => {
  return (
    <div className="bg-base-200 border border-outlineColor rounded-2xl p-6 w-full">
      <p className="text-xs tracking-widest text-primary mb-6">
        SUMMARY
      </p>

      <p className="text-xs text-primary mb-2">
        MONTHLY REVENUE (ACTIVE)
      </p>

      <h1 className="text-4xl font-bold text-primary mb-6">
        ₱{data.monthlyRevenue.toLocaleString()}
      </h1>

      <div className="space-y-3 text-sm text-primary">
        <div className="flex justify-between border-t border-outlineColor pt-3">
          <span>Active Members</span>
          <span>{data.activeMembers}</span>
        </div>

        <div className="flex justify-between border-t border-outlineColor pt-3">
          <span>Avg Revenue / Member</span>
          <span>₱{data.avgRevenue.toLocaleString()}</span>
        </div>

        <div className="flex justify-between border-t border-outlineColor pt-3">
          <span>Expired (lost MRR)</span>
          <span className="text-red-400">
            ₱{data.expired.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;