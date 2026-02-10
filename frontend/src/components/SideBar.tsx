import { MdDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import SideBarButton from "./SidebarButton";
import type { SideBarButtonTypes } from "../types/buttonTypes";
import { MdOutlineCardMembership } from "react-icons/md";

const SideBar = () => {
  const buttons: SideBarButtonTypes[] = [
    {
      Icon: MdDashboard,
      title: "Dashboard",
    },
    {
      Icon: GoPeople,
      title: "Members",
    },
    {
      Icon: MdOutlineCardMembership,
      title: "Membership Plans",
    },
    {
      Icon: CiCalendar,
      title: "Schedule",
    },
    {
      Icon: IoMdSettings,
      title: "Settings",
    },
  ];

  return (
    <div className="flex flex-col h-full max-w-68 w-full bg-componentBgColor outline-1 outline-outlineColor z-10">
      <div className="flex flex-col items-center py-8 px-4 border-b-2 border-outlineColor bg-base-100 gap-4">
        <h1 className="text-purple font-poppins text-2xl font-bold">GymSync</h1>
        <p className="text-purple font-inter text-sm">
          Membership Management System
        </p>
      </div>

      <div className="pt-8 flex flex-col gap-2 bg-base-100 h-full">
        {buttons.map((button) => (
          <SideBarButton
            key={button.title}
            Icon={button.Icon}
            title={button.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
