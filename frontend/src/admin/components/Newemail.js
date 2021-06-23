import React, { useEffect, useState } from "react";
import "../css/Newemail.scss";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import Sidebar from "./Sidebar";
import { getuser } from "../actions/getuser";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { createemail } from "../actions/createemail";
import { useHistory } from "react-router";

function Newemail() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const dispatch = useDispatch();
  const [title, settitle] = useState();
  const [subject, setsubject] = useState();
  const [type, settype] = useState();
  const [description, setdescription] = useState();
  const [users, setuders] = useState([]);
  useEffect(() => {
    dispatch(getuser());
  }, []);
  const getUser = useSelector((state) => state.getUser);
  const options = getUser.user.map((us) => {
    return {
      value: us._id,
      label: us.email,
    };
  });
  const sendit = () => {
    let user = [];
    users.map((us) => {
      user.push({
        user: us.label,
      });
    });
    const item = {
      title,
      subject,
      type,
      description,
      users: user,
    };
    dispatch(createemail(item)).then((res) => {
      alert("email created");
    });
  };

  return (
    <div>
      <div>
        <div className="nmailmain">
          <div className="nmailleft">
            <Sidebar />
          </div>
          <div className="nmailright">
            <div className="nmailhead">
              <div className="nmailtab">
                <div className="nmailta">
                  <p>Correos</p>
                </div>
                <div className="icon">
                  <p>
                    <BiSearch />
                  </p>
                </div>
                <div className="iconr">
                  <p>
                    <MdNotificationsNone />
                  </p>
                </div>
              </div>
              <div className="user">
                <div className="use">
                  <p>Jhon Doe</p>
                </div>
                <div className="dp"></div>
              </div>
            </div>
            <div className="nmailnue">
              <div className="nmailsnueleft"></div>
              <div className="nmailsnueright">
                <p>Nueva Plantilla</p>
              </div>
            </div>
            <div className="nmailti">
              <div className="nmailtisub">
                <p>TITULO DEL CORREO</p>
              </div>
              <div className="nmailtisubr">
                <a href="">AGGRIGAR PLANTILLA PREDETERMINADA</a>
              </div>
            </div>
            <div className="nmailin">
              <div className="nmailinsub">
                <input
                  className="nmailtituin"
                  placeholder="Titulo correo"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="nmailfoto">
              <div className="nmailfotosub">
                <p>ASUNTO</p>
              </div>
            </div>

            <div className="nmailass">
              <input
                placeholder="Asunto"
                className="nmailassin"
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
              ></input>
            </div>
            <div className="nmailfoto">
              <div className="nmailfotosub">
                <p>TIPO DE CORREO</p>
              </div>
            </div>
            <div className="nmailprec">
              <div className="nmailpreecsb">
                <input
                  placeholder="Tipo"
                  className="nmailprecin"
                  value={type}
                  onChange={(e) => settype(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="nmaildes">
              <div className="nmaildessub">
                <p>DESCRIPCIÓN DEL PRODUCTO</p>
              </div>
            </div>
            <div className="nmaildesin">
              <div className="nmaildesinsld">
                <textarea
                  className="nmaildesinslddd"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="nmailfoto">
              <div className="nmailfotosub">
                <p>DESTINO</p>
              </div>
            </div>
            <div className="nmailbtn">
              <div className="nmailbttn">
                <Select
                  placeholder="DESTINO"
                  options={options}
                  isMulti={true}
                  value={users}
                  onChange={setuders}
                />
              </div>
            </div>
            <div className="d-flex slqwe">
              <p onClick={sendit} style={{ cursor: "pointer" }}>
                guardar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newemail;
