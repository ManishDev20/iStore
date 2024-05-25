import React from "react";
import Container from "./Container";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const ProductBox = () => {
  const products = [
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
  return (
    <Container>
      <div className="product-container grid justify-center w-[70%] sm:w-[90%] grid-cols-1 sm:mx-auto mx-auto  sm:grid-cols-3 md:w-[90%] md:p-2 md:mx-auto  md:grid-cols-4 gap-5 mt-10">
        {products.map((prod, i) => {
          return (
            <div
              key={i}
              className="col-span-1 rounded-md shadow hover:shadow-[0px_6px_15px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <div className="relative rounded-tl-md rounded-tr-md  flex overflow-hidden flex-col justify-center p-3 w-full ">
                <div
                  className={`absolute top-0 left-[-10px] pl-5 w-[60px]  h-[30px] rounded-[5px] bg-[#ff4252]  font-semibold text-white  px-2 py-[2px] ${
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
                  <div className="font-bold text-[#000]">{prod.name}</div>
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
                  <button className=" w-full bg-[#000] border-[#000] text-white hover:text-[#fff] hover:bg-[#ff4252] hover:border-[#ff4252]  border px-2 py-[2px] rounded-md font-semibold ">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center font-semibold underline text-blue-600  my-[50px] cursor-pointer">
        Show More
      </div>
    </Container>
  );
};

export default ProductBox;

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

export { Stars };
