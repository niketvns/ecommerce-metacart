import React, {useEffect} from 'react';
import './paymentHistory.css'
import {useGlobalProduct} from "../../context/productsContext";
import {NavLink, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {useGlobalAuth} from "../../context/authContext";

const PaymentHistory = () => {
    const {allTransactions} = useGlobalProduct()
    const {loginToken} = useGlobalAuth()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        document.title = 'My Orders | Metacart'
    }, [])

    return (
        <div className={'payment-history-main'}>
            {
                loginToken ?
                    <>
                        <h2>Payment History</h2>
                        {
                            allTransactions.length ?
                                <div className="all-payments">
                                    {
                                        allTransactions.map(({totalAmountPaid, txnNo, dataOfPurchase}) => (
                                            <div className={'ind-transaction'}>
                                                <p><b>Transaction No:</b> {txnNo}</p>
                                                <p><b>Amount:</b> &#8377;{totalAmountPaid}</p>
                                                <p><b>Date:</b> {dataOfPurchase}</p>
                                            </div>
                                        ))
                                    }
                                </div> :
                                <div className={'nothing-in-payments'}>
                                    <h3>Payment Record Not Found</h3>
                                    <Button variant={'contained'} onClick={() => navigate('/shop')}>Shop Now</Button>
                                </div>
                        }
                    </> :
                    <div className='payments-login-main'>
                        <NavLink to='/login'>
                            <Button type='submit' variant="contained">
                                Login to View Payments
                            </Button>
                        </NavLink>
                    </div>
            }

        </div>
    );
};

export default PaymentHistory;