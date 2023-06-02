import { initializeRazorpay } from "./initializeRazorpay";
import {toast} from "react-toastify";
const makePayment = async () => {

    console.log('calling..')

    const tostifyObj = {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        theme: "light",
    }
    const notifySuccess = (content) => toast.success(content, tostifyObj);

    const res = await initializeRazorpay();
    if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
    }

    var options = {
        key: "rzp_test_LOK2Oboy6YH5gw",
        key_id: "rzp_test_LOK2Oboy6YH5gw",
        key_secret: "sxIbBI0dELrrB0p6gJzwh9ID",
        name: "MetaCart Shop",
        currency: "INR",
        amount: 50,
        description: "Thankyou for your test purchase",

        handler: function (response) {
            sessionStorage.setItem('isPremium',true)
            notifySuccess(
                `Your payment is done with orderno-,${response.razorpay_payment_id}`
            );
        },
        prefill: {
            name: "MetaCart Shop",
            email: "admin@metacart.com",
            contact: "+91 8434335952",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};

export { makePayment };