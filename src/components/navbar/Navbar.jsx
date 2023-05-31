import './navbar.css';
import React, {useState} from 'react';
import logo from '../../images/metacart-logo-2.png';
import SearchIcon from '@mui/icons-material/Search';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Menu from '../menu/Menu';
import "react-tooltip/dist/react-tooltip.css";
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {NavLink, useNavigate} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import {useGlobalCart} from '../../context/cartContext';
import AccountMenu from './AccountMenu';
import {useGlobalWishlist} from '../../context/wishlistContext';
import {useGlobalAuth} from "../../context/authContext";
import {useNotifyAlert} from "../../context/notifyAlert";
import SearchModel from "../searchModel/SearchModel";
// import SearchModel from "../fullSearchModel/SearchModel";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [input, setInput] = useState('');
    const {loginToken, userDetail} = useGlobalAuth();
    const {notifyWarn} = useNotifyAlert()
    const {cartArray} = useGlobalCart();
    const {wishlistArray} = useGlobalWishlist();

    const navigate = useNavigate();

    let NumberOfItemsInCart = cartArray.length;
    let NumberOfItemsInWishlist = wishlistArray.length;

    const menuFunction = () => {
        setShowMenu(!showMenu);
    }

    const fontStyle2rem = {
        fontSize: '2rem'
    }

    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px'
        },
    }));

    const inputSearch = (event) => {
        setInput(event.target.value);
    }

    const setInputNull = () => {
        if (input.length === 0) {
            notifyWarn('Enter Query')
        } else {
            // setInput('')
            navigate(`/search/${input}`);
        }
    }


    return (
        <>
            {
                showMenu
                &&
                <div>
                    <Menu menuFunction={menuFunction}/>
                </div>
            }
            <nav>
                <div className="left">
                    <NavLink to='/'>
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                    </NavLink>
                    <div className="search">
                        <input type="search" name="" id="" placeholder='Search Items' autoCorrect='off'
                               autoSave='on' autoComplete='on' onChange={inputSearch} value={input}/>
                        <SearchModel searchInput={input} setInput={setInput}/>
                    </div>
                </div>
                <div className="right">
                    <div className="cart" id='my-cart'>
                        <NavLink to='/cart'>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={NumberOfItemsInCart} color="secondary">
                                    <ShoppingCartIcon style={fontStyle2rem}/>
                                </StyledBadge>
                            </IconButton>
                        </NavLink>
                    </div>
                    <div className="wishlist" id='my-wishlist'>
                        <NavLink to='/wishlist'>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={NumberOfItemsInWishlist} color="secondary">
                                    <FavoriteIcon style={fontStyle2rem}/>
                                </StyledBadge>
                            </IconButton>
                        </NavLink>
                    </div>
                    <div className="login">
                        {
                            loginToken ?
                                <AccountMenu/> :
                                <NavLink to='/login'>
                                    <Stack spacing={2} direction="row">
                                        <Button variant="contained"
                                                style={{color: '#232f3e', backgroundColor: 'white'}}>Login</Button>
                                    </Stack>
                                </NavLink>
                        }

                    </div>
                </div>
            </nav>
            <div className="search-2">
                <input type="search" name="" id="" placeholder='Search Items' autoCorrect='off' autoSave='on'
                       autoComplete='on' onChange={inputSearch} value={input}/>
                <SearchModel searchInput={input} setInput={setInput}/>
            </div>
            <div className="categories">
                <ul>
                    <li onClick={menuFunction}><DragHandleIcon/>Menu</li>
                    <NavLink to='/'>
                        <li><HomeIcon/></li>
                    </NavLink>
                    <NavLink to='shop'>
                        <li>Shop</li>
                    </NavLink>
                    <NavLink to='women'>
                        <li>Women</li>
                    </NavLink>
                    <NavLink to='men'>
                        <li>Men</li>
                    </NavLink>
                    <NavLink to='beauty'>
                        <li>Beauty & Health</li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}