import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-500 fixed w-full left-0 top-0 z-[999]">
      <div className="relative flex items-center justify-between min-w-[300px] lg:max-w-screen-lg mx-auto">
        <div className="p-4 font-semibold text-lg sm:text-2xl text-yellow-100">
          <h4 className="">LostProperty.lk</h4>
        </div>
        <div className="hidden md:flex md:items-center md:justify-between gap-4 p-4">
          <div className="gap-4 text-white text-xs sm:text-lg cursor-pointer">
            LOGIN
          </div>
          <div>
            <button className="bg-secondary text-textDarkColor font-semibold uppercase p-2 rounded-full text-xs sm:text-lg">
              complaint
            </button>
          </div>
        </div>

        <div className="md:hidden mr-2">
          <ToggleButton
            onClick={() => {
              setOpen(!open);
            }}
            value="right"
            aria-label="right aligned"
          >
            <FormatAlignRightIcon />
          </ToggleButton>
        </div>

        <div
          className={`md:hidden absolute top-0 w-2/3 h-screen px-7 py-2 font-medium duration-300 z-[999] bg-green-200 ${
            open ? "left-0" : "left-[-100%]"
          } `}
        >
          <div className=" flex flex-col items-center justify-between gap-4 p-4">
            <div className="p-4 font-semibold text-lg sm:text-2xl text-yellow-100">
              <h4 className="">LostProperty.lk</h4>
            </div>
            <div className="gap-4 font-textDarkColour text-xs sm:text-lg cursor-pointer">
              LOGIN
            </div>
            <div>
              <button className="bg-secondary text-textDarkColor font-semibold uppercase p-2 rounded-full text-xs sm:text-lg">
                complaint
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
