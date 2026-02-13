import type { ButtonTypes } from "../types/types";
import { Link } from "react-router-dom";

const SideBarButton = ({ Icon, title, link }: ButtonTypes) => {
  return (
    <Link
      to={link}
      className="flex items-center w-full border-l-3 text-base border-transparent font-inter text-primary focus:border-primary gap-4 px-8 py-3 hover:bg-base-300 focus:bg-base-300 transform transition-all duration-300"
    >
      {Icon && <Icon className="w-6 h-8" />} {title}
    </Link>
  );
};

export default SideBarButton;
