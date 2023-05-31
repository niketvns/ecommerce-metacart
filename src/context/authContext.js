import axios from 'axios';
import React, {createContext, useContext, useState, useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {useNotifyAlert} from "./notifyAlert";

const authContext = createContext();

const AuthProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(false);
    const [loginToken, setLoginToken] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const [signupInput, setSignupInput] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: ''
    });
    const [userAddresses, setUserAddresses] = useState([
        {
            fullName: 'Niket Mishra',
            street: '4109 Jerry Dove Drive',
            city: 'Florence',
            state: 'South Carolina',
            country: 'United States',
            pinCode: '29501',
            phone: '8434335952',
            isSelected: true
        }
    ])
    const [isEditingAddress, setIsEditingAddress] = useState(false)
    const [editableAddress, setEditableAddress] = useState({})

    const { notifyWarn, notifySuccess, notifyError} = useNotifyAlert()

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("encodedToken"));
        if (token) {
            setIsLogin(true);
            setLoginToken(token);
            setUserDetails(JSON.parse(localStorage.getItem('foundUser')))
        }
    }, [loginToken]);

    const selectDeliveryAddress = (index) =>{
        setUserAddresses(
            userAddresses.map((address, ind) => ind === index ? {...address, isSelected: true} : {...address, isSelected: false} )
        )
    }

    const deleteAddress = (index) => {
        setUserAddresses(
            userAddresses.filter((address, ind) => ind !== index && address )
        )
    }

    const editDeliveryAddress = (index) => {
        setIsEditingAddress(true)
        setEditableAddress(userAddresses.find((address, ind) => ind === index));
        deleteAddress(index)
    }

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
        setUserDetails(null);
    }

    const userSignUp = async () => {
        try {
            let {data, status} = await axios.post('/api/auth/signup', {
                "firstName": signupInput.firstName,
                "lastName": signupInput.lastName,
                "gender": signupInput.gender,
                "email": signupInput.email,
                "password": signupInput.password
            })
            if(status === 201){
                localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
                localStorage.setItem("foundUser", JSON.stringify(data.createdUser));
                setLoginToken(data.encodedToken);
                setUserDetails(data.createdUser);
                notifySuccess('Signup Successfully');
            }
        } catch (err) {
            notifyError('Signup Error:' + err.message);
        }
    };

    const signupHandler = (event) => {
        event.preventDefault();
        if (signupInput.email && signupInput.password && signupInput.firstName && signupInput.lastName && signupInput.gender) {
            userSignUp();
            setSignupInput(
                {
                    firstName: '',
                    lastName: '',
                    gender: '',
                    email: '',
                    password: ''
                }
            )
        } else {
            notifyWarn('Enter User Details');
        }
    };

    return (
        <authContext.Provider value={{
            isLogin,
            setIsLogin,
            loginToken,
            setLoginToken,
            loginAction,
            logoutAction,
            signupHandler,
            signupInput,
            setSignupInput,
            input,
            setInput,
            dummyUserData,
            userDetails,
            userAddresses,
            setUserAddresses,
            selectDeliveryAddress,
            deleteAddress,
            editDeliveryAddress,
            isEditingAddress,
            setIsEditingAddress,
            editableAddress
        }}>
            {children}
        </authContext.Provider>
    )
}

const useGlobalAuth = () => useContext(authContext);

export {AuthProvider, useGlobalAuth};