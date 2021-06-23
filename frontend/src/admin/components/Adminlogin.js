import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Helmet from "react-helmet";
import { adminlogg } from "../actions/adminlog";

function Adminlogin() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const handlesubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(adminlogg(user));
  };

  const addmiin = useSelector((state) => state.addmiin);
  if (addmiin.message === "login successful") {
    history.push("/admin");
  }

  return (
    <div>
      <Helmet>
        <title>Armea/login</title>
        <meta name="description" content="to login on armea" />
        <meta name="keywords" content="armea,armealogin" />
      </Helmet>

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
              {addmiin.message ? (
                <div class="alert alert-danger" role="alert">
                  {addmiin.message}
                </div>
              ) : null}
              <button type="submit" className="form-button">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
