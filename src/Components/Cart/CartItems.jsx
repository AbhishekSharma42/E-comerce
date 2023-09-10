import React from 'react'
import HeadPhone from '../../Components/assets/Products/HeadPhone.png'

function CartItems() {
  console.log("Cartitems ...");
  return (
    <>
      <div className="cart-item m-2 flex h-[100px] border hover:bg-gray-200 space-x-1 overflow-hidden ">
        <div className=" flex items-center justify-center w-[40%] bg-gray-200">
          <img className='h-[100%]' src={HeadPhone} alt="sorry" />
        </div>
        <div className="featurs">
          <span className='product-name'>title</span>
          <div className="border-2 border-gray-400 flex justify-between">
            <button className='hover:bg-purple-800 hover:text-white hover:border-purple-800 px-3 border-1  p-1 '> - </button>
            <span className='px-3 border-gray-400 border-l-2 border-r-2 p-1'>5</span>
            <button className='hover:bg-purple-800 hover:text-white hover:border-purple-800 px-3 border-1 p-1'> + </button>
          </div>
        </div>
        <div className="Quntity">
          3 X 400
        </div>
      </div>
    </>
  )
}

export default CartItems
