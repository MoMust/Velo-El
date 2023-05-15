import React from 'react'

const Item = (props) => {
  return (
    <div className={props.className}>
      <div className=" text-wrapper col-lg-6 col-md-12">
        <h1 className="text-center mb-5">
          {props.header}
        </h1>
        <p>
          {props.text}
        </p>
      </div>
      <div className="img-wrap d-flex mb-3 col-lg-6 col-md-12">
        <img src={props.image}></img>
      </div>
    </div>
  );
}

export default Item