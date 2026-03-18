import React from "react";

const RecentActivity = () => {
  const activities = [
    { text: "Marcus Reyes checked in", time: "08:14", color: "bg-black" },
    {
      text: "Lena Santos membership expiring soon",
      time: "08:01",
      color: "bg-red-500",
    },
    {
      text: "Sam Aguilar added as new member",
      time: "Yesterday",
      color: "bg-blue-500",
    },
    { text: "Nina Ocampo checked in", time: "Yesterday", color: "bg-black" },
  ];

  return (
    <div className="bg-base-100 rounded-xl p-6 shadow-sm border border-outlineColor">
      <h2 className="text-xs tracking-widest text-subtext mb-4">
        RECENT ACTIVITY
      </h2>

      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b border-outlineColor pb-3"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${activity.color}`} />

              <span className="text-primary font-sans">{activity.text}</span>
            </div>

            <span className="text-subtext text-sm">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
