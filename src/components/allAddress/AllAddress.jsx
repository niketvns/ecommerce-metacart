import React, {useState} from 'react';
import {AddressCard} from "../index";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {useGlobalAuth} from "../../context/authContext";

const AllAddress = () => {

    const [setIsAddressModel] = useState(false)
    const {userAddresses, selectDeliveryAddress} = useGlobalAuth()

    return (
        <div className='addresses'>
            {
                userAddresses.length !== 0 ?
                    userAddresses.map((address, index) => (
                        <AddressCard address={address} key={address} selectDeliveryAddress={selectDeliveryAddress} index={index} setIsAddressModel={setIsAddressModel}/>
                    )) :
                    null
            }
            <Button variant='contained' className="add-address"
                    onClick={() => setIsAddressModel(prev => !prev)}>
                <AddBoxIcon/> Add Delivery Address
            </Button>
        </div>
    );
};

export default AllAddress;