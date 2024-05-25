import React, { useState } from "react";
import Container from "../../component/website/Container";
import { CgMenuGridR } from "react-icons/cg";
import { TbMenu2 } from "react-icons/tb";

import { MdShoppingCart } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";

// onFilter is not defined yet, and we defined it where we manage the product listing and apply filters.
const Store = ({ onFilter }) => {
  const accessories = [
    {
      name: "New Arrivals",
      productNum: 5,
    },
    {
      name: "Cases & Protection",
      productNum: 8,
    },
    {
      name: "Charging Essentials",
      productNum: 9,
    },
    {
      name: "Home Office",
      productNum: 5,
    },
    {
      name: "Headphones",
      productNum: 7,
    },
    {
      name: "Mice & Keyboards",
      productNum: 11,
    },
    {
      name: "Photography",
      productNum: 3,
    },
  ];
  const brand = [
    {
      name: "Apple",
      productNum: 23,
    },
    {
      name: "LG",
      productNum: 32,
    },
    {
      name: "Samsung",
      productNum: 45,
    },
    {
      name: "Boat",
      productNum: 18,
    },
  ];
  const storeProducts = [
    {
      name: "Apple Macbook Pro",
      yellow: 4,
      actual_price: 599,
      price: 449,
      img: "images/apple_macbook.png",
      hot: true,
    },
    {
      name: "Apple Macbook Air",
      yellow: 4,
      actual_price: 499,
      price: 349,
      hot: true,
      img: "images/Apple Macbook Air.png",
    },
    {
      name: "Apple iPhone 11",
      yellow: 4,
      actual_price: 399,
      price: 249,
      hot: false,
      img: "images/iphone6.png",
    },
    {
      name: "Apple iPhone 13 Pro",
      yellow: 3,
      actual_price: 199,
      hot: true,
      price: 129,
      img: "images/Apple iPhone 11.png",
    },

    {
      name: "Apple Ipad",
      yellow: 3,
      actual_price: 299,
      hot: true,
      price: 149,
      img: "images/Apple Ipad.png",
    },
    {
      name: "Apple Watch 21-1",
      yellow: 5,
      actual_price: 499,
      hot: false,
      price: 349,
      img: "images/Apple Watch 21-1.png",
    },
    {
      name: "Apple Ipod 2A",
      yellow: 4,
      actual_price: 399,
      hot: true,
      price: 289,
      img: "images/apple_iPod_2A.png",
    },
  ];

  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [error, setError] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  function toggleError() {
    setError(!error);
  }
  const handleFilter = () => {
    // Ensure that minPrice and maxPrice are valid numbers
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    // Validate minPrice and maxPrice
    if (
      isNaN(min) ||
      isNaN(max) ||
      min < 0 ||
      max <= 0 ||
      min > max ||
      min === max
    ) {
      toggleError();
      return;
    }
    onFilter({
      minPrice: min,
      maxPrice: max,
    });
  };
  return (
    <div>
      <div className="max-[600px]:hidden w-full py-2 my-10 bg-[#bde3f9] text-center">
        Store/Accessories
      </div>
      <Container classes="mx-2">
        <div className="StoreContainer min-[600px]:flex gap-5 p-2">
          <div className="sidebar max-[600px]:hidden  min-[601]:w-[25%]">
            <div className="accessories bg-[#c3d1dc40] py-2 px-3 rounded-xl">
              <h1 className="text-xl font-bold mb-4 uppercase ">Accessories</h1>
              <div>
                {accessories.map((item, i) => {
                  return (
                    <div
                      className="flex justify-between gap-10 items-center my-1 rounded border hover:border-blue-500  p-1 shadow hover:shadow-none cursor-pointer hover:text-blue-500"
                      key={i}
                    >
                      <span>{item.name}</span> <span>{item.productNum}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="price-filter bg-[#c3d1dc40] p-4 rounded-xl my-5">
              <h1 className="text-xl font-bold mb-4 uppercase ">
                Filter PRICES
              </h1>
              <input
                className="w-[100px] m-2 p-2"
                type="number"
                id="min-price"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                className="w-[100px] m-2 p-2"
                type="number"
                id="max-price"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <button
                onClick={handleFilter}
                className="bg-[#5c5555] text-[18px] font-semibold text-white p-1 px-2 rounded-[10px]"
              >
                Go
              </button>
              <div
                className={`text-red-600 ${
                  error === true ? "block" : "hidden"
                }`}
              >
                invalid inputs
              </div>
            </div>
            <div className="accessories bg-[#c3d1dc40] py-2 px-3 rounded-xl">
              <h1 className="text-xl font-bold mb-4 uppercase ">Brands</h1>
              <div>
                {brand.map((item, i) => {
                  return (
                    <div
                      className="flex justify-between gap-10 items-center my-1 rounded border hover:border-blue-500 p-1 shadow hover:shadow-none cursor-pointer hover:text-blue-500"
                      key={i}
                    >
                      <span>{item.name}</span> <span>{item.productNum}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="productBar w-full min-[601px]:w-[75%]">
            <div className="mainBanner shadow-2xl bg-[#2e90e5] h-[300px] rounded-[8px] flex relative text-black overflow-hidden p-5">
              <span className="  z-[2]">
                <h1 className="text-5xl font-bold my-5 text-white">
                  Apple iPhone 15 Pro Max
                </h1>
                <h2 className="bannerHeading text-3xl font-bold text-[#fff] w-[max-content] bg-black p-2">
                  Dynamic Island
                </h2>
                <h2 className="bannerHeading text-[18px] text-[#000] w-[max-content] bg-[white] p-2 font-bold">
                  A Magical Way To Interact With iPhone
                </h2>
              </span>
              <img
                src="./images/iphone15promax.webp"
                alt=""
                className="iphone15promax absolute right-[-10px] h-[350px] rotate-[15deg]"
              />
            </div>
            <div className="min-[600px]:hidden w-full py-2 my-5 bg-[#bde3f9] text-center">
              Store/Accessories
            </div>

            <div className="filterBar w-full my-5 p-2 bg-[#c3d1dc40] relative flex items-center justify-between rounded">
              <div className="max-[445px]:hidden flex gap-5 ">
                <div className=" p-1">13 items</div>
                <div className=" ">
                  <label htmlFor="sortBy">Sort By</label>
                  <select
                    name="sortby"
                    id="sortBy"
                    className="max-w-[80px] mx-2 outline-none rounded p-1"
                  >
                    <option value="name">Name</option>
                    <option value="rating">Rating</option>
                    <option value="price">Price</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="showItems">Show</label>
                  <select
                    name="show"
                    id="showItems"
                    className="max-w-[80px] mx-2 outline-none rounded p-1"
                  >
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="18">18</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <div className="text-3xl">
                  <CgMenuGridR />
                </div>
                <div className="text-3xl">
                  <TbMenu2 />
                </div>
              </div>
              <div className="min-[445px]:hidden relative">
                <div className="flex items-center gap-2">
                  <FaFilter onClick={toggleShowFilter} />
                  <span>Filter</span>
                </div>
              </div>
              <div
                className={`Filters  absolute w-full h-[300px] rounded bg-[rgba(0,0,0,0.7)] top-[110%] left-0 z-[3] ${
                  showFilter === true ? "block" : "hidden"
                }`}
              >
                <div className="p-2 w-full h-full">
                  <div className="border  h-[50%] p-2 bg-gray-200 rounded">
                    <h1 className="text-xl font-bold mb-2 uppercase ">
                      Filter PRICES
                    </h1>
                    <div className="flex">
                      <input
                        className="w-[100px] m-2 p-2 outline-none rounded text-red "
                        type="number"
                        id="min-price"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                      <input
                        className="w-[100px] m-2 p-2 outline-none rounded"
                        type="number"
                        id="max-price"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-5">
                      <button
                        onClick={handleFilter}
                        className="bg-[#5c5555] text-[18px] font-semibold text-white p-1 px-2 rounded-[10px]"
                      >
                        Go
                      </button>
                      <div
                        className={`text-red-400 ${
                          error === true ? "block" : "hidden"
                        } font-semibold`}
                      >
                        invalid inputs
                      </div>
                    </div>
                  </div>
                  <div className="border  w-full h-[50%] p-2 bg-gray-200 rounded mt-1 ">
                    <h1 className="text-xl font-bold mb-2 uppercase ">
                      Brands
                    </h1>

                    <div className="flex p-1">
                      <div className="border border-black rounded hover:border-[blue] hover:text-[blue] py-1 px-2 mx-2 ">
                        Apple
                      </div>
                      <div className="border border-black rounded hover:border-[blue] hover:text-[blue] py-1 px-2 mx-2 ">
                        LG
                      </div>
                      <div className="border border-black rounded hover:border-[blue] hover:text-[blue] py-1 px-2 mx-2 ">
                        Samsung
                      </div>
                    </div>
                    <div className="flex p-1">
                      <div className="border border-black rounded hover:border-[blue] hover:text-[blue] py-1 px-2 mx-2 ">
                        Boat
                      </div>
                      <div className="border border-black rounded hover:border-[blue] hover:text-[blue] py-1 px-2 mx-2 ">
                        Other
                      </div>
                    </div>

                    <div
                      className={`text-red-400 ${
                        error === true ? "block" : "hidden"
                      }`}
                    >
                      invalid inputs
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="storeProducts gridView max-[445px]:w-[80%]  mx-auto grid grid-cols-3 gap-5">
              {storeProducts.map((prod, i) => {
                return (
                  <div
                    key={i}
                    className="col-span-1 rounded-md shadow hover:shadow-[0px_10px_20px_rgba(0,0,0,0.6)] cursor-pointer"
                  >
                    <div className="relative rounded-tl-md rounded-tr-md  flex overflow-hidden flex-col justify-center p-3 w-full ">
                      <div
                        className={`absolute top-0 left-[-10px] pl-5 w-[60px]  h-[30px] rounded-[5px] bg-[#FF4858]  font-semibold text-white  px-2 py-[2px] ${
                          prod.hot === true ? "block" : "hidden"
                        }`}
                      >
                        Hot
                      </div>
                      <img
                        src={`./${prod.img}`}
                        alt=""
                        className="self-center"
                        width={250}
                      />
                    </div>
                    <div className="  details text-center py-2 px-3">
                      <div className="my-3">
                        <div className="font-bold  ">{prod.name}</div>
                      </div>
                      <div className="Ratings flex justify-center">
                        <Stars yellow={prod.yellow} />
                      </div>
                      <div className="flex justify-center my-4 gap-2">
                        <div className="text-[#ffa33b] text-[18px] font-semibold">
                          ${prod.price}
                        </div>
                        <div className="text-[#f0d0ac] line-through text-[18px] font-semibold">
                          ${prod.actual_price}
                        </div>
                      </div>
                      <div className="flex justify-between w-full gap-1">
                        <button className=" w-[80%] bg-[#ff4252] border-[#ed4957] text-white hover:text-[#ed4957] border px-2 py-[2px] rounded-md font-semibold hover:bg-[#fff]">
                          Add To Cart
                        </button>
                        <button className="border text-white px-2 rounded-md bg-gray-600">
                          <MdShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="storeProducts tableView hidden">hii</div>
            <div className=" w-full bg-[#c3d1dc40] my-10  p-2">
              <ul className="max-[445px]:hidden flex justify-center gap-5 ">
                <li className="bg-[#bbcad640] font-semibold  px-4 py-2">1</li>
                <li className="bg-[#bbcad640] font-semibold  px-4 py-2">2</li>
                <li className="bg-[#000] text-white px-4 py-2">3</li>
                <li className="bg-[#bbcad640] font-semibold  px-4 py-2">4</li>
                <li className="bg-[#bbcad640] font-semibold  px-4 py-2">5</li>
              </ul>
              <div className="min-[445px]:hidden  flex justify-between font-semibold">
                <button className="border px-2 py-1 rounded-[5px] bg-[#ff4252] text-white">
                  Preview
                </button>
                <button className="border px-2 py-1 rounded-[5px] bg-[#4b5563] text-white ">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Store;

function Stars({ yellow }) {
  let yellowStars = [];
  for (var i = 0; i < (yellow > 5 ? 5 : yellow); i++) {
    yellowStars.push(<IoIosStar className="text-[#FFC600]" />);
  }

  let whiteStars = [];

  for (var j = 0; j < 5 - yellow; j++) {
    yellowStars.push(<IoIosStarOutline />);
  }

  return (
    <div className="flex text-xl gap-2">
      {yellowStars}
      {whiteStars}
    </div>
  );
}
