import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PayPal = (props) => {
    const paypal = useRef();
    const navigate = useNavigate()
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Your choice is Great",
                            amount: {
                                currency_code: "USD",
                                value: `${props.payingAmount}.00`
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                navigate('/success', { state: order })
            },
            onError: (err) => {
                alert(err);
            }
        }).render(paypal.current)
    }, [props.payingAmount, navigate])

    return (
        <>
            <div ref={paypal} ></div>
        </>
    )
}

export default PayPal