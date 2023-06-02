import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {NavLink, useNavigate} from 'react-router-dom';
import {useGlobalWishlist} from '../../context/wishlistContext';

const SliderCard = ({product}) => {
    const [heartColor, setHeartColor] = useState('#b6bfb8');
    const {wishlistArray, addToWishlist, deleteFromWishlist} = useGlobalWishlist();

    return (
        <>
            <div
                className="deal-item-container"
            >
                <NavLink to={`/product/${product._id}`}>
                    <div className="deal-item">
                        <div className="product-img">
                            <img src={product.thumbnail} alt="image"/>
                        </div>
                        <div className="product-details">
                            <h3>{product.title}</h3>
                            <p className='price'>&#8377;{Math.floor(product.price)}/-</p>
                            <p>{product.brand}</p>
                        </div>
                    </div>
                </NavLink>
                {
                    <div className="add-to-cart"
                         onClick={() => wishlistArray.find(({_id}) => _id === product._id) ? deleteFromWishlist(product._id) : addToWishlist(product)}>
                        <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                        >
                            <FavoriteIcon
                                style={{color: wishlistArray.find(({_id}) => _id === product._id) ? "red" : heartColor}}
                            />
                        </IconButton>
                    </div>
                }
            </div>
        </>
    )
}

export default SliderCard