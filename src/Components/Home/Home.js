import React, { useContext, useEffect } from 'react'
import Banner from './Banner'
import Category from '../Category/Category'
import Products from '../Products/Products'
import { Context } from '../Utils/Context'

function Home() {

  const { products, setproduct, categories, setcategories } = useContext(Context);

  const Categorys = async () => {
    const res = await fetch("http://localhost:1337/api/categories?populate=*");
    const Json_res = await res.json();
    setcategories(Json_res);
  }

  const getAllproduct = async () => {
    const res = await fetch("http://localhost:1337/api/products?populate=*&[filters][categories][Title]=T-shirts&pagination[start]=0&pagination[limit]=10");
    const resData = await res.json();
    setproduct(resData);
  }

  useEffect(() => {
    getAllproduct();
    Categorys();
  }, []);

  return (
    <>
      <Banner />
      <Category categories={categories} />
      <div className=" md:container md:mx-auto md:w-4/5">
        <Products className="mx-auto" products={products} />
      </div>
    </>
  )
}

export default Home