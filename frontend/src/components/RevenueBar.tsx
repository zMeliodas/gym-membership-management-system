import type { RevenueBarProps } from "../types/types";
import { tierStyles } from "../constants/tierStyles";

const RevenueBar = ({ label, amount, max, color }: RevenueBarProps) => {

  const percent = (amount / max) * 100;

  return (
    <div className="flex items-center gap-4 mb-4">
      <span
        className={`w-16 text-xs p-1 text-center rounded ${tierStyles[label].bg} ${tierStyles[label].text}`}
      >
        {label}
      </span>

      <div className="flex-1 h-2 bg-base-300 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${percent}%`,
            backgroundColor: color,
          }}
        />
      </div>

      <span className="w-20 text-right text-sm text-primary">
        ₱{amount.toLocaleString()}
      </span>
    </div>
  );
};

export default RevenueBar;
