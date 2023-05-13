import React, { useState } from "react";
import "./errorMessage.scss";
const TextInput = (props) => {

    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
      setFocused(true);
    };
  return (
    <div className="wrap mb-4">
      <label htmlFor="inputMessage" className="form-label">
        {props.label}
      </label>
      <textarea
        className="form-control"
        id="inputMessage"
        name={props.name}
        value={props.value}
        onChange={(e) =>
          props.setToSend({
            ...props.toSend,
            [e.target.name]: e.target.value,
          })
        }
        required={true}
        onBlur={handleFocus}
        onFocus={()=> setFocused(true)}
        focused={focused.toString()}
        pattern={props.pattern}
      ></textarea>
      <span>{props.errorMessage}</span>
    </div>
  );
}

export default TextInput;