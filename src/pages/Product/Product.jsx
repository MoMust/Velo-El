import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useFetch from "../../common/hooks/useFetch";
import Spec from './components/spec.jsx'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import Loader from "../../common/Loader/Loader"
const Product = () => {
  const id = useParams().id;

  const dispatch = useDispatch();
  const { strapiData, loading, error } = useFetch(`/products/${id}?populate=*`);
  // console.log("product ", strapiData);


  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  
// console.log('s',strapiData)
  return (
    <div className="row product d-flex m-0 pt-3 pb-3 ps-2 pe-2 gap">
      {loading ? (
        <Loader />
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
                <span style={{ textDecoration: "line-through", color: "grey" }}>
                  {strapiData?.attributes?.price + 2000} KR
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <span>{strapiData?.attributes?.price} KR</span>
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
              <button
                className="btn"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: strapiData.id,
                      title: strapiData.attributes.title,
                      desc: strapiData.attributes.desc,
                      price: strapiData.attributes.price,
                      img: strapiData.attributes.img.data.attributes.url,
                      quantity,
                      color: strapiData?.attributes?.spec?.color,
                      material: strapiData?.attributes?.spec?.material,
                      size: strapiData?.attributes?.spec?.size,
                    })
                  )
                }
              >
                <AddShoppingCartIcon /> LÄGG TILL
              </button>
            </div>
          </div>
          <div className="mb-5"></div>
          <Spec strapiData={strapiData} />
          {/* SPEC TABLE END*/}
          {/* SPEC DESCRIPTION */}
          <div className="spec-desc-container">
            <div className="row spec-desc gap-5 justify-content-end">
              <div className="col-5 spec-desc-image">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    strapiData?.attributes?.specImages?.data[0]?.attributes?.url
                  }
                  alt=""
                ></img>
              </div>
              {/* Create compoenet for the spec description */}
              <div className="col-6 d-flex flex-column gap-3">
                <h2 className="spec-desc-title text-center">
                  {strapiData?.attributes?.specDescTitle1}
                </h2>
                <p>{strapiData?.attributes?.specDesc1}</p>
              </div>
            </div>
          </div>
          <div className="spec-desc-container">
            <div className="row spec-desc gap-5 justify-content-end">
              <div className="col-6 d-flex flex-column gap-3">
                <h2 className="spec-desc-title text-center">
                  {strapiData?.attributes?.specDescTitle2}
                </h2>
                <p>{strapiData?.attributes?.specDesc2}</p>
              </div>
              {/* Create compoenet for the spec description */}
              <div className="col-5 spec-desc-image">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    strapiData?.attributes?.specImages?.data[1]?.attributes?.url
                  }
                  alt=""
                ></img>
              </div>
              <div className="mb-5"></div>
              <div className="mb-5"></div>
            </div>
          </div>
          {/* SPEC DESCIPTION END*/}
        </>
      )}
    </div>
  );
};

export default Product;
