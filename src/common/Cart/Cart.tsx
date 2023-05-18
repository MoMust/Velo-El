import React from "react";
import "./Cart.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {useSelector} from "react-redux"
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

  

const Cart = () => {

  const products = useSelector(state=>state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () =>{
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));

    return total.toFixed(2);
  }

  return (
    <div className="cart pt-3 ps-3">
      <h5>DIN VARUKORG</h5>
      <hr></hr>
      {products?.map((item) => (
        <div className="item pt-2" key={item.id}>
          <div className="container- d-flex">
            <div className="image">
              <img
                src={process.env.REACT_APP_UPLOAD_URL + item.img}
                alt="velo-electric-bike"
              ></img>
            </div>
            <div>
              <div className="title d-flex">
                <p>{item.name}</p>
              </div>

              <div className="wraper">
                <div className="desc d-flex flex-column">
                  <p>{item.desc.substring(0, 100)}</p>
                </div>
                <div className="row d-flex m-0">
                  <span
                    className="col-5 p-0"
                    style={{
                      fontSize: "14px",
                      color: "rgb(39, 39, 175)",
                      fontWeight: "bold",
                    }}
                  >
                    {item.quantity} x {item.price}
                  </span>
                  <div className="delete col-6 pe-2 m-0 d-flex justify-content-end">
                    <DeleteForeverIcon
                      className="delete-icon justify-content-end"
                      onClick={() => dispatch(removeItem(item.id))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      ))}
      <div className="action d-flex flex-column gap-4">
        <Link className="btn btn-primary m-3" to="/checkout">TILL VARUKORGEN</Link>
      </div>
      <div className="row price m-0 pe-3">
        <div className="col-6">
          <p>SUMMA</p>
        </div>

        <div className="col-6 ">
          <span className="d-flex justify-content-end ">{totalPrice()} KR</span>
        </div>
      </div>
      <button className="reset-cart btn mb-3" onClick={()=> dispatch(resetCart())}>Rensa Varukorgen</button>
    </div>
  );
};

export default Cart;
