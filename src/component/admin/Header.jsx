import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const dropdownOpen = () => {
    setToggleDropdown(!toggleDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click occurred outside the dropdown
      if (toggleDropdown && !event.target.closest(".dropdownContainer")) {
        setToggleDropdown(false);
      }
    };

    // Attach click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleDropdown]);

  return (
    <div className="h-[70px] border flex justify-end pr-4">
      <div className="profileAdmin flex gap-2 items-center">
        <div className="flex flex-col items-center  ">
          <img
            src="./images/admin.png"
            alt=""
            className="max-w-[40px] max-h-[40px] object-cover border-2 rounded-[50%]"
          />
        </div>
        <div className=" dropdownContainer flex flex-col items-center relative ">
          <div>Manish</div>
          <div
            className="text-[12px] text-[#4d4a4a] cursor-pointer "
            onClick={dropdownOpen}
          >
            <span>Admin</span>
            <i className="fa-solid fa-angle-down text-[10px]"></i>
          </div>
          <div
            className={`absolute w-[130px] shadow-xl border bg-white ${
              toggleDropdown === true ? "block" : "hidden"
            } right-[0px] top-[40px] rounded z-[5] p-[2px]`}
          >
            <ul className="cursor-pointer flex flex-col">
              <li className="hover:bg-[#FC6736] rounded hover:text-white p-2">
                <i className="fa-solid fa-user mr-2"></i>Profile
              </li>
              <li className="hover:bg-[#FC6736] rounded hover:text-white p-2">
                <i className="fa-solid fa-inbox mr-2"></i>Inbox
              </li>
              <hr className="my-[3px]" />
              <li className="hover:bg-[#FC6736] rounded hover:text-white p-2 ">
                <Link to={"/admin/logout"}>
                  <i className="fa-solid fa-right-from-bracket mr-2"></i>Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
