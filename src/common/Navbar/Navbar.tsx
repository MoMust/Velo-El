import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Navbar = () => {

  return (
    <nav className="navbar p-4 nav-bar navbar-expand-lg sticky-top">
      <div className="row container-fluid">
        <div className="logo col-2 me-5">
          <Link className="link " to="/">
            <img
              className="main-icon"
              src="assets/icons/newLogo.png"
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
          className="row col-10  collapse wrapper navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav col-lg-8 col-md-12 left ms-3 mb-2 mb-lg-0">
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
            {/* ALT DROPDOWN */}
            {/* <li className="nav-item dropdown">
              <a
                className=" link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Produkter
              </a>
              <ul className="dropdown-menu p-2">
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
              </ul>
            </li> */}
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
              <div className="cartIcon">
                <ShoppingCartIcon />
                <span>0</span>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    // <div className="nav-bar sticky-top">
    //   <div className="wrapper">
    //     <div className="left">
    //       <div className="item">
    //         <Link className="link" to="/">
    //           Hem
    //         </Link>
    //       </div>
    //       <div className="item">
    //         <Link className="link" to="/products/1">
    //           Ebikes/Elmopeder
    //         </Link>
    //       </div>
    //       <div className="item">
    //         <Link className="link" to="/products/2">
    //           Elcyklar
    //         </Link>
    //       </div>
    //       <div className="item">
    //         <Link className="link" to="/products/3">
    //           Tillbehör
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="center">
    //       <Link className="link" to="/">
    //         <img
    //           className="main-icon"
    //           src="assets/icons/velo-removebg-white.png"
    //           alt=""
    //         ></img>
    //       </Link>
    //     </div>
    //     <div className="right">
    //       <div className="item">
    //         <Link className="link" to="/service">
    //           Service
    //         </Link>
    //       </div>
    //       <div className="item">
    //         <Link className="link" to="/contact">
    //           Kontakta oss
    //         </Link>
    //       </div>
    //       <div className="item">
    //         <Link className="link" to="/about">
    //           Om oss
    //         </Link>
    //       </div>
    //       <div className="icons">
    //         <img src="/assets/icons/sweden2.png" alt=""></img>
    //         <img src="/assets/icons/uk.png" alt=""></img>
    //         <div className="cartIcon">
    //           <ShoppingCartIcon />
    //           <span>0</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //
  );
}

export default Navbar