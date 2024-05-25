import React, { useState } from 'react';
import Container from '../../component/website/Container'

import { RxCross2 } from "react-icons/rx";


const Cart = () => {
    const [totalCart, setTotalCart] = useState(1)

    const incCart = () => {

        setTotalCart(totalCart + 1)
    }
    const decCart = () => {
        if (totalCart > 1) {
            setTotalCart(totalCart - 1)
        }
    }
    return (
        <div className='w-full py-5'>
            <div className="p-2 text-xl font-bold text-center bg-[#ced6d6]">Cart</div>
            <Container classes='my-5'>
                <div className="flex justify-between items-center p-5 shadow my-10">
                    <div className="w-[30%]  text-2xl font-bold uppercase text-center">Product</div>
                    <div className="w-[50%]  flex justify-between px-5 ">
                        <div className="text-2xl font-semibold uppercase">Price</div>
                        <div className="text-2xl font-semibold uppercase">qty</div>
                        <div className="text-2xl font-semibold uppercase">Unit Price</div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-3 shadow my-10">
                    <div className="w-[50%] flex items-center">
                        <div className=" w-[max-content]  p-1 rounded-[20px] text-[red] text-3xl bg-[#ffb1b1] mr-5"><RxCross2 /></div>
                        <div className="">
                            <img src="./images/beats_solo_2.png" alt="" className='w-[200px] ' />
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-between px-5 ">
                        <div className="text-xl font-semibold uppercase">$387</div>
                        <div className="text-xl px-3 py-1 rounded font-semibold uppercase flex items-center gap-5 bg-[#ced6d6]">
                            <button className='text-[blue] font-bold text-2xl ' onClick={incCart}>+</button>
                            <div className='mx-3'>{totalCart}</div>
                            <button className='text-[blue] font-bold text-2xl pb-1 ' onClick={decCart}>-</button>
                        </div>
                        <div className="text-xl font-semibold uppercase">$387</div>
                    </div>
                </div>
            </Container>
        </div>

    );
}

export default Cart;
