import React from "react";
import './FilterItem.scss'
const FilterItem = ({setFilterValue}) => {

  let onFilterButtonClick = (event) => {
    let value = event.target.value;
    setFilterValue(value);
  };


  return (
    <>
      <div className="filter-item">
        <h1 className="filter-header d-flex text-center justify-content-center">
          VÅRA PRODUKTER
        </h1>
        <hr className="line"></hr>
        <div className="wrap-btn d-flex justify-content-center">
          <div className="btns">
            <button
              className="btn"
              type="button"
              value="All"
              onClick={onFilterButtonClick}
            >
              All
            </button>
            <button
              className="btn"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterItem;
