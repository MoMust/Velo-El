import React from 'react'
import './Card.scss';
import { Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch"

const Card = ({product}) => {
  
  return (
    <div className="styled-card">
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
      <div className="card-body d-flex justify-content-center">
        <div className="item-info text-center">
          <p className="card-text">{product?.attributes.title}</p>
          <div className="price d-flex">
            <p className="card-text" style={{ textDecoration: "line-through" }}>
              {product?.attributes.price + "KR" ||
              product?.attributes.price + 300 + "KR"}
            </p>
            <p className="card-text">{`${product?.attributes.price}KR`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card