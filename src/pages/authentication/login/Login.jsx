import React, { useEffect, useState } from 'react';
import './login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useGlobalAuth} from "../../../context/authContext";

export default function Login() {

    const { loginToken, logoutAction, input, setInput, dummyUserData, loginAction } = useGlobalAuth();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0});
        if (loginToken) {
            navigate(-1)
        }
    }, [loginToken]);

    const setUserId = (event) => {
        setInput(prev => ({...prev, email: event.target.value }))
    }

    const setPassword = (event) => {
        setInput(prev => ({...prev, password: event.target.value }))
    }

    return (
        <>
            <div className="sign-in">
                {
                    !loginToken ?
                        <div className="signin-card" onSubmit={loginAction}>
                            <h2>Login</h2>
                            <form className='form-content'>
                                <div className="inputs">
                                    <div className="input-item">
                                        <label htmlFor="">
                                            Email Address
                                        </label>
                                        <input required type='email' placeholder='johndoe@email.com' value={input.email} onChange={setUserId}/>
                                    </div>
                                    <div className="input-item">
                                        <label htmlFor="">
                                            Password
                                        </label>
                                        <input required type='password' placeholder='*********' value={input.password} onChange={setPassword}/>
                                    </div>
                                </div>
                                <div className="remember-forget-password">
                                    <label className="remember-me">
                                        <input type='checkbox'/>
                                        Remember me
                                    </label>
                                    <div className="forget-password-link">
                                        <NavLink to="/recover-password">Forget Your Password?</NavLink>
                                    </div>
                                </div>
                                <button type='submit'>
                                    Submit
                                </button>
                            </form>
                            <button onClick={dummyUserData}>
                                Apply Dummy Data
                            </button>
                            <p className='create-new-account'>
                                <NavLink to="/signup">Create New Account  ></NavLink>
                            </p>
                        </div> :
                        <div className="loggedin-card">
                            <h2>Logged In</h2>
                            <button onClick={logoutAction}>
                                Log Out
                            </button>
                        </div>
                }
            </div>
            <ToastContainer />
        </>
    )
}



{/* <form action="" onSubmit={formSubmit}>
                        <div className="username">
                            <Person2Icon className='user-icon' />
                            <input type="text" name="username" id="" placeholder='UserID' required value={input.userId} />
                        </div>
                        <div className="password">
                            <LockOpenIcon className='lock-icon' />
                            <input type="password" name="password" id="" placeholder='Password' required value={input.password} />
                        </div>
                        <button type="submit">
                            <Button variant="contained" style={{ backgroundColor: '#232f3e' }}>Continue</Button>
                        </button>
                    </form> */}

{/* <div className="other-accounts">
                        <div className="google">
                            <Button variant="contained" style={{ backgroundColor: '#232f3e' }}>
                                <GoogleIcon /> Login With Google
                            </Button>
                        </div>
                        <div className="facebook">
                            <Button variant="contained" style={{ backgroundColor: '#232f3e' }}>
                                <FacebookIcon /> Login With Facebook
                            </Button>
                        </div>
                    </div> */}