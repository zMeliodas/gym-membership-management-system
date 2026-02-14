import { useLocation } from "react-router-dom";

export const usePageTitle = () => {
  const location = useLocation();

  const getTitleFromPath = (path: string) => {
    switch (path) {
      case "/":
        return "DASHBOARD OVERVIEW";
      case "/schedule":
        return "CLASS SCHEDULE";
      case "/members":
        return "MEMBERS";
      case "/members/new":
        return "NEW MEMBER";
      case "/rates":
        return "RATES AND MEMBERSHIP";
        case "/settings":
        return "SETTINGS";
      default:
        return "DASHBOARD OVERVIEW";
    }
  };

  return getTitleFromPath(location.pathname);
};