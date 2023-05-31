import React, {createContext, useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {useGlobalAuth} from "./authContext";
import {useNotifyAlert} from "./notifyAlert";
import axios from "axios";

const cartContext = createContext();

const CartProvider = ({children}) => {
    const [cartArray, setCartArray] = useState([]);
    const {notifyWarn, notifySuccess, notifyError} = useNotifyAlert()
    const navigate = useNavigate();
    const {loginToken} = useGlobalAuth()

    useEffect(()=>{
        if(!loginToken) {
            setCartArray([])
        }else {
            fetchCartData()
        }

    },[loginToken])

    const calculateTotalPrice = () => {
        return cartArray.reduce((acc, cur) => (Math.floor(cur.price) * cur.qty) + acc, 0)
    }

    const fetchCartData = async () =>{
        const encodedToken = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.get(`/api/user/cart`, {
                headers: {authorization: encodedToken}
            })
            setCartArray(data.cart)
        } catch (err) {
            notifyError(err.message)
        }
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

    const updateCart = async (id, cartAction) =>{
        const encodedToken = localStorage.getItem('encodedToken')
        try{
            const { data } = await axios.post(`/api/user/cart/${id}`, { action: { type: cartAction }}, {headers: {authorization: encodedToken}})
            setCartArray(data.cart)
        }catch (err) {
            notifyError(err.message)
        }
    }

    return (
        <cartContext.Provider value={{
            cartArray,
            deleteFromCart,
            addToCart,
            calculateTotalPrice,
            updateCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export {CartProvider, useGlobalCart};