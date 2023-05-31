import React, { useEffect } from 'react';
import './Cart.css';
import emptyCart from '../../images/empty_cart.svg';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGlobalCart } from '../../context/cartContext';
import CartDetails from '../../components/cartDetails/CartDetails';
import {useGlobalAuth} from "../../context/authContext";

export default function Cart() {

    const { loginToken } = useGlobalAuth();
    const { cartArray } = useGlobalCart();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
        document.title = 'Cart | Shopping with Metacart'
    }, [])

    return (
        loginToken ?
            <>
                {
                    cartArray.length !== 0 ?
                        <CartDetails /> :
                        <div className='cart-main'>
                            <div className="empty-cart">
                                <img src={emptyCart} alt="empty-cart" />
                                <p>Cart is Empty</p>
                                <Button type='submit' variant="contained" onClick={() => navigate('/shop')}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                }
            </> :
            <div className='cart-login-main'>
                <div className='login-btn'>
                    <NavLink to='/login'>
                        <Button type='submit' variant="contained">
                            Login to View Cart
                        </Button>
                    </NavLink>
                </div>
            </div>
    )
}
