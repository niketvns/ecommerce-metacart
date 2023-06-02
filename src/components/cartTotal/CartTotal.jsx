import React from 'react';
import './cartTotal.css'
import Button from "@mui/material/Button";
import {useGlobalCart} from "../../context/cartContext";
import {useNavigate} from "react-router-dom";

const CartTotal = () => {
    const {calculateTotalPrice} = useGlobalCart();
    const navigate = useNavigate();
    return (
        <>
            <div className="cart-total">
                <h2>Cart Total</h2>
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p>&#8377;{calculateTotalPrice()}</p>
                </div>
                <div className="shipping">
                    <p>Shipping</p>
                    <p>&#8377;40</p>
                </div>
                <div className="tax">
                    <p>Tax</p>
                    <p>&#8377;0</p>
                </div>
                <hr/>
                <div className="total">
                    <h3>Total</h3>
                    <p>&#8377;{calculateTotalPrice() + 40}</p>
                </div>
                <div className="proceed-to-payment">
                    <Button variant="contained" onClick={() => navigate('/checkout')}>Checkout</Button>
                </div>
            </div>
            <div className="place-order-cart">
                <h3>&#8377;{calculateTotalPrice() + 40}</h3>
                <Button variant='contained' onClick={() => navigate('/checkout')}>Checkout</Button>
            </div>
        </>
    );
};

export default CartTotal;