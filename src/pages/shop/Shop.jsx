import React, {useEffect, useState} from 'react';
import './shop.css';
import spinner from '../../images/Spinner.svg';
import axios from 'axios';
import {useGlobalProduct} from '../../context/productsContext';
import {NavLink} from 'react-router-dom';
import {Filter, ProductCard} from "../../components";
import FilterListIcon from '@mui/icons-material/FilterList';

export default function Shop() {
    const [filterShow, setFilterShow] = useState(false)
    const {products, isLoading} = useGlobalProduct();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        document.title = 'Shop | Shopping with Metacart'
    }, [])

    return (
        !isLoading ?
            <div className='shop-main'>
                <div className="filter-icon" onClick={() => setFilterShow(prev => !prev)}>
                    <FilterListIcon/> Filter
                </div>
                <div className="product-filter-menu">
                    <Filter filterShow={filterShow}/>
                    <div className='all-products'>
                        {
                            products.map((product) => (
                                    <ProductCard
                                        key={product._id}
                                        product={product}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
            </div> :
            <div className='apiLoading'>
                <img src={spinner} alt=""/>
                <p>Loading...</p>
            </div>
    )
}

