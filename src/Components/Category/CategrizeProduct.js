import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CategoryProducts from '../Products/CategoryProducts';

function CategrizeProduct() {

    const { id } = useParams();

    const [getProducts, setProducts] = useState();
    const productData = getProducts;

    const Categorys = async () => {

        // http://localhost:1337/api/products?populate=*&[filters][categories][id]=${id}

        const res = await fetch(`http://localhost:1337/api/products?populate=*&[filters][categories][id]=${id}`);
        const Json_res = await res.json();
        setProducts(Json_res);
    }

    useEffect(() => {
        Categorys();
    }, [Categorys])

    return (
        <div className='mx-auto flex flex-wrap'>
            <CategoryProducts productData={productData} />
        </div>
    )
}

export default CategrizeProduct
