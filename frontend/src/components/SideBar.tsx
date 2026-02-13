import { MdDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import SideBarButton from "./SideBarButton";
import type { ButtonTypes } from "../types/types";
import { MdOutlineCardMembership } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";

const SideBar = () => {
  const buttons: ButtonTypes[] = [
    {
      Icon: MdDashboard,
      title: "Dashboard",
      link: "/",
    },
    {
      Icon: GoPeople,
      title: "Members",
      link: "/members",
    },
    {
      Icon: MdOutlineCardMembership,
      title: "Rates & Membership",
      link: "/rates",
    },
    {
      Icon: IoCalendarClearOutline,
      title: "Class Schedule",
      link: "/schedule",
    },
    {
      Icon: IoMdSettings,
      title: "Settings",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col h-full max-w-68 w-full bg-componentBgColor outline-1 outline-outlineColor z-10">
      <div className="flex flex-col items-center py-8 px-4 border-b-2 border-outlineColor bg-base-100 gap-4">
        <h1 className="text-primary font-poppins text-2xl font-bold">GymSync</h1>
        <p className="text-primary font-inter text-sm">
          Membership Management System
        </p>
      </div>

      <div className="pt-8 flex flex-col gap-2 bg-base-100 h-full">
        {buttons.map((button) => (
          <SideBarButton
            key={button.title}
            Icon={button.Icon}
            title={button.title}
            link={button.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
