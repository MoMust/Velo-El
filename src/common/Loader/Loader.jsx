import React from 'react'
import "./Loader.scss"
const Loader = () => {
  return (
    <div className="loader-container d-flex justify-content-center align-items-center gap-3">
      
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader