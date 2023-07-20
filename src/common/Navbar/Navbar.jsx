import React, { useState } from "react";
import './Navbar.scss'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from '../Cart/Cart.jsx'
import { useSelector } from "react-redux";

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);


let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
};

  return (
    <nav
      className="autohide navbar p-4 nav-bar navbar-expand-lg sticky-top"
      id="navbar"
    >
      <div className="row container-fluid">
        <div className="logo col-2 me-5">
          <Link className="link " to="/">
            <img
              className="main-icon"
              src="../assets/icons/newLogo.png"
              alt=""
            ></img>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-dark navbar-toggler-icon"></span>
        </button>
        <div
          className="row col-10 collapse wrapper navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav col-lg-8 col-md-12 left ms-5 mb-2 mb-lg-0">
            <li className="nav-item item">
              <Link className="link" to="/">
                Hem
              </Link>
            </li>

            <div className="collapse- ">
              <div
                className="link dropdown-toggle"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Produkter
              </div>

              <div
                className="collapse collapse-horizontal"
                id="collapseExample"
              >
                <div className="card card-body">
                  <div className="item">
                    <Link className="link" to="/products/1">
                      Ebikes/Elmopeder
                    </Link>
                  </div>
                  <div className="item">
                    <Link className="link" to="/products/2">
                      Elsparkcyklar
                    </Link>
                  </div>
                  <div className="item">
                    <Link className=" disabled-link" to="/products/4">
                      Elcyklar
                    </Link>
                  </div>
                  <div className="item">
                    <Link className="link" to="/products/3">
                      Tillbehör
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <li className="nav-item item">
              <Link className="link" to="/service">
                Service
              </Link>
            </li>
            <li className="nav-item item item">
              <Link className="link" to="/contact">
                Kontakta oss
              </Link>
            </li>
            <li className="nav-item item">
              <Link className="link" to="/about">
                Om oss
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav col-lg-2 col-md-12 right d-flex justify-content-center mb-2 mb-lg-0">
            <div className="icons">
              <img src="/assets/icons/sweden2.png" alt=""></img>
              <img src="/assets/icons/uk.png" alt=""></img>
              <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartIcon />
                <span>{products.length}</span>
              </div>
            </div>
          </ul>
        </div>
      </div>
      {open && <Cart />}
    </nav>
  );
}

export default Navbar