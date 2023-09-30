import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "../Cart/Cart.jsx";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const cartRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    let prevWidth = window.innerWidth;
    let element = "";

    const navbarIdChange = () => {ö
      let currentWidth = window.innerWidth;

      for (const node of document.getElementsByClassName("main-container")) {
        element = node.id;
      }
      // console.log(element)

      if (currentWidth >= 991 && element === "navbarSupportedContent") {
        console.log('id Changed', currentWidth)
        document.getElementById("navbarSupportedContent").id =
          "navbarSupportedContentNone";
      } else if (
        currentWidth <= 991 &&
        element === "navbarSupportedContentNone"
      ) {
        document.getElementById("navbarSupportedContentNone").id =
          "navbarSupportedContent";
      }
      prevWidth = currentWidth;
    };



    return () => {
      navbarIdChange();
      window.onresize = navbarIdChange;
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Hide navbar on scroll, paused - issue: Navbar hides when dropdown menu (Produkt) is clicked
  // let prevScrollpos = window.pageYOffset;

  // window.onscroll = function () {
  //   let currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-200px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  return (
    <nav
      className="autohide navbar p-4 nav-bar navbar-expand-lg sticky-top"
      id="navbar"
    >
      <div className="row container-fluid">
        <div className="logo col-1 me-5">
          <Link className="link " to="/">
            <img
              className="main-icon"
              src="../assets/icons/newLogo.png"
              alt=""
            ></img>
          </Link>
        </div>

        <button
          className="navbar-toggler hamburgerMenu"
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
          className="row col-10 collapse main-container navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex justify-content-center col-lg-8 col-md-12 left ms-5 mb-2 mb-lg-0">
            <li className="nav-item item">
              <Link className="link" to="/">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  Home
                </span>
              </Link>
            </li>

            <div className="collapse- ">
              <div
                className="link dropdown-toggle item"
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
                <div className="collapsed-links">
                  <div className="item">
                    <Link className="link" to="/products/1">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                      >
                        Ebikes/Elmopeder
                      </span>
                    </Link>
                  </div>
                  <div className="item">
                    <Link className="link" to="/products/2">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                      >
                        Elsparkcyklar
                      </span>
                    </Link>
                  </div>
                  <div className="item">
                    <Link className=" disabled-link" to="/products/4">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                      >
                        Elcyklar
                      </span>
                    </Link>
                  </div>
                  <div className="item">
                    <Link className="link" to="/products/3">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                      >
                        Tillbehör
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <li className="nav-item item">
              <Link className="link" to="/service">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  Service
                </span>
              </Link>
            </li>
            <li className="nav-item item item">
              <Link className="link" to="/contact">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  Kontakta oss
                </span>
              </Link>
            </li>
            <li className="nav-item item">
              <Link className="link" to="/about">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  Om oss
                </span>
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav col-lg-2 col-md-12 right d-flex justify-content-center mb-2 mb-lg-0">
            <div className="icons">
              <img src="/assets/icons/sweden2.png" alt=""></img>
              <img src="/assets/icons/uk.png" alt=""></img>
              <div
                className="cartIcon"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <ShoppingCartIcon />
                <span>{products.length}</span>
              </div>
            </div>
          </ul>
        </div>
      </div>
      {open && <Cart setOpen={setOpen} open={open} ref={cartRef} />}
    </nav>
  );
};

export default Navbar;
