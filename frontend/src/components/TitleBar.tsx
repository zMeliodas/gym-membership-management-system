import { useModal } from "../context/ModalContext";
import { usePageTitle } from "../hooks/usePageTitle";
import Button from "./Button";
import { FaPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const TitleBar = () => {
  const { title, subtext } = usePageTitle();
  const location = useLocation();
  const { openAddMember } = useModal();

  const showButtonRoutes = ["/", "/members"];

  return (
    <div className="flex w-full h-24 items-center px-8 pt-8 bg-base-200 z-0">
      <div className="flex-1">
        <h1 className="text-6xl font-display text-primary font-bold">
          {title}
        </h1>

        <p className="text-base font-sans text-subtext">{subtext}</p>
      </div>

      {showButtonRoutes.includes(location.pathname) && (
        <div className="flex flex-col-reverse pt-10">
          <Button Icon={FaPlus} title="Add Member" onClick={openAddMember} />
        </div>
      )}
    </div>
  );
};

export default TitleBar;
