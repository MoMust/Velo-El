import React from "react";
import "./Content.scss";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import InstagramIcon from "@mui/icons-material/Instagram";

const Top = () => {
  return (
    <>
      <div className="top text-center d-flex justify-content-center col-">
        <div className="top-header">
          <h1>
            VARFÖR VÄLJA VELO{" "}
            <span style={{ color: "rgb(60, 60, 201)" }}>ELECTRIC?</span>
          </h1>
          <hr className="line"></hr>
        </div>
      </div>
      <div className="center text-center mt-4 mb-5 col-10 ">
        <p>
          Velo Electric erbjuder en unik upplevelse för kunder som söker ett
          modernt och hållbart transportmedel. Vi säljer ett brett utbud av
          coola elcyklar och elsparkcyklar från ledande tillverkare med senaste
          tekniken. Dessa produkter är utformade för att ge enkelhet,
          bekvämlighet och prestanda. Velo Electrics erfarna personal hjälper
          kunderna att hitta rätt produkt för deras behov och livsstil, oavsett
          om de söker en cykel/moped för pendling, turer eller fritid. Vår
          vision är att aktivt bidra till en grönare miljö. Att välja våra
          produkter istället för bilen, så bidrar du till minskad
          koldioxidutsläpp samt till att forma ett klimatsmart samhälle.
        </p>
      </div>
      <div className="bottom row mt-5 mb-5 justify-content-center">
        <div className="left col-lg-5 col-md-12 mb-5 text-center">
          <div className="icon p-3">
            <ElectricBoltIcon style={{ fontSize: "40px" }} />
          </div>

          <h2>
            <span>MILJÖN</span> I FOKUS
          </h2>
          <p>
            Vår vision är att aktivt bidra till en grönare miljö. Att välja Velo
            Electrics elcykel istället för bilen, så bidrar du till minskad
            koldioxidutsläpp samt bidrar till att forma ett klimatsmart
            samhälle.
          </p>
        </div>
        <div className="middle col-lg-6 col-md-12 mb-5 text-center align-self-center">
          <div className="icon p-3">
            <BatteryChargingFullIcon style={{ fontSize: "40px" }} />
          </div>
          <h2>KRAFTIGA CYKLAR</h2>
          <p>
            {" "}
            Velo Electrics elcyklar är inte bara snabba - de är också utrustade
            med batterier som räcker länge. Velo Electrics elcyklar har en
            topphastighet på upp till hela 45 km/h och tar dig mellan 80-130 km
            per laddning, beroende på vilken modell du har och hur du trampar.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="right col-lg-7 col-md-12 text-center">
            <div className="icon"></div>
            <div className="icon p-3">
              <ContactSupportIcon style={{ fontSize: "40px" }} />
            </div>
            <h2>KUNDSUPPORT</h2>
            <p>
              Vi på Velo Electric strävar efter att ha kunder som alltid ska
              kunna känna sig nöjda och trygga med oss som säljare. För Velo
              Electric är det också viktigt att vi är lätta att nå och
              kontaktbara med våra kunder. Har du funderingar kring våra
              produkter eller andra frågor så tveka inte att höra av dig till
              oss via mejl på{" "}
              <span style={{ color: "rgb(60, 60, 201)" }}>
                Support@VeloEl.com.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="hr d-flex justify-content-center">
        <hr className="mb-5 mt-5" style={{ width: "60%" }}></hr>
      </div>
      {/* SPACE */}
      <div className="row mt-5"></div>
      <div className="insta-content mt-5">
        <div className="row top text-center d-flex justify-content-center m-0 p-0">
          <div className="top-header col-lg-12 col-md-12">
            <h1>DELA DIN UPPLEVELSE </h1>
            <hr className="line"></hr>
          </div>
          <div className="row center">
            <div className="center-icon">
              <InstagramIcon style={{ width: "80px", height: "80px" }} />
            </div>
            <div className="insta-hash p-3">
              <p>#VELOEL #VELOELECTRIC</p>
            </div>
            <div className="insta-text">
              <p>
                Besök vår officiella Instagram-sida och tagga oss för en chans
                att göra ett nytt inlägg.
              </p>
            </div>
          </div>
          <div className="bottom m-0 p-0">
            <div className="row bottom-images d-flex justify-content-center m-0 p-0">
              <div className="col-5">
                <img
                  className="img1"
                  src="assets/images/instaDesert.webp"
                  style={{ width: "90%" }}
                  alt=""
                ></img>
              </div>
              <div className="col-5">
                <img
                  src="assets/images/instaForest.webp"
                  style={{ width: "90%" }}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ads row d-flex justify-content-center gap-5 mt-5 labels">
        <div className="col-lg-3 col-md-12 d-flex justify-content-center align-items-center">
          <img
            src="assets/images/trustpilot.png"
            style={{ width: "150px" }}
            alt=""
          ></img>
        </div>
        <div className="col-lg-3 col-md-12 d-flex justify-content-center">
          <img
            src="assets/images/klarna.png"
            style={{ width: "150px", paddingTop: "15px" }}
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default Top;
