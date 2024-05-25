import React from 'react';
import Container from './Container';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { Stars } from './ProductBox';


const HomeSlider = () => {

    const products = [
        {
            name: 'Apple iPhone 13 Pro',
            yellow: 4,
            price: 329,
            img: 'images/Apple iPhone 11.png'
        },


        {
            name: 'Apple Watch 21-1',
            yellow: 5,
            price: 249,
            img: 'images/Apple Watch 21-1.png'
        },
        {
            name: 'H Squared',
            yellow: 5,
            price: 350,
            img: 'images/H-squared.png'
        },
        {
            name: 'Netatmo Rain',
            yellow: 4,
            price: 399,
            img: 'images/Netatmo_rain.png'
        },



    ]
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const slider = React.useRef(null);
    return (
        <Container classes=' px-[50px] mt-[100px]'>
            <h1 className="text-3xl font-semibold text-center my-5">Featured Products</h1>
            <Slider ref={slider} {...settings} className='py-10 '>
                {
                    products.map(
                        (prod, i) => {
                            return (
                                <div key={i} className=' px-3 py-10 h-[350px]  '>
                                    <div className="Hslids border-2 rounded-3xl p-2 flex gap-5 items-center h-full shadow-[0px_5px_10px_rgba(0,0,0,0.3)] hover:shadow-[2px_6px_15px_rgba(0,0,0,0.4)]">
                                        <div className=" md:w-[60%] ">
                                            <img src={`./${prod.img}`} alt="" className='w-[200px] h-[150px] ' />
                                        </div>
                                        <div className=" md:h-[40%]  flex flex-col  px-5">
                                            <h1 className='text-xl font-semibold my-2'>
                                                {prod.name}
                                            </h1>
                                            <Stars yellow={4} />
                                            <button className='w-full border shadow bg-black  text-white my-3  rounded py-1 px-3'>Know More</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }

            </Slider>
            <div className='text-center relative'>
                <button className='Hslider-back' onClick={() => slider?.current?.slickPrev()}><GrFormPreviousLink /></button>
                <button className='Hslider-next' onClick={() => slider?.current?.slickNext()}><GrFormNextLink /></button>
            </div>
        </Container >
    );
};
export default HomeSlider;
