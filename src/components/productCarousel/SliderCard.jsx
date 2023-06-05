import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {NavLink, useNavigate} from 'react-router-dom';
import {useGlobalWishlist} from '../../context/wishlistContext';

const SliderCard = ({product}) => {
    const {wishlistArray, addToWishlist, deleteFromWishlist} = useGlobalWishlist();
    const [isWishlistRedBtnDisable, setIsWishlistRedBtnDisable] = useState(false)
    const [isWishlistBtnDisable, setIsWishlistBtnDisable] = useState(false)

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
                    <div className="add-to-cart">
                        {
                            wishlistArray.find(({id}) => id === product.id) ?
                                <IconButton
                                    aria-label="delete" id='wishlist-icon'
                                    onClick={()=> {
                                        setIsWishlistBtnDisable(false)
                                        deleteFromWishlist(product._id)
                                    }}
                                >
                                    <FavoriteIcon style={{color: "red"}}/>
                                </IconButton> :
                                <IconButton
                                    aria-label="delete" id='wishlist-icon' disabled={isWishlistBtnDisable}
                                    onClick={()=> {
                                        setIsWishlistBtnDisable(true)
                                        addToWishlist(product)
                                    }}
                                >
                                    <FavoriteIcon style={{color: "#b6bfb8"}}/>
                                </IconButton>
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default SliderCard