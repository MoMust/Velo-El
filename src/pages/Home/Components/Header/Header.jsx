import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="header-wrapper">
        <div className="header- row d-flex p-5">
          <div className="left col-lg-6 col-md-12">
            <p className="header-text">
              Velo <span style={{ color: "rgb(60, 60, 201)" }}>Electric</span>
            </p>
            <h2>Lätt, tyst & ren</h2>
            <p>
              Välkommen till en värld av icke kompromiss, <br></br>
              el cyklar i lättvikt och hög prestanda.
            </p>
          </div>
          <div className="right col-lg-6 pe-sm-0">
            <div className="d-flex flex-column">
              <div>
                <Link className="header-brand" to="/products/1">
                  E-BIKES{" "}
                  <span className="hover" style={{ color: "rgb(39, 39, 175)" }}>
                    /
                  </span>
                </Link>
              </div>

              <div>
                <Link className="header-brand" to="/products/2">
                  ELSPARKCYKLAR{" "}
                  <span className="hover" style={{ color: "rgb(39, 39, 175)" }}>
                    /
                  </span>
                </Link>
              </div>
              <div>
                <Link className="header-brand-disabled disabled-link" to="/products/3">
                  ELCYKLAR{" "}
                  <span className="hover" style={{ color: "rgb(39, 39, 175)" }}>
                    /
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
