import Button from "../components/Button";
import { FaCheck } from "react-icons/fa6";

const CheckIn = () => {
  var count = 1;

  return (
    <div className="flex bg-base-200 w-full overflow-auto px-8 py-12 gap-4">
      <div className="flex flex-col border bg-base-100 rounded-xl p-8 border-outlineColor w-full max-w-124 gap-6">
        <p className="text-subtext font-mono tracking-widest text-sm">
          SCAN / SEARCH MEMBER
        </p>

        <form className="flex flex-col gap-1">
          <label className="text-subtext font-mono tracking-widest text-sm">
            MEMBER NAME OR ID
          </label>
          <input
            className="border border-outlineColor rounded-xl py-3 px-4 w-full text-primary bg-base-300 mb-4"
            placeholder="Type member name..."
            type="text"
          />

          <Button type="submit" Icon={FaCheck} title="Check In" />
        </form>
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="flex bg-base-100 items-center border border-outlineColor rounded-xl w-full p-4 h-18">
          <p className="font-display text-3xl text-primary">TODAY'S LOG</p>
        </div>

        <div className="flex bg-base-100 items-center justify-center border border-outlineColor rounded-xl w-full p-4 h-18">
          {count && (
            <p className="font-sans text-base text-subtext">No check-ins today.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
