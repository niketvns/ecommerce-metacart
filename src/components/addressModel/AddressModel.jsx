import React, {useState} from 'react';
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
        name: ''
    })
    const {setUserAddresses} = useGlobalAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserAddresses(prev => [...prev, addressInput])
        setIsAddressModel(prev => !prev)
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setAddressInput(prev => ({...prev, [name]: value}))
    }

    return (
        <div className={'address-model-main'}>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder={'Name'} onChange={handleChange} />
                <input type="number" name={'mobile'} placeholder={'Mobile No.'} onChange={handleChange} />
                <input type="text" name={'street'} placeholder={'Street No'} onChange={handleChange} />
                <input type="text" name={'city'} placeholder={'City'} onChange={handleChange} />
                <input type="text" name={'state'} placeholder={'State'} onChange={handleChange} />
                <input type="text" name={'country'} placeholder={'Country'} onChange={handleChange} />
                <div className="buttons">
                    <Button variant={'contained'} type={"submit"}>Add</Button>
                    <Button variant={'contained'} type={"reset"}>Reset</Button>
                    <Button variant={'contained'} type={"button"}
                            onClick={() => setIsAddressModel(prev => !prev)}>Cancel</Button>
                </div>
            </form>
        </div>
    );
};

export default AddressModel;