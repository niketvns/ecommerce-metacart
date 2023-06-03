import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import successImg from '../../images/success.png';
import './success.css'
import {useGlobalProduct} from "../../context/productsContext";

const Success = () => {
    const navigate = useNavigate()
    const {myOrders} = useGlobalProduct()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
        setTimeout(()=>{
            navigate('/account/orders');
        }, 6000)
    }, [navigate])

    return (
        <>
            <div className="log-reg-sec">
                <div className="succes-cont">
                    <span>Payment SuccessFull</span>
                    <img src={successImg} alt="success" />
                    <span><b>Name:</b> {myOrders[0].customerName}</span>
                    <span><b>Amount: &#8377;{myOrders[0].totalPurchase}</b>
                    </span>
                    <span><b>Transaction Id:</b> {myOrders[0].txnNo}</span>
                    <span><b>Date:</b> {myOrders[0].dataOfPurchase}</span>
                    <span><b>Shipping Address:</b> {myOrders[0].shippingAddress}</span>
                </div>
            </div>
        </>
    )
}

export default Success