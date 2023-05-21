import React, {createContext, useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {useGlobalAuth} from "./authContext";
import {useNotifyAlert} from "./notifyAlert";
import axios from "axios";

const wishlistContext = createContext();

const WishlistProvider = ({children}) => {

    const [wishlistArray, setWishlistaArray] = useState([]);

    const {notifyWarn, notifySuccess, notifyError} = useNotifyAlert()

    const navigate = useNavigate();

    const deleteFromWishlist = async (id) => {
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.delete(`/api/user/wishlist/${id}`, {
                headers: {authorization: encodedToken}
            })
            notifySuccess('Removed From Wishlist');
            setWishlistaArray(data.wishlist)
        } catch (err) {
            notifyError(err.message)
        }
    }

    const addToWishlist = async (product) => {
        const encodedToken = localStorage.getItem('encodedToken')
        if (encodedToken) {
            try {
                const {data} = await axios.post('/api/user/wishlist',
                    {product}, {headers: {authorization: encodedToken}}
                )
                setWishlistaArray(data.wishlist);
                notifySuccess('Item Added to Wishlist');
            } catch (err) {
                notifyError(err)
            }
        } else {
            navigate('/login')
            notifyWarn('Login to Add Item')
        }
    }

    return (
        <wishlistContext.Provider value={{wishlistArray, setWishlistaArray, deleteFromWishlist, addToWishlist}}>
            {children}
        </wishlistContext.Provider>
    )
}

const useGlobalWishlist = () => useContext(wishlistContext);

export {WishlistProvider, useGlobalWishlist};