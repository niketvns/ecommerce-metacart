import React, {useEffect, useState} from 'react';
import {useGlobalCart} from '../../context/cartContext';
import './cartDetails.css';
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {PayPal} from "../index";
import {useGlobalAuth} from "../../context/authContext";


const CartDetails = () => {

    const [checkout, setCheckout] = useState(false)
    const {cartArray, totalPrice} = useGlobalCart();
    const {loginToken, notifyWarn} = useGlobalAuth();
    const navigate = useNavigate();

    const proceedToPaymeny = () => {
        if (loginToken) {
            setCheckout(true);
        } else {
            notifyWarn('Login To Buy')
            navigate('/login')
        }
    }

    return (
        <div className='cart-items-main'>
            <div className="heading">
                <h2>Shopping Cart</h2>
                <p>You Have {cartArray.length} Items in Shopping Cart</p>
            </div>
            <div className="items">
                <div className="item-table">
                    {
                        cartArray.map((product) => {
                            return <CartItem
                                key={product.id}
                                product={product}
                            />
                        })
                    }
                </div>
            </div>
            <div className="cart-total">
                <h2>Cart Total</h2>
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p>&#8377;{totalPrice}/-</p>
                </div>
                <div className="shipping">
                    <p>Shipping</p>
                    <p>&#8377;40/-</p>
                </div>
                <div className="tax">
                    <p>Tax</p>
                    <p>&#8377;0/-</p>
                </div>
                <hr/>
                <div className="total">
                    <h3>Total</h3>
                    <p>&#8377;{3389 + 40}/-</p>
                </div>
                <div className="proceed-to-payment">
                    {
                        checkout ?
                            <PayPal payingAmount={1}/> :
                            <Button variant="contained" onClick={proceedToPaymeny}>Proceed To Payment</Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default CartDetails;