import { useLocation } from "react-router-dom";
import type { PageMeta } from "../types/types";

export const usePageTitle = () => {
  const location = useLocation();

  const getTitleFromPath = (path: string): PageMeta => {
    switch (path) {
      case "/":
        return {
          title: "DASHBOARD",
          subtext: "Saturday, February 28, 2026",
        };
      case "/checkin":
        return {
          title: "Check-In",
          subtext: "Log member visits",
        };
      case "/members":
        return {
          title: "Members",
          subtext: "Manage all gym memberships",
        };
      case "/plans":
        return {
          title: "MEMBERSHIP PLANS",
          subtext: "Configure available plans",
        };
      case "/settings":
        return {
          title: "Settings",
          subtext: "Manage your account and preferences.",
        };
      default:
        return {
          title: "DASHBOARD",
          subtext: "Saturday, February 28, 2026",
        };
    }
  };

  return getTitleFromPath(location.pathname);
};
