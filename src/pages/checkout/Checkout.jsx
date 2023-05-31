import React, {useEffect, useState} from 'react';
import './checkout.css'
import {useGlobalAuth} from "../../context/authContext";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from "@mui/material/Button";
import {AddressCard, AddressModel, PlaceOrder} from "../../components";
import {useGlobalCart} from "../../context/cartContext";
import {useNavigate} from "react-router-dom";

const Checkout = () => {
    const [isAddressModel, setIsAddressModel] = useState(false)
    const {userAddresses, selectDeliveryAddress} = useGlobalAuth()
    const {cartArray} = useGlobalCart()

    const navigate = useNavigate()

    useEffect(() => {
        if (cartArray.length <= 0) {
            navigate('/shop')
        }
        window.scrollTo({top: 0, left: 0});
        document.title = 'Checkout | Shopping with Metacart'
    }, [cartArray])

    return (
        <div className='checkout-main'>
            <div className="left">
                <h2>Choose Delivery Address</h2>
                <div className='addresses'>
                    {
                        userAddresses.length !== 0 ?
                            userAddresses.map((address, index) => (
                                <AddressCard address={address} key={address} selectDeliveryAddress={selectDeliveryAddress} index={index} setIsAddressModel={setIsAddressModel}/>
                            )) :
                            null
                    }
                    <Button variant='contained' className="add-address"
                            onClick={() => setIsAddressModel(prev => !prev)}>
                        <AddBoxIcon/> Add Delivery Address
                    </Button>
                </div>
            </div>
            <div className="right">
                <div className="total-amount">
                    <PlaceOrder/>
                </div>
            </div>
            {isAddressModel && <AddressModel setIsAddressModel={setIsAddressModel}/>}
        </div>
    );
};

export default Checkout;