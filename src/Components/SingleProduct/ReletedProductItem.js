import React from 'react'
import ProductItem from '../Products/ProductItem/ProductItem'

function ReletedProductItem() {
  console.log();

  return (
    <>
      {/* Main div */}
      <div className='w-[100%] mx-auto sm:w-3/4 sm:m-auto md:w-4/5 '>
        {/* this div for Heading */}
        <div className="heading-text text-lg after:bg-slate-600 after:h-[4px] after:w-9 after:block px-2 uppercase font-bold">Releted Products </div>
        {/* ths div for releted products */}
        <div className="flex flex-wrap">
          <ProductItem />
        </div>
      </div>
    </>
  )
}

export default ReletedProductItem
