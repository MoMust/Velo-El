import React,{ Fragment} from "react";
import "./Service.scss"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import BuildIcon from "@mui/icons-material/Build";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Item from "./Components/Item.tsx";

const Service = () => {
  return (
    <>
      <div className="content row justify-content-center m-5">
        <div className="top text-center d-flex justify-content-center col- mb-5">
          <div className="top-header">
            <h1>SERVICE</h1>
            <hr className="line"></hr>
          </div>
        </div>
        <div className="center text-center row d-flex flex-column justify-content-center mt-4 mb-5 col-10 ">
          <h2 className="mb-4">RETUR OCH GARANTI POLICY</h2>
          <h3 className="mb-4">12 månaders garanti</h3>
          <p>
            Velo Electric erbjuder en unik upplevelse för kunder som söker ett
            modernt och hållbart transportmedel. Vi säljer ett brett utbud av
            coola elcyklar och elsparkcyklar från ledande tillverkare med
            senaste tekniken. Dessa produkter är utformade för att ge enkelhet,
            bekvämlighet och prestanda. Velo Electrics erfarna personal hjälper
            kunderna att hitta rätt produkt för deras behov och livsstil,
            oavsett om de söker en cykel/moped för pendling, turer eller fritid.
            Vår vision är att aktivt bidra till en grönare miljö. Att välja våra
            produkter istället för bilen, så bidrar du till minskad
            koldioxidutsläpp samt till att forma ett klimatsmart samhälle.
          </p>
        </div>
        <div className="bottom row mt-5 mb-5 justify-content-center">
          <Item
            header="Vad gör vi för att åtgärda ditt problem med din cykel?"
            text="Om en komponent anses vara felaktig eller skadad utan användarens
              fel, kommer vi att utfärda en ersättningsdel. Vi kommer att hjälpa
              dig att byta ut eventuella felaktiga delar. Vi kommer att ersätta
              delar som har skadats under leveransen. Om produkten inte kan
              repareras efter ett rimligt antal försök enligt vår bedömning,
              kommer vi att tillhandahålla ägaren en ersättningsprodukt."
            icon={<BuildIcon style={{ fontSize: "40px" }} />}
          />
          <Item
            header="Vad vi inte kommer att göra"
            text="Velo Electrics kräver att man skickar foton eller video av skadade
              delar innan de ersätts. Garantiservice erbjuds endast till den
              ursprungliga ägaren och inte till andra ägare. Velo Electrics
              betalar inte för tredjepartservice eller returfrakt och täcker
              inte skador som uppstår under leverans om ägaren ordnar sin egen
              leverans."
            icon={<DoNotTouchIcon style={{ fontSize: "40px" }} />}
          />
          <Item
            header="Reklamera"
            text={
              <Fragment>
                Vänligen mejla oss på{" "}
                <span style={{ color: "rgb(60, 60, 201)" }}>
                  support@VeloEl.com{" "}
                </span>
                om du behöver reklamera eller har andra frågor om garantin.
              </Fragment>
            }
            icon={<ChangeCircleIcon style={{ fontSize: "40px" }} />}
          />
          <Item
            header="Retur"
            text=" Du har alltid ångerrätt i 14 dagar enligt
              konsumentskyddslagstiftningen. Detta innebär att du som kund har
              rätt att ångra ditt köp genom att meddela Velo Electric detta inom
              14 dagar från att du tagit emot den beställda varan
              (ångerfristen). Varan ska skickas i retur inom 14 dagar räknat
              från det datum du meddelat Velo Electric om att du utnyttjat din
              ångerrätt."
            icon={<KeyboardReturnIcon style={{ fontSize: "40px" }} />}
          />
          <Item
            header="Återbetalning"
            text="När vi har mottagit din returerade produkt tar det 3-5 arbetsdagar
              för oss att behandla din återbetalning."
            icon={<CurrencyExchangeIcon style={{ fontSize: "40px" }} />}
          />
        </div>
      </div>
    </>
  );
};

export default Service;
