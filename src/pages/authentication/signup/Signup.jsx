import React, { useEffect } from 'react';
import './signup.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {useGlobalAuth} from "../../../context/authContext";

export default function Signup() {

    const { loginToken } = useGlobalAuth();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0});
        document.title = 'Signup | Metacart'
        if (loginToken) {
            navigate(-1)
        }
    }, [loginToken]);

    return (
        <>
            <div className="sign-up">
                <div className="signup-card">
                    <h2>SignUp</h2>
                    <form className='form-content'>
                        <div className="inputs">
                            <div className="input-item">
                                <label htmlFor="">
                                    First Name
                                </label>
                                <input required type='email' placeholder='John'/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="">
                                    Last Name
                                </label>
                                <input required type='email' placeholder='Doe'/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="">
                                    Gender
                                </label>
                                <div className="inputs-radio-gender">
                                    <label>
                                        <input required type='radio' name='gender'/>
                                        Male
                                    </label>
                                    <label>
                                        <input required type='radio' name='gender'/>
                                        Female
                                    </label>
                                    <label>
                                        <input required type='radio' name='gender'/>
                                        Other
                                    </label>
                                </div>
                            </div>
                            <div className="input-item">
                                <label htmlFor="">
                                    Email Address
                                </label>
                                <input required type='email' placeholder='johndoe@email.com'/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="">
                                    Password
                                </label>
                                <input required type='password' placeholder='*********'/>
                            </div>
                        </div>
                        <label className="accept-terms">
                            <input type='checkbox'/>
                            I Accept all Terms & Condition
                        </label>
                        <button type="submit">
                            Create New Account
                        </button>
                    </form>
                    <p className='already-account'>
                        <NavLink to="/login">Already have an account ></NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}
