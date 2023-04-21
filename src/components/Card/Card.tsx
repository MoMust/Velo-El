import React from 'react'
import './Card.scss';
import { Link } from "react-router-dom";


const Card = ({product}) => {
  
  return (
    <div className="card styled-card">
      <Link to={`/product/${product.id}`}>
        <img
          className="card-img-top"
          src={product.image}
          alt=""
        ></img>
        
      </Link>
      <div className="card-body d-flex justify-content-center">
        <div className="item-info text-center">
          <p className="card-text">{product.name}</p>
          <div className="price d-flex">
            <p className="card-text">{product.oldPrice}</p>
            <p className="card-text">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card