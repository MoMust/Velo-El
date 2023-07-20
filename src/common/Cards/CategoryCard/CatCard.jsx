import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch"

const Card = ({ product }) => {
  return (
    <div className="styled-card d-flex justify-content-center flex-column">
      <div className="d-flex justify-content-center">
        <Link to={`/product/${product?.id}`}>
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
        <div className="item-info text-center">
          <p className="card-text">{product?.attributes?.title}</p>
          <div className="price d-flex">
            <p
              className="card-text fw-light"
              style={{ textDecoration: "line-through" }}
            >
              {product?.attributes?.price + 3000 + " SEK"}
            </p>
            <p className="card-text fw-normal">{`${product?.attributes.price} SEK`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
