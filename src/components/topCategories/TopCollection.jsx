import React from 'react';
import Mens from '../../images/mens-formal.png';
import Womens from '../../images/women-collection.png';
import Formal from '../../images/formal-collection.png';
import Tech from '../../images/tech-collection.png'
import { NavLink } from 'react-router-dom';
import './topCollections.css'

const TopCollection = () => {
    return (
        <>
            <div className="collections">
                <h2>Top Collections</h2>
                <div className="all-collections">
                    <NavLink to='/men' className={'ind-collection'}>
                        <div className="left">
                            <img src={Mens} alt=""/>
                        </div>
                        <div className="right">
                            <div className="tag">
                                New Arrivals
                            </div>
                            <div className="details">
                                <h3>Men's Collection</h3>
                                <p>Check out our best Men's collection to stay warm in style this season</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/women' className={'ind-collection'}>
                        <div className="left">
                            <img src={Womens} alt=""/>
                        </div>
                        <div className="right">
                            <div className="tag">
                                New Arrivals
                            </div>
                            <div className="details">
                                <h3>Women's Collection</h3>
                                <p>Check out our best Women's collection to stay warm in style this season</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default TopCollection