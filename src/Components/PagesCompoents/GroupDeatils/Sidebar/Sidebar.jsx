import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import CheckOutSidebar from "./CheckOutSidebar";
import Spinner from "../../../Loading/Spinner";

const Sidebar = ({ filterevent }) => {
  const GroupsEvents = useSelector((state) => state.events.EventDetails);
  const SibgleEventLoading = useSelector(
    (state) => state.events.SibgleEventLoading
  );
  const [SingleTicket, setSingleTicket] = useState([]);
  const clickOnButton = (id) => {
    const filterSingleEvent =
      GroupsEvents && GroupsEvents?.filter((item) => item.id == id);
    setSingleTicket(filterSingleEvent);
  };

  console.log(filterevent);

  return (
    <div className="!bg-color4  relative">
      {/* --------------------  */}
      <div
        className={` ${
          SingleTicket && SingleTicket?.length > 0
            ? "left-[0%] duration-500"
            : "left-[-100%] duration-500"
        }  `}
      >
        <CheckOutSidebar
          SingleTicket={SingleTicket}
          SetSingleTicket={setSingleTicket}
        />
      </div>
      {/* --head  */}
      {SingleTicket && SingleTicket?.length === 0 && (
        <div>
          <div className=" py-2 px-2">
            <img src="" alt="" />
            <h2 className="mb-1 text-[23px] text-color2 font-medium">
              {/* Insta<span className="text-color2">Pass</span> */}
              {filterevent && filterevent[0]?.name}
            </h2>
            <p className="text-[13px] text-color5">
              Granted is a ticket marketplace that puts fans first. All tickets
              are protected by our <span>Fan Promise</span>.
            </p>
          </div>
          {/* ------  */}
          {SibgleEventLoading ? (
            <div className="w-full flex justify-center place-items-center my-3">
              <Spinner />
            </div>
          ) : (
            <div className=" py-2 px-2 my-2 mb-[90px]">
              <h2 className="text-color5 mb-2 font-medium">ALL TICKETS</h2>
              <div className="border-[1px] border-color5 px-2 py-2 rounded-md ">
                {/* ---- price  */}
                {GroupsEvents &&
                  GroupsEvents?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="py-2 border-b-[1px] border-b-color5 my-2 flex justify-between gap-3 place-items-center cursor-pointer hover:bg-color3 px-1 "
                        onClick={() => clickOnButton(item?.id)}
                      >
                        <h2 className="px-4 py-1 border-[1px] border-color5 rounded-md font-medium text-[18px]">
                          ${item?.retail_price}
                        </h2>
                        <div className="w-full">
                          <h2 className="mb-1 font-bold">
                            Section {item?.section} - Row {item?.row}{" "}
                          </h2>
                          <p className="text-color5">
                            {item?.available_quantity} tickets
                          </p>
                        </div>
                        <IoIosArrowForward className="text-[35px] text-color5" />
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
