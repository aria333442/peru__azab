import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../css/popup.scss";
import { AiOutlineClose } from "react-icons/ai";

function Popup(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShow(true);
    }, 500);
  }, []);
  return (
    <div className={show === true ? "POP active" : "POP"}>
      <div className="poup__modal">
        <div className="close">
          <p className="close__icons" onClick={() => setShow(false)}>
            <AiOutlineClose />
          </p>
        </div>
        <div className="d-flex" className="content">
          <div className="poup__image">
            <img
              src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618350168/sssa_fkfudm.png"
              className="ima"
            ></img>
          </div>
          <div className="desc">
            <p className="pop__header">Solo por hoy</p>
            <h4 className="discount">-20% EN MUEBLES </h4>
            <p className="orig">
              Accede a nuestro catálogo online y encuentra el mueble que combina
              con tu personalidad.
            </p>
            <NavLink to="/shop">
              <p className="pop__button">LO QUIERO</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
