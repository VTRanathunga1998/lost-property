// FilterSection.js
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const FilterSection = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const uploadTime = [
    "Last hour",
    "Today",
    "This week",
    "This month",
    "This year",
  ];

  const options = ["Date: Newest On Top", "Date: Oldest On Top"];

  return (
    <div className="hidden md:flex flex-col border w-1/5 p-2 bg-white gap-2">
      <div className="mb-4 z-[1]">
        <span className="block text-sm font-semibold text-gray-600 mb-1">
          FILTER BY TIME
        </span>
        <Dropdown
          options={uploadTime}
          onSelect={setSelectedOption1}
          selectedOption={selectedOption1}
        />
      </div>

      <div className="mb-4">
        <span className="block text-sm font-semibold text-gray-600 mb-1">
          SORT BY
        </span>
        <Dropdown
          options={options}
          onSelect={setSelectedOption2}
          selectedOption={selectedOption2}
        />
      </div>

      <div className="flex items-center justify-center ">
        <button className="bg-secondary px-4 py-1 rounded-md w-full hover:shadow-md font-semibold">APPLY</button>
      </div>
    </div>
  );
};

export default FilterSection;
