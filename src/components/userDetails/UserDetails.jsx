import React, {useState} from 'react';
import './userDetails.css';
import {NavLink} from "react-router-dom";
import {useGlobalAuth} from "../../context/authContext";

const UserDetails = ({userDetails}) => {

    const [activeTab, setActiveTab] = useState('profile');
    const {deliveryAddress} = useGlobalAuth()

    return (
        <div className='my-account-main'>
            <div className='account'>
                <div className="tabs">
                    <div onClick={() => setActiveTab('profile')}>Profile</div>
                    <div onClick={() => setActiveTab('address')}>Address</div>
                </div>
                <div className="my-account-details">
                    {
                        activeTab === 'profile' ?
                            <div className="profile">
                                <p>Name: <b>{userDetails?.firstName} {userDetails?.lastName}</b></p>
                                <p>Gender: <b>{userDetails?.gender}</b></p>
                                <p>Email: <b>{userDetails?.email}</b></p>
                            </div> :
                            <div className="address">
                                <p>House No: <b>{deliveryAddress.street}</b></p>
                                <p>City: <b>{deliveryAddress.city}</b></p>
                                <p>State: <b>{deliveryAddress.state}</b></p>
                                <p>Country: <b>{deliveryAddress.country}</b></p>
                                <p>Pin Code: <b>{deliveryAddress.pinCode}</b></p>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserDetails