import React from 'react'
import { FaTelegram, FaPhone, FaMailBulk } from "react-icons/fa";
import paymentGet from "../Img/paymentGet.png"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className='footer-content flex flex-wrap text-sm md:flex md:justify-around border-t-purple-600 border-t-4 '>
        {/* footer pages */}
        <div className='About ms:p-2 md:p-3 md:w-[300px] py-3 px-3 '>
          <div className='text-lg font-semibold pb-1'>About</div>
          <div className='text-gray-500'>
            Voluptatern accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo eaque ipsa quae ab illo
          </div>
        </div>
        <div className='Contact ms:p-2 md:p-3 md:w-[300px] py-3 space-y-1 md:space-y-2 px-3'>
          <div className='space-y-1 text-lg font-semibold pb-1'>Contact</div>
          <div className='cursor-pointer text-gray-500 px-1 gap-2 flex'><FaTelegram size={25} />Paiganagri Meerganj Bareilly Uttar pradesh 243504 </div>
          <div className='cursor-pointer text-gray-500 px-1 gap-2 flex'><FaPhone size={15} />phone: 7310963364</div>
          <div className='cursor-pointer text-gray-500 px-1 gap-2 flex'><FaMailBulk size={15} />Email: ak9969489@gmail.com</div>
        </div>
        <div className='tegries space-y-1 px-3 ms:p-2 md:p-3 md:w-[300px] '>
          <div className='text-lg font-semibold pb-1'>Categries</div>
          <div className='text-gray-500 cursor-pointer text px-1'>Headphone</div>
          <div className='text-gray-500 cursor-pointer text px-1'>Smart Watches</div>
          <div className='text-gray-500 cursor-pointer text px-1'>Bluetooth Speekers</div>
          <div className='text-gray-500 cursor-pointer text px-1'>Wireless Earbuds</div>
          <div className='text-gray-500 cursor-pointer text px-1'>Home Theatre</div>
          <div className='text-gray-500 cursor-pointer text px-1'>Projects</div>
        </div>
        <div className='space-y-1 ges p-1 ms:p-2 md:p-3 md:w-[300px]bg-orange-500 '>
          <div className='space-y-1 text-lg font-semibold pb-1'> Pages</div>
          <div className='cursor-pointer text-gray-500 px-1'><Link to='/'>Home</Link></div>
          <div className='cursor-pointer text-gray-500 px-1'>About</div>
          <div className='cursor-pointer text-gray-500 px-1'>Contect us</div>
          <div className='cursor-pointer text-gray-500 px-1'>Returns</div>
          <div className='cursor-pointer text-gray-500 px-1'>Privacy</div>
          <div className='cursor-pointer text-gray-500 px-1'>Term & Conditions</div>
        </div>
      </div>

      <div className="footer text-center pt-1 text-sm items-center sm:flex sm:justify-around md:flex md:justify-around  bg-slate-200 md:h-16 pb-2">
        <span className='uppercase text-xs'>
          Jsdevstore 2023 Created By Abhi Sharma Premium E-Commerce Solutions.
        </span>
        <span className='flex items-center justify-center '>
          <img className=' md:h-14 h-10' src={paymentGet} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Footer