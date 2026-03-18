import type { PlanCardProps } from "../types/types";
import { tierStyles } from "../constants/tierStyles";

const PlanCard = ({
  tier,
  price,
  active,
  revenue,
  description,
  features = [],
  featureLimit = 3,
  onClickDetails,
}: PlanCardProps) => {
  const visibleFeatures = features.slice(0, featureLimit);
  const remaining = features.length - featureLimit;

  return (
    <div
      className={`w-full max-w-xl bg-base-100 border border-outlineColor rounded-2xl p-6 flex flex-col gap-6 ${tierStyles[tier].border} hover:-translate-y-1 hover:shadow-xl transform transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <span
          className={`${tierStyles[tier].bg} ${tierStyles[tier].text} font-semibold px-3 py-1 rounded-md font-mono`}
        >
          {tier}
        </span>

        <button
          onClick={onClickDetails}
          className="text-sm text-subtext hover:underline"
        >
          Click for details →
        </button>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-2">
        <h1 className={`text-4xl font-bold ${tierStyles[tier].text}`}>
          ₱{price.toLocaleString()}
        </h1>
        <p className="text-subtext text-sm">/ month</p>
      </div>

      {/* Description */}
      <p className="text-subtext max-w-md">{description}</p>

      {/* Stats */}
      <div className="flex gap-4">
        <div className="flex-1 bg-base-200 rounded-xl p-4">
          <p className="text-xs tracking-widest text-subtext">ACTIVE</p>
          <h2 className="text-xl font-bold text-green-500">{active}</h2>
        </div>

        <div className="flex-1 bg-base-200 rounded-xl p-4">
          <p className="text-xs tracking-widest text-subtext">REVENUE</p>
          <h2 className={`${tierStyles[tier].text} text-xl font-bold `}>
            ₱{revenue.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {visibleFeatures.map((feature, i) => (
          <span
            key={i}
            className="bg-base-200 border text-primary border-outlineColor px-3 py-1 rounded-lg text-sm"
          >
            ✓ {feature}
          </span>
        ))}

        {remaining > 0 && (
          <span className="bg-base-200 border text-primary border-outlineColor px-3 py-1 rounded-lg text-sm">
            +{remaining} more
          </span>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
