import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './cartItem.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import {useGlobalCart} from '../../context/cartContext';
import {useNavigate} from 'react-router-dom';

const CartItem = ({product}) => {

    const {deleteFromCart, IncrementQnt, DecrementQnt} = useGlobalCart()

    console.log(product)

    return (
        product
        &&
        <div className='cart-item'>
            <div className="left">
                <img src={product.thumbnail} alt="image"/>
            </div>
            <div className="right">
                <h3>{product.title}</h3>
                <div className="qnt-btn">
                    <IconButton aria-label="delete" size="large" onClick={() => DecrementQnt(product._id)}>
                        <RemoveIcon/>
                    </IconButton>
                    <input type="text" value={product.qty} disabled/>
                    <IconButton aria-label="delete" size="large" onClick={() => IncrementQnt(product._id)}>
                        <AddIcon/>
                    </IconButton>
                </div>
                {/*${Math.floor(product.price * product.qty)}/-*/}
                <IconButton aria-label="delete" size="large" onClick={() => deleteFromCart(product.id)}>
                    <DeleteIcon fontSize="inherit"/>
                </IconButton>

            </div>
        </div>

    )
}

export default CartItem;