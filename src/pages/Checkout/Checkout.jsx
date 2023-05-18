import React from "react";
import "./Checkout.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));

    return total.toFixed(2);
  };

  return (
    <div className="checkout pt-3 ps-3">
      <h5>DIN VARUKORG</h5>
      <hr></hr>
      <div className="row gap-5 ">
        <div className="col-lg-7 col-md-12">
          {products?.map((item) => (
            <div className="item pt-2 mb-3" key={item.id}>
              <div className="row ms-3 checkout-wrapper gap-3">
                <div className="row product col-12">
                  <Link className="image col-4 product-link" to={`/product/${item?.id}`}>
                    <img
                      src={process.env.REACT_APP_UPLOAD_URL + item.img}
                      alt="velo-electric-bike"
                    ></img>
                  </Link>
                  <div className="row desc-action col-5 ps-lg-5">
                    <div>
                      <Link className="product-link" to={`/product/${item?.id}`}>
                        <h3>{item.title}</h3>
                      </Link>

                      <ul className="spec m-0 p-0">
                        <li>{item.color}</li>
                        <li>{item.material}</li>
                        <li>{item.size}</li>
                      </ul>
                    </div>
                    <p>Fri leverans</p>
                    <div className="amount-price-mobile">
                      <span
                        className="p-0"
                        style={{
                          fontSize: "14px",
                          color: "rgb(39, 39, 175)",
                          fontWeight: "bold",
                        }}
                      >
                        {item.quantity} x {item.price}
                      </span>
                    </div>
                    <div
                      className="delete col-5 pe-2 m-0 d-flex"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <DeleteForeverIcon className="delete-icon justify-content-end" />
                      Ta bort
                    </div>
                  </div>
                  <div className="amount-price col-3 gap-5">
                    <div className="amount d-flex justify-content-center  align-items-center"></div>
                    <div className="price d-flex justify-content-center mt-5">
                      <span
                        className="p-0"
                        style={{
                          fontSize: "14px",
                          color: "rgb(39, 39, 175)",
                          fontWeight: "bold",
                        }}
                      >
                        {item.quantity} x {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="price-board col-lg-4 col-md-12">
          <div className="price-wrap">
            <div className="row part-total">
              <div className="col-8">
                <p className="ps-3">Deltotal</p>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <span className="d-flex justify-content-end ">
                  {totalPrice()} KR
                </span>
              </div>
            </div>
            <div className="row frakt-total">
              <div className="col-9">
                <p className="ps-3">Frakt</p>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <span className="d-flex justify-content-end ">0 KR</span>
              </div>
            </div>
            <div className="row total mt-5 ps-3">
              <div className="col-12">
                <p
                  className=""
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Totalsumma(inklusive.moms)
                </p>
              </div>
              <div className="col-12">
                <span className="">{totalPrice()} KR</span>
              </div>
            </div>
            <div className="action d-flex flex-column gap-4">
              <button
                className="btn btn-primary m-3"
                style={{ fontWeight: "bold" }}
              >
                TILL KASSAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
