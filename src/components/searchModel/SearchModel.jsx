import React, {useState} from 'react';
import {useGlobalProduct} from "../../context/productsContext";
import './searchModel.css'
import {Link} from "react-router-dom";

const SearchModel = ({searchInput, setInput}) => {

    const {products} = useGlobalProduct()

    let searchData = products.filter(({category, title}) => category.includes(searchInput) || title.includes(searchInput))

    if (searchInput.length === 0) {
        searchData = []
    }

    return (
        searchInput ?
            <div className='search-model'>
                {
                    searchData.length ?
                        searchData.map(({title, thumbnail, price, _id}) => (
                            <Link to={`/product/${_id}`} key={_id} onClick={() => setInput('')}>
                                <div className='search-model-card'>
                                    <div className="search-model-left">
                                        <img src={thumbnail} alt='product-image'/>
                                    </div>
                                    <div className="search-model-right">
                                        <p className='search-product-title'>{title}</p>
                                        <p>&#8377;{price}/-</p>
                                    </div>
                                </div>
                            </Link>
                        )) :
                        <p className='no-data-found'>no product found</p>
                }
            </div> : null
    );
};

export default SearchModel;