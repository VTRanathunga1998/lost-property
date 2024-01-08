import React from "react";

const CategoryModal = () => {
  const skills = [
    {
      category: "Personal Items",
      level: "Advance",
      count: 86,
    },
    {
      category: "Electronic Devices",
      level: "Expect",
      count: 90,
    },
    {
      category: "Clothing",
      level: "Beginner",
      count: 40,
    },
    {
      category: "Jewelry",
      level: "Intermediate Gringert ",
      count: 80,
    },
    {
      category: "Transportation Items",
      level: "Beginner",
      count: 40,
    },
    {
      category: "Documents",
      level: "Intermediate",
      count: 80,
    },
    {
      category: "Children's Items",
      level: "Beginner",
      count: 40,
    },
    {
      category: "Sports Equipment",
      level: "Intermediate",
      count: 80,
    },
    {
      category: "Books and Stationery",
      level: "Intermediate",
      count: 80,
    },
    {
      category: "Pets",
      level: "Intermediate",
      count: 80,
    },
    {
      category: "Medical Items",
      level: "Intermediate",
      count: 80,
    },
    {
      category: "Miscellaneous",
      level: "Intermediate",
      count: 80,
    },
  ];
  return (
    <section id="skills" className="relative mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills?.map((skill, i) => (
          <div
            key={i}
            className="relative rounded-xl flex items-center hover:bg-slate-200 hover:cursor-pointer"
          >
            <div className="">
              <img
                className="object-cover w-20 h-20 rounded-t-lg md:rounded-none md:rounded-s-lg"
                src="assets/pngwing.com (3).png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-md font-bold text-textDarkColor tracking-tight">
                {skill.category}
              </h5>
              <p className="mb-3 font-normal text-gray-700">25,002</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryModal;
