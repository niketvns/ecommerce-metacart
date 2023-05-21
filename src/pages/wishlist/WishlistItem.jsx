import React from 'react';
import {ProductCard} from "../../components";

const WishlistItem = ({product}) => {

    return (
        product
        &&
        <ProductCard product={product}/>
    )
}

export default WishlistItem;