import React from 'react'
import './Contact.scss'
import Form from "./Form/Form.tsx"
const Contact = () => {
  return (
    <>
      <div className="header d-flex justify-content-center">
        <div>
          <h1>
            KONTAKTA VELO <span style={{ color: "rgb(39, 39, 175)" }}>EL</span>
          </h1>
          <hr className="line"></hr>
        </div>
      </div>

      <div className="row wrap mb-5">
        <div className="left col-lg-6 d-flex d-flex justify-content-end p-0">
          <div className="form-wrap ">
            <Form />
          </div>
        </div>
        <div className="right col-lg-6 d-flex flex-column text-center p-0">
          <h2>Kontakt info</h2>
          <p>Maila oss</p>
          <p>SUPPORT@VELOEL.COM</p>
        </div>
      </div>
    </>
  );
}

export default Contact