import MembersTable from "../components/MembersTable";

const Members = () => {
  return (
    <div className="flex flex-col bg-base-200 w-full overflow-auto p-10">
      <div className="flex flex-col">

        <MembersTable />
      </div>
    </div>
  );
};

export default Members;
