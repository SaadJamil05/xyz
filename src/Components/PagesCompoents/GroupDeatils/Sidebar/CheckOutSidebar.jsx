import React from "react";
import { MdArrowBackIos } from "react-icons/md";

const CheckOutSidebar = ({ SingleTicket, SetSingleTicket }) => {
  return (
    <div
      className={` absolute top-0 z-10  h-[100vh] w-[370px] !bg-color4 !text-color2 px-2 py-3
      ${
        SingleTicket && SingleTicket?.length > 0
          ? "left-[0%] duration-500"
          : "left-[-100%] duration-500"
      }
    `}
    >
      <MdArrowBackIos
        className="my-3 mx-2 text-[25px] cursor-pointer"
        accordion
        onClick={() => SetSingleTicket([])}
      />
      <div className="flex justify-between place-items-start gap-3 mt-5">
        <div>
          <h2 className="mb-1">
            Section {SingleTicket && SingleTicket[0]?.section} - Row{" "}
            {SingleTicket && SingleTicket[0]?.row}
          </h2>
          <p className="my-2 font-bold">
            ${SingleTicket && SingleTicket[0]?.retail_price}/ea
          </p>
        </div>
        <select className="bg-color4 !text-color5 border-[1px] border-color5 px-2 py-1 rounded-md">
          <option value="" className="">
            Select Ticket
          </option>
          {SingleTicket &&
            SingleTicket[0]?.splits?.map((item, index) => {
              return (
                <option
                  value={item && item}
                  key={index}
                  className="!border-b-[1px] border-b-color5"
                >
                  {item && item}
                </option>
              );
            })}
        </select>
      </div>
      <button
        className="mt-5 w-full bg-color4 text-color2 border-[1px] border-redColor py-2 px-3 rounded-md
       hover:bg-color1 hover:border-color2 hover:text-redColor
      "
      >
        Checkout
      </button>
      <div className="my-3">
        <h2 className="mb-1 font-bold ">Delivery notes</h2>
        <p className="text-color5 my-1 text-left">
          Tickets will be transferred to the email address you provide via
          TicketTransferService prior to the event, and we guarantee it. Have
          questions? Contact us at example@gmail.com any time
        </p>
      </div>
    </div>
  );
};

export default CheckOutSidebar;
