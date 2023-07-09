import React, { Fragment } from "react";
import "./About.scss";
import Item from "./Components/Item.tsx"
const About = () => {
  return (
    <div className="about">
      <div className="header d-flex justify-content-center">
        <div>
          <h1>OM OSS</h1>
          <hr className="line"></hr>
        </div>
      </div>
      <div className="row wrap m-0 p-0">
        <Item
          header={
            <Fragment>
              FÖR VÅRA{" "}
              <span style={{ color: "rgb(39, 39, 175)" }}>ELDRIVNA </span>
              KUNDER
            </Fragment>
          }
          text="Velo Electric har sitt säte i Stockholm och är en webshop för
          elcyklar, elmopeder, elsparkcyklar. Tillsammans med våra leverantörer
          har vi en gemensam vision – att tillverka elfordon som är kraftfulla,
          coola och miljövänliga."
          image="assets/images/19.webp"
          className="row item first p-4 mb-5"
        />
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <Item
          header={
            <Fragment>
              VÅR PASSION FÖR <span style={{ color: "green" }}>GRÖNT</span>
            </Fragment>
          }
          text="Vi vill aktivt bidra till en grönare miljö. Genom att välja Velo
              Electrics elfordon istället för bilen så bidrar du till minskade
              koldioxidutsläpp och främjar till ett mer klimatsmart samhälle.
              Var med oss på den resan!"
          image="assets/images/00358.jpg"
          className="row item2 first p-4"
        />
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <Item
          header={
            <Fragment>
              VI VILL BEHÅLLA KONTAKTEN MED
              <span style={{ color: "rgb(39, 39, 175)" }}> VÅRA KUNDER</span>
            </Fragment>
          }
          text="För oss på Velo Electric är det viktigt att du kan nå oss enkelt
              och få svar inom kort. Har du frågor eller funderingar kring våra
              produkter, tveka då inte att höra av dig till oss via mejl på
              Support@veloel.com"
          image="assets/images/support.jpg"
          className="row item first p-4"
        />
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
      </div>
    </div>
  );
};

export default About;
