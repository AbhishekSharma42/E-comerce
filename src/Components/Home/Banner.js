import React from 'react'
import HeadPhone from '../Img/HeadPhone.png'

function Banner() {
    return (
        <div>
            <div className='flex flex-col-reverse justify-center md:items-center md:flex-row text-white bg-gradient-to-r from-purple-800 to-violet-900 md:h-'>
                <div className='text-center  '>
                    <div className='text-5xl uppercase font-medium md:text-8xl'>
                        SALES
                    </div>
                    <div className='text-sm sm:flex sm:justify-center p-1 md:w-[700px]'>
                        Convallis interdum purus adipiscing dis parturient posuere ac a quam a eleifend montes parturient posuere curae tempor
                    </div>
                    <div className='space-x-2 justify-center py-2 text-sm flex'>
                        <button className='hover:bg-blue-950 hover:text-white hover:border-blue-950 px-3 border-2 p-1'>READ MORE</button>
                        <button className='hover:bg-blue-950 hover:text-white hover:border-blue-950 px-3 bg-white text-black font-medium border-2'>
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <div className="flex justify-center py-3 md:w-96 md:h-80 mb-1 ">
                    <img className='relative z-10' src={HeadPhone} alt="Sorry" />
                </div>
            </div>
        </div>
    )
}

export default Banner
