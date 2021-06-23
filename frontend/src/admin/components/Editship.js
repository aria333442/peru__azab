import Sidebar from "./Sidebar";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createshipp } from "../actions/createshipping";
import React, { useState } from "react";
import { updateshipp } from "../actions/updateshipping";

function Editship() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const { ID } = useParams();
  console.log(ID);
  const [name, setname] = useState();
  const [duration, setduration] = useState();
  const [price, setprice] = useState();
  const dispatch = useDispatch();
  const makeshipping = () => {
    const item = { name, duration, price, id: ID };
    console.log(item);
    dispatch(updateshipp(item)).then((res) => {
      alert("created");
      window.location.reload();
    });
  };
  return (
    <div>
      <div className="encatmain">
        <div className="encatleft">
          <Sidebar />
        </div>
        <div className="encatright">
          <div className="encathead">
            <div className="encattab">
              <div className="encatta">
                <p>Ajustes</p>
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
          <div className="encatnue">
            <div className="encattleft">
              <NavLink to="/admin/allshipping" className="kukka">
                <IoIosArrowDropleftCircle />
              </NavLink>
            </div>
            <div className="encattright">
              <p>Nuevo método de envío</p>
            </div>
          </div>
          <div className="encatmini">
            <div className="encatminileft">
              <div className="encatlefth">
                <p>NOMBRE DEl método de envío</p>
              </div>
              <div className="encatgorianum">
                <input
                  className="encatgorianumin"
                  placeholder="Nombre del método de envío"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>
              </div>
              <div className="encattag">
                <p>Duración</p>
              </div>
              <div className="enewcattagin">
                <input
                  className="encattaginn"
                  placeholder="Duración"
                  value={duration}
                  onChange={(e) => setduration(e.target.value)}
                ></input>
              </div>
              <div className="encatslug">
                <p>precio</p>
              </div>
              <div className="encatslugin">
                <input
                  placeholder="precio"
                  className="enewcatslugin"
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                ></input>
              </div>
              <div className="encataggr">
                <p
                  className="addcateggory"
                  onClick={makeshipping}
                  style={{ cursor: "pointer" }}
                >
                  AGREGAR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editship;
