import React from "react";
import { useSelector } from "react-redux";

const TicketHeader = () => {
  const data = [
    "Any Dates",
    "This Weekend",
    "This Week",
    "This Month",
    "Next Month",
    "Next 60 Days ",
  ];
  const user = useSelector((state) => state.user.user);
  return (
    <div className="py-4  bg-color1 mt-3">
      <h2 className="text-[25px] font-medium my-3">
        Our Top picks for you{" "}
        <span className="text-redColor font-bold text-[20px]">
          {user && user?.firstName && ` - ${user?.firstName}`}
        </span>
      </h2>
      {/* ---  */}
      <div className="flex justify-start place-items-center my-5 gap-3">
        {data?.map((item, index) => {
          return (
            <button
              key={index}
              className={`border-[1px] border-color5  px-5 py-2 text-[14px] rounded-[50px] bg-color3 hover:bg-transparent
              
              ${index === 0 ? "!bg-color5 border-[1px] border-color4" : ""}
              
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicketHeader;
