import React, { useEffect } from 'react';
import './ForgetPassword.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {useGlobalAuth} from "../../../context/authContext";

export default function ForgetPassword() {

    const { loginToken } = useGlobalAuth();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0});
        document.title = 'Recover Password | Metacart'
        if (loginToken) {
            navigate(-1)
        }
    }, [loginToken]);

    return (
        <>
            <div className="forget-password">
                <div className="forgetPassword-card">
                    <h2>Recover Password</h2>
                    <form className='form-content'>
                        <div className="inputs">
                            <div className="input-item">
                                <label htmlFor="">
                                    Email Address
                                </label>
                                <input required type='email' placeholder='johndoe@email.com'/>
                            </div>
                        </div>
                        <button type="submit">
                            Send Password Reset Link
                        </button>
                    </form>
                    <p className='already-account'>
                        <NavLink to="/login">Already have an account ></NavLink>
                    </p>
                    <p className='create-new-account'>
                        <NavLink to="/signup">Create New Account  ></NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}
