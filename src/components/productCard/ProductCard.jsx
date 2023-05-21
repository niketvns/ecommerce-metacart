import React, { useState } from 'react';
import './productCard.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGlobalCart } from '../../context/cartContext';
import { useGlobalWishlist } from '../../context/wishlistContext';

export default function ProductCard({product}) {
    const { addToCart, checkObjInArray } = useGlobalCart();
    const { wishlistArray, addToWishlist, deleteFromWishlist } = useGlobalWishlist();

    const navigate = useNavigate();

    return (
        <>
            <div className='ind-product'>
                <NavLink to={`/product/${product._id}`}>
                    <div className="img">
                        <img src={product.thumbnail} alt="image" />
                    </div>
                </NavLink>
                <h3>{product.title}</h3>
                <div className="price-wishlist">
                    <p className='price'>${Math.floor(product.price)}/-</p>
                    <span onClick={() => wishlistArray.find(({id}) => id === product.id ) ? deleteFromWishlist(product._id) : addToWishlist(product)}>
                        <IconButton
                            aria-label="delete" id='wishlist-icon'
                        >
                            <FavoriteIcon
                                style={{ color: wishlistArray.find(({id}) => id === product.id ) ? "red" : "#b6bfb8" }}
                            />
                        </IconButton>
                    </span>
                </div>
                <div>
                    <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                </div>
                <p className='desc'>{product.description}</p>

                <div className='btn'>
                    {
                        checkObjInArray(product.id) ?
                            <Button onClick={() => navigate('/cart')} variant="contained">
                                <ShoppingCartIcon /> Go To Cart
                            </Button> :
                            <Button onClick={() => addToCart(product)} variant="contained">
                                <ShoppingCartIcon /> Add To Cart
                            </Button>

                    }
                </div>
            </div>
        </>
    )
}
