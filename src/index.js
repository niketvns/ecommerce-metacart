import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import {makeServer} from "./server";
import {ProductProvider} from './context/productsContext';
import {CartProvider} from './context/cartContext';
import {WishlistProvider} from './context/wishlistContext';
import {AuthProvider} from "./context/authContext";
import {NotifyAlertProvider} from "./context/notifyAlert";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NotifyAlertProvider>
                <AuthProvider>
                    <CartProvider>
                        <WishlistProvider>
                            <ProductProvider>
                                <App/>
                            </ProductProvider>
                        </WishlistProvider>
                    </CartProvider>
                </AuthProvider>
            </NotifyAlertProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
