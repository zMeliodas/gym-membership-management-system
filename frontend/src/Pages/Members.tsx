import MembersTable from "../components/MembersTable";
import { IoAddCircleOutline } from "react-icons/io5";

const Members = () => {
  return (
    <div className="flex flex-col bg-base-200 w-full overflow-auto p-10">
      <div className="flex flex-col">
        <div className="flex w-full items-center mb-8">
          <p className="flex-1 font-inter text-purple text-xl border-l-4 border-purple pl-2 font-semibold tracking-tighter">
            ALL MEMBERS (9)
          </p>

          <button className="flex items-center gap-2 font-inter text-purple text-sm font-bold border-2 border-outlineColor bg-base-100 py-3 px-4 rounded-4xl hover:-translate-y-1 transform-all transition-all duration-300">
            <IoAddCircleOutline className="w-6 h-6" /> ADD NEW MEMBER
          </button>
        </div>

        <MembersTable />
      </div>
    </div>
  );
};

export default Members;
