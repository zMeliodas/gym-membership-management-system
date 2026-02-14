import type { ButtonTypes } from "../types/types";
import { Link, useLocation } from "react-router-dom";

const SideBarButton = ({ Icon, title, link }: ButtonTypes) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link
      to={link}
      className={`flex items-center w-full border-l-3 text-base font-inter text-primary ${isActive ? "border-primary bg-base-300" : "border-transparent bg-transparent"} gap-4 px-8 py-3 hover:bg-base-300 transform transition-all duration-300`}
    >
      {Icon && <Icon className="w-6 h-8" />} {title}
    </Link>
  );
};

export default SideBarButton;
