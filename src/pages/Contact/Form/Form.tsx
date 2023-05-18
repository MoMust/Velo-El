import React, { useState } from "react";
import "./Form.scss"
import { send } from "emailjs-com";
import Input from "../../../common/Validation/Input"
import TextInput from "../../../common/Validation/textInput.jsx";

const Form = () => {

     const [toSend, setToSend] = useState({
       from_name: "",
       from_email: "",
       select_product: "",
       message: "",
     });
 const onSubmit = (e) => {
   
   
    send(
      "service_l4qox2l",
      "template_3tq24tb",
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
    // console.log(toSend);
    
  return (
    <div className="form-container container">
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          name="from_name"
          label="Namn"
          errorMessage="Ditt namn måste innehålla mellan 1-20 bokstäver och bör inte innehålla speciella tecken"
          value={toSend.from_name}
          onChange={handleChange}
          setToSend={setToSend}
          toSend={toSend}
          pattern="^[A-Za-z]{1,20}$"
        />
        <Input
          type="email"
          name="from_email"
          label="Email"
          errorMessage="Din mail måste vara giltig"
          value={toSend.from_email}
          onChange={handleChange}
          setToSend={setToSend}
          toSend={toSend}
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
        />
        <div className="mb-3">
          <label
            htmlFor="select"
            className="form-label"
            style={{ fontSize: "20px" }}
          >
            Välj en produkt
          </label>
          <select
            id="select"
            className="form-select"
            name="select_product"
            value={toSend.select_product}
            onChange={handleChange}
            style={{ fontSize: "20px" }}
          >
            <option>Ingen produkt</option>
            <option>T20</option>
            <option>T20R</option>
            <option>T26</option>
            <option>V10</option>
            <option>CT20</option>
          </select>
        </div>

        <TextInput
          id="inputMessage"
          name="message"
          value={toSend.message}
          label="Ditt meddelande"
          errorMessage="Textfältet kan inte vara tomt"
          onChange={handleChange}
          setToSend={setToSend}
          toSend={toSend}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ fontSize: "20px" }}
          onClick={onSubmit}
        >
          Skicka
        </button>
      </form>
    </div>
  );
}

export default Form