import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './cartItem.css';
import {useGlobalCart} from '../../context/cartContext';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useGlobalWishlist} from "../../context/wishlistContext";

const CartItem = ({product}) => {
    const {deleteFromCart, updateCart} = useGlobalCart()
    const navigate = useNavigate()
    const {wishlistArray, addToWishlist} = useGlobalWishlist();
    const [isRemoveCartBtnDisable, setIsRemoveCartBtnDisable] = useState(false)
    const [isWishlistBtnDisable, setIsWishlistBtnDisable] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsWishlistBtnDisable(false)
            setIsRemoveCartBtnDisable(false)
        }, 2000)
    }, [isWishlistBtnDisable, isRemoveCartBtnDisable])

    return (
        product
        &&
        <div className='cart-item'>
            <div className="left" onClick={() => navigate(`/product/${product._id}`)}>
                <img src={product.thumbnail} alt="image"/>
            </div>
            <div className="right">
                <h3>{product.title}</h3>
                <div className="qnt-btn">
                    Quantity:
                    <IconButton aria-label="delete" size="small" disabled={product.qty <= 1}
                                onClick={() => product.qty <= 1 ? null : updateCart(product._id, "decrement")}>
                        <RemoveIcon/>
                    </IconButton>
                    <input type="text" value={product.qty} disabled/>
                    <IconButton aria-label="delete" size="small" disabled={product.qty >= product.stock}
                                onClick={() => updateCart(product._id, "increment")}>
                        <AddIcon/>
                    </IconButton>
                </div>
                <p>Price: &#8377;{Math.floor(product.price * product.qty)}</p>
                <div className="buttons">
                    <Button variant="contained" disabled={isRemoveCartBtnDisable} onClick={() => {
                        deleteFromCart(product._id)
                        setIsRemoveCartBtnDisable(true)
                    }}>
                        Remove From Cart
                    </Button>
                    {
                        wishlistArray.find(({id}) => id === product.id) ?
                            <Button variant="outlined" onClick={() => navigate('/wishlist')}>
                                Go To Wishlist
                            </Button>
                            : <Button variant="outlined" disabled={isWishlistBtnDisable} onClick={() => {
                                addToWishlist(product)
                                setIsWishlistBtnDisable(true)
                            }}>
                                Add To Wishlist
                            </Button>
                    }
                </div>

            </div>
        </div>

    )
}

export default CartItem;