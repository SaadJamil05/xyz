import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { FaMusic } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { GiHorseHead } from "react-icons/gi";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { MdOutlineSportsTennis } from "react-icons/md";

import "./CategorySection.css";

const CategorySection = () => {
  const categoryData = [
    {
      icon: <BiCameraMovie />,
      name: "Movies",
    },
    {
      icon: <FaMusic />,
      name: "Music",
    },
    {
      icon: <GiSoccerBall />,
      name: "Sports",
    },
    {
      icon: <GiHorseHead />,
      name: "Horse Racing",
    },
    {
      icon: <GiBoxingGloveSurprise />,
      name: "Fighting",
    },
    {
      icon: <MdOutlineSportsTennis />,
      name: "Tennis",
    },
  ];

  return (
    <div className="!text-color2 !bg-color1 my-4 px-[100px]">
      {/* <h2 className="text-center text-[35px] font-bold text-redColor pb-3">
        Our Latest Categories
      </h2> */}
      {/* ----------  */}
      <div className="flex justify-center place-items-center gap-[20px] pt-6">
        {categoryData?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[130px] h-[130px] cursor-pointer z-[2]  relative rounded-full flex justify-center place-items-center flex-col category_single_parent"
            >
              <div className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1] bg-redColor rounded-full blur-[20px] opacity-0 category_blur"></div>
              <div className="w-[130px] h-[130px] cursor-pointer z-[10]  relative rounded-full flex gap-2 justify-center place-items-center flex-col bg-color3">
                <p className="text-[40px]  text-redColor z-10">{item.icon}</p>
                <p className="text-[14px] text-color5 z-10">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;
