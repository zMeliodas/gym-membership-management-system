import type { SideBarButtonTypes } from "../types/buttonTypes";

const SideBarButton = ({ Icon, title }: SideBarButtonTypes) => {
  return (
    <button className="flex items-center w-full border-l-3 border-transparent font-inter text-purple focus:border-purple gap-4 px-8 py-3 hover:bg-base-300 focus:bg-base-300 transform transition-all duration-300">
      <Icon className="w-6 h-8" /> {title}
    </button>
  );
};

export default SideBarButton;
