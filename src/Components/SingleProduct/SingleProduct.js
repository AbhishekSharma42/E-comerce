import { useContext, useState } from 'react'
import { FaCartPlus, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { Context } from '../Utils/Context';

// the data pass from the singleProduct/Productinfo.js
function SingleProduct({ SinglePro }) {
  const [quantity, setQuantity] = useState(1)

  const { setDeta } = useContext(Context);

  const dataStore = () => {
    console.log(SinglePro?.data[0]?.id);
    console.log(Dev_url + SinglePro?.data[0]?.attributes?.img?.data?.attributes?.url);
    console.log(SinglePro?.data[0]?.attributes?.title);
    console.log(SinglePro?.data[0]?.attributes?.price);
    console.log(quantity);
    setDeta(!SinglePro)
    console.log(SinglePro);
  }

  const Dev_url = "http://localhost:1337"
  const increement = () => {
    if (quantity === 10) {
      alert("ohh you can order max 10 products")
      return;
    }
    else {
      setQuantity((prevStat) => prevStat + 1);
    }
  }

  const decreement = () => {
    if (quantity === 1) {
      return;
    }
    else {
      setQuantity((prevStat) => prevStat - 1);
    }
  }

  return (
    <div>

      {/* get data from the id and sete the data here */}

      <div className='flex flex-col-reverse justify-center sm:flex sm:flex-row-reverse sm:mb-5 md:p-[50px] md:flex-row-reverse md:items-center mx-2'>
        {/* Right Part */}
        <div className=' sm:px-2 sm:w-2/5 md:w-2/5 md:justify-start md:h-auto md:px-5 '>
          {/* Product Name */}
          <div className='uppercase font-medium'>
            {SinglePro?.data[0]?.attributes?.title || <><div className="animate-pulse">
              <div className="h-2 bg-purple-500 rounded col-span-2"></div>
            </div></>}

          </div>
          {/* product price & Description */}
          <span className='font-bold flex items-center gap-1 py-4 md:text-2xl'>&#8377;{SinglePro?.data[0]?.attributes?.price || <>
            <div className="animate-pulse">
              <div className="h-2 w-40 bg-purple-500 rounded col-span-2"></div>
            </div>
          </>}

          </span>
          <div className='text-sm sm:flex overflow-clip'>
            {SinglePro?.data[0]?.attributes?.desc || <>
              <div className="animate-pulse">
                <div className="h-2 my-1 w-96 bg-purple-500 rounded col-span-2"></div>
                <div className="h-2  w-80 bg-purple-500 rounded col-span-2"></div>
              </div>
            </>}

          </div>
          {/* Product Quantity Increement or decreement buttons */}
          <div className='py-2 text-sm flex items-center '>
            <button onClick={decreement} className='hover:bg-blue-950 hover:text-white hover:border-blue-950 px-3 border p-1 '> - </button>
            <span className='px-3 border-l-2 border p-1'>{quantity}</span>
            <button onClick={increement} className='hover:bg-blue-950 hover:text-white hover:border-blue-950 px-3 border p-1' > + </button>
            {/* Add to Cart Button  */}
            <button className='border-b-2 hover:bg-blue-950  flex text-white hover:border-blue-400 border-separate shadow px-2 p-1 mx-2 w-fit bg-purple-600 gap-2' onClick={dataStore} >
              <FaCartPlus size={20} /> ADD TO CART
            </button>
          </div>
          {/* Features */}
          <div className='py-1 border-t-2'>
            <div className='flex items-center'>
              <span className='font-bold mx-1'>Category: </span> {SinglePro?.data[0]?.attributes?.categories?.data[0]?.attributes?.Title || <>
                <div className="animate-pulse">
                  <div className="h-2 w-24 bg-purple-500 rounded col-span-2"></div>
                </div></>}
            </div>
            <br />
            <span className='ShereBtn font-bold flex items-center gap-2 py-1'>Share: <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaLinkedin /><FaPinterest /> </span>
          </div>
        </div>
        {/* Left part here product images*/}
        {
          <div className="flex  bg-slate-100 justify-center py-3 sm:bg-gray-100 sm:w-2/5 md:items-center md:w-96 md:h-80 mb-1 ">
            <img src={Dev_url + SinglePro?.data[0]?.attributes?.img?.data?.attributes?.url} alt="" /></div>
          || <div className='animate-pulse bg-purple-300 justify-center py-3 sm:bg-purple-300 sm:w-2/5 md:items-center md:w-96 md:h-80 mb-1 '></div>
        }
      </div>
    </div>
  )
}

export default SingleProduct;
