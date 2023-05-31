import React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useGlobalAuth} from "../../context/authContext";

const AddressCard = ({address, selectDeliveryAddress, index, setIsAddressModel}) => {

    const {editDeliveryAddress, deleteAddress} = useGlobalAuth()

    return (
        <div className={'address-card-main'}>
            <div className={`address ${ address.isSelected ? 'selected' : null}`} onClick={()=>selectDeliveryAddress(index)}>
                {
                    address.isSelected ?
                        <div className="selected-icon">
                            <RadioButtonCheckedIcon/>
                        </div> : null
                }

                <h3>{address?.fullName}</h3>
                <p>{address?.street}, {address?.city}, {address?.state}, {address?.country}, {address?.pinCode}</p>
                <p><b>Contact: </b> {address?.phone} </p>
            </div>
            <div className="edit-address-icon" onClick={() => {
                setIsAddressModel(prev => !prev)
                editDeliveryAddress(index)
            }}>
                <EditIcon/>
            </div>
            <div className="delete-address-icon" onClick={() => {
                deleteAddress(index)
            }}>
                <DeleteIcon/>
            </div>
        </div>

    );
};

export default AddressCard;