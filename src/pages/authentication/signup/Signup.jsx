import React, { useEffect } from 'react';
import './signup.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {useGlobalAuth} from "../../../context/authContext";

export default function Signup() {
    const { loginToken, signupHandler, signupInput, setSignupInput } = useGlobalAuth();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0});
        document.title = 'Signup | Metacart'
        if (loginToken) {
            navigate(-1)
        }
    }, [loginToken]);

    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignupInput(prev => ({...prev, [name]: value}))
    }

    return (
        <>
            <div className="sign-up">
                <div className="signup-card">
                    <h2>SignUp</h2>
                    <form className='form-content' onSubmit={signupHandler}>
                        <div className="inputs">
                            <div className="input-item">
                                <label htmlFor="">
                                    First Name
                                </label>
                                <input required value={signupInput.firstName} onChange={inputHandler} type='text' name={'firstName'} placeholder='John'/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="">
                                    Last Name
                                </label>
                                <input required value={signupInput.lastName} onChange={inputHandler} type='text' name={'lastName'} placeholder='Doe'/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="">
                                    Gender
                                </label>
                                <div className="inputs-radio-gender">
                                    <label>
                                        <input required onChange={inputHandler} value={'Male'} type='radio' name='gender'/>
                                        Male
                                    </label>
                                    <label>
                                        <input required onChange={inputHandler} value={'Female'} type='radio' name='gender'/>
                                        Female
                                    </label>
                                    <label>
                                        <input required onChange={inputHandler} value={'Other'} type='radio' name='gender'/>
                                        Other
                                    </label>
                                </div>
                            </div>
                            <div className="input-item">
                                <label htmlFor="">
                                    Email Address
                                </label>
                                <input required value={signupInput.email} onChange={inputHandler} type='email' name={'email'} placeholder='johndoe@email.com'/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="">
                                    Password
                                </label>
                                <input required value={signupInput.password} onChange={inputHandler} type='password' name={'password'} placeholder='*********'/>
                            </div>
                        </div>
                        <label className="accept-terms">
                            <input required type='checkbox'/>
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
