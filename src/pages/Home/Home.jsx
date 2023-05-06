import React, { useState } from "react";
import "./Home.scss";
// import axios from "axios"
import List from "../../common/List/List.tsx";
import Content from "./Components/Content/Content.tsx";
import FilterItem from "./Components/Content/ContentComponents/FilterItem.tsx";
import Header from "./Components/Header/Header.tsx";
import useFetch from "../../common/hooks/useFetch";

const Home = () => {

  
  const { strapiData, loading, error } = useFetch("/products?populate=*");

  let [filterValue, setFilterValue] = useState("Alla");

  // console.log(data.attributes.img.data.attributes.url);

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
          <FilterItem setFilterValue={setFilterValue} filterValue={filterValue}/>
        </div>

        <List
          productList={strapiData}
          filterValue={filterValue}
          loading={loading}
          error={error}
        />
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
