import React, { useContext } from 'react'
import Loading from '../../Spinner/Loading';
import { Context } from '../../Utils/Context';
import { Link } from 'react-router-dom';

// this method for get to the releted product show

function ProductItem() {

  const { getReleteProducts } = useContext(Context);

  const Img_Ulr = "http://localhost:1337";
  return (
    <div>
      <div className=' flex flex-wrap justify-evenly'>

        {getReleteProducts?.data?.map((item) => (
          <Link to={`/Product/${item.id}`} key={item?.id}>

            <div className="p-1  text-black w-[150px] md:w-[14rem] mx-1 md:mx-0 ">
              <div className="flex items-center products-thumblain  bg-gray-100 h-[200px] md:h-[300px]">
                <img className='hover:scale-110 h-fit w-[100%] '
                  src={Img_Ulr + item?.attributes?.img?.data?.attributes?.url}
                  alt="no img" />
              </div>
              <div className="product-details px-1 block overflow-ellipsis whitespace-nowrap overflow-hidden text-purple-600">
                {item?.attributes?.title}
              </div>
              <div className='product-price px-1 text-purple-600 font-bold'>
                &#8377;{item?.attributes?.price}
              </div>
            </div>
          </Link>
        )) ||
          <div className='flex justify-center'>

            <Loading />
          </div>
        }
      </div>
    </div>
  )
}

export default ProductItem
