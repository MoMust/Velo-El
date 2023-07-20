import React from "react";
import { useParams } from "react-router-dom";
import "./Products.scss";
import useFetch from "../../common/hooks/useFetch";
import Card from "../../common/Cards/CategoryCard/CatCard.jsx";

const Products = () => {
  const id = useParams().id;

  const { strapiData, loading, error } = useFetch(
    `/categories/${id}?populate[products][populate]=*`
  );

  // let array = [];

  // strapiData.forEach((element) => array.push(element.attributes?.products));

  console.log("products", strapiData);

  return (
    <div className="products">
      {/* {array.flatMap((element) =>
          element?.data?.map((item) => <Card product={item} key={item.id} />)
        )} */}
      {strapiData.attributes?.products?.data?.map((item) => {
        return <Card product={item} key={item.id} />;
      })}
    </div>
  );
};

export default Products;
