import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import successImg from '../../images/success.png';
import './success.css'

const Success = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate('/')
        }, 6000)
    }, [navigate])

    console.log(location);

    return (
        <>
            <div className="log-reg-sec">
                <div className="succes-cont">
                    <span>Payment SuccessFull</span>
                    <img src={successImg} alt="success" />
                    <span>Name: {location.state.purchase_units[0].shipping.name.full_name}</span>
                    <span>Amount: {location.state.purchase_units[0].amount.value}
                        {location.state.purchase_units[0].amount.currency_code}
                    </span>
                    <span>ID: {location.state.id}</span>
                    <span>Date: {location.state.create_time}</span>
                </div>
            </div>
        </>
    )
}

export default Success