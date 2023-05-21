import React from 'react';
import { useGlobalCart } from '../../context/cartContext';
import { useGlobalWishlist } from '../../context/wishlistContext';
// import './wishlistDetails.css';
import WishlistItem from './WishlistItem';


const WishlistDetails = () => {

    const { wishlistArray } = useGlobalWishlist();

    return (
        <div className='cart-items-main'>
            <div className="heading">
                <h2>Your Wishlist</h2>
                <p>You Have {wishlistArray.length} Items in Wishlist</p>
            </div>
            <div className="wishlist-items">
                {
                    wishlistArray.map((product) => {
                        return <WishlistItem
                            key={product._id}
                            product={product}
                        />
                    })
                }
            </div>
            <div className="subtotal">

            </div>
        </div>
    )
}

export default WishlistDetails;