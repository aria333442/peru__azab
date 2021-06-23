import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { rigg } from "../actions/register";
import "../css/register.scss";
import Confirmation from "./Confirmation";
import Nav from "./Nav";
import { GiConfirmed } from "react-icons/gi";
import Helmet from "react-helmet";
import Recaptcha from "react-google-invisible-recaptcha";

function Register() {
  const [name, setname] = useState();
  const [surname, setsurname] = useState();
  const [shipping_Address, setshipping_Address] = useState();
  const [region, setregion] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [postalcode, setpostalcode] = useState();
  const [phonenumber, setphonenumber] = useState();
  const dispatch = useDispatch();
  const [checked, setchecked] = useState(false);
  const history = useHistory();
  const [state, setstate] = useState(0);
  const reref = useRef();
  const handleregister = (e) => {
    e.preventDefault();
    reref.current.execute();
    if (
      !email ||
      !password ||
      !name ||
      !surname ||
      !shipping_Address ||
      !region
    ) {
      alert("Por favor, complete todos los campos.");
      reref.current.reset();
    } else {
      const form = {
        name,
        surname,
        shipping_Address,
        region,
        password,
        email,
      };
      dispatch(rigg(form));
    }
  };
  const resolved = () => {};
  const handlecheck = (e) => {
    if (e.target.checked == true) {
      setchecked(true);
    } else {
      setchecked(false);
    }
  };
  const handlepin = (pin) => {
    setstate(pin);
  };
  const rig = useSelector((state) => state.rig);

  return state === 0 ? (
    <div>
      <Helmet>
        <title>Armea/register</title>
        <meta name="description" content="registrarse en armea" />
        <meta name="keywords" content="armea,armearegister" />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="register-container">
        <div className="inner-box">
          <h1 className="register-login">Completa tus datos</h1>
          <form onSubmit={handleregister}>
            <div className="box">
              <div className="box1">
                <div class="form-group">
                  <label for="exampleInputEmail1" className="email-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese su nombre"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" className="pass-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese su apellido"
                    value={surname}
                    onChange={(e) => setsurname(e.target.value)}
                  />
                </div>
              </div>
              <div className="box1">
                <div class="form-group">
                  <label for="exampleInputEmail1" className="email-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" className="pass-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex mainbox">
              <input
                type="checkbox"
                className="check"
                onClick={handlecheck}
                value={checked}
              ></input>
              <label className="lable">
                <NavLink
                  to="#"
                  style={{ color: "black", background: "white" }}
                  onClick={() =>
                    window.open(
                      "https://armea.atiksoluciones.com/conditions",
                      "_blank"
                    )
                  }
                >
                  Acepto los términos y condiciones y autorizo el uso de mis
                  datos de acuerdo a la Declaración de Privacidad
                </NavLink>
              </label>
            </div>
            {rig.message ===
            "ya tiene una cuenta, inicie sesión en su cuenta" ? (
              <div class="alert alert-danger" role="alert">
                {rig.message}
              </div>
            ) : rig.message === "registered" ? (
              setstate(1)
            ) : null}
            <div>
              <button
                style={{ cursor: "pointer" }}
                className="form-link"
                type="submit"
                disabled={!checked}
              >
                CONTINUAR
              </button>
            </div>
          </form>
          <Recaptcha
            ref={reref}
            sitekey="6LfN7sEaAAAAAPcIMefTUvLgyR1pYlUU4matF8IC"
            onResolved={() => resolved()}
          />
        </div>
      </div>
    </div>
  ) : state === 1 ? (
    <div>
      <Confirmation
        email={email}
        password={password}
        handlepin={(pin) => handlepin(pin)}
      />
    </div>
  ) : (
    <div>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="d-flex justify-content-center">
        <div className="welcome__main">
          <div className="d-flex justify-content-center">
            <p className="welcome__text">
              <GiConfirmed />
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="welcome_text2">¡{name}! Creaste tu cuenta en Armea</p>
          </div>
          <div className="d-flex justify-content-center">
            <NavLink to="/personalinfo" className="welcome__link">
              CONTINUAR
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
