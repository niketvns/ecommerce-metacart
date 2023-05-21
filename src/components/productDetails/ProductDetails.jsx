import React, { useEffect } from 'react';
import { useState } from 'react';
import spinner from '../../images/Spinner.svg'
import ProductCard from '../productCard/ProductCard';
import axios from 'axios';

export default function ProductDetails(props) {

    const [categoryProducts, setCategoryProducts] = useState(null);

    let apiLink = `/api/category/${props.category}`;

    const fetchProductsOfCategory = async () => {
        let response = await axios.get(apiLink);
        setCategoryProducts(response.data.products);
    }

    useEffect(() => {
        fetchProductsOfCategory()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        categoryProducts ?
            <div className='all-products'>
                {
                    categoryProducts?.map((product) => {
                        return (
                            <ProductCard
                                product={product}
                            />
                        )

                    })
                }
            </div> :
            <div className='apiLoading'>
                <img src={spinner} alt="" />
                <p>Loading...</p>
            </div>
    )
}