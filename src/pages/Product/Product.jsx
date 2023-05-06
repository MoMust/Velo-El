import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useFetch from "../../common/hooks/useFetch";
import Spec from './components/spec.tsx'
const Product = () => {
  const id = useParams().id;


  const { strapiData, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log("product ", strapiData);


  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  

  return (
    <div className="row product d-flex m-0 pt-3 pb-3 ps-2 pe-2 gap">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left d-flex col-lg-8 col-sm-12 gap-3">
            <div className="images d-md-flex flex-column gap-3">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  strapiData?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              ></img>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  strapiData?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              ></img>
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  strapiData?.attributes?.[selectedImg]?.data?.attributes?.url
                }
                alt=""
              ></img>
            </div>
          </div>
          <div className="right col-lg-4 col-sm-12 mt-5 mb-5">
            <div className="title d-flex justify-content-center">
              <h1>{strapiData?.attributes?.title}</h1>
            </div>

            <div className="desc ms-5 pt-5">
              <p>{strapiData?.attributes?.desc}</p>
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
          <div className="mb-5"></div>
          <Spec strapiData={strapiData} />
          {/* <div className="slider col-12 p-0 m-0">
            <div
              id="carouselExampleControls"
              class="carousel slide "
              data-bs-ride="carousel"
            >
              <div class="carousel-inner m-50 p-0">
                <div class="carousel-item active">
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      strapiData?.attributes?.specImages?.data[0]?.attributes
                        ?.url
                    }
                    className="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      strapiData?.attributes?.specImages?.data[1]?.attributes
                        ?.url
                    }
                    className="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Product;
