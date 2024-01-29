import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/Header";
import "./Index.css";
import Sidebar from "./Sidebar/Sidebar";
import Loading from "../../Loading/Loading";
import { Tevomaps } from "@ticketevolution/seatmaps-client";
import { GetAllEvents } from "../../../redux/actions/Events";
import noChart from "../../../assets/NoMap.gif";

const Index = ({ id }) => {
  const GroupsEvents = useSelector((state) => state.events.EventDetails);
  const AllEvents = useSelector((state) => state.events.AllEvents);
  var filtertheEvent =
    AllEvents && GroupsEvents && AllEvents?.filter((item) => item.id == id);
  const AllEventLoading = useSelector((state) => state.events.AllEventLoading);
  const [isImage, setIsImage] = useState("");

  //   ---- append the div in the body
  // useEffect(() => {
  //   if (filtertheEvent) {
  //     // Find the first element with the class "parent_seat_map_wraper"
  //     var seatWrapperParent = document.querySelector(".parent_seat_map_wraper");

  //     // Check if the parent div exists
  //     if (seatWrapperParent && !AllEventLoading) {
  //       // Create a new div element
  //       var parentDiv = document.createElement("div");
  //       // parentDiv.classList.add("map_wrapper");

  //       // Check if the parent div was created successfully
  //       // if (parentDiv) {
  //       // Create a new div element
  //       var newDiv = document.createElement("div");
  //       newDiv.id = "map";
  //       newDiv.classList.add("mapclass");

  //       // Append the new div as a child to the created parent div
  //       // parentDiv.appendChild(newDiv);

  //       // Append the parent div as a child to the seatWrapperParent
  //       seatWrapperParent.appendChild(newDiv);
  //       // }
  //     } else {
  //       var myElement = document.getElementById("map");
  //       console.log("hello world!");
  //       // Hide the element by setting its display property to "none"
  //       if (myElement) {
  //         // myElement.style.setProperty("display", "none", "important");
  //       }
  //     }
  //   }
  // }, [filtertheEvent]);

  //   console.log(GroupsEvents);
  // useEffect(() => {
  //   const seatWrapperParent = document.querySelector(".parent_seat_map_wraper");

  //   if (seatWrapperParent && !AllEventLoading) {
  //     const existingMapDiv = document.getElementById("map");

  //     if (!existingMapDiv) {
  //       const newDiv = document.createElement("div");
  //       newDiv.id = "map";
  //       newDiv.classList.add("mapclass");

  //       seatWrapperParent.appendChild(newDiv);
  //     }
  //   }
  // }, [AllEventLoading]);
  // useEffect(() => {
  //   var seatWrapperParents = document.querySelectorAll(
  //     ".parent_seat_map_wraper"
  //   );

  //   if (seatWrapperParents && seatWrapperParents) {
  //     if (filtertheEvent && filtertheEvent?.length > 0 && !AllEventLoading) {
  //       const finddiv = document.getElementById("map");
  //       const parentdic = document.querySelectorAll(".map_wrapper");
  //       // create a new seatmap
  //       if (finddiv && parentdic) {
  //         const seatmap = new Tevomaps({
  //           venueId: filtertheEvent[0]?.venue?.id,
  //           configurationId: filtertheEvent[0]?.configuration?.id,
  //           ticketGroups: GroupsEvents.map((item) => ({
  //             tevo_section_name: item?.section,
  //             retail_price: item?.retail_price,
  //           })),
  //           showControls: false,
  //           showLegend: false,
  //         });

  //         console.log("Tevomaps instance created:", seatmap);

  //         // turn element with ID of 'my-map' into a seatmap for config 1046
  //         const seatmapApi = seatmap.build("map");

  //         console.log("Tevomaps API built:", seatmapApi);
  //       }
  //     } else {
  //       filtertheEvent = [];
  //     }
  //   }
  // }, [filtertheEvent]);

  const dispatch = useDispatch();
  useEffect(() => {
    const page = 1;
    if (AllEvents && AllEvents?.length > 0) {
      dispatch(GetAllEvents(page));
    }
  }, []);

  // useEffect(() => {
  //   const imageUrl =
  //     filtertheEvent && filtertheEvent[0]?.configuration?.seating_chart?.large;
  //   if (imageUrl) {
  //     const url = new URL(imageUrl);

  //     // Check if "sandbox" is present in the hostname
  //     if (url.hostname.includes("sandbox")) {
  //       // Remove "sandbox" from the hostname
  //       const modifiedHostname = url.hostname.replace("sandbox.", "");

  //       // Construct the modified URL
  //       const modifiedUrl = `${url.protocol}//${modifiedHostname}${url.pathname}${url.search}`;

  //       console.log(modifiedUrl);

  //       // Set isImage to the modified URL
  //       setIsImage(modifiedUrl);
  //     } else {
  //       console.log("Unable to find 'sandbox' in the hostname");
  //     }
  //   }
  // }, [filtertheEvent]);

  // console.log(isImage, "this is image");

  console.log(filtertheEvent[0]?.configuration?.seating_chart?.medium); //32 //40

  return (
    <div className="h-[90vh] overflow-hidden">
      {/* <Header /> */}
      {/* ---- body  */}
      <div className="index_deatils  !bg-color1 !text-color2 h-[100vh]">
        {/* --- sidebar  */}
        <div className="!w-[370px] !bg-color4 !h-[100%] !overflow-y-auto">
          <Sidebar filterevent={filtertheEvent} />
        </div>
        {/* --- content  */}
        <div className="w-full flex justify-center !text-color2 place-items-center h-[100%] py-5 px-5 ">
          <div className="parent_seat_map_wraper ">
            {AllEventLoading ? (
              <div>
                <Loading />
              </div>
            ) : filtertheEvent &&
              filtertheEvent[0]?.configuration?.seating_chart?.large ==
                "null" ? (
              <img
                src={noChart}
                alt="no seating chart"
                className="w-[300px] h-auto"
              />
            ) : (
              <img
                src={filtertheEvent[0]?.configuration?.seating_chart?.medium}
                alt="no seating chart"
                className="w-[300px] h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
