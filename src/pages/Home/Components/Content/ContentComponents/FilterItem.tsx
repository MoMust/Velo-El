import React from "react";
import './FilterItem.scss'
const FilterItem = ({setFilterValue, filterValue}) => {

  let onFilterButtonClick = (event) => {
    let value = event.target.value;
    setFilterValue(value);
  };


  return (
    <>
      <div className="filter-item">
        <h1 className="filter-header d-flex text-center justify-content-center">
          VÅRA PRODUKTER {"\n"}
        </h1>
        <h3 className="d-flex text-center justify-content-center">
          {filterValue}
        </h3>

        <hr className="line"></hr>
        <div className="wrap-btn d-flex justify-content-center">
          <div className="btns">
            <button
              className="btn"
              type="button"
              value="Alla"
              onClick={onFilterButtonClick}
            >
              Alla
            </button>
            <button
              className="btn"
              type="button"
              value="Elsparkcyklar"
              onClick={onFilterButtonClick}
            >
              Elsparkcyklar
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
