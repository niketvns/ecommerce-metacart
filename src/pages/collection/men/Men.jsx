import React, {useEffect, useState} from 'react';
import spinner from "../../../images/Spinner.svg";
import axios from "axios";
import {ProductCard} from "../../../components";

export default function Men() {
    const [categoryProducts, setCategoryProducts] = useState([]);
    const mensCategories = ['mens-clothing', 'mens-watches', 'mens-shoes']

    const fetchProductsOfCategory = async (category) => {
        let response = await axios.get(`/api/category/${category}`);
        setCategoryProducts(prev => [...prev, ...(response.data.products)]);
    }

    useEffect(() => {
        mensCategories.map((category) =>
            fetchProductsOfCategory(category)
        )
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.title = "Men's Products | Shopping with Metacart"
    }, [])

    return (
        categoryProducts.length !== 0 ?
            <div className='all-products'>
                {
                    categoryProducts?.map((product) => {
                        return (
                            <ProductCard
                                key={product._id}
                                product={product}
                            />
                        )

                    })
                }
            </div> :
            <div className='apiLoading'>
                <img src={spinner} alt=""/>
                <p>Loading...</p>
            </div>
    )
}
