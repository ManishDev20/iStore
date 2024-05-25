import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { RxCaretDown } from "react-icons/rx";
import { FaDollarSign } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

// Component/website/Container used here!
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const menus = [
    {
      name: "HOME",
      url: "",
    },
    {
      name: "STORE",
      url: "/store",
    },
    {
      name: "IPHONE",
      url: "#",
    },
    {
      name: "IPAD",
      url: "#",
    },
    {
      name: "MACBOOK",
      url: "#",
    },
    {
      name: "ACCESORIES",
      url: "#",
    },
  ];

  return (
    <div className="">
      <div className="border-b  border-2 py-5 md:block hidden">
        <Container classes="h-full ">
          <div className="h-full flex justify-between items-center px-3">
            <div className="">
              <img src="./images/istorelogo.png" alt="" className="w-[150px]" />
            </div>
            <div className="flex gap-5 font-semibold text-[14px]">
              <Link to={"/login"} className="flex  items-center gap-2">
                <span>
                  <FaRegUser />
                </span>
                <span>Login</span>
              </Link>

              <div className="flex h-[max-content] self-center relative items-center gap-4 ">
                <span className=" absolute rounded-[100%] border-[3px] border-white text-[10px] top-[-15px] left-2 px-[4px] py-[2px] bg-red-500 text-white">
                  10
                </span>
                <Link to={"/cart"}>
                  <span>
                    <RiShoppingBasketFill className="text-xl" />
                  </span>
                </Link>
                <span> 10 Items</span>
                <span className="text-gray-400">$949</span>
              </div>
              <div className="flex  items-center gap-2 ml-8">
                <span>
                  <IoSearch className="text-xl" />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container classes="mt-10 mb-5 ">
        <div className=" flex items-center w-full px-3 gap-3 justify-between md:justify-center mb-10">
          <img src="./images/istorelogo.png" alt="" className="  w-[500px]" />
          <TiThMenu onClick={toggleHandler} className="text-2xl md:hidden" />
        </div>
        <ul className="hidden md:flex justify-center gap-10 font-bold ">
          {menus.map((item, i) => {
            return (
              <Link to={item.url} key={i} className="hover:text-blue-600">
                <li>{item.name}</li>
              </Link>
            );
          })}
        </ul>
        {/* Responsive Menu start  */}
        <div
          id="ResponsiveMenu"
          className={` ${
            toggle === true ? "left-[0]" : "left-[-100%]"
          } md:hidden z-[5] text-center`}
        >
          <div className="text-4xl px-8 py-8 ">
            <RxCross2 onClick={toggleHandler} />
          </div>
          <div className="max-w-[90%] font-semibold mx-auto border-b-2 py-2 px-4 flex  justify-between my-5">
            <div className="flex relative items-center gap-2 text-[12px]">
              <Link to={"/cart"}>
                <span className=" absolute rounded-[100%] border-[3px] border-[#fff] text-[8px] top-[-10px] left-1 px-[3px] py-[1px] bg-red-500 text-white">
                  10
                </span>
                <span>
                  <RiShoppingBasketFill className="text-xl text-white" />
                </span>
              </Link>
            </div>
            <div className="flex text-white text-[12px] font-bold items-center gap-2">
              <span>
                <FaRegUser />
              </span>
              <span>My Profile</span>
            </div>
            <div className="flex items-center text-white">
              <span>EN</span>
              <span>
                <RxCaretDown className="text-2xl" />
              </span>
            </div>
            <div className="flex items-center text-white font-semibold">
              <span>
                <FaDollarSign />
              </span>
              <span>
                <RxCaretDown className="text-2xl" />
              </span>
            </div>
          </div>

          <ul className="flex flex-col text-white font-semibold gap-8 mt-[100px]">
            {menus.map((item, i) => {
              return (
                <Link to={item.url} key={i} className="hover:text-blue-600">
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* Responsive Menu ends */}
      </Container>
    </div>
  );
};

export default Header;
