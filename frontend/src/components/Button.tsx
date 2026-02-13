import { type ButtonTypes } from "../types/types";
import { Link } from "react-router-dom";

const Button = ({ link, Icon, title }: ButtonTypes) => {
  return (
    <Link
      to={link}
      className="flex items-center gap-2 font-inter text-purple text-sm font-bold border-2 border-outlineColor bg-base-100 py-3 px-4 rounded-4xl hover:-translate-y-1 transform-all transition-all duration-300"
    >
      {Icon && <Icon className="w-6 h-6" />} {title}
    </Link>
  );
};

export default Button;
