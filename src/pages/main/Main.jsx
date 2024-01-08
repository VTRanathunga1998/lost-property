import React from "react";
import Filterbar from "../../components/filterbar/Filterbar";
import LostItems from "../../components/lostitems/LostItems";
import FilterSection from "../../components/filtersection/FilterSection";

const Main = () => {
  return (
    <div className="w-full md:max-w-screen-lg mx-auto">
      <Filterbar />
      <div className="flex justify-center gap-4 m-1 md:m-4">
        <FilterSection />
        <LostItems />
      </div>
    </div>
  );
};

export default Main;
