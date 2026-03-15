
const ExpiringThisWeek = () => {
  const members = [
    { name: "Lena Santos", days: "5d left", initials: "LS" },
    { name: "Nina Ocampo", days: "3d left", initials: "NO" },
  ];
  
  return (
    <div className="bg-base-100 rounded-xl p-6 shadow-sm border border-outlineColor">
      <h2 className="text-xs tracking-widest text-subtext mb-4">
        EXPIRING THIS WEEK
      </h2>

      <div className="space-y-4">
        {members.map((m, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b border-outlineColor pb-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold">
                {m.initials}
              </div>

              <span>{m.name}</span>
            </div>

            <span className="text-yellow-600 font-semibold">{m.days}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpiringThisWeek;
