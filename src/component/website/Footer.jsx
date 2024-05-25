import React from "react";
import Container from "./Container";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <hr className=" my-10 border border-gray-200" />
      <div className="foot1 md:w-[90%] mx-auto  gap-2 md:flex justify-between p-3">
        <div className="md:w-[30%]">
          <img src="./images/ishop.svg" alt="" className="mb-5 footLogo" />
          <div className="footdes text-[gray]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            voluptate voluptatibus maxime aliquid repellendus voluptas poca.
          </div>
        </div>
        <div className="md:w-[30%] ">
          <h1 className="foot1headings  text-xl font-semibold mb-5">
            Follow us
          </h1>
          <div className="footdes text-[gray] ">
            Lorem ipsum dolor sit amet consectetur.orem ipsum dolor sit amet
            consectetur.
          </div>
          <div className="socialLogo flex gap-5 m-2 text-[#3b91fa] text-xl">
            <a href="https://www.google.com">
              <FaTwitter />
            </a>
            <a href="https://www.google.com">
              <FaFacebookF />
            </a>
            <a href="https://www.google.com">
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className="md:w-[30%] ">
          <h1 className="foot1headings text-xl font-semibold mb-5">
            Contact us
          </h1>
          <div className="footdes text-[gray]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, officiis tempora? Lorem ipsum dolor.
          </div>
        </div>
      </div>
      <hr className="my-10 border border-gray-200 " />
      <div className="foot2 md:w-[90%]  gap-2 flex justify-center p-3">
        <div className="cont  md:w-[50%] flex justify-evenly">
          <div className="">
            <h1 className=" footHlink font-semibold mb-5">Information</h1>
            <ul className="footLinks">
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  About us
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Information
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Privacy policy
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="footHlink font-semibold mb-5">Services</h1>
            <ul className="footLinks">
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  About us
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Information
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Privacy policy
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="footHlink font-semibold mb-5">Extras</h1>
            <ul className="footLinks">
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  About us
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Information
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Privacy policy
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="cont  md:w-[50%] flex justify-evenly">
          <div className="">
            <h1 className="footHlink font-semibold mb-5">Home</h1>
            <ul className="footLinks">
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  About us
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Information
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Privacy policy
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="footHlink font-semibold mb-5">Useful Links</h1>
            <ul className="footLinks">
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  About us
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Information
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Privacy policy
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="footHlink font-semibold mb-5">Our offers</h1>
            <ul className="footLinks">
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  About us
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Information
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Privacy policy
                </a>
              </li>
              <li className="">
                <a
                  className="text-[12px] text-gray-500 "
                  href="https://www.google.com"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-10 mb-5 border border-gray-200" />
      <div className="payment flex gap-5 justify-end mb-10 px-10">
        <img src="./images/Western_union.svg" alt="" />
        <img src="./images/visa.svg" alt="" />
        <img src="./images/Paypal.svg" alt="" />
        <img src="./images/master_card.svg" alt="" />
      </div>
    </Container>
  );
};

export default Footer;
