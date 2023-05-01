import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useFetch from "../../common/hooks/useFetch";

const Product = () => {
  const id = useParams().id;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log("product ", data);

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  // console.log("id ", id)

  // const Images = [
  //   "../assets/images/CT20/CT20-1.webp",
  //   "../assets/images/CT20/2-1.webp"

  // ]

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
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Product;
