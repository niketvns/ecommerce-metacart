import React from 'react';
import './profile.css';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import {UserDetails} from "../../components";
import {useGlobalAuth} from "../../context/authContext";

const Profile = () => {

    const { userDetails, loginToken } = useGlobalAuth();

    return (
        <>
            {
                loginToken ?
                    <UserDetails
                        userDetails={userDetails}
                    /> :
                    <div className="my-account-login">
                        <NavLink to='/login'>
                            <Button type='submit' variant="contained">
                                Login to View
                            </Button>
                        </NavLink>
                    </div>
            }
        </>
    )
}

export default Profile;