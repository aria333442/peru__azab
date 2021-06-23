import React, { useState } from "react";
import "../css/footer.scss";
import { HiLocationMarker } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { TiLocationArrow } from "react-icons/ti";
import Media from "react-media";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { subs } from "../actions/subscribe";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import TreeItem from "@material-ui/lab/TreeItem";
import { ImCancelCircle } from "react-icons/im";
import { GrFormClose } from "react-icons/gr";

function Footer() {
  const [email, setemail] = useState();
  const [state, setstate] = useState(0);
  const dispatch = useDispatch();
  const subscribe = () => {
    dispatch(subs(email)).then((res) => {
      alert("thankyou for subscribing to Armea");
    });
    setemail("");
  };
  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        className="ventii"
        onClick={(e) => {
          window.location = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };
  const handle1 = () => {
    setstate(1);
  };
  const handle0 = () => {
    setstate(0);
  };
  const handle2 = () => {
    setstate(2);
  };
  const handle3 = () => {
    setstate(3);
  };

  return (
    <div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div className="footer">
                <div className="footer__logo">
                  <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619080123/logo_oo46gw.png"></img>
                </div>
                <div className="footer__information">
                  <h3
                    className="footer__header"
                    style={{ marginBottom: "25px" }}
                  >
                    Información
                  </h3>
                  <p>
                    <NavLink
                      className="below__header"
                      to="/zones"
                      style={{ background: "transparent", marginTop: "20px" }}
                    >
                      Zonas de envío
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="/cookies"
                      style={{ background: "transparent", marginTop: "15px" }}
                      className="below__header2"
                    >
                      Política de cookies
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/conditions" className="below__header2">
                      Condiciones de uso y compra{" "}
                    </NavLink>
                  </p>
                  <p>
                    <NavLink className="below__header2" to="/orderinfo">
                      Cómo hacer un pedido
                    </NavLink>
                  </p>
                  <p>
                    <NavLink className="below__header2" to="paymentinfo">
                      Métodos de pago
                    </NavLink>
                  </p>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Cuenta</h3>
                  <p className="below__header">
                    <NavLink
                      to="/orderhistory"
                      style={{ color: "white", backgroundColor: "#222222" }}
                    >
                      Mis compras
                    </NavLink>
                  </p>
                  <p className="below__header2">
                    <NavLink
                      to="/editdata"
                      style={{ color: "white", backgroundColor: "#222222" }}
                    >
                      Mis direcciones
                    </NavLink>
                  </p>
                  <p className="below__header2">
                    <NavLink
                      to="/personalinfo"
                      style={{ color: "white", background: "transparent" }}
                    >
                      Mis datos personales
                    </NavLink>{" "}
                  </p>
                  <div className="d-flex">
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619779715/visaa_i0unlw.png"
                      className="shshs"
                    ></img>
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619779419/master_o90qov.png"></img>
                  </div>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Contacto</h3>
                  <p className="below__header">
                    Mariano Escobedo 2631 col. Victoria Monterrey N.L.
                  </p>
                  <div className="d-flex">
                    <p className="footer__location">
                      <HiLocationMarker />
                    </p>
                    <p className="below__header2">México</p>
                  </div>
                  <div className="d-flex">
                    <p className="footer__location">
                      <BiPhone />
                    </p>
                    <p className="below__header2">(81) 8245 4321</p>
                  </div>
                  <ButtonMailto
                    label="ventas@armeamuebles.com"
                    mailto="mailto:ventas@armeamuebles.com"
                  />
                  <p
                    className="below__header2"
                    style={{ textTransform: "lowercase" }}
                  >
                    ARMEAMUEBLES.COM
                  </p>
                </div>
                <div className="footer__information2">
                  <h3 className="footer__header">Suscríbete</h3>
                  <div className="d-flex">
                    <input
                      className="Footer__input"
                      placeholder="Ingresa email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    ></input>
                    <button className="footer__button">
                      <p className="button__icon" onClick={subscribe}>
                        <TiLocationArrow />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div className="footer">
                <div className="footer__logo">
                  <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619080123/logo_oo46gw.png"></img>
                </div>
                <div className="footer__information">
                  <h3
                    className="footer__header"
                    style={{ marginBottom: "25px" }}
                  >
                    Información
                  </h3>
                  <p>
                    <NavLink
                      className="below__header"
                      to="/zones"
                      style={{ background: "transparent", marginTop: "20px" }}
                    >
                      Zonas de envío
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="/cookies"
                      style={{ background: "transparent", marginTop: "15px" }}
                      className="below__header2"
                    >
                      Política de cookies
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/conditions" className="below__header2">
                      Condiciones de uso y compra{" "}
                    </NavLink>
                  </p>
                  <p>
                    <NavLink className="below__header2" to="/orderinfo">
                      Cómo hacer un pedido
                    </NavLink>
                  </p>
                  <p>
                    <NavLink className="below__header2" to="paymentinfo">
                      Métodos de pago
                    </NavLink>
                  </p>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Cuenta</h3>
                  <p className="below__header">
                    <NavLink
                      to="/orderhistory"
                      style={{ color: "white", backgroundColor: "#222222" }}
                    >
                      Mis compras{" "}
                    </NavLink>
                  </p>
                  <p className="below__header2">
                    <NavLink
                      to="/editdata"
                      style={{ color: "white", backgroundColor: "#222222" }}
                    >
                      Mis direcciones
                    </NavLink>
                  </p>
                  <p className="below__header2">
                    <NavLink
                      to="/personalinfo"
                      style={{ color: "white", background: "transparent" }}
                    >
                      Mis datos personales
                    </NavLink>{" "}
                  </p>
                  <div className="d-flex">
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619779715/visaa_i0unlw.png"
                      className="shshs"
                    ></img>
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619779419/master_o90qov.png"></img>
                  </div>
                </div>
                <div className="footer__information">
                  <h3 className="footer__header">Contacto</h3>
                  <p className="below__header">
                    Mariano Escobedo 2631 col. Victoria Monterrey N.L.
                  </p>
                  <div className="d-flex">
                    <p className="footer__location">
                      <HiLocationMarker />
                    </p>
                    <p className="below__header2">México</p>
                  </div>
                  <div className="d-flex">
                    <p className="footer__location">
                      <BiPhone />
                    </p>
                    <p className="below__header2">(81) 8245 4321</p>
                  </div>
                  <ButtonMailto
                    label="ventas@armeamuebles.com"
                    mailto="mailto:ventas@armeamuebles.com"
                  />
                  <p
                    className="below__header2"
                    style={{ textTransform: "lowercase" }}
                  >
                    ARMEAMUEBLES.COM
                  </p>
                </div>
                <div className="footer__information2">
                  <h3 className="footer__header">Suscríbete</h3>
                  <div className="d-flex">
                    <input
                      className="Footer__input"
                      placeholder="Ingresa email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    ></input>
                    <button className="footer__button">
                      <p className="button__icon" onClick={subscribe}>
                        <TiLocationArrow />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div
              className="container-fluid m-0 p-0"
              style={{ overflow: "hidden" }}
            >
              <div className="footers">
                <div>
                  <div className="footer__logos">
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619080123/logo_oo46gw.png"></img>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="d-flex">
                      <img
                        src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619779715/visaa_i0unlw.png"
                        style={{ width: "40px", height: "40px" }}
                      ></img>
                      <img
                        src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619779419/master_o90qov.png"
                        style={{
                          width: "40px",
                          height: "40px",
                          marginTop: "-1px",
                        }}
                      ></img>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="footer__informations">
                    <div
                      className={state === 0 ? "main__0 active0" : "main__0"}
                    >
                      <div>
                        <h3 className="footer__headers" onClick={handle1}>
                          Información
                        </h3>
                      </div>
                      <div>
                        <h3 className="footer__headers" onClick={handle2}>
                          Cuenta
                        </h3>
                      </div>
                      <div>
                        <h3 className="footer__headers" onClick={handle3}>
                          Contacto
                        </h3>
                      </div>
                    </div>
                    <div
                      className={state === 1 ? "main__1 active1" : "main__1"}
                    >
                      <div className="d-flex ">
                        <h3 className="footer__headers">Información</h3>

                        <span onClick={handle0}>
                          <ImCancelCircle />
                        </span>
                      </div>
                      <p>
                        <NavLink
                          to="/zones"
                          style={{
                            background: "tranparent",
                            color: "white",
                          }}
                        >
                          Zonas de envío
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          to="/cookies"
                          style={{
                            background: "tranparent",
                            color: "white",
                            backgroundColor: "#222222",
                          }}
                        >
                          Política de cookies
                        </NavLink>
                      </p>
                      <p className="below__header2s">
                        <NavLink
                          to="/conditions"
                          style={{
                            background: "tranparent",
                            color: "white",
                            backgroundColor: "#222222",
                          }}
                        >
                          Condiciones de uso y compra
                        </NavLink>
                      </p>
                      <p className="below__header2s">
                        <NavLink
                          to="/orderinfo"
                          style={{
                            background: "tranparent",
                            color: "white",
                            backgroundColor: "#222222",
                          }}
                        >
                          Cómo hacer un pedido
                        </NavLink>
                      </p>
                      <p className="below__header2s">
                        <NavLink
                          to="/paymentinfo"
                          style={{
                            background: "tranparent",
                            color: "white",
                            backgroundColor: "#222222",
                          }}
                        >
                          Métodos de pago
                        </NavLink>
                      </p>
                    </div>
                    <div
                      className={state === 2 ? "main__2 active2" : "main__2"}
                    >
                      <div className="d-flex ">
                        <h3 className="footer__headers">Cuenta</h3>

                        <span onClick={handle0}>
                          <ImCancelCircle />
                        </span>
                      </div>
                      <p className="below__headers">
                        <NavLink
                          to="/orderhistory"
                          style={{ color: "white", backgroundColor: "#222222" }}
                        >
                          Mis compras{" "}
                        </NavLink>
                      </p>
                      <p className="below__header2s">
                        <NavLink
                          to="/editdata"
                          style={{ color: "white", backgroundColor: "#222222" }}
                        >
                          Mis direcciones
                        </NavLink>
                      </p>
                      <p className="below__header2s">
                        <NavLink
                          to="/personalinfo"
                          style={{
                            color: "white",
                            background: "tranparent",
                            backgroundColor: "#222222",
                          }}
                        >
                          Mis datos personales
                        </NavLink>{" "}
                      </p>
                    </div>
                    <div
                      className={state === 3 ? "main__3 active3" : "main__3"}
                    >
                      <div className="d-flex ">
                        <h3 className="footer__headers"> Contacto</h3>

                        <span onClick={handle0}>
                          <ImCancelCircle />
                        </span>
                      </div>
                      <p className="below__headers">
                        Mariano Escobedo 2631 col. Victoria Monterrey N.L.
                      </p>
                      <div className="d-flex">
                        <p className="footer__locations">
                          <HiLocationMarker />
                        </p>
                        <p className="below__header2s">México</p>
                      </div>
                      <div className="d-flex">
                        <p className="footer__locations">
                          <BiPhone />
                        </p>
                        <p className="below__header2s">(81) 8245 4321</p>
                      </div>
                      <p
                        style={{
                          marginTop: "-12px",
                          marginLeft: "7px",
                          fontSize: "11px",
                        }}
                      >
                        <ButtonMailto
                          label="ventas@armeamuebles.com"
                          mailto="mailto:ventas@armeamuebles.com"
                        />
                      </p>
                      <p
                        className="below__header2s"
                        style={{ textTransform: "lowercase" }}
                      >
                        ARMEAMUEBLES.COM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
}

export default Footer;
