import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        {/* Left */}

        <div className='left'>
          <div className='item'>
            <img src='assets/images/en.png' alt='' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link className='link' to='products/1'>
              Women
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='products/2'>
              Men
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='products/3'>
              Childern
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='products/4'>
              Acessories
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className='center'>
          <Link className='link'>Shopit.Pk</Link>
        </div>

        {/* Right */}
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              Homepage
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              About
            </Link>
          </div>

          <div className='item'>
            <Link className='link' to='/'>
              Contact
            </Link>
          </div>

          <div className='item'>
            <Link className='link' to='/'>
              Stores
            </Link>
          </div>
          <div className='icons'>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className='cartIcon' onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
