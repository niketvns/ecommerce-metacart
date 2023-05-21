import React, {createContext, useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {useGlobalAuth} from "./authContext";
import {useNotifyAlert} from "./notifyAlert";
import axios from "axios";

const cartContext = createContext();

const CartProvider = ({children}) => {

    const [cartArray, setCartArray] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const {notifyWarn, notifySuccess, notifyError} = useNotifyAlert()
    const navigate = useNavigate();

    const calculateTotalPrice = (price) => {
        setTotalPrice(totalPrice + price);
    }

    const checkObjInArray = (id) => {
        if (cartArray.find((product) => product._id === id)) {
            return true
        }
        return false;
    }

    const deleteFromCart = async (id) => {
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.delete(`/api/user/cart/${id}`, {
                headers: {authorization: encodedToken}
            })
            notifySuccess('Removed From Cart');
            setCartArray(data.cart)
        } catch (err) {
            notifyError(err.message)
        }
    }

    const addToCart = async (product) => {
        const encodedToken = localStorage.getItem('encodedToken')
        if (encodedToken) {
            try {
                const {data} = await axios.post('/api/user/cart',
                    {product}, {headers: {authorization: encodedToken}}
                )
                setCartArray(data.cart);
                notifySuccess('Item Added to Cart');
            } catch (err) {
                notifyError(err)
            }
        } else {
            navigate('/login')
            notifyWarn('Login to Add Item')
        }
    }

    return (
        <cartContext.Provider value={{
            cartArray,
            deleteFromCart,
            checkObjInArray,
            addToCart,
            totalPrice,
            calculateTotalPrice
        }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export {CartProvider, useGlobalCart};