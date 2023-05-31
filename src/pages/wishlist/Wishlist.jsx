import React, { useEffect } from 'react';
import './wishlist.css';
import wishlist from '../../images/wishlist.svg';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import WishlistDetails from './WishlistDetails';
import { useGlobalWishlist } from '../../context/wishlistContext';
import {useGlobalAuth} from "../../context/authContext";

export default function Wishlist() {

    const { loginToken } = useGlobalAuth();

    const { wishlistArray } = useGlobalWishlist();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.title = 'Wishlist | Shopping with Metacart'
    }, [])

    return (
        loginToken ?
            <>
                {
                    wishlistArray.length !== 0 ?
                        <WishlistDetails /> :
                        <div className='wishlist-main'>
                            <div className="empty-wishlist">
                                <img src={wishlist} alt="empty-wishlist" />
                                <p>Nothing in the Wishlist</p>
                                <Button type='submit' variant="contained" onClick={() => navigate('/shop')}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                }
            </> :
            <div className='wishlist-login-main'>
                <div className='login-btn'>
                    <NavLink to='/login'>
                        <Button type='submit' variant="contained">
                            Login to View Wishlist
                        </Button>
                    </NavLink>
                </div>
            </div>
    )
}
