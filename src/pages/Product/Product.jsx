import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useFetch from "../../common/hooks/useFetch";

const Product = () => {
  const id = useParams().id;


  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log("product ", data);

  let array = [];

  

  array = data?.attributes?.spec;
  console.log(array)
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  

  return (
    <div className="row product d-flex m-0 pt-3 pb-3 ps-2 pr-5 gap">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left d-flex gap-3">
            <div className="images d-flex flex-column gap-3">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              ></img>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              ></img>
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.[selectedImg]?.data?.attributes?.url
                }
                alt=""
              ></img>
            </div>
          </div>
          <div className="right mt-5">
            <div className="title d-flex justify-content-center">
              <h1>{data?.attributes?.title}</h1>
            </div>

            <div className="desc ms-5 pt-5">
              <p>{data?.attributes?.desc}</p>
            </div>
            <div className="price mb-5">
              <div className="d-flex justify-content-center">
                <span style={{ textDecoration: "line-through" }}>12.990kr</span>
              </div>
              <div className="d-flex justify-content-center">
                <span>11.699kr</span>
              </div>
            </div>
            <div className="d-flex gap-5 align-items-center justify-content-center">
              <div className="quantity d-flex gap-3">
                <button
                  className="btn"
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="btn"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button className="btn">
                <AddShoppingCartIcon /> ADD TO CART
              </button>
            </div>
          </div>
          <div className="spec">
            <h1>Specifikation</h1>
            <ul className="spec-ul p-4 mt-4">
              <li>
                <span>Färg:</span> {data?.attributes?.spec?.color}
              </li>
              <li>
                <span>COC godkänd:</span> {data?.attributes?.spec?.COC}
              </li>
              <li>
                <span>Motor:</span> {data?.attributes?.spec?.motor}
              </li>
              <li>
                <span>Hastighet:</span> {data?.attributes?.spec?.speed}
              </li>
              <li>
                <span>Laddning:</span> {data?.attributes?.spec?.charge}
              </li>
              <li>
                <span>Batteri:</span> {data?.attributes?.spec?.battery}
              </li>
              <li>
                <span>Totalavikt:</span> {data?.attributes?.spec?.weight}
              </li>
              <li>
                <span>Maxvikt förare:</span> {data?.attributes?.spec?.maxweight}
              </li>
              <li>
                <span>Display:</span> {data?.attributes?.spec?.display}
              </li>
              <li>
                <span>Räckvidd:</span> {data?.attributes?.spec?.distance}
              </li>
              <li>
                <span>Däck:</span> {data?.attributes?.spec?.wheels}
              </li>
              <li>
                <span>Material:</span> {data?.attributes?.spec?.material}
              </li>
              <li>
                <span>Bromsar:</span> {data?.attributes?.spec?.brakes}
              </li>
              <li>
                <span>Körlägen:</span> {data?.attributes?.spec?.drivingmode}
              </li>
              <li>
                <span>Belysning:</span> {data?.attributes?.spec?.lights}
              </li>
              <li>
                <span>Elektronisk hastighetskontroll:</span> {data?.attributes?.spec?.speedcontrol}
              </li>
              <li>
                <span>Hastighetsjustering:</span> {data?.attributes?.spec?.speedadjustment}
              </li>
              <li>
                <span>Suspension/fjädrad:</span> {data?.attributes?.spec?.suspension}
              </li>
              <li>
                <span>Garanti:</span> {data?.attributes?.spec?.guarantee}
              </li>
              <li>
                <span>Storlek:</span> {data?.attributes?.spec?.size}
              </li>
              <li>
                <span>Förpackningsstorlek:</span> {data?.attributes?.spec?.packsize}
              </li>
              <li>
                <span>Försäkring:</span> {data?.attributes?.spec?.insurance}
              </li>
              <li>
                <span>Ingår med:</span> {data?.attributes?.spec?.include}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
