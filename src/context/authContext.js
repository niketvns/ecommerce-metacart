import axios from 'axios';
import React, {createContext, useContext, useState, useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {useNotifyAlert} from "./notifyAlert";

const authContext = createContext();

const AuthProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(false);
    const [loginToken, setLoginToken] = useState('');
    const [userDetails, setUserDetails] = useState([]);
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const [deliveryAddress, setDeliveryAddress] = useState({
        street: 'N 23/432 Sigra',
        city: 'Varanasi',
        state: 'Uttar Pradesh',
        country: 'India',
        pinCode: '224019'
    })
    const {notifyInfo, notifyWarn, notifySuccess, notifyError} = useNotifyAlert()

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("encodedToken"));
        if (token) {
            setIsLogin(true);
            setLoginToken(token);
            setUserDetails(JSON.parse(localStorage.getItem('foundUser')))
        }
    }, [loginToken]);

    const userLogin = async () => {
        try {
            let {data, status} = await axios.post('/api/auth/login', {
                "email": input.email,
                "password": input.password
            })
            if(status === 200){
                localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
                localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
                setLoginToken(data.encodedToken);
                setUserDetails(data.foundUser)
                notifySuccess('Login Successfully');
            }
        } catch (err) {
            if(err.response.status === 404){
                notifyError('User not found')
            }else if(err.response.status === 401){
                notifyError('Invalid Credential')
            }
        }
    };

    const loginAction = (event) => {
        event.preventDefault();
        if (input.email && input.password) {
            userLogin();
            setInput(
                {
                    email: '',
                    password: ''
                })
        } else {
            notifyWarn('Enter Login Details');
        }
    };

    const dummyUserData = () => {
        setInput(
            {
                email: 'niketmishra@gmail.com',
                password: 'niketmishra'
            })
    }

    const logoutAction = () => {
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("foundUser");
        setLoginToken('');
        notifySuccess('Logout Successfully');
    }

    return (
        <authContext.Provider value={{
            isLogin,
            setIsLogin,
            loginToken,
            setLoginToken,
            loginAction,
            logoutAction,
            input,
            setInput,
            dummyUserData,
            userDetails,
            deliveryAddress
        }}>
            {children}
        </authContext.Provider>
    )
}

const useGlobalAuth = () => useContext(authContext);

export {AuthProvider, useGlobalAuth};