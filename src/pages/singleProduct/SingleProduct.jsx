import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './singleProduct.css';
import spinner from '../../images/Spinner.svg';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SliderData from '../../components/productCarousel/SliderData';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useGlobalCart} from '../../context/cartContext';
import discountImg from '../../images/discount.png'
import freeDelivery from '../../images/free-delivery-icon.png'
import shield from '../../images/shield.png';
import returnImg from '../../images/return.png';
import {PayPal} from "../../components";
import {useGlobalAuth} from "../../context/authContext";
import {useNotifyAlert} from "../../context/notifyAlert";
import {useGlobalWishlist} from "../../context/wishlistContext";

const SingleProduct = () => {
    const [productDetails, setProductDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [stockClass, setStockClass] = useState('green');
    const [fullImg, setFullImg] = useState()
    const [checkout, setCheckout] = useState(false)
    const {addToCart, cartArray} = useGlobalCart();
    const {loginToken} = useGlobalAuth();
    const {addToWishlist, wishlistArray} = useGlobalWishlist()
    const {notifyError, notifyWarn} = useNotifyAlert()
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        document.title = productDetails ? productDetails.title.toUpperCase() : 'Product Details'
    }, [productDetails])

    const {id} = useParams();

    const fetchProductDetails = async () => {
        try {
            let {data} = await axios.get(`/api/products/${id}`);
            setProductDetails(data?.product);
            setFullImg(data?.product?.thumbnail)
        } catch (err) {
            setError(err.message)
            notifyError(error.message);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        fetchProductDetails();
        if (productDetails?.stock <= 0) {
            setStockClass('red');
        } else {
            setStockClass('green');
        }
    }, [id])

    const buyNow = () => {
        if (loginToken) {
            setCheckout(true);
        } else {
            notifyWarn('Login To Buy')
            navigate('/login')
        }
    }

    return (
        !isLoading ?
            <div className='all-single-product'>
                <div className="single-product">
                    <div className="category-location">
                        <p className='category'>Category: <b>{productDetails?.category}</b></p>
                        <p className='location'>metacart &gt; product &gt; {productDetails?.title}</p>
                    </div>
                    <div className="all-details">
                        <div className="image-section">
                            <div className="image-selector">
                                {
                                    productDetails?.images.map((img) => {
                                        return (
                                            <div
                                                key={Math.random(10000)}
                                                className="small-img"
                                                onMouseOver={() => setFullImg(img)}
                                            >
                                                <img src={img} alt="img"/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="full-image">
                                {
                                    fullImg
                                    &&
                                    <img src={fullImg} alt="image"/>
                                }
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="product-desc">
                                <h1>{productDetails?.title}</h1>
                                <div className='rating'>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={productDetails?.rating}
                                                precision={0.5} readOnly/>
                                    </Stack>
                                </div>
                                <div>Brand: <b>{productDetails?.brand}</b></div>
                                <p className='desc'><b>Description:</b> {productDetails?.description}</p>
                                <p className="deal red">
                                    <LocalOfferIcon/>Deal of the Day
                                </p>
                                <div className="price">
                                    <div className="buyPrice">
                                        <p className='discountedPercent'>-{Math.floor(productDetails?.discountPercentage)}%</p>
                                        <p className='orgPrice'>${Math.floor(productDetails?.price)}/-</p>
                                    </div>
                                    <div className="mrp">
                                        MRP: <span
                                        className='discounted'>${Math.floor(Number(productDetails?.price) + Number(productDetails?.discountPercentage))}/-</span>
                                    </div>
                                </div>
                                <p className='green'>You Save:
                                    ${Math.floor((Number(productDetails?.price) + Number(productDetails?.discountPercentage)) - Number(productDetails?.price))}/-</p>
                                <p className={stockClass}>{productDetails?.stock ? "In Stock" : "Out Of Stock"}</p>
                                <div className="offers">
                                    <h3><img src={discountImg} alt="img"/> Offers</h3>
                                    <p><LocalOfferIcon className='offer-icon'/> <b>Bank Offer</b> 5% Cashback on
                                        Flipkart Axis Bank Card <a href="">T&C</a></p>
                                    <p><LocalOfferIcon className='offer-icon'/> Buy this Product and Get Extra ₹500 Off
                                        on Two-Wheelers <a href="">T&C</a></p>
                                    <p><LocalOfferIcon className='offer-icon'/> <b>Partner Offer</b> Purchase now & get
                                        a surprise cashback coupon for January / February 2023 <a href="">Know More</a>
                                    </p>
                                    <p><LocalOfferIcon className='offer-icon'/> <b>Partner Offer</b> Sign up for
                                        Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000* <a href="">Know
                                            More</a></p>
                                </div>
                                <div className="check-location">
                                    <p>Delivery </p>
                                    <div className="input-btn">
                                        <TextField id="standard-basic" label="Pin Code" type={"number"} maxLength={'6'}
                                                   variant="standard"/>
                                        <Button variant="text">check</Button>
                                    </div>
                                </div>
                                <div className="delivery-contract">
                                    <div className="delivery-contract-item fast-delivery">
                                        <img src={freeDelivery} alt=""/>
                                        <p>Free Delivery</p>
                                    </div>
                                    <div className="delivery-contract-item return">
                                        <img src={returnImg} alt=""/>
                                        <p>7 Days Return</p>
                                    </div>
                                    <div className="delivery-contract-item secure">
                                        <img src={shield} alt=""/>
                                        <p>Secure</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn">
                                {
                                    cartArray.find(({_id}) => _id === productDetails._id ) ?
                                        <Button variant="contained" onClick={() => navigate('/cart')}>
                                            Go to Cart
                                        </Button> :
                                        <Button variant="contained" onClick={() => addToCart(productDetails)}>
                                            Add to Cart
                                        </Button>
                                }

                                {
                                    wishlistArray.find(({_id}) => _id === productDetails._id ) ?
                                        <Button variant="outlined" onClick={() => navigate('/wishlist')}>
                                            Go to Wishlist
                                        </Button> :
                                        <Button variant="outlined" onClick={() => addToWishlist(productDetails)}>
                                            Add to Wishlist
                                        </Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="related-product">
                    <SliderData
                        key={productDetails?._id}
                        title={'Products related to this item'}
                        category={productDetails?.category}
                    />
                </div>
            </div> :
            <div className='apiLoading'>
                <img src={spinner} alt=""/>
                <p>Loading...</p>
            </div>
    )
}

export default SingleProduct;