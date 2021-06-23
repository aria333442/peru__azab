import React, { useEffect, useState } from "react";
import "../css/Misdatos.scss";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editP } from "../actions/editpersonal";
import Helmet from "react-helmet";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

function Misdatos() {
  const FORM_ID = "payment-form";
  const user = JSON.parse(localStorage.getItem("user"));
  const [name, setname] = useState(user ? user.name : "");
  const [surname, setsurname] = useState(user ? user.surname : "");
  const [phonenumber, setphonenumber] = useState(user ? user.phone : "");
  const [streetnumber, setstreetnumber] = useState(
    user ? user.streetnumber : ""
  );
  const [town, settown] = useState(user ? user.town : "");
  const [shippingAddress, setshippingAddress] = useState(
    user ? user.shipping_Address : ""
  );
  const [condition, setcondition] = useState(user ? user.condition : "");
  const [postalcode, setpostalcode] = useState(user ? user.postalcode : "");
  const [mess, setmess] = useState();

  let message = "please register first";
  console.log(user);
  let useer = "";
  let id;
  if (user) {
    useer = user.name + " " + user.surname;
    id = user._id;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const handleedit = () => {
    if (user) {
      const form = {
        name,
        surname,
        phonenumber,
        streetnumber,
        town,
        shippingAddress,
        id,
        condition,
        postalcode,
      };
      dispatch(editP(form)).then((res) => {
        alert("edited");
        window.location.reload();
      });
    } else {
      setmess(message);
    }
  };
  const token = localStorage.getItem("token");
  const history = useHistory();
  if (!token) {
    history.push("/login");
  }
  const handlecheck = () => {};
  return (
    <div>
      <Helmet>
        <title>Armea/profile</title>
        <meta name="description" content="perfil de armea" />
        <meta name="keywords" content="Mis datos" />
        <script src="https://sdk.mercadopago.com/js/v2"></script>
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="misdatos">
        <div className="main">
          <div className="left___div__mis">
            <div className="upper">
              <div className="ph">
                <div>
                  {user.image ? (
                    <Image
                      publicId={user.image}
                      cloudName="dd77cqt5fs"
                      style={{
                        cursor: "pointer",
                        border: "1px solid #ff6606",
                        borderRadius: "50%",
                      }}
                    >
                      <Transformation
                        width="100"
                        height="100"
                        crop="scale"
                        gravity="face"
                        crop="thumb"
                        radius="max"
                      />
                    </Image>
                  ) : (
                    <img
                      alt="bawa"
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
                      className="uspp"
                    ></img>
                  )}
                </div>
              </div>
              <div className="jon">
                <p className="jonp">{user ? useer : "John Doe"}</p>
              </div>
              <div className="doe">
                <p className="jonp">
                  {user ? user.email : "Johndoe@email.com"}
                </p>
              </div>
            </div>

            <div className="icoon">
              <p className="icon">
                <AiOutlineUser />
              </p>
              <NavLink to="/orderhistory" className="compra">
                Compras
              </NavLink>
            </div>
            <div className="icoon">
              <p className="icon">
                <HiOutlineShoppingBag />
              </p>
              <NavLink to="/editdata" className="edit">
                Editar datos
              </NavLink>
            </div>
          </div>
          <div className="right__div_mis">
            <div className="hd">
              <p className="para">Mis datos</p>
            </div>
            <div className="rights">
              <div className="leftmi">
                <p className="ms">Mis datos de cuenta</p>
              </div>
              <div className="leftan">
                <NavLink to="/editdata" className="anchor">
                  editar
                </NavLink>
              </div>
            </div>
            <div className="rights">
              <div className="leftmi">
                <p className="uss">Usuario</p>
              </div>
              <div className="leftan">
                <p className="ema">Correo</p>
              </div>
            </div>
            <div className="usinput">
              <div className="inleft">
                <input
                  placeholder={user ? useer : "John Doe"}
                  className="input"
                ></input>
              </div>
              <div className="inright">
                <input
                  placeholder={user ? user.email : "Johndoe@email.com"}
                  className="inputleft"
                ></input>
              </div>
            </div>
            <div className="righta">
              <p className="uss">Contraseña</p>
            </div>
            <div className="rightb">
              <input placeholder="********" className="inputr"></input>
            </div>
            <div className="rights" style={{ marginTop: "10px" }}>
              <div className="leftmi">
                <p className="ms">Mis datos personales</p>
              </div>
              <div className="leftan">
                <p
                  className="anchor"
                  onClick={handleedit}
                  style={{ cursor: "pointer" }}
                >
                  editar
                </p>
              </div>
            </div>
            <div className="rights">
              <div className="leftmi">
                <p className="uss">Nombre</p>
              </div>
              <div className="leftan">
                <p className="ema">Apellido</p>
              </div>
            </div>
            <div className="usinput">
              <div className="inleft">
                <input
                  placeholder={user ? user.name : "Ingrese su nombre"}
                  className="input"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>
              </div>
              <div className="inright">
                <input
                  placeholder={user ? user.surname : "Ingrese su apellido"}
                  className="inputleft"
                  value={surname}
                  onChange={(e) => setsurname(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="rights">
              <div className="leftmi">
                <p className="uss">Calle y Número</p>
              </div>
              <div className="leftan">
                <p className="ema">Ciudad</p>
              </div>
            </div>
            <div className="usinput">
              <div className="inleft">
                <input
                  placeholder={
                    user.streetnumber
                      ? user.streetnumber
                      : "Ingrese calle y número"
                  }
                  className="input"
                  value={streetnumber}
                  onChange={(e) => setstreetnumber(e.target.value)}
                ></input>
              </div>
              <div className="inright">
                <input
                  placeholder={
                    user.town ? user.town : "Ingrese el nombre de su ciudad"
                  }
                  className="inputleft"
                  value={town}
                  onChange={(e) => settown(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="rights">
              <div className="leftmi">
                <p className="uss">Estado</p>
              </div>
              <div className="leftan">
                <p className="ema">Código Postal</p>
              </div>
            </div>
            <div className="usinput">
              <div className="inleft">
                <input
                  placeholder={
                    user.condition
                      ? user.condition
                      : "Ingrese el nombre de su estado"
                  }
                  className="input"
                  value={condition}
                  onChange={(e) => setcondition(e.target.value)}
                ></input>
              </div>
              <div className="inright">
                <input
                  placeholder={
                    user.postalcode
                      ? user.postalcode
                      : "Ingrese su código postal"
                  }
                  className="inputleft"
                  value={postalcode}
                  onChange={(e) => setpostalcode(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="righta">
              <p className="uss">Teléfono</p>
            </div>
            <div className="rightb">
              <input
                placeholder={user.phone ? user.phone : "Ingrese su numero"}
                className="inputr"
                value={phonenumber}
                onChange={(e) => setphonenumber(e.target.value)}
              ></input>
            </div>
            <div className="rightlasta">
              <p className="uss">Direcciones de envio</p>
            </div>
            <div className="rightlastb">
              <textarea
                placeholder={
                  user.shipping_Address
                    ? user.shipping_Address
                    : "Agregar Direccion"
                }
                className="agr"
                value={shippingAddress}
                onChange={(e) => setshippingAddress(e.target.value)}
              ></textarea>
            </div>

            {mess ? (
              <div class="alert alert-danger" role="alert">
                {mess}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Misdatos;
