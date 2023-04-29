import React, {useState} from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const Images = [
    "../assets/images/CT20/CT20-1.webp",
    "../assets/images/CT20/2-1.webp"

  ]
  
  return (
    <div className="row product d-flex m-0 pt-3 pb-3 ps-2 pr-5 gap">
      <div className="left d-flex gap-3">
        <div className="images d-flex flex-column gap-3">
          <img src={Images[0]} alt="" onClick={(e) => setSelectedImg(0)}></img>
          <img src={Images[1]} alt="" onClick={(e) => setSelectedImg(1)}></img>
        </div>
        <div className="mainImg">
          <img src={Images[selectedImg]} alt=''></img>
        </div>
      </div>
      <div className="right mt-5">
        <div className="title d-flex justify-content-center">
          <h1>CT20 - EBIKE</h1>
        </div>

        <ul className="desc ms-5 pt-5">
          <li>48V 10AH LITHIUM BATTERI</li>
          <li>350W MOTOR</li>
          <li>RÄCKVIDD 40-60KM</li>
          <li>HOPFÄLLBAR</li>
          <li>ENKEL OCH SMIDIG</li>
        </ul>
        <div className="price mb-5">
          <div className="d-flex justify-content-center">
            <span style={{textDecoration: "line-through"}}>12.990kr</span>
          </div>
          <div className="d-flex justify-content-center">
            <span>11.699kr</span>
          </div>
        </div>
        <div className="d-flex gap-5 align-items-center justify-content-center">
          <div className="quantity d-flex gap-3">
            <button
              className="btn"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
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
    </div>
  );
}

export default Product