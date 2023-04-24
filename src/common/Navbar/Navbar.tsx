import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Navbar = () => {

  return (
    <div className="nav-bar sticky-top">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/">
              Hem
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Ebikes/Elmopeder
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Elcyklar
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Tillbehör
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            <img
              className="main-icon"
              src="assets/icons/velo-removebg-white.svg"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/service">
              Service
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Kontakta oss
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              Om oss
            </Link>
          </div>
          <div className="icons">
            <img src="/assets/icons/sweden2.png" alt=""></img>
            <img src="/assets/icons/uk.png" alt=""></img>
            <div className="cartIcon">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar