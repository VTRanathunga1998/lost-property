import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-green-500 flex items-center justify-center p-10 mt-[59px] md:mt-[64px] lg:mt-[76px]">
      <form className="w-full flex items-center justify-center">
        <div className="relative w-full md:w-2/3">
          <input
            type="search"
            id="default-search"
            className="w-full p-4 text-lg  border outline-none rounded-full  focus:shadow-lg    "
            placeholder="Search your lost"
            required
          />
          <button
            type="submit"
            className="absolute end-3 bottom-3 bg-secondary  focus:outline-none font-medium rounded-full p-2 hover:shadow-md"
          >
            <div className="">
              <svg
                className="w-6 h-6 text-black-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
