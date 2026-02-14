import type { ButtonTypes } from "../types/types";
import { Link } from "react-router-dom";

const QuickActionButton = ({ title, Icon, link }: ButtonTypes) => {
  return (
    <Link
      to={link}
      className="group relative flex flex-col h-full w-full border-2 bg-base-100 border-outlineColor rounded-xl shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 cursor-pointer select-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex items-center p-4 gap-4">
        {Icon && (
          <div className="shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}

        <h2 className="font-semibold font-poppins text-sm uppercase tracking-tight text-secondary group-hover:text-primary transition-colors duration-300">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default QuickActionButton;
