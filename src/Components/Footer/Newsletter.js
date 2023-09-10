import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Newsletter() {
    return (
        <div>
            <div className='main h-[15rem] w-[100%] bg-[url("https://images.pexels.com/photos/235992/pexels-photo-235992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
                <div className=' py-3 flex flex-col items-center md:items-center md:flex'>
                    <div className='text-xl uppercase font-semibold md:text-3xl'>Newsletter</div>
                    <div className='font-semibold md:text-2xl md:font-medium'>Sing Up for letest updates and offers</div>
                    <div className='form flex py-3 md:w-[40rem]'>
                        <input className='px-2 md:w-[100%]' placeholder='Email Address ' />
                        <div className='hover:bg-red-800 cursor-pointer bg-purple-950 text-white p-1'>Subscribe</div>
                    </div>
                    <div className='text-center font-semibold md:font-medium md:text-2xl '>Will be used in accordance with our Privacy Policy</div>
                    <div>
                        <div className="icon flex gap-2 text-1xl md:text-2xl ">
                            <div className="bg-black rounded-2xl md:rounded-3xl text-white p-2 cursor-pointer hover:text-purple-800 fb"><FaFacebook /></div>
                            <div className="bg-black rounded-2xl md:rounded-3xl text-white p-2 cursor-pointer hover:text-purple-800 tw"><FaTwitter /></div>
                            <div className="bg-black rounded-2xl md:rounded-3xl text-white p-2 cursor-pointer hover:text-purple-800 insta"><FaInstagram /></div>
                            <div className="bg-black rounded-2xl md:rounded-3xl text-white p-2 cursor-pointer hover:text-purple-800 in"><FaLinkedin /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
