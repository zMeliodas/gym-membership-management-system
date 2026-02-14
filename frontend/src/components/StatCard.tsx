import type { CardTypes } from "../types/types";

const StatCard = ({ title, Icon, value }: CardTypes) => {
  return (
    <div className="group relative flex flex-col w-full h-full min-h-40 p-6 border-2 bg-base-100 border-outlineColor rounded-xl shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 cursor-pointer select-none overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="font-semibold font-poppins text-sm uppercase tracking-wide text-secondary group-hover:text-primary transition-colors duration-300">
            {title}
          </h2>
          {Icon && (
            <div className="shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          )}
        </div>

        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold font-inter text-primary group-hover:scale-105 transition-transform duration-300">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;