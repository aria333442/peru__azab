import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/login.scss";
import Nav from "./Nav";
import { logg } from "../actions/login";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "react-helmet";

function Register() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [message, setmesage] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const handlesubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(logg(user)).then((res) => {});
  };

  const log = useSelector((state) => state.log);
  if (log.message === "login successful") {
    history.push("/");
  }

  const handlecheck = () => {};
  return (
    <div>
      <Helmet>
        <title>Armea/login</title>
        <meta name="description" content="to login on armea" />
        <meta name="keywords" content="armea,armealogin" />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="register">
        <div className="form-box">
          <h1 className="form-title">
            Para seguir, ingresa tu e-mail y contraseña
          </h1>
          <div className="form-container">
            <form onSubmit={handlesubmit}>
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
              {log.message ? (
                <div class="alert alert-danger" role="alert">
                  {log.message}
                </div>
              ) : null}
              <button type="submit" className="form-button">
                Ingresar
              </button>
            </form>
            <NavLink to="/register" className="register-link">
              CREAR CUENTA
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
