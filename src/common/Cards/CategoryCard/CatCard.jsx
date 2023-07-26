import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch"

const CatCard = ({ product }) => {
  console.log("check", product)
  return (
    <div className="styled-card pt-5 d-flex justify-content-center flex-column">
      <div className=" d-flex justify-content-center p-4">
        <Link to={`/product/${product?.id}`}>
          {/* How to make an image with style of 100 width and length */}
          <img
            className="card-img-top"
            src={
              process.env.REACT_APP_UPLOAD_URL +
              product?.attributes?.img?.data?.attributes?.url
            }
            alt=""
          ></img>
        </Link>
      </div>

      <div className="card-body  d-flex justify-content-center">
        <div className="item-info  gap-2">
          <p className="card-text text-center">{product?.attributes?.title}</p>
          <div className="price d-flex d-flex justify-content-center ">
            <p
              className="card-text fw-light"
              style={{ textDecoration: "line-through" }}
            >
              {product?.attributes?.price + 3000 + " SEK"}
            </p>
            <p className="card-text fw-normal">{`${product?.attributes.price} SEK`}</p>
          </div>
          <div className="product-att pb-5 d-flex justify-content-center gap-3">
            <div>
              <p className="fs-6 m-0">Färg:</p>
              <p className="fw-light fs-6  m-0">
                {product?.attributes?.spec?.color}
              </p>
            </div>
            <div>
              <p className=" fs-6  m-0">Hastighet:</p>
              <p className="fw-light fs-6  m-0">
                {product?.attributes?.spec?.speed}
              </p>
            </div>
            <div>
              <p className=" fs-6  m-0">Batteri:</p>
              <p className="fw-light fs-6  m-0">
                {product?.attributes?.spec?.battery}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
