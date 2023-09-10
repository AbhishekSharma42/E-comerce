import React from 'react'
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom'

// the parameeter pass from the category/CategrizeProduct.js
function CategoryProducts({ productData }) {

    const navigate = useNavigate();

    const Img_Ulr = "http://localhost:1337";

    return (
        <>
            <div className='mx-3 md:container md:mx-11 font-medium after:block after:h-[4px] my-1 after:w-9 after:bg-purple-900 uppercase md:my-4 md:text-2xl'>
                <p>{productData?.data[0]?.attributes?.categories?.data[0]?.attributes?.Title || "Loading..."}</p>
            </div>
            <div className="md:container md:mx-11 flex flex-wrap gap-[10px]">

                {productData?.data?.map((item) =>
                    <div key={item.id} className="product-container p-1 text-black w-[150px] md:w-[14rem] mx-1 md:mx-0 " onClick={() => navigate(`/Product/${item.id}`)} >
                        <div className="flex products-thumblain  bg-gray-100 h-[200px] items-center md:h-[300px]">

                            <img className='hover:scale-110 h-fit w-[100%] ' src={Img_Ulr + item?.attributes?.img?.data?.attributes?.url} alt="no img" />

                        </div>
                        <div className="product-details px-1 block overflow-ellipsis whitespace-nowrap overflow-hidden text-purple-600">{item.attributes.title}</div>
                        <div className="product-details px-1 block overflow-ellipsis whitespace-nowrap overflow-hidden "></div>

                        <div className='product-price px-1 text-purple-600 font-bold'>&#8377;{item?.attributes?.price}</div>

                    </div>
                ) ||// Spinner bar 
                    <div className='flex justify-center container my-5'>
                        <Spinner />
                    </div>
                }

            </div>
        </>
    )
}

export default CategoryProducts
