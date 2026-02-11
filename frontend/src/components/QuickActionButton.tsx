import type { CardTypes } from "../types/types";

const QuickActionButton = ({ title, Icon }: CardTypes) => {
  return (
    <div className="flex flex-col max-w-86 max-h-42 h-full w-full border-2 bg-base-100 border-outlineColor rounded-xl transform transition-all duration-300 hover:-translate-y-1.5 select-none">
      <div className="flex items-center p-4 gap-4">
        {Icon && <Icon className="w-6 h-6" />}
        <h1 className="flex-1 font-bold font-poppins text-lg">{title}</h1>
      </div>
    </div>
  );
};

export default QuickActionButton;
