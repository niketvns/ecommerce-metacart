import React, {useState} from 'react';
import './productCard.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {NavLink, useNavigate} from 'react-router-dom';
import {useGlobalCart} from '../../context/cartContext';
import {useGlobalWishlist} from '../../context/wishlistContext';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductCard({product}) {
    const {addToCart, cartArray} = useGlobalCart();
    const {wishlistArray, addToWishlist, deleteFromWishlist} = useGlobalWishlist();
    const [isCartBtnDisable, setIsCartBtnDisable] = useState(false)
    const [isWishlistBtnDisable, setIsWishlistBtnDisable] = useState(false)

    const navigate = useNavigate();

    return (
        <>
            <div className='ind-product'>
                <NavLink to={`/product/${product._id}`}>
                    <div className="img">
                        <img src={product.thumbnail} alt="image"/>
                    </div>
                </NavLink>
                <h3>{product.title}</h3>
                <div className="price-wishlist">
                    <p className='price'>&#8377;{Math.floor(product.price)}/-</p>
                    <span>
                        {
                            wishlistArray.find(({id}) => id === product.id) ?
                                <IconButton
                                    aria-label="delete" id='wishlist-icon'
                                    onClick={()=> {
                                        deleteFromWishlist(product._id)
                                        setIsWishlistBtnDisable(false)
                                    }}
                                >
                                    <FavoriteIcon style={{color: "red"}}/>
                                </IconButton> :
                                <IconButton
                                    aria-label="delete" id='wishlist-icon' disabled={isWishlistBtnDisable}
                                    onClick={()=> {
                                        setIsWishlistBtnDisable(true)
                                        addToWishlist(product)
                                    }}
                                >
                                    <FavoriteIcon style={{color: "#b6bfb8"}}/>
                                </IconButton>
                        }
                    </span>
                </div>
                <div>
                    <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly/>
                </div>
                <p className='desc'>{product.description}</p>

                <div className='btn'>
                    {
                        cartArray.find(({_id}) => _id === product._id) ?
                            <Button onClick={() => navigate('/cart')} variant="contained">
                                <ShoppingCartCheckoutIcon/> Go To Cart
                            </Button> :
                            <Button onClick={() => {
                                addToCart(product)
                                setIsCartBtnDisable(true)
                            }} variant="contained" disabled={isCartBtnDisable}>
                                <AddShoppingCartIcon/> Add To Cart
                            </Button>
                    }
                </div>
            </div>
        </>
    )
}
