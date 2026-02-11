import { FaRegClock } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import type { ScheduleTypes } from "../types/types";

const ClassCard = ({ title, time, instructor, students }: ScheduleTypes) => {
  return (
    <div className="flex w-full border-2 border-outlineColor rounded-xl bg-base-100">
      <div className="flex flex-col p-4 w-full gap-8">
        <h1 className="font-poppins font-bold text-2xl">{title}</h1>

        <div className="flex w-full items-center content-center gap-4">
          <div className="flex items-center gap-1">
            <p>
              <FaRegClock className="w-4 h-4" />
            </p>
            <p className="text-sm font-inter">{time}</p>
          </div>

          <div className="flex items-center gap-1">
            <p>
              <IoPersonSharp className="w-4 h-4" />
            </p>
            <p className="text-sm font-inter">{instructor} </p>
          </div>

          <div className="flex items-center gap-1">
            <p>
              <MdPeople className="w-5 h-5" />
            </p>
            <p className="text-sm font-inter">{students} Expected Attendance</p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button className="font-inter text-sm font-medium border-2 border-outlineColor rounded-2xl w-36 py-2 mx-4 hover:bg-base-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
