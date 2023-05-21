import React, { useEffect } from 'react';
import './error.css';
import errorImg from '../../images/error404.svg'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

export default function Error() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <div className='error-page'>
            <img src={errorImg} alt="" />
            <p>Page Not Found</p>
            <NavLink className='home-icon' to='/'>
                <Button variant="contained"><HomeIcon />Home</Button >
            </NavLink>
        </div>
    )
}
