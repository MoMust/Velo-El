import React from "react";
import './FilterList.scss'


const FilterList = ({ onFilterButtonClick }) => {


  return (
    <div className="top d-flex justify-content-center">
      <div className="filter-item">
        <h1 className="filter-header d-flex justify-content-center">
          VÅRA PRODUKTER
        </h1>
        <hr className="line"></hr>
        <div className="wrap-btn d-flex justify-content-center">
          <div className="container">
            <button
              className="btn"
              type="button"
              value="All"
              onClick={onFilterButtonClick}
            >
              All
            </button>
            <button
              className="btn "
              type="button"
              value="Elsparkcyklar"
              onClick={onFilterButtonClick}
            >
              Elsparkcykel
            </button>
            <button
              className="btn"
              type="button"
              value="Ebikes/Elmopeder"
              onClick={onFilterButtonClick}
            >
              Ebikes
            </button>
            {/* {test.map((text) => (
              <FilterButton
                key={text}
                text={text}
                active={text === chosen}
                onClick={() => {
                    setChosen(text)
                }}
              />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterList