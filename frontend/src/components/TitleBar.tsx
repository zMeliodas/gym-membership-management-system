const TitleBar = () => {
  return (
    <div className="flex w-full h-24 items-center px-8 border-b border-outlineColor bg-base-100 z-0">
      <h1 className="flex-1 text-xl font-poppins text-purple font-bold">
        DASHBOARD OVERVIEW
      </h1>

      <div className="flex items-center gap-4">
        <h1 className="text-xl font-poppins text-purple font-bold">ADMIN</h1>
        <button className="text-xl font-poppins text-purple font-bold border-2 border-outlineColor rounded-full px-2.5 py-2">
          CL
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
