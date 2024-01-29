import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import event from "../assets/event.png";
import { NavLink } from "react-router-dom";
import { GetAllEvents } from "../redux/actions/Events";
import Spinner from "../Components/Loading/Spinner";
import { useInView } from "react-intersection-observer";
import TicketHeader from "../Components/PagesCompoents/TicketsPage/TicketHeader";
import EventCard from "../Components/EventCard/EventCard";

const Tickets = () => {
  const [ref, inView] = useInView({
    threshold: true, // Check if 90% of the element is in view
  });

  const [page, setpage] = useState(0);

  // ...
  const AllEvents = useSelector((state) => state.events.AllEvents);
  useEffect(() => {
    if (inView) {
      setpage(page + 1);
    }
  }, [inView]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (page === 0) {
      const newp = 1;
      dispatch(GetAllEvents(newp));
    } else {
      dispatch(GetAllEvents(page));
    }
  }, [page]);
  const isLoading = useSelector((state) => state.events.isLoading);
  // console.log(AllEvents);
  return (
    <section class="!bg-color1 px-[100px] !text-color2 body-font !z-10">
      <TicketHeader />
      <div class="container px-0 py-4 mx-auto">
        <div class="flex flex-wrap -m-4 mt-3 gap-[40px] justify-center mb-5">
          {AllEvents?.map((item, index) => {
            return <EventCard item={item} key={index} index={index} />;
          })}
        </div>
        {/* )} */}
        {AllEvents && AllEvents?.length - 1 && <div ref={ref}></div>}
        {isLoading && (
          <div
            className="w-full flex justify-center place-items-center"
            style={{ padding: "20px" }}
          >
            <div
              className="inline-block h-8 w-8  animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tickets;
