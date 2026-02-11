const RecentMembersTable = () => {
  return (
    <div className="overflow-hidden rounded-lg border-2 border-outlineColor">
      <table className="w-full">
        <thead className="bg-base-100 border-b-2 border-outlineColor">
          <tr>
            <th className="p-3 text-base font-bold text-left text-purple font-poppins">
              MEMBER NAME
            </th>
            <th className="p-3 text-base font-bold text-left text-purple font-poppins">
              MARTIAL ART
            </th>
            <th className="p-3 text-base font-bold text-left text-purple font-poppins">
              BELT/RANKING
            </th>
            <th className="p-3 text-base font-bold text-left text-purple font-poppins">
              JOIN DATE
            </th>
            <th className="p-3 text-base font-bold text-left text-purple font-poppins">
              STATUS
            </th>
            <th className="p-3 text-base font-bold text-left text-purple font-poppins">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="text-left p-4 font-inter text-md">Miles Magbanua</td>
            <td className="text-left p-4 font-inter text-md">
              Brazilian Jiu-Jitsu
            </td>
            <td className="text-left p-4 font-inter text-md">Black Belt</td>
            <td className="text-left p-4 font-inter text-md">01/01/2026</td>
            <td className="text-left p-4 font-inter text-md">Active</td>
            <td className="text-left p-4 font-inter text-md">Edit View</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="text-left p-4 font-inter text-md">
              Nelvon Tamparong
            </td>
            <td className="text-left p-4 font-inter text-md">Taekwondo</td>
            <td className="text-left p-4 font-inter text-md">Red Belt</td>
            <td className="text-left p-4 font-inter text-md">02/01/2026</td>
            <td className="text-left p-4 font-inter text-md">Inactive</td>
            <td className="text-left p-4 font-inter text-md">Edit View</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentMembersTable;
