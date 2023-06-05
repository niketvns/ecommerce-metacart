import React, {useEffect} from 'react';
import './placeOrder.css'
import Button from "@mui/material/Button";
import {useGlobalCart} from "../../context/cartContext";
import {useGlobalAuth} from "../../context/authContext";
import {useNotifyAlert} from "../../context/notifyAlert";
import MetacartLogo from '../../images/logo.png'
import {useGlobalProduct} from "../../context/productsContext";
import {useNavigate} from "react-router-dom";

const PlaceOrder = () => {
    const {calculateTotalPrice, cartArray, setCartArray, deleteFromCart} = useGlobalCart();
    const {userAddresses} = useGlobalAuth()
    const {notifyWarn, notifySuccess, notifyError} = useNotifyAlert()
    const {setMyOrders} = useGlobalProduct()
    const navigate = useNavigate()

    const selectedAddress = userAddresses.find(({isSelected}) => isSelected === true)

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePaymentSuccess = (payment) => {
        // console.log("Payment Successful:", payment);
        // Perform necessary actions after successful payment
        notifySuccess(`Payment Successful: ${payment.razorpay_payment_id}`)
        notifySuccess('Order Placed Successfully!')
        const paymentTime = new Date().toDateString();
        cartArray.map(({_id, title, price, qty}) => {
            setMyOrders(prev => [...prev, {
                id: _id,
                customerName: selectedAddress.fullName,
                title: title,
                price: Math.floor(price),
                totalPrice: Math.floor(price) * qty,
                totalPurchase: calculateTotalPrice() + 40,
                dataOfPurchase: paymentTime,
                quantity: qty,
                txnNo: payment.razorpay_payment_id,
                shippingAddress: `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}, ${selectedAddress.pinCode}`
            }])
            //deleting the item from cart after purchasing
            deleteFromCart(_id);
        })
        navigate('/order/success');
    };

    const handlePaymentError = (error) => {
        console.log("Payment Error:", error);
        // Handle payment errors
        notifyError(`Payment Error: ${error}`)
    };

    const makePayment = async () => {
        if (!selectedAddress) {
            notifyWarn('Choose an Address')
            return;
        }
        const options = {
            key: "rzp_test_BTkuZZckCTVhWJ",
            amount: (calculateTotalPrice() + 40) * 100,
            currency: "INR",
            name: "MetaCartShop",
            description: "Thank you for your test purchase",
            image: MetacartLogo,
            handler: handlePaymentSuccess,
            prefill: {
                name: selectedAddress?.fullName,
                email: 'metacartuser@gmail.com',
                contact: selectedAddress?.phone
            },
            notes: {
                address: `${selectedAddress?.street}, ${selectedAddress?.city}, ${selectedAddress?.state}, ${selectedAddress?.country}, ${selectedAddress?.pinCode}`
            },
            theme: {
                color: "#0e5db3"
            }
        };
        // window.RazorpayCheckout.open(options);
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.on('payment.failed', handlePaymentError);
        razorpayInstance.open();
    };

    return (
        <>
            <div className="place-order-main">
                <h2>Price Details</h2>
                <div className="product-details-shipping">
                    {
                        cartArray.map(({_id, title, price, qty}) => (
                            <div key={_id}>
                                <p>{title}</p>
                                <p>&#8377;{Math.floor(price)} x {qty}</p>
                            </div>
                        ))
                    }
                </div>
                <hr/>
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p>&#8377;{calculateTotalPrice()}</p>
                </div>
                <div className="shipping">
                    <p>Shipping</p>
                    <p>&#8377;40</p>
                </div>
                <div className="tax">
                    <p>Tax</p>
                    <p>&#8377;0</p>
                </div>
                <hr/>
                <div className="total">
                    <h3>Total</h3>
                    <p>&#8377;{calculateTotalPrice() + 40}</p>
                </div>
                <div className="offer-coupen">

                </div>
                <div className="proceed-to-payment">
                    <Button variant="contained" onClick={makePayment}>Place Order</Button>
                </div>
            </div>
            <div className="place-order-btn">
                <h3>&#8377;{calculateTotalPrice() + 40}</h3>
                <Button variant='contained' onClick={makePayment}>Place Order</Button>
            </div>
        </>
    );
};

export default PlaceOrder;