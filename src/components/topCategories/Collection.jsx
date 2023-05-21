import React from 'react';
import Mens from '../../images/mens-formal.png';
import Womens from '../../images/women-collection.png';
import Formal from '../../images/formal-collection.png';
import Tech from '../../images/tech-collection.png'
import { NavLink } from 'react-router-dom';

const Collection = () => {
    return (
        <>
            <div className="collections">
                <h2>Top Categories</h2>
                <div className="all-collections">
                    <NavLink to='/tech'>
                        <div className="category-offer Tech">
                            <span>Tech Collections</span>
                            <div className="img">
                                <img src={Tech} alt="" />
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/women'>
                        <div className="category-offer Women">
                            <span>Women's Collections</span>
                            <div className="img">
                                <img src={Womens} alt="" />
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/men'>
                        <div className="category-offer Men">
                            <span>Men's Collections</span>
                            <div className="img">
                                <img src={Mens} alt="" />
                            </div>
                        </div>
                    </NavLink>
                    <div className="category-offer formal">
                        <span>Formal's Collections</span>
                        <div className="img">
                            <img src={Formal} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection