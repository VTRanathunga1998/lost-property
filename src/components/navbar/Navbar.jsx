import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-500 flex items-center justify-between min-w-[300px]">
      <div className="p-4 font-semibold text-lg sm:text-2xl text-yellow-100">
        <h4 className="">LostProperty.lk</h4>
      </div>
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="gap-4 text-white text-xs sm:text-lg cursor-pointer">
          LOGIN
        </div>
        <div>
          <button className="bg-secondary text-textDarkColor font-semibold uppercase p-2 rounded-full text-xs sm:text-lg">
          complaint
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
