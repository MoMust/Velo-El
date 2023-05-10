import React, { useState } from "react";
import "./Form.scss"
import { send } from "emailjs-com";


const Form = () => {

     const [toSend, setToSend] = useState({
       from_name: "",
       from_email: "",
       select_product: "",
       message: "",
     });
 const onSubmit = (e) => {
   e.preventDefault();
   
    send(
      "service_l4qox2l",
      "template_9g797pk",
      toSend,
      "user_z0ZrJ8xdlfZwDeLvMXTFT"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
 };

 const handleChange = (e) => {
   setToSend({ ...toSend, [e.target.name]: e.target.value });
 };
    
    
  return (
    <div className="form-container container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Namn
          </label>
          <input
            type="text"
            className="form-control"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name="from_email"
            value={toSend.from_email}
            onChange={handleChange}
            id="inputEmail"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="select" className="form-label">
            Välj en produkt
          </label>
          <select
            id="select"
            className="form-select"
            name="select_product"
            value={toSend.select_product}
            onChange={handleChange}
          >
            <option>Ingen produkt</option>
            <option>T20</option>
            <option>T20R</option>
            <option>T26</option>
            <option>V10</option>
            <option>CT20</option>
          </select>
        </div>
        <label htmlFor="inputMessage" className="form-label">
          Ditt meddelande
        </label>
        <textarea
          className="form-control mb-3"
          id="inputMessage"
          name="message"
          value={toSend.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Skicka
        </button>
      </form>
    </div>
  );
}

export default Form