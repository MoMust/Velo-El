import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const Footer = () => {
  return (
    <div className="row m-0 footer">
      <div className="left p-3 col-lg-4 d-flex justify-content-center">
        <div className="item footer-logo text-center">
          <img
            className="footer-icon-1"
            src="../assets/icons/newLogo.png"
            alt=""
          ></img>
          <p>© VeloElectric 2023. All Rights Reserved.</p>
          <div className="icons-social d-flex justify-content-center">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
      <div className="center p-3 col-lg-4 d-flex justify-content-center">
        <div className="item">
          <div className="d-flex">
            <p>Se alla våra 2 omdömen på</p>
            <img src="../assets/icons/trustPilot.png" alt=""></img>
          </div>
          <div className="links">
            <h4 className="d-flex justify-content-center">LÄNKAR</h4>
            <Link className="link d-flex justify-content-center" to="/">
              Hem
            </Link>
            <Link className="link" to="/service">
              Service
            </Link>
            <Link className="link" to="/contact">
              Kontakta oss
            </Link>
            <Link className="link" to="/about">
              Om oss
            </Link>
          </div>
        </div>
      </div>
      <div className="right col-lg-4">
        <div className="location text-center d-flex flex-column justify-content-center">
          <p>
            <LocationOnIcon />
            Lännavägen 4, 141 63 Huddinge, <br></br>Stockholm, Sverige. SAP
            Handelsbolag<br></br>
            Org.nummer: 969798-2693{" "}
          </p>

          <p>
            <ContactSupportIcon />
            support@veloel.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
