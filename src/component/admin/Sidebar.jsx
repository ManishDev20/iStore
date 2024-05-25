import React from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbCategoryFilled } from "react-icons/tb";
import { BsCartCheckFill } from "react-icons/bs";
import { BiSolidColorFill } from "react-icons/bi";

const Sidebar = () => {
  const sideMenus = [
    {
      id: 1,
      url: "/admin",
      icon: <MdDashboard />,
      name: "Dashboard",
    },
    {
      id: 2,
      name: "Category",
      url: "category",
      icon: <TbCategoryFilled />,
    },
    {
      id: 3,
      name: "Product",
      url: "product",
      icon: <BsCartCheckFill />,
    },
    {
      id: 4,
      name: "Color",
      url: "color",
      icon: <BiSolidColorFill />,
    },
  ];

  return (
    <div className="">
      <div className="adminBrandLogo h-[100px] p-2 bg-black flex justify-center items-center">
        <img
          src="./images/ConfrontoWhiteLogo.png"
          alt=""
          width={170}
          className=" mx-auto"
        />
      </div>
      <div className="text-[#808080d9] text-[14px] m-2">APPLICATION</div>
      <div className="px-2">
        {sideMenus.map((items, i) => {
          return (
            <div key={i} className="">
              <div className="flex flex-col justify-between pr-2 ">
                {
                  <Link to={items.url}>
                    <div className="flex items-center justify-between p-2 my-1 hover:bg-[#46ff466f] rounded">
                      <div className="flex gap-2 items-center text-[#fff]">
                        <span className="text-2xl">{items.icon}</span>
                        <span className="text-[16px]">{items.name}</span>
                      </div>
                    </div>
                  </Link>
                }
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-[#808080d9] text-[14px] m-2">PAGES</div>
    </div>
  );
};

export default Sidebar;
