import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';

const productContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [filterProducts, setFilterProducts] = useState([]);

    const fetchProducts = async () => {
        setIsLoading(true)
        try {
            let {data} = await axios.get(`/api/products`);
            setProducts(data.products);
            setFilterProducts(data.products);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <productContext.Provider value={{ products, filterProducts, isLoading, error }}>
            {children}
        </productContext.Provider>
    )
}

const useGlobalProduct = () => useContext(productContext);

export { ProductProvider, useGlobalProduct };

