import React, {useState} from 'react';
import './userDetails.css';
import {useGlobalAuth} from "../../context/authContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import {AddressModel} from "../index";

const UserDetails = ({userDetails}) => {
    const [isAddressModel, setIsAddressModel] = useState(false);
    const {userAddresses, editDeliveryAddress, deleteAddress} = useGlobalAuth()

    const handleEditAddress = (index) =>{
        setIsAddressModel(prev => !prev)
        editDeliveryAddress(index)
    }

    return (
        <div className='my-account-main'>
            <div className="heading">
                <h2>My Profile</h2>
            </div>
            <div className="account-details">
                <div className="profile">
                    <div className="profile-pic">
                        <AccountCircleIcon/>
                    </div>
                    <p>Name: <b>{userDetails?.firstName} {userDetails?.lastName}</b></p>
                    <p>Gender: <b>{userDetails?.gender}</b></p>
                    <p>Email: <b>{userDetails?.email}</b></p>
                </div>
                <div className="address">
                    <div className="tabs">
                        Address
                    </div>
                    {
                        userAddresses.length ?
                            userAddresses.map((address, ind) => (
                                <div className={'ind-address-profile'} key={`${ind}${address.pinCode}`}>
                                    <div className={'edit-address-icon'} onClick={()=>handleEditAddress(ind)}>
                                        <EditIcon/>
                                    </div>
                                    <p>Full Name: <b>{address.fullName}</b></p>
                                    <p>Mobile: <b>{address.phone}</b></p>
                                    <p>House No: <b>{address.street}</b></p>
                                    <p>City: <b>{address.city}</b></p>
                                    <p>State: <b>{address.state}</b></p>
                                    <p>Country: <b>{address.country}</b></p>
                                    <p>Pin Code: <b>{address.pinCode}</b></p>
                                    <div className={'delete-address-icon'} onClick={()=>deleteAddress(ind)}>
                                        <DeleteIcon/>
                                    </div>
                                </div>
                            ) ) :
                            <p>Address not available</p>
                    }
                    <Button variant={'contained'} onClick={()=>setIsAddressModel(prevState => !prevState)}>Add Address</Button>
                </div>
            </div>
            { isAddressModel && <AddressModel setIsAddressModel={setIsAddressModel}/>}
        </div>
    )
}

export default UserDetails