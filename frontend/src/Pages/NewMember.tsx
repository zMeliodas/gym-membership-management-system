import Button from "../components/Button";
import { IoMdArrowRoundBack } from "react-icons/io";

const NewMember = () => {
  return (
    <div className="flex flex-col w-full bg-base-200 p-12 gap-4">
      <div className="flex">
        <Button
          link="/members"
          Icon={IoMdArrowRoundBack}
          title="BACK TO MEMBERS"
        />
      </div>

      <div
        className="grid w-full gap-4 mb-10 
                grid-cols-2-[repeat(auto-fit,minmax(220px,1fr))] max-w-9xl bg-base-100 p-4 rounded-xl border-2 border-outlineColor"
      >
        <div className="flex items-center p-4 font-poppins font-bold text-xl mt-4 mb-4 text-primary border-b-2 border-primary">
          <h1>PERSONAL INFORMATION</h1>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstname"
                className="block text-primary font-poppins text-sm font-bold mb-2 uppercase tracking-wide"
              >
                First Name *
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-3 bg-base-200 border border-outlineColor rounded-md text-black focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-primary font-poppins text-sm font-bold mb-2 uppercase tracking-wide"
              >
                Last Name *
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-3 bg-base-200 border border-outlineColor rounded-md text-black focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-primary text-sm font-bold mb-2 uppercase tracking-tight"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-base-200 border border-outlineColor rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder=""
              />
            </div>

            <div>
              <label
                htmlFor="mobileNum"
                className="block text-primary font-poppins text-sm font-bold mb-2 uppercase tracking-tight"
              >
                Mobile Number *
              </label>

              <input
                type="tel"
                id="mobileNum"
                name="mobileNum"
                className="w-full px-4 py-3 bg-base-200 border border-outlineColor rounded-md text-black focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="martialArt"
                className="block text-primary text-sm font-bold mb-2 uppercase tracking-tight"
              >
                Martial Art *
              </label>

              <select
                id="martialArt"
                name="martialArt"
                className="w-full px-4 py-3 bg-base-200 border border-outlineColor rounded-md text-black focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-500">
                  Select martial art
                </option>
                <option value="karate">Karate</option>
                <option value="taekwondo">Taekwondo</option>
                <option value="judo">Judo</option>
                <option value="bjj">Brazilian Jiu-Jitsu</option>
                <option value="muaythai">Muay Thai</option>
                <option value="boxing">Boxing</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-8">
            <button
              type="button"
              className="px-4 py-2 border-2 border-primary text-primary rounded-md font-semibold hover:bg-base-300 hover:text-slate-900 transition-colors uppercase tracking-tight"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-base-100 text-primary border-2 rounded-md font-semibold hover:bg-base-300 transition-colors uppercase tracking-tight"
            >
              Create Member Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewMember;
