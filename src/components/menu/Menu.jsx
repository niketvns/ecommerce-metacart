import React, { useState } from 'react';
import './Menu.css';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import PaymentIcon from '@mui/icons-material/Payment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { NavLink } from 'react-router-dom';
import {useGlobalAuth} from "../../context/authContext";


export default function Menu({ menuFunction }) {

    const { loginToken, logoutAction, userDetails } = useGlobalAuth();

    return (
        <>
            <div className="main-menu">
                <div className="left-menu">
                    <span className="close-menu" onClick={menuFunction}>
                        <HighlightOffIcon />
                    </span>
                    <div className="user-welcome">
                        <AccountCircleIcon /> Welcome, {loginToken ? userDetails.firstName : "user"}
                    </div>

                    <div className="menu-items">
                        <div className="order-details">
                            <h2>Order</h2>
                            <ul>
                                <NavLink to='order-summary' onClick={menuFunction}>
                                    <li><ViewModuleIcon />Order Summary</li>
                                </NavLink>
                                <NavLink to='order-return' onClick={menuFunction}>
                                    <li><AssignmentReturnIcon />Return</li>
                                </NavLink>
                                <NavLink to='my-order' onClick={menuFunction} >
                                    <li> <LocalMallIcon /> My Orders</li>
                                </NavLink>

                                <NavLink to='wishlist' onClick={menuFunction} >
                                    <li>
                                        <FavoriteBorderIcon /> My Wishlist
                                    </li>
                                </NavLink>

                            </ul>
                        </div>
                        <div className="payments">
                            <h2>Payments</h2>
                            <ul>
                                <NavLink to='payment-history' onClick={menuFunction} >
                                    <li> <PaymentIcon /> Payment History</li>
                                </NavLink>
                                <NavLink to='payment-refund' onClick={menuFunction} >
                                    <li> <PaidIcon /> Payment Refund</li>
                                </NavLink>
                            </ul>
                        </div>
                        <div className="my-account">
                            <h2>Help & Setting</h2>
                            <ul>
                                <NavLink to='/user/profile' onClick={menuFunction}>
                                    <li><PersonIcon /> My Account</li>
                                </NavLink>
                                <NavLink to='customer-support' onClick={menuFunction} >
                                    <li><SupportAgentIcon /> Customer Suport</li>
                                </NavLink>
                                {
                                    loginToken ?
                                        <li onClick={() => {
                                            menuFunction();
                                            logoutAction();
                                        }}>
                                            <LogoutIcon /> Sign Out
                                        </li> :
                                        <NavLink to='login' onClick={menuFunction}>
                                            <li>
                                                <LoginIcon /> Sign In
                                            </li>
                                        </NavLink>
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="right-menu" onClick={menuFunction}>
                </div>
            </div>
        </>
    )
}