import ClassCard from "../components/ClassCard";
import type { ScheduleTypes } from "../types/types";

const ClassSchedule = () => {
  const scheds: ScheduleTypes[] = [
    {
      title: "BJJ Fundamentals",
      time: "6:00 - 10:00 PM",
      instructor: "Kru Jonathan",
      students: "20",
    },
    {
      title: "Muay Thai Advanced",
      time: "6:00 - 10:00 PM",
      instructor: "Kru Jonathan",
      students: "20",
    },
  ];

  return (
    <div className="flex flex-col bg-base-200 w-full overflow-auto p-10">
      <div className="flex flex-col">
        <p className="font-inter text-purple text-xl border-l-4 border-purple pl-2 font-semibold tracking-tighter mb-8">
          TODAY'S CLASSES - WEDNESDAY, 02-11-2026
        </p>

        <div className="flex flex-col gap-2 w-full">
          {scheds.map((sched) => (
            <ClassCard
              title={sched.title}
              time={sched.time}
              instructor={sched.instructor}
              students={sched.students}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
