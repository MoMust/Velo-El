import React from "react";
import "./Cart.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";



const Cart = () => {



  const Data = [
    {
      image: "../assets/images/CT20/CT20-1.webp",
      category: "1",
      name: "V10 - EBIKE",
      price: "11.699KR",
      desc: "Coswheel T20 är mycket populär bland cykelentusiaster. Dess unika ramdesign och höga prestanda gör den till ett attraktivt val för många. Med sin starka motor och långa räckvidd är den perfekt för långa cykelturer, oavsett om du är ute på landsbygden eller i stadstrafiken. Coswheel T20 är utrustad med Shimano-delar, vilket garanterar hög kvalitet och prestanda. Cykeln har också pedaleffekt, en bortlös motor baktill, gasreglage, däckfjädring och mellanfjädring, vilket ger en bekväm och mjuk cykelupplevelse. Dessutom har den en överkomlig prisklass, vilket gör den till ett attraktivt val för alla som är intresserade av att investera i en elektrisk fatbike.",
      oldPrice: "12.990KR",
      id: "V10",
    },
    {
      image: "../assets/images/CT20/CT20-1.webp",
      category: "1",
      name: "CT20 - EBIKE",
      desc: "Coswheel T20 är mycket populär bland cykelentusiaster. Dess unika ramdesign och höga prestanda gör den till ett attraktivt val för många. Med sin starka motor och långa räckvidd är den perfekt för långa cykelturer, oavsett om du är ute på landsbygden eller i stadstrafiken. Coswheel T20 är utrustad med Shimano-delar, vilket garanterar hög kvalitet och prestanda. Cykeln har också pedaleffekt, en bortlös motor baktill, gasreglage, däckfjädring och mellanfjädring, vilket ger en bekväm och mjuk cykelupplevelse. Dessutom har den en överkomlig prisklass, vilket gör den till ett attraktivt val för alla som är intresserade av att investera i en elektrisk fatbike.",
      price: "27.099KR",
      oldPrice: "30.090KR",
      id: "CT20",
    },
    // {
    //   image: "../assets/images/CT20/CT20-1.webp",
    //   category: "1",
    //   name: "CT20 - EBIKE",
    //   desc: "Coswheel T20 är mycket populär bland cykelentusiaster. Dess unika ramdesign och höga prestanda gör den till ett attraktivt val för många. Med sin starka motor och långa räckvidd är den perfekt för långa cykelturer, oavsett om du är ute på landsbygden eller i stadstrafiken. Coswheel T20 är utrustad med Shimano-delar, vilket garanterar hög kvalitet och prestanda. Cykeln har också pedaleffekt, en bortlös motor baktill, gasreglage, däckfjädring och mellanfjädring, vilket ger en bekväm och mjuk cykelupplevelse. Dessutom har den en överkomlig prisklass, vilket gör den till ett attraktivt val för alla som är intresserade av att investera i en elektrisk fatbike.",
    //   price: "27.099KR",
    //   oldPrice: "30.090KR",
    //   id: "CT20",
    // },
    
  ];


  return (
    <div className="cart pt-3 ps-3">
      <h5>DIN VARUKORG</h5>
      <hr></hr>
      {Data?.map((item) => (
        <div className="item pt-2" key={item.id}>
          <div className="container- d-flex">
            <div className="image">
              <img src={item.image} alt="velo-electric-bike"></img>
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
                    style={{ fontSize: "14px", color: "rgb(39, 39, 175)", fontWeight: 'bold' }}
                  >
                    1 x {item.price}
                  </span>
                  <div className="delete col-6 pe-2 m-0 d-flex justify-content-end">
                    <DeleteForeverIcon className="delete-icon justify-content-end" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      ))}
      <div className="action d-flex flex-column gap-4">
        <button className="btn btn-primary m-3">Till Kassan</button>
      </div>
      <div className="row price m-0 pe-3">
        <div className="col-6">
          <p>SUMMA</p>
        </div>

        <div className="col-6 ">
          <span className="d-flex justify-content-end ">0000KR</span>
        </div>
      </div>
      <button className="reset-cart btn mb-3">Rensa Varukorgen</button>
    </div>
  );
};

export default Cart;
