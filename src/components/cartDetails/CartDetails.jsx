import React from 'react';
import {useGlobalCart} from '../../context/cartContext';
import './cartDetails.css';
import CartItem from './CartItem';
import CartTotal from "../cartTotal/CartTotal";
import Button from "@mui/material/Button";
import {useGlobalAuth} from "../../context/authContext";
import {useNavigate} from "react-router-dom";

const CartDetails = () => {
    const {cartArray} = useGlobalCart();
    const {userAddresses} = useGlobalAuth()
    const navigate = useNavigate()

    const selectedAddress = userAddresses.find((address) => address.isSelected === true )

    return (
        <div className='cart-items-main'>
            <div className="heading">
                <h2>Shopping Cart</h2>
                <p>You Have {cartArray.length} Items in Shopping Cart</p>
            </div>
            <div className="delivery-location">
                <p>Delivery to: <b>{selectedAddress ? `${selectedAddress?.city} ${selectedAddress?.pinCode}` : 'Not selected'}</b></p>
                <Button variant="outlined" onClick={()=>navigate('/checkout')}>Change</Button>
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