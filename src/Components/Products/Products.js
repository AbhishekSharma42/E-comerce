import { useNavigate } from 'react-router-dom';
import Loading from '../Spinner/Loading';

function Products({ products }) {

  const Img_Ulr = "http://localhost:1337";

  const navigate = useNavigate();

  return (
    <div>
      <div className='px-1 md:container md:mx-auto font-medium after:block after:h-[4px] my-1 after:w-9 after:bg-purple-900 uppercase md:my-4 md:text-2xl'>our Products</div>
      <div className={`!products?"":animate-pulse flex flex-wrap gap-[10px] justify-around `}>
        {
          products?.data?.map((item) => (
            <div key={item.id} onClick={() => {
              navigate(`/Product/${item.id}`)
            }}>

              <div className="product-container p-1 text-black w-[150px] md:w-[14rem] mx-1 md:mx-0 " >
                <div className="flex products-thumblain  bg-gray-100 h-[200px] items-center md:h-[300px]">
                  <img className='hover:scale-110 h-fit w-[100%] '
                    src={Img_Ulr + item.attributes.img.data.attributes.url}
                    alt="no img" />
                </div>
                <div className="product-details px-1 block overflow-ellipsis whitespace-nowrap overflow-hidden text-purple-600">
                  {item.attributes.title}
                </div>
                <div className='product-price px-1 text-purple-600 font-bold'>
                  &#8377;{item.attributes.price}
                </div>
              </div>
            </div>
          )) ||
          <div className='mx-auto'>
            <Loading />
          </div>
        }
      </div>
    </div >
  )
}

export default Products;