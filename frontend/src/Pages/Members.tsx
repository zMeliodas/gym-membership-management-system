import MembersTable from "../components/MembersTable";
import { IoAddCircleOutline } from "react-icons/io5";
import Button from "../components/Button";

const Members = () => {
  return (
    <div className="flex flex-col bg-base-200 w-full overflow-auto p-10">
      <div className="flex flex-col">
        <div className="flex w-full items-center mb-8">
          <p className="flex-1 font-inter text-purple text-xl border-l-4 border-purple pl-2 font-semibold tracking-tighter">
            ALL MEMBERS (9)
          </p>

          <Button
            link="/members/new"
            Icon={IoAddCircleOutline}
            title="ADD NEW MEMBER"
          />
        </div>

        <MembersTable />
      </div>
    </div>
  );
};

export default Members;
