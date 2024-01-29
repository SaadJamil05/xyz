import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import SideCart from "./SideCart";
import { useSelector } from "react-redux";
import logo from "../../assets/InstaPass.png";
import {
  color1,
  color2,
  color3,
  color5,
  redColor,
} from "../../utils/ColorTheme";
import { MdOutlineSearch } from "react-icons/md";
import { ApiMediaURL } from "../../setting/GlobleVariable";
import "./styles/navebar.css";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineAccountCircle } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";

const Navebar = () => {
  const [showmenu, setshowmenu] = useState(false);
  const cartData = useSelector((state) => state.cart.cartData);
  const user = useSelector((state) => state.user.user);
  const UserAvatar = ApiMediaURL + user?.Avatar;
  return (
    <div
      className={`header !bg-color3 px-[100px] py-1 text-color2 body-font border-b-[1px] border-b-color4 shadow-md sticky top-0 z-30`}
    >
      <div className=" sub_header mx-auto  flex justify-between place-items-center gap-6 p-5  ">
        <div className="logo  gap-3 w-[300px] relative">
          <NavLink
            to="/"
            className=" title-font font-medium text-gray-900 z-20 relative"
          >
            <div className="w-[200px] absolute top-0 left-0 bg-redColor h-[25px] z-[-1] blur-[25px] duration-300 logobluer"></div>
            <img src={logo} alt="" className="w-[200px]  object-contain " />
          </NavLink>
          <VscMenu
            className="text-[25px] cursor-pointer  hidden  menu_burger"
            onClick={() => setshowmenu(true)}
          />
        </div>
        <div className="min-w-[550px] !max-w-[800px] serachbar border-[2px] pl-6 overflow-hidden border-redColor rounded-[27px] flex justify-start place-items-center">
          <input
            type="text"
            placeholder="Search "
            name=""
            id=""
            className="w-full  text-color2 py-2 bg-transparent   px-2
            outline-none
            "
          />
          <p className="w-[50px] bg-redColor px-2 py-[7px] border-[3px] border-redColor">
            <MdOutlineSearch className="text-[23px] cursor-pointer" />
          </p>
        </div>
        <div className=" right_header flex justify-end place-items-center gap-1 w-[350px] ">
          {Object.keys(user).length === 0 ? (
            <NavLink to="/login">
              <button className=" w-[150px] items-center border-[1px] hover:text-color1 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                SignIn / SignUp
              </button>
              <VscMenu className="text-[23px] cursor-pointer  hidden " />
            </NavLink>
          ) : (
            <>
              {user && user?.Avatar ? (
                <>
                  <p className="mx-2 username">{user && user?.firstName}</p>
                  <NavLink to="/user/profile" className="!w-[40px] !h-[40px]">
                    {user?.firstName && user?.Avatar && (
                      <img
                        src={UserAvatar}
                        className="!w-[40px] !h-[40px] rounded-full border-[1px] border-redColor"
                        alt=""
                      />
                    )}
                  </NavLink>
                </>
              ) : (
                <>
                  <p className="mx-2 username">{user && user?.firstName}</p>
                  <p className="border-[1px] uppercase border-redColor rounded-full p-3 h-[40px] w-[40px] flex justify-center place-items-center bg-color1 text-[white] font-bold">
                    {user?.firstName.slice(0, 1)}
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div
        className={`${
          showmenu ? "mobileHeader header_menus" : "header_menus"
        }  bg-color3 text-color2 py-2 px-2`}
      >
        <RxCross1
          className="cross_burger absolute top-5 right-5 text-[23px] cursor-pointer  hidden"
          onClick={() => setshowmenu(false)}
        />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to={"/"}
            className={`mr-5 hover:text-redColor active:text-[red]`}
          >
            Home
          </NavLink>
          <NavLink to={"/tickets"} className={`mr-5 hover:text-redColor`}>
            Events
          </NavLink>
          <NavLink
            to={"/location"}
            className={`mr-5 hover:text-redColor active:text-[red]`}
          >
            Location
          </NavLink>
          <a className={`mr-5 hover:text-redColor active:text-[red]`}>About</a>
        </nav>
        {/* =====  */}
        <div className=" hidden border-[2px]  justify-start place-items-center gap-1 w-[100%] login_mobile ">
          {Object.keys(user).length === 0 ? (
            <NavLink to="/login">
              <button className=" w-[150px] items-center border-[1px] hover:text-color1 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                SignIn / SignUp
              </button>
              <VscMenu className="text-[23px] cursor-pointer  hidden " />
            </NavLink>
          ) : (
            <>
              {user && user?.Avatar ? (
                <>
                  <NavLink to="/user/profile" className="!w-[40px] !h-[40px]">
                    {user?.firstName && user?.Avatar && (
                      <img
                        src={UserAvatar}
                        className="!w-[40px] !h-[40px] rounded-full border-[1px] border-redColor"
                        alt=""
                      />
                    )}
                  </NavLink>
                  <p className="mx-2 username">{user && user?.firstName}</p>
                </>
              ) : (
                <>
                  <p className="mx-2 username">{user && user?.firstName}</p>
                  <p className="border-[1px] uppercase border-redColor rounded-full p-3 h-[40px] w-[40px] flex justify-center place-items-center bg-color1 text-[white] font-bold">
                    {user?.firstName.slice(0, 1)}
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navebar;
