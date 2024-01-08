import React from "react";
import Card from "../card/Card";

const LostItems = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center md:w-4/5">
      <Card title={"Phone 1"} description={"lorem spider monkey"} />
      <Card title={"Phone 2"} description={"Nothing to say"} />
      <Card
        title={"Phone 3"}
        description={
          "A paragraph is defined as “a group of sentences or  can be just one sentence long."
        }
      />
      <Card title={"Phone 4"} description={"Is there nothing"} />
    </div>
  );
};

export default LostItems;
