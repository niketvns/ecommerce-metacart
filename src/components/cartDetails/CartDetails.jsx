import React from 'react';
import {useGlobalCart} from '../../context/cartContext';
import './cartDetails.css';
import CartItem from './CartItem';
import CartTotal from "../cartTotal/CartTotal";
import Button from "@mui/material/Button";
import {useGlobalAuth} from "../../context/authContext";

const CartDetails = () => {
    const {cartArray} = useGlobalCart();
    const {deliveryAddress} = useGlobalAuth()

    return (
        <div className='cart-items-main'>
            <div className="heading">
                <h2>Shopping Cart</h2>
                <p>You Have {cartArray.length} Items in Shopping Cart</p>
            </div>
            <div className="delivery-location">
                <p>Delivery to: <b>{`${deliveryAddress?.city} ${deliveryAddress?.pinCode}`}</b></p>
                <Button variant="outlined">Change</Button>
            </div>
            <div className="cart-items-total">
                <div className="items">
                    {
                        cartArray.map((product) => {
                            return <CartItem
                                key={product.id}
                                product={product}
                            />
                        })
                    }
                </div>
                <CartTotal/>
            </div>
        </div>
    )
}

export default CartDetails;