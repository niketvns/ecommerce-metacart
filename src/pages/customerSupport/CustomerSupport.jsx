import React, {useEffect} from 'react';
import './customerSupport.css';
import {useGlobalAuth} from "../../context/authContext";
import contactUs from '../../images/contact-us.gif';
import location from '../../images/location-gif.gif';
import email from '../../images/email.gif';

const CustomerSupport = () => {
    const {userDetails} = useGlobalAuth()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        document.title = 'Customer Support | Metacart'
    }, [])

    return (
        <div className='main-customer-support'>
            <div className="heading">
                <h1>Hi {userDetails?.firstName.toUpperCase()}, What can we help you with?</h1>
                <hr/>
            </div>
            <div className="card-heading">
                <h2>Some things you can do here</h2>
            </div>
            <div className="service-cards">
                <div className="contact-number">
                    <img src={contactUs} alt="gif"/>
                    <p>+91 567-835-8754</p>
                </div>
                <div className="email">
                    <img src={email} alt="gif"/>
                    <p>support@metacart.com</p>
                </div>
                <div className="location">
                    <img src={location} alt="gif"/>
                    <p>161 Trumpeter Ave, Alaska 99669, USA</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerSupport;