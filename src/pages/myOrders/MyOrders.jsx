import React, {useEffect} from 'react';
import {useGlobalProduct} from "../../context/productsContext";
import './myOrders.css'
import Button from "@mui/material/Button";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useGlobalAuth} from "../../context/authContext";

const MyOrders = () => {
    const {myOrders} = useGlobalProduct()
    const {loginToken} = useGlobalAuth()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        document.title = 'My Orders | Metacart'
    }, [])

    return (
        <div className={'my-orders-main'}>
            {
                loginToken ?
                    <>
                        <h2>My Orders</h2>
                        {
                            myOrders.length ?
                                <div className="all-orders">
                                    {
                                        myOrders.map(({id, totalPrice, title, dataOfPurchase, quantity, txnNo, shippingAddress}) => (
                                            <Link to={`/product/${id}`} className={'ind-order'}>
                                                <h3 className={'product-title'}>{title}</h3>
                                                <p><b>Total Amount Paid:</b> &#8377;{totalPrice}</p>
                                                <p><b>Quantity:</b> {quantity}</p>
                                                <p><b>Date Of Purchase:</b> {dataOfPurchase}</p>
                                                <p><b>Transaction No:</b> {txnNo}</p>
                                                <p><b>Shipping Address:</b> {shippingAddress}</p>
                                            </Link>
                                        ))
                                    }
                                </div> :
                                <div className={'nothing-in-orders'}>
                                    <h3>Nothing in the Order History</h3>
                                    <Button variant={'contained'} onClick={() => navigate('/shop')}>Order Now</Button>
                                </div>
                        }
                    </> :
                    <div className='orders-login-main'>
                        <NavLink to='/login'>
                            <Button type='submit' variant="contained">
                                Login to View Orders
                            </Button>
                        </NavLink>
                    </div>
            }
        </div>
    );
};

export default MyOrders;