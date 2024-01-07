import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-green-500 flex items-center justify-center p-10">
      <form className="w-full flex items-center justify-center">
        <div class="relative w-2/3">
          <input
            type="search"
            id="default-search"
            class="w-full p-4 text-lg  border outline-none rounded-full  focus:shadow-lg    "
            placeholder="Search your lost"
            required
          />
          <button
            type="submit"
            class="absolute end-3 bottom-3 bg-secondary  focus:outline-none font-medium rounded-full p-2 hover:shadow-md"
          >
            <div class="">
              <svg
                class="w-6 h-6 text-black-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
