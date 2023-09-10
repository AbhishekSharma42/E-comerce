import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from '../SingleProduct/SingleProduct'
import ReletedProductItem from './ReletedProductItem'
import { useParams } from 'react-router-dom'
import { Context } from '../Utils/Context'
// import ProductItem from '../Products/ProductItem/ProductItem'


function ProductInfo() {

  const { id } = useParams();
  const { setReletedProducts } = useContext(Context);

  const [getProducts, setProducts] = useState();
  // const [getCategory, setCategory] = useState();

  const SingleProductData = getProducts;

  const Categorys = async () => {

    // http://localhost:1337/api/products?populate=*&[filters][categories][id]=${id}

    const res = await fetch(`http://localhost:1337/api/products?populate=*&[filters][id]=${id}`);
    const Json_res = await res.json();
    setProducts(Json_res);
    // setCategory(Json_res?.data[0]?.attributes?.categories?.data[0]?.attributes?.Title);

    // this method for fetch to the releted products
    const catData = Json_res?.data[0]?.attributes?.categories?.data[0]?.attributes?.Title;
    const res2 = await fetch(`http://localhost:1337/api/products?populate=*&[filters][categories][Title]=${catData}&[filters][id][$ne]=${id}&pagination[start]=0&pagination[limit]=10`)
    const Json_res2 = await res2.json();
    setReletedProducts(Json_res2);
  }

  useEffect(() => {
    Categorys();
  }, [SingleProductData])

  return (
    <div>
      <SingleProduct SinglePro={SingleProductData} />
      <ReletedProductItem />
    </div>
  )
}

export default ProductInfo
