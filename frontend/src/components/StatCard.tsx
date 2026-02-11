import type { CardTypes } from "../types/types";

const StatCard = ({ title, Icon, value }: CardTypes) => {
  return (
    <div className="flex flex-col max-w-86 max-h-42 h-full w-full p-6 border-2 bg-base-100 border-outlineColor rounded-xl transform transition-all duration-300 hover:-translate-y-1.5 select-none">
      <div className="flex items-center mb-8">
        <h1 className="flex-1 font-bold font-poppins text-lg">{title}</h1>
        {Icon && <Icon className="w-8 h-8" />}
      </div>

      <p className="text-3xl font-bold font-inters">{value}</p>
    </div>
  );
};

export default StatCard;
