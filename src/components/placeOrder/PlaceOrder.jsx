import React from 'react';
import './placeOrder.css'
import Button from "@mui/material/Button";
import {useGlobalCart} from "../../context/cartContext";

const PlaceOrder = () => {
    const {calculateTotalPrice, cartArray} = useGlobalCart();
    return (
        <>
            <div className="place-order-main">
                <h2>Price Details</h2>
                <div className="product-details-shipping">
                    {
                        cartArray.map(({_id, title, price, qty})=>(
                            <div key={_id}>
                                <p>{title}</p>
                                <p>${Math.floor(price)} x {qty}</p>
                            </div>
                        ))
                    }
                </div>
                <hr/>
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p>${calculateTotalPrice()}</p>
                </div>
                <div className="shipping">
                    <p>Shipping</p>
                    <p>$40</p>
                </div>
                <div className="tax">
                    <p>Tax</p>
                    <p>$0</p>
                </div>
                <hr/>
                <div className="total">
                    <h3>Total</h3>
                    <p>${calculateTotalPrice() + 40}</p>
                </div>
                <div className="offer-coupen">

                </div>
                <div className="proceed-to-payment">
                    <Button variant="contained">Place Order</Button>
                </div>
            </div>
            <div className="place-order-btn">
                <h3>${calculateTotalPrice() + 40}</h3>
                <Button variant='contained'>Place Order</Button>
            </div>
        </>
    );
};

export default PlaceOrder;