import React, { useState } from "react";
import "./Home.scss";
import List from "../../common/List/List.tsx";
import Content from "./Components/Content/Content.tsx";
import FilterItem from "./Components/Content/ContentComponents/FilterItem.tsx";
import Header from "./Components/Header/Header.tsx";

const Home = () => {
  let Data = [
    {
      image: "assets/images/CT20/CT20-1.webp",
      category: "1",
      name: "V10 - EBIKE",
      price: "11.699KR",
      oldPrice: "12.990KR",
      id: "V10",
    },

    {
      image: "assets/images/CT20/CT20-1.webp",
      category: "1",
      name: "CT20 - EBIKE",
      price: "27.099KR",
      oldPrice: "30.090KR",
      id: "CT20",
    },

    {
      image: "assets/images/CT20/CT20-1.webp",
      category: "2",
      name: "VE02 - ELSPARKCYKEL",
      price: "6.299KR",
      oldPrice: "6.990KR",
      id: "VE02",
    },

    {
      image: "assets/images/CT20/CT20-1.webp",
      category: "2",
      name: "VE01 - ELSPARKCYKEL",
      price: "4.499KR",
      oldPrice: "4.990KR",
      id: "VE01",
    },
    {
      image: "assets/images/CT20/CT20-1.webp",
      category: "2",
      name: "VE03 - ELSPARKCYKEL",
      price: "4.499KR",
      oldPrice: "4.990KR",
      id: "VE03",
    },
  ];

  let [filterValue, setFilterValue] = useState("All");

  return (
    <div className="home">
      <Header />
      <div>
        <video className="videoTag" autoPlay loop muted>
          <source
            className="source"
            src="assets/videos/velo-electric-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="wrap d-flex flex-column">
        <div className="filter-wrap d-flex justify-content-center">
          <FilterItem setFilterValue={setFilterValue} />
        </div>

        <List productList={Data} filterValue={filterValue} />
        <div className="hr d-flex justify-content-center">
          <hr style={{ width: "60%" }}></hr>
        </div>

        <div className="content row justify-content-center m-5">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Home;
