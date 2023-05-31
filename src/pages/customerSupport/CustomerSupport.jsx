import React, {useEffect} from 'react';
import './customerSupport.css';

const CustomerSupport = () => {

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0});
        document.title = 'Customer Support | Metacart'
    },[])

    return (
        <div className='main-customer-support'>
            <div className="heading">
                <h1>Hello, What can we help you with?</h1>
            </div>
            <hr />
            <div className="card-heading">
                <h2>Some things you can do here</h2>
            </div>
            <div className="service-card">
                <div className="your-orders">

                </div>
                <div className="return-refund">

                </div>
                <div className="manage-address">

                </div>
                <div className="payment">

                </div>
                <div className="account-setting">

                </div>
                <div className="contact-number">

                </div>
            </div>
        </div>
    )
}

export default CustomerSupport;