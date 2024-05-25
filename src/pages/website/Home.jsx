import React, { useState } from "react";
import ProductBox from "../../component/website/ProductBox";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Container from "../../component/website/Container";
import { FaFilter } from "react-icons/fa6";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdMobileFriendly } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import HomeSlider from "../../component/website/HomeSlider";

const Home = () => {
  return (
    <div className="">
      <div className="h-[350px] md:h-[550px] flex justify-center relative my-10 bg-gradient-to-r from-[#5aafc0] via-[#fc945a] to-[#6d729a] overflow-hidden ">
        <img
          src="./images/homeBanner.png"
          alt=""
          className="drop-shadow-[0px_40px_15px_rgba(0,0,0,0.8)] absolute bottom-2 sm:bottom-[15px] sm:w-[300px] md:bottom-[10px] md:w-[500px]"
        />
      </div>
      <BestSeller /> {/* // in component */}
      <ShopNow /> {/* // in component */}
      <Support /> {/* // in component */}
      <HomeSlider /> {/* // imported component */}
    </div>
  );
};

function BestSeller() {
  const catagories = [
    {
      name: "Mac",
    },
    {
      name: "iPhone",
    },
    {
      name: "iPad",
    },
    {
      name: "iPod",
    },
    {
      name: "Accessories",
    },
  ];

  const filters = [
    {
      filt: "Laptop",
    },
    {
      filt: "Mobile",
    },
    {
      filt: "Tablet",
    },
    {
      filt: "Iphone",
    },
    {
      filt: "New Category",
    },
  ];

  const [filterToggle, setFilterToggle] = useState(false);

  function filterToggleHandler() {
    setFilterToggle(!filterToggle);
  }

  return (
    <Container classes="">
      <div className="flex justify-center items-center gap-5">
        <div className="text-3xl text-[#ff4252] font-bold text-center ">
          BEST SELLER
        </div>
        <button onClick={filterToggleHandler} className="text-2xl md:hidden">
          <FaFilter />
        </button>
      </div>
      <ul
        className={`w-[70%] mx-auto my-5 md:hidden text-center ${
          filterToggle === true ? "block" : "hidden"
        }`}
      >
        <li className="border p-2 font-bold ">All</li>
        {filters.map((item, i) => {
          return (
            <li key={i} className="border py-2 font-semibold">
              {item.filt}
            </li>
          );
        })}
      </ul>
      <ul className="hidden md:flex gap-8 justify-center my-5 font-semibold">
        <li className="font-bold hover:text-blue-500 cursor-pointer">All</li>
        {catagories.map((item, i) => {
          return (
            <li key={i} className="cursor-pointer hover:text-blue-500">
              {item.name}
            </li>
          );
        })}
      </ul>
      <ProductBox /> {/* // out component */}
    </Container>
  );
}

function Support() {
  return (
    <Container classes="my-10 ">
      <h1 className="text-5xl text-center font-bold ">Apple Support</h1>
      <div className="supCont flex gap-5 px-[20px] justify-center my-10 ">
        <div className="supBox min-w-[180px]  w-[300px] rounded-2xl shadow-2xl border border-slate-300 p-2">
          <div className="text-5xl flex justify-center my-10">
            <BiSolidMessageSquareEdit />
          </div>
          <div className="text-2xl font-semibold text-center">
            Apple ID & Password
          </div>
        </div>
        <div className="supBox min-w-[180px]  w-[300px] rounded-2xl shadow-2xl border border-slate-300 p-2">
          <div className="text-5xl flex justify-center my-10">
            <MdMobileFriendly />
          </div>
          <div className="text-2xl font-semibold text-center">Apple Repair</div>
        </div>
        <div className="supBox min-w-[180px]  w-[300px] rounded-2xl shadow-2xl border border-slate-300 p-2">
          <div className="text-5xl flex justify-center my-10">
            <FaFileInvoiceDollar />
          </div>
          <div className="text-2xl font-semibold text-center">
            Billing and Subscription
          </div>
        </div>
      </div>
    </Container>
  );
}
function ShopNow() {
  return (
    <div className="shopnow w-full h-[500px] relative bg-[#000] my-[80px]">
      <div className="md:w-[90%] h-full mx-auto  flex relative text-white">
        <span className="w-full md:my-[50px] z-[2]">
          <h1 className="heading text-6xl  my-5  md:my-10 font-semibold">
            Apple iPhone 15 Pro Max
          </h1>
          <h2 className="heading2 md:text-4xl text-3xl my-3 text-white font-bold">
            Dynamic Island
          </h2>
          <h2 className="heading3 text-xl my-1 text-gray-100">
            A Magical Way To Interact With iPhone.
          </h2>
        </span>
        <img
          src="./images/iphone15pro.png"
          alt=""
          className="shopnowIphone absolute bottom-0 right-0 md:max-w-[550px] h-[600px] z-0 "
        />
      </div>
    </div>
  );
}
export default Home;
