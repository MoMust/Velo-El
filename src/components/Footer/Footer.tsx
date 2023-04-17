import React from 'react'
import { Link } from "react-router-dom";
import './Footer.scss';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const Footer = () => {
  return (
    <div className="row footer justify-content-center">
      <div className="left col-4 d-flex justify-content-center">
        <div className="item">
          <img
            className="footer-icon-1"
            src="assets/icons/Velo-icon-noBg.png"
          ></img>
          <p>© VeloElectric 2023. All Rights Reserved.</p>
          <div className="icons-social d-flex justify-content-center">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
      <div className="center col-4 d-flex justify-content-center">
        <div className="item">
          <div className="d-flex">
            <p>Se alla våra 2 omdömen på</p>
            <img src="assets/icons/trustPilot.png" alt=""></img>
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
        <div className="item">{/* <Link className="link"></Link> */}</div>
      </div>
      <div className="right col-4 ">
        <div className="location">
          <LocationOnIcon />
          <p>
            Lännavägen 4, 141 63 Huddinge, <br></br>Stockholm, Sverige. SAP
            Handelsbolag<br></br>
            Org.nummer: 969798-2693{" "}
          </p>
        </div>
        <div className="support">
          <ContactSupportIcon />
          <p>support@veloel.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer