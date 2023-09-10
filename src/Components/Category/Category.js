import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

function Category({ categories }) {
  
  const Dev_url = "http://localhost:1337"

  const navigate = useNavigate();

  return (
    <div>
      <div className='shop-category py-2 '>
        <div className='categoryes flex justify-center gap-5'>
          {categories?.data?.map((item) => (
            <div
              className="category rounded-md h-[50px] w-[50px] hover:scale-110"
              key={item.id}
              onClick={() => {
              navigate(`/Category/${item.id}`)
              }}>
              <img
                className=' md:w-[100px] md:h-[50px] rounded-3xl w-[50px]'
                src={Dev_url + item?.attributes?.Image?.data?.map((img) => img?.attributes?.url)}
                alt={item.attributes.Title} />
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Category;