import React, { useEffect, useState } from "react";
import "../css/Editdata.scss";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editD } from "../actions/editdata";
import Helmet from "react-helmet";
import { BsFillEyeFill } from "react-icons/bs";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import { prof } from "../actions/profile";
import { BiPencil } from "react-icons/bi";

function Editdata() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [email, setemail] = useState();
  const [see, setsee] = useState("password");
  const [image, setimage] = useState();
  const [url, seturl] = useState();
  const email1 = user.email;

  const dispatch = useDispatch();
  let name1 = [];
  let name2;
  let surname;
  let id;
  if (user) {
    id = user._id;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const token = localStorage.getItem("token");
  const history = useHistory();
  //if (!token) {
  // history.push("/login");
  // }
  const hanldename = () => {
    if (user) {
      if (name) {
        name1 = [];
        name1 = name.split(" ");
        name2 = name1[0];
        surname = name1[1];
      }

      const form = {
        name: name2,
        email,
        password,
        surname,
        id,
      };
      dispatch(editD(form)).then((res) => {
        alert("el nombre ha sido cambiado con éxito");
        window.location.reload();
      });
    } else {
      alert("please register first");
    }
  };
  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dd77cqt5fs",
      uploadPreset: "ababeel",
      folder: "Armea",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        seturl(result.info.public_id + "." + result.info.format);
        const user = {
          email: email1,
          url: result.info.public_id + "." + result.info.format,
        };
        dispatch(prof(user)).then((res) => {
          window.location.reload();
        });
      }
    }
  );

  const handlesee = () => {
    if (see === "password") {
      setsee("text");
    } else if (see === "text") {
      setsee("password");
    }
  };
  const handlepassword = () => {
    if (user) {
      if (password === confirmpassword) {
        if (name) {
          name1 = [];
          name1 = name.split(" ");
          name2 = name1[0];
          surname = name1[1];
        }
        const form = {
          name: name2,
          password,
          email,
          surname,
          id,
        };
        dispatch(editD(form)).then((res) => {
          alert("la contraseña ha sido cambiada con éxito");
          window.location.reload();
        });
      } else {
        alert("password and confirm password must be same");
      }
    } else {
      alert("please register first");
    }
  };
  const handleemail = () => {
    if (user) {
      if (name) {
        name1 = [];
        name1 = name.split(" ");
        name2 = name1[0];
        surname = name1[1];
      }
      const form = {
        name: name2,
        email,
        password,
        surname,
        id,
      };
      dispatch(editD(form)).then((res) => {
        alert("el correo electrónico ha sido cambiado con éxito");
        window.location.reload();
      });
    } else {
      alert("please register first");
    }
  };
  const handlecheck = () => {};
  const openit = () => {
    myWidget.open();
  };

  return (
    <div>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <Helmet>
        <title>Armea/Editinfo</title>
        <meta
          name="description"
          content="para editar información personal en armea"
        />
        <meta name="keywords" content="Editinfo,armeaprofile" />
      </Helmet>
      <div className="misdatos">
        <div className="misdato">
          <div className="misdatosleft">
            <div className="phtag">
              <div className="leftf">
                {user.image ? (
                  <Image
                    publicId={user.image}
                    cloudName="dd77cqt5fs"
                    onClick={openit}
                    style={{
                      cursor: "pointer",
                      border: "1px solid #ff6606",
                      borderRadius: "50%",
                    }}
                  >
                    <Transformation
                      width="200"
                      height="200"
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
                    onClick={openit}
                  ></img>
                )}
                <p className="shoshaa" onClick={openit}>
                  <BiPencil />
                </p>
              </div>
              <div className="lefts">
                <p className="misp">{user ? user.name : "John doe"}</p>
              </div>
              <div className="leftt">
                <p className="misp">
                  {user ? user.email : "Jhondoe@correo.com"}
                </p>
              </div>
            </div>
            <div className="miscom">
              <p className="picon2">
                <HiOutlineShoppingBag />
              </p>
              <NavLink to="/orderhistory" className="btn1">
                Compras
              </NavLink>
            </div>
            <div className="miscomp">
              <p className="picon">
                <AiOutlineUser />
              </p>
              <NavLink to="#" className="btn2">
                Editar datos
              </NavLink>
            </div>
          </div>
          <div className="misdatosright">
            <p className="mishead">Editar datos</p>
            <div className="editar">
              <div className="edil">
                <p className="pright">Modificar usuario</p>
              </div>
            </div>
            <div className="editar">
              <div className="usua">
                <p className="usu">Usuario actual</p>
              </div>
              <div className="emai">
                <p className="ema">Nuevo usuario</p>
              </div>
            </div>
            <div className="editar">
              <div className="inr">
                <input
                  className="inputright"
                  placeholder={
                    user ? user.name + " " + user.surname : "John Doe"
                  }
                ></input>
              </div>
              <div className="inl">
                <input
                  className="inputleft"
                  placeholder={
                    user ? user.name + " " + user.surname + 2 : "John Doe"
                  }
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="but">
              <p
                className="butt"
                onClick={hanldename}
                style={{ cursor: "pointer" }}
              >
                MODIFICAR
              </p>
            </div>
            <div className="editar">
              <div className="edil">
                <p className="prig">Cambiar contraseña</p>
              </div>
            </div>
            <div className="akela">
              <div className="contras">
                <p className="contra">Contraseña actual</p>
              </div>
              <div className="contrasin">
                <input className="inputright" placeholder="******"></input>
              </div>
            </div>
            <div className="editar">
              <div className="usua">
                <p className="usu">Nueva contraseña</p>
              </div>
              <div className="emai">
                <p className="ema">Repetir contraseña</p>
              </div>
            </div>
            <div className="editar">
              <div className="inr">
                <input
                  className="inputright"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type={see}
                ></input>
                <i
                  style={{
                    position: "absolute",
                    marginLeft: "-25px",
                    cursor: "pointer",
                  }}
                  onClick={handlesee}
                >
                  <BsFillEyeFill />
                </i>
              </div>
              <div className="inl">
                <input
                  type={see}
                  className="inputleft"
                  placeholder="**********"
                  value={confirmpassword}
                  onChange={(e) => setconfirmpassword(e.target.value)}
                ></input>
                <i
                  style={{
                    position: "absolute",
                    marginLeft: "-25px",
                    cursor: "pointer",
                  }}
                  onClick={handlesee}
                >
                  <BsFillEyeFill />
                </i>
              </div>
            </div>
            <div className="but">
              <p
                className="butt"
                onClick={handlepassword}
                style={{ cursor: "pointer" }}
              >
                MODIFICAR
              </p>
            </div>
            <div className="camb">
              <p className="cambp">Cambiar email</p>
            </div>

            <div className="contrass">
              <p className="contra">Nuevo correo</p>
            </div>

            <div className="edla">
              <div className="lain">
                <input
                  className="inputleftt"
                  placeholder={user ? user.email : "John Doe"}
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </div>

              <div className="labt">
                <p
                  className="buttt"
                  onClick={handleemail}
                  style={{ cursor: "pointer" }}
                >
                  MODIFICAR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Editdata;
