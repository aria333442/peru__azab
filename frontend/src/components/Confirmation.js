import React, { useState } from "react";
import Nav from "./Nav";
import "../css/confirmation.scss";
import { useDispatch } from "react-redux";
import { logg } from "../actions/login";

function Confirmation(props) {
  const code = localStorage.getItem("code");
  const [pin, setpin] = useState();
  const dispatch = useDispatch();
  const handlecheck = () => {};
  let email = props.email;
  let password = props.password;
  const hanldeconfirm = () => {
    if (pin === code) {
      const user = {
        email,
        password,
      };
      dispatch(logg(user)).then((res) => {
        props.handlepin(2);
      });
    }
  };
  return (
    <div>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="d-flex justify-content-center">
        <div className="confirmation__main">
          <div className="d-flex justify-content-center">
            <p className="confirmation__header">
              Ingresa el código que te enviamos por e-mail
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="confiramtion__text">
              Lo enviamos a{" "}
              <span style={{ color: "#ff6606" }}>{props.email}</span> para
              confirmar que te pertenece. Si no lo encuentras revisa tu carpeta
              de correo no deseado.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              className="inputaa"
              placeholder="Ingrese el código."
              value={pin}
              onChange={(e) => setpin(e.target.value)}
              placeholder="**** ingrese el código de 4 dígitos"
            ></input>
          </div>
          <div className="d-flex justify-content-center">
            <p className="confirmation__continue" onClick={hanldeconfirm}>
              CONTINUAR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
