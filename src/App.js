import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mockman from "mockman-js";
import {Navbar, Footer} from './components';
import {
    Cart,
    Error,
    ForgetPassword,
    Home,
    Login,
    Profile,
    Shop,
    Signup,
    SingleProduct,
    Men,
    Women,
    Beauty,
    Success,
    Wishlist,
    CustomerSupport,
    Checkout
} from "./pages";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/recover-password' element={<ForgetPassword/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/wishlist' element={<Wishlist/>}/>
                <Route path='/men' element={<Men/>}/>
                <Route path='/women' element={<Women/>}/>
                {/*<Route path='/tech' element={<Technology/>}/>*/}
                <Route path='/beauty' element={<Beauty/>}/>
                <Route path='/product/:id' element={<SingleProduct/>}/>
                <Route path='/user/profile' element={<Profile/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/success' element={<Success/>}/>
                <Route path='/customer-support' element={<CustomerSupport/>}/>
                <Route path='/testing/mockman' element={<Mockman/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
            <ToastContainer/>
        </>
    );
}

export default App;
