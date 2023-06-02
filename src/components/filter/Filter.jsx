import React, {useState} from 'react';
import './filter.css'
import Button from "@mui/material/Button";
import {useGlobalProduct} from "../../context/productsContext";

const Filter = ({filterShow}) => {
    const {selectedPrice, selectedCategories,selectedRating,sortByPrice, setSelectedPrice, setSelectedCategories, setSelectedRating, setSortByPrice} = useGlobalProduct();

    const clearFilter = () => {
        setSelectedCategories([]);
        setSelectedPrice(2000);
        setSelectedRating(null);
        setSortByPrice('')
    }

    function handleCategoryChange(category, checked) {
        let updatedCategories = [...selectedCategories];
        if (checked) {
            updatedCategories.push(category);
        } else {
            updatedCategories = updatedCategories.filter((c) => c !== category);
        }
        setSelectedCategories(updatedCategories);
    }

    function handleRatingChange(rating) {
        setSelectedRating(Number(rating));
        console.log(rating)
    }

    return (
        <form className={`filter-main ${filterShow ? 'filterShow' : null}`}>
            <div className="heading">
                <h3>Filter</h3>
                <Button type='reset' variant='outlined' onClick={clearFilter}>Clear</Button>
            </div>
            <div className="price-selector">
                <h3>Price</h3>
                <input type="range" min={0} max={2000} step="100" value={selectedPrice} onChange={(e)=>setSelectedPrice(e.target.value)} name={'priceRange'}/>
                <p>Price &lt; &#8377;{selectedPrice}</p>
            </div>
            <div className="category-selector">
                <h3>Categories</h3>
                <div className="all-categories">
                    <label htmlFor="mens">
                        <input type="checkbox" name={'category'} id='mens' value={'mens'} checked={selectedCategories.includes('mens')} onChange={(e)=>handleCategoryChange(e.target.value, e.target.checked)}/>
                        Mens
                    </label>
                    <label htmlFor="womens">
                        <input type="checkbox" name={'category'} id='womens' value={'womens'} checked={selectedCategories.includes('womens')} onChange={(e)=>handleCategoryChange(e.target.value, e.target.checked)}/>
                        Womens
                    </label>
                    <label htmlFor="electronics">
                        <input type="checkbox" name={'category'} id='electronics' value={'electronics'} checked={selectedCategories.includes('electronics')} onChange={(e)=>handleCategoryChange(e.target.value, e.target.checked)}/>
                        Electronics
                    </label>
                    <label htmlFor="beauty">
                        <input type="checkbox" name={'category'} id='beauty' value={'beauty'} checked={selectedCategories.includes('beauty')} onChange={(e)=>handleCategoryChange(e.target.value, e.target.checked)}/>
                        Skincare
                    </label>
                    <label htmlFor="home-groceries">
                        <input type="checkbox" name={'category'} id='home-groceries' value={'home'} checked={selectedCategories.includes('home')} onChange={(e)=>handleCategoryChange(e.target.value, e.target.checked)}/>
                        Home Groceries
                    </label>
                </div>
            </div>
            <div className="rating-selector">
                <h3>Rating</h3>
                <div className="all-rating">
                    <label htmlFor="4">
                        <input type="radio" id='4' name='rating' value={4} checked={selectedRating === 4} onChange={(e)=>handleRatingChange(e.target.value)}/>
                        4&#9733; & above
                    </label>
                    <label htmlFor="3">
                        <input type="radio" id='3' name='rating' value={3} checked={selectedRating === 3} onChange={(e)=>handleRatingChange(e.target.value)}/>
                        3&#9733; & above
                    </label>
                    <label htmlFor="2">
                        <input type="radio" id='2' name='rating' value={2} checked={selectedRating === 2} onChange={(e)=>handleRatingChange(e.target.value)}/>
                        2&#9733; & above
                    </label>
                </div>
            </div>
            <div className="sort-by-price">
                <h3>Sort By Price</h3>
                <div className="all-sorting">
                    <label htmlFor="high-to-low">
                        <input type="radio" id='high-to-low' name='sortByPrice' value={'desc'} checked={sortByPrice === 'desc'} onChange={(e)=>setSortByPrice(e.target.value)}/>
                        High to Low
                    </label>
                    <label htmlFor="low-to-high">
                        <input type="radio" id='low-to-high' name='sortByPrice' value={'asc'} checked={sortByPrice === 'asc'} onChange={(e)=>setSortByPrice(e.target.value)}/>
                        Low to High
                    </label>
                </div>
            </div>
        </form>
    );
};

export default Filter;