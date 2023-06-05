import axios from 'axios';
import React, {createContext, useContext, useState, useEffect} from 'react';

const productContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [myOrders, setMyOrders] = useState([])
    const [allTransactions, setAllTransactions] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedRating, setSelectedRating] = useState(0);
    const [sortByPrice, setSortByPrice] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(2000);

    // Filtered product list based on selected filters
    const filteredProducts = products.filter((product) => {
        // Filter by category
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.usedFor)) {
            return false;
        }
        // Filter by rating
        if (selectedRating && product.rating < selectedRating) {
            return false;
        }
        // Filter by price
        if (selectedPrice && product.price > selectedPrice) {
            return false;
        }
        return true;
    })

    // Sort products by price
    if (sortByPrice === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    const fetchProducts = async () => {
        try {
            let {data} = await axios.get(`/api/products`);
            setProducts(data.products);
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
        <productContext.Provider value={{
            products,
            filteredProducts,
            isLoading,
            error,
            setSelectedPrice,
            setSelectedCategories,
            setSelectedRating,
            setSortByPrice,
            selectedPrice,
            selectedCategories,
            selectedRating,
            sortByPrice,
            myOrders,
            setMyOrders,
            allTransactions,
            setAllTransactions
        }}>
            {children}
        </productContext.Provider>
    )
}

const useGlobalProduct = () => useContext(productContext);

export {ProductProvider, useGlobalProduct};

