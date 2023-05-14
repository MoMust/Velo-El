import React from 'react'

const Item = (props) => {
  return (
    <div className="item col-lg-12 col-md-12 mb-5 text-center align-self-center">
      <div className="icon p-3">
        {props.icon}
      </div>
      <h2>{props.header}</h2>
      <p>
        {props.text}
      </p>
    </div>
  );
}

export default Item