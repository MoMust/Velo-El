import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import List from "../../components/List/List.tsx"

const Home = () => {
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
        <div className="top d-flex justify-content-center">
          <div className="filter-item">
            <h1 className="filter-header d-flex justify-content-center">VÅRA PRODUKTER</h1>
            <hr className="line"></hr>
            <div className="wrap-links">
              <Link className="filter-links" to="/" >Alla produkter</Link>
              <Link className="filter-links" to="/" >Elsparkcyklar</Link>
              <Link className="filter-links" to="/" >Ebikes/Elmopeder</Link>
            </div>
          </div>
        </div>
        <List />
      </div>
    </div>
  );
};

export default Home;
