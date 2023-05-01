import React from "react";
import "./List.scss";
import Card from "../Card/Card.tsx";



const List = ({ productList, filterValue, loading, error}) => {


  // console.log(filterValue);

  let filterdProductList = productList.filter((product) => {
    if (filterValue === "Elsparkcyklar") {
      return product.attributes.type === "esc";
    } else if (filterValue === "Ebikes/Elmopeder") {
      return product.attributes.type === "ebike";
    } else {
      return product;
    }
  });

  return (
    <div className="bottom row d-flex justify-content-center m-0">
      {error ? "Produkter kunde inte laddas!" : loading ? 'loading' : filterdProductList.map((item) => {
  
        return <Card product={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
