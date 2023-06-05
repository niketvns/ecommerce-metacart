import React, {useEffect} from 'react';
import './profile.css';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import {UserDetails} from "../../components";
import {useGlobalAuth} from "../../context/authContext";

const Profile = () => {
    const { userDetails, loginToken } = useGlobalAuth();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        document.title = `Profile | ${userDetails ? userDetails.firstName : 'User'}`
    }, [userDetails])

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
                                Login to View Details
                            </Button>
                        </NavLink>
                    </div>
            }
        </>
    )
}

export default Profile;