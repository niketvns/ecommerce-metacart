import React, {useState} from 'react';
import './filter.css'
import Button from "@mui/material/Button";

const Filter = ({filterShow}) => {

    const [filterValues, setFilterValues] = useState({
        priceRange: '',
        category: [],
        rating: '',
        sortByPrice: ''
    })

    return (
        <form className={`filter-main ${filterShow ? 'filterShow' : null}`}>
            <div className="heading">
                <h3>Filter</h3>
                <Button type='reset' variant='outlined'>Clear</Button>
            </div>
            <div className="price-selector">
                <h3>Price</h3>
                <input type="range" min={0} max={20000} value={20000} name={'priceRange'}/>
            </div>
            <div className="category-selector">
                <h3>Categories</h3>
                <div className="all-categories">
                    <label htmlFor="mens">
                        <input type="checkbox" name={'category'} id='mens'/>
                        Mens
                    </label>
                    <label htmlFor="womens">
                        <input type="checkbox" name={'category'} id='womens'/>
                        Womens
                    </label>
                    <label htmlFor="electronics">
                        <input type="checkbox" name={'category'} id='electronics'/>
                        Electronics
                    </label>
                    <label htmlFor="beauty">
                        <input type="checkbox" name={'category'} id='beauty'/>
                        Beauty
                    </label>
                    <label htmlFor="home-groceries">
                        <input type="checkbox" name={'category'} id='home-groceries'/>
                        Home Groceries
                    </label>
                </div>
            </div>
            <div className="rating-selector">
                <h3>Rating</h3>
                <div className="all-rating">
                    <label htmlFor="4">
                        <input type="radio" id='4' name='rating'/>
                        4&#9733; & above
                    </label>
                    <label htmlFor="3">
                        <input type="radio" id='3' name='rating'/>
                        3&#9733; & above
                    </label>
                    <label htmlFor="2">
                        <input type="radio" id='2' name='rating'/>
                        2&#9733; & above
                    </label>
                </div>
            </div>
            <div className="sort-by-price">
                <h3>Sort By Price</h3>
                <div className="all-sorting">
                    <label htmlFor="high-to-low">
                        <input type="radio" id='high-to-low' name='sortByPrice'/>
                        High to Low
                    </label>
                    <label htmlFor="low-to-high">
                        <input type="radio" id='low-to-high' name='sortByPrice'/>
                        Low to High
                    </label>
                </div>
            </div>
        </form>
    );
};

export default Filter;