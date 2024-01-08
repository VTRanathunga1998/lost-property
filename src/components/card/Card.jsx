import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="flex flex-row items-center w-full h-36 md:h-44 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg overflow-hidden">
      <div className="w-1/3 overflow-hidden m-1">
        <img
          className="h-32 md:h-40 object-cover rounded-t-lg w-full  md:rounded-none md:rounded-s-lg"
          src="assets/pngwing.com (2).png"
          alt=""
        />
      </div>
      <div className="w-2/3 flex flex-col justify-between p-4  leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-textDarkColor">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
