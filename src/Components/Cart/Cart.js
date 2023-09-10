import React from 'react'
import CartItems from './CartItems'

function Cart({ toggle }) {

    console.log("Cart");
    return (
        <>
            {/* Cart Pannel */}
            <div className="flex flex-row-reverse">
                <div className="fixed z-40 opacity-60 bg-black w-[100%] h-[100vh]"></div>
                {/* items opecity pennel */}
                <div className=" fixed z-40 bg-white w-[90%] md:w-[25%] h-[100vh]">
                    {/* Cart Header */}
                    <div className="flex flex-col">
                        <div className="shadow-md h-14 flex items-center justify-between px-3">
                            <span className='uppercase font-bold'> shopping Cart</span>
                            <span className='text-lg p-1 h-9 w-9 flex items-center justify-center hover:bg-purple-800 cursor-pointer bg-purple-700 text-white rounded-md' onClick={toggle}> X </span>
                        </div>
                        <div className=' m-1 overflow-y-auto Items h-[85vh] '>

                            < CartItems />

                            <CartItems />
                            <div className="footer m-3 z-99 bottom-0 w-[90%] bg-slate-100 items-center my-5 mb-9">
                                <div className="px-1 p-2 flex justify-around my-1 text-lg ">
                                    <span className='uppercase '>subtotal</span>
                                    <span>$234</span>
                                </div>
                                <button className='w-[100%] bg-purple-600 text-white text-lg p-1 md:p-2'>Chackout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
