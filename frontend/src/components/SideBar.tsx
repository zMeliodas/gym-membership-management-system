import { MdDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import SideBarButton from "./SideBarButton";
import type { ButtonProps } from "../types/types";
import { MdOutlineCardMembership } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";

const SideBar = () => {
  const buttons: ButtonProps[] = [
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
      Icon: FaRegCalendarCheck,
      title: "Check-In",
      link: "/checkin",
    },
    {
      Icon: MdOutlineCardMembership,
      title: "Plans",
      link: "/plans",
    },
    {
      Icon: IoMdSettings,
      title: "Settings",
      link: "/settings",
    },
  ];

  return (
    <div className="flex flex-col h-full max-w-64 w-full bg-componentBgColor outline-1 outline-outlineColor z-10">
      <div className="flex flex-col px-6 py-6 border-b border-outlineColor bg-base-100 gap-1">
        <h1 className="text-primary font-display text-4xl font-bold tracking-wider">
          GymSync
        </h1>
        <p className="text-subtext font-mono text-sm tracking-widest">
          MANAGEMENT SYSTEM
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
