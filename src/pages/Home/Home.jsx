import React, { useState } from "react";
import "./Home.scss";

import List from "../../components/List/List.tsx";
import FilterList from "../../components/List/FilterList.tsx";

export interface Product {
  image: String;
  category: Number;
  name: String;
  price: String;
  oldPrice: String;
  id: Number;
}


const Home = () => {
  let Data = [
    {
      image: "assets/images/CT20/CT20-1.webp",
      category: "1",
      name: "V10 - EBIKE",
      price: "11.699KR",
      oldPrice: "12.990KR",
      id: 1,
    },

    {
      image: "assets/images/CT20/CT20-1.webp",
      category: "1",
      name: "CT20 - EBIKE",
      price: "27.099KR",
      oldPrice: "30.090KR",
      id: 2,
    },

    {
      image: "assets/images/CT20/CT20-1.webp",
      category: "2",
      name: "VE02 - ELSPARKCYKEL",
      price: "6.299KR",
      oldPrice: "6.990KR",
      id: 3,
    },
  
  let Products: Product = [
    {
      image: "assets/images/CT20/CT20-1.webp",
      category: 1,
      name: "V10 - EBIKE",
      price: "11.699KR",
      oldPrice: "12.990KR",
      id: 1,
    },

    {
      image: "assets/images/CT20/CT20-1.webp",
      category: 1,
      name: "CT20 - EBIKE",
      price: "27.099KR",
      oldPrice: "30.090KR",
      id: 2,
    },

    {
      image: "assets/images/CT20/CT20-1.webp",
      category: 2,
      name: "VE02 - ELSPARKCYKEL",
      price: "6.299KR",
      oldPrice: "6.990KR",
      id: 3,
    },

    {
      image: "assets/images/CT20/CT20-1.webp",
      category: 2,

      name: "VE01 - ELSPARKCYKEL",
      price: "4.499KR",
      oldPrice: "4.990KR",
      id: 4,
    },
    {
      image: "assets/images/CT20/CT20-1.webp",

      category: 2,

      name: "VE01 - ELSPARKCYKEL",
      price: "4.499KR",
      oldPrice: "4.990KR",
      id: 5,
    },
  ];


  let [filterValue, setFilterValue] = useState("All");

  let onFilterButtonClick = (event: Event) => {
    let value: string = event.target.value;

    setFilterValue(value);
  };

  return (
    <div className="home">
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
        <FilterList onFilterButtonClick={onFilterButtonClick} />
        <List productList={Products} filterValue={filterValue} />
      </div>
    </div>
  );
};

export default Home;
