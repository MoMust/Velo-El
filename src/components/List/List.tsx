import React from "react";
import "./List.scss";

const Data = [
  {
    image: "assets/images/CT20/CT20-1.webp",
    category: "1",
    name: "V10 - EBIKE",
    price: "11.699KR",
    oldPrice: "12.990KR",
    id: "1",
  },

  {
    image: "assets/images/CT20/CT20-1.webp",
    category: "1",
    name: "CT20 - EBIKE",
    price: "27.099KR",
    oldPrice: "30.090KR",
    id: "2",
  },

  {
    image: "assets/images/CT20/CT20-1.webp",
    category: "2",
    name: "VE02 - ELSPARKCYKEL",
    price: "6.299KR",
    oldPrice: "6.990KR",
    id: "3",
  },

  {
    image: "assets/images/CT20/CT20-1.webp",
    category: "2",
    name: "VE01 - ELSPARKCYKEL",
    price: "4.499KR",
    oldPrice: "4.990KR",
    id: "4",
  },
  {
    image: "assets/images/CT20/CT20-1.webp",
    category: "2",
    name: "VE01 - ELSPARKCYKEL",
    price: "4.499KR",
    oldPrice: "4.990KR",
    id: "4",
  },
];
const List = () => {
  return (
    <div className="bottom row d-flex justify-content-center">
      {Data.map((product) => (
        <div className="card styled-card">
          <img
            className="card-img-top"
            src={product.image}
            alt="Card image cap"
          ></img>
          <div className="card-body d-flex justify-content-center">
            <div className="item-info text-center">
              <p className="card-text">{product.name}</p>
              <div className="price d-flex">
                <p className="card-text">{product.oldPrice}</p>
                <p className="card-text">{product.price}</p>
              </div>
              <p className="card-text">{product.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
