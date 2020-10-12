import React, { Fragment } from "react";
import "../templates/Contact.css";

function Contact(props: any): JSX.Element {
  return (
    <Fragment>
      <div className="data-contact">
        <h1>Contacto</h1>
        <p>Dirección: Maestro M. Lopez esq. Cruz Roja, Cordoba, Argentina</p>
        <p>
          Telefono:{" "}
          <a href="tel:+54-9-351-5225249" rel="nothing">
            +54-9-351-5225249
          </a>
        </p>
        <p>
          Mail:{" "}
          <a href="mailto:fabian.guanco@gmail.com">fabian.guanco@gmail.com</a>
        </p>
        <p>
          WhatsApp:{" "}
          <a href="https://api.whatsapp.com/send?phone=+5493513963539">
            +54-9-351-5225249
          </a>
        </p>
      </div>

      <div className="form-contact">
        <label className="col-sm-3 col-form-label">Nombre </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName1"
          aria-describedby="nameHelp"
        />

        <label className="col-sm-3 col-form-label">Apellido </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputSurname1"
          aria-describedby="surnameHelp"
        />

        <label className="col-sm-3 col-form-label">Email </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        <label className="col-sm-3 col-form-label">Comentarios </label>
        <textarea className="form-control" id="exampleInputComment1" />

        <button type="button" className="btn btn-primary">
          Enviar mensaje
        </button>
      </div>
    </Fragment>
  );
}

export default Contact;
