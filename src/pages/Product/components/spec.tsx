import React from 'react'

const spec = ({ strapiData }) => {
  return (
    <>
      <div className="spec">
        <h1>Specifikation</h1>
        <ul className="spec-ul p-4 mt-4">
          <li>
            <span>Färg:</span> {strapiData?.attributes?.spec?.color}
          </li>
          <li>
            <span>COC godkänd:</span> {strapiData?.attributes?.spec?.COC}
          </li>
          <li>
            <span>Motor:</span> {strapiData?.attributes?.spec?.motor}
          </li>
          <li>
            <span>Hastighet:</span> {strapiData?.attributes?.spec?.speed}
          </li>
          <li>
            <span>Laddning:</span> {strapiData?.attributes?.spec?.charge}
          </li>
          <li>
            <span>Batteri:</span> {strapiData?.attributes?.spec?.battery}
          </li>
          <li>
            <span>Totalavikt:</span> {strapiData?.attributes?.spec?.weight}
          </li>
          <li>
            <span>Maxvikt förare:</span> {strapiData?.attributes?.spec?.maxweight}
          </li>
          <li>
            <span>Display:</span> {strapiData?.attributes?.spec?.display}
          </li>
          <li>
            <span>Räckvidd:</span> {strapiData?.attributes?.spec?.distance}
          </li>
          <li>
            <span>Däck:</span> {strapiData?.attributes?.spec?.wheels}
          </li>
          <li>
            <span>Material:</span> {strapiData?.attributes?.spec?.material}
          </li>
          <li>
            <span>Bromsar:</span> {strapiData?.attributes?.spec?.brakes}
          </li>
          <li>
            <span>Körlägen:</span> {strapiData?.attributes?.spec?.drivingmode}
          </li>
          <li>
            <span>Belysning:</span> {strapiData?.attributes?.spec?.lights}
          </li>
          <li>
            <span>Elektronisk hastighetskontroll:</span>{" "}
            {strapiData?.attributes?.spec?.speedcontrol}
          </li>
          <li>
            <span>Hastighetsjustering:</span>{" "}
            {strapiData?.attributes?.spec?.speedadjustment}
          </li>
          <li>
            <span>Suspension/fjädrad:</span>{" "}
            {strapiData?.attributes?.spec?.suspension}
          </li>
          <li>
            <span>Garanti:</span> {strapiData?.attributes?.spec?.guarantee}
          </li>
          <li>
            <span>Storlek:</span> {strapiData?.attributes?.spec?.size}
          </li>
          <li>
            <span>Förpackningsstorlek:</span> {strapiData?.attributes?.spec?.packsize}
          </li>
          <li>
            <span>Försäkring:</span> {strapiData?.attributes?.spec?.insurance}
          </li>
          <li>
            <span>Ingår med:</span> {strapiData?.attributes?.spec?.include}
          </li>
        </ul>
      </div>
    </>
  );
};

export default spec