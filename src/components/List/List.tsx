
import React from "react";
import "./List.scss";
import Card from "../Card/Card.tsx";
import { Product } from '../../pages/Home/Home'


const List = ({ productList, filterValue }) => {

  let filterdProductList = productList.filter((product: Product) => {
    if (filterValue === "Elsparkcyklar") {
      return product.category === 2;
    } else if (filterValue === "Ebikes/Elmopeder") {
      return product.category === 1;

    } else {
      return product;
    }
  });

  return (
    <div className="bottom row d-flex justify-content-center">

      {filterdProductList.map((item: any) => {
        return <Card product={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
