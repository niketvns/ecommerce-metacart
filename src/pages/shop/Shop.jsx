import React, { useEffect } from 'react';
import { useState } from 'react';
import './shop.css';
import spinner from '../../images/Spinner.svg';
import axios from 'axios';
import { useGlobalProduct } from '../../context/productsContext';
import { NavLink } from 'react-router-dom';
import {ProductCard} from "../../components";

export default function Shop() {

    const { products, isLoading } = useGlobalProduct();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        !isLoading ?
            <>
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
            </> :
            <div className='apiLoading'>
                <img src={spinner} alt="" />
                <p>Loading...</p>
            </div>
    )
}

