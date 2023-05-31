import React, {useEffect, useState} from 'react';
import './addressModel.css'
import Button from "@mui/material/Button";
import {useGlobalAuth} from "../../context/authContext";

const AddressModel = ({setIsAddressModel}) => {
    const [addressInput, setAddressInput] = useState({
        street: '',
        city: '',
        state: '',
        country: '',
        pinCode: '',
        phone: '',
        fullName: ''
    })

    const {userAddresses, setUserAddresses, isEditingAddress, setIsEditingAddress, editableAddress} = useGlobalAuth()

    useEffect(() => {
        if(isEditingAddress){
            setAddressInput(editableAddress)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserAddresses(prev => [...prev, {...addressInput, isSelected: false}])
        setIsAddressModel(prev => !prev)
        setIsEditingAddress(false)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddressInput(prev => ({...prev, [name]: value}))
    }

    const resetForm = () =>{
        setAddressInput({
            street: '',
            city: '',
            state: '',
            country: '',
            pinCode: '',
            phone: '',
            fullName: ''
        })
    }

    return (
        <div className={'address-model-main'}>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'fullName'} required placeholder={'Name'} onChange={handleChange} value={addressInput.fullName}/>
                <input type="number" name={'phone'} required placeholder={'Mobile No.'} onChange={handleChange} value={addressInput.phone}/>
                <input type="text" name={'street'} required placeholder={'Street No'} onChange={handleChange} value={addressInput.street}/>
                <input type="text" name={'city'} required placeholder={'City'} onChange={handleChange} value={addressInput.city}/>
                <input type="text" name={'state'} required placeholder={'State'} onChange={handleChange} value={addressInput.state}/>
                <input type="text" name={'country'} required placeholder={'Country'} onChange={handleChange} value={addressInput.country}/>
                <input type="number" name={'pinCode'} required placeholder={'Pin Code'} onChange={handleChange} value={addressInput.pinCode}/>
                <div className="buttons">
                    <Button variant={'contained'} type={"submit"}>Save</Button>
                    {
                        !isEditingAddress && (
                            <>
                                <Button variant={'contained'} type={"reset"} onClick={resetForm}>Reset</Button>
                                <Button variant={'contained'} type={"button"}
                                        onClick={() => setIsAddressModel(prev => !prev)}>Cancel</Button>
                            </>
                )
                    }
                </div>
            </form>
        </div>
    );
};

export default AddressModel;