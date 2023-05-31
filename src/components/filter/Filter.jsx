import React from 'react';
import './filter.css'
import Button from "@mui/material/Button";

const Filter = ({filterShow}) => {
    return (
        <form className={`filter-main ${filterShow ? 'filterShow' : null}`}>
            <div className="heading">
                <h3>Filter</h3>
                <Button type='reset' variant='outlined'>Clear</Button>
            </div>
            <div className="price-selector">
                <h3>Price</h3>
                <input type="range"/>
            </div>
            <div className="category-selector">
                <h3>Categories</h3>
                <div className="all-categories">
                    <label htmlFor="mens">
                        <input type="checkbox" id='mens'/>
                        Mens
                    </label>
                    <label htmlFor="womens">
                        <input type="checkbox" id='womens'/>
                        Womens
                    </label>
                    <label htmlFor="electronics">
                        <input type="checkbox" id='electronics'/>
                        Electronics
                    </label>
                    <label htmlFor="beauty">
                        <input type="checkbox" id='beauty'/>
                        Beauty
                    </label>
                    <label htmlFor="home-groceries">
                        <input type="checkbox" id='home-groceries'/>
                        Home Groceries
                    </label>
                </div>
            </div>
            <div className="rating-selector">
                <h3>Rating</h3>
                <div className="all-rating">
                    <label htmlFor="4+">
                        <input type="radio" id='4+' name='rating'/>
                        4&#9733; & above
                    </label>
                    <label htmlFor="3+">
                        <input type="radio" id='3+' name='rating'/>
                        3&#9733; & above
                    </label>
                    <label htmlFor="2+">
                        <input type="radio" id='2+' name='rating'/>
                        2&#9733; & above
                    </label>
                </div>
            </div>
            <div className="sort-by-price">
                <h3>Sort By Price</h3>
                <div className="all-sorting">
                    <label htmlFor="high-to-low">
                        <input type="radio" id='high-to-low' name='price-sorting'/>
                        High to Low
                    </label>
                    <label htmlFor="low-to-high">
                        <input type="radio" id='low-to-high' name='price-sorting'/>
                        Low to High
                    </label>
                </div>
            </div>
        </form>
    );
};

export default Filter;