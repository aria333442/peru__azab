import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import "../css/Pedidof.scss";
import Select from "react-select";
import { getorder } from "../../actions/getorders";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { ordbydate } from "../actions/orderbydate";
import Paginate from "react-paginate";
import Resume from "./Resume";
import { useHistory } from "react-router";

function Pending() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const [pagenumber, setpagenumber] = useState(0);
  const worksperpage = 5;
  const pagesvisited = pagenumber * worksperpage;
  const dispatch = useDispatch();
  const [blur, setblur] = useState(0);
  const [orderid, setorderid] = useState();
  const [status, setstatus] = useState({
    value: "Pendiente",
    label: "Pendiente",
  });
  const [start, setstart] = useState();
  const [end, setend] = useState();
  const [query, setquery] = useState();
  useEffect(() => {
    dispatch(getorder());
  }, []);
  const orders = useSelector((state) => state.orders);
  const options = [
    {
      value: "Pendiente",
      label: "Pendiente",
    },
    {
      value: "Proceso",
      label: "Proceso",
    },
    {
      value: "Enviado",
      label: "Enviado",
    },
    {
      value: "Entregado",
      label: "Entregado",
    },
    {
      value: "Pagado",
      label: "Pagado",
    },
  ];
  const showstatus = (status) => {
    if (status === "Pagado") {
      return (
        <div className="d-flex soop">
          <p
            style={{
              backgroundColor: "#DBFF00",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginTop: "5px",
              marginRight: "10px",
            }}
          ></p>
          <p>{status}</p>
        </div>
      );
    } else if (status === "Pendiente") {
      return (
        <div className="d-flex soop">
          <p
            style={{
              backgroundColor: "#F00B0B",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginTop: "5px",
              marginRight: "10px",
            }}
          ></p>
          <p>{status}</p>
        </div>
      );
    } else if (status === "Proceso") {
      return (
        <div className="d-flex soop">
          <p
            style={{
              backgroundColor: "#F09001",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginTop: "5px",
              marginRight: "10px",
            }}
          ></p>
          <p>{status}</p>
        </div>
      );
    } else if (status === "Enviado") {
      return (
        <div className="d-flex soop">
          <p
            style={{
              backgroundColor: "#0943D7",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginTop: "5px",
              marginRight: "10px",
            }}
          ></p>
          <p>{status}</p>
        </div>
      );
    } else if (status === "Entregado") {
      return (
        <div className="d-flex soop">
          <p
            style={{
              backgroundColor: "#0DCC09",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginTop: "5px",
              marginRight: "10px",
            }}
          ></p>
          <p>{status}</p>
        </div>
      );
    }
  };
  const handleopen = (id) => {
    setorderid(id);
    setblur(1);
  };
  const dateit = (e, picker) => {
    let sasa = JSON.stringify(picker.startDate._d);
    let date = sasa.substr(1, 10).split("-").reverse();
    let starts = date.join("-");
    let sassa = JSON.stringify(picker.endDate._d);
    let datee = sassa.substr(1, 10).split("-").reverse();
    let ends = datee.join("-");
    setstart(starts);
    setend(ends);
    if (starts) {
      const item = {
        start: starts,
        end: ends,
      };
      dispatch(ordbydate(item));
    }
  };
  const pageCount = Math.ceil(orders.orders.length / worksperpage);
  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const ordbyD = useSelector((state) => state.ordbyD);
  const handleit = () => {
    setblur(0);
  };
  return (
    <div>
      <div className={blur === 0 ? "pedfmain" : "pedfmain bluri"}>
        <div className="pedfleft">
          <Sidebar />
        </div>
        <div className="pedfright">
          <div className="pedfhead">
            <div className="pediftab">
              <div className="pedfta">
                <p>Pedidos</p>
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
          <div className="pedffirst">
            <div className="pedffirstsub">
              <div className="pedfbuss">
                <input
                  className="pedfbus"
                  placeholder="&#x1F50E;&#xFE0E; Buscar pedido"
                  value={query}
                  onChange={(e) => setquery(e.target.value)}
                ></input>
              </div>
              <div className="pedfordr">
                <p>ordenar por:</p>
              </div>
              <div className="pedfest">
                <Select
                  placeholder="ESTADO"
                  className="selectit"
                  options={options}
                  value={status}
                  onChange={setstatus}
                ></Select>
              </div>
              <div className="pedfest">
                <DateRangePicker
                  onApply={(event, picker) => dateit(event, picker)}
                >
                  <button>RANGO FETCHA</button>
                </DateRangePicker>
              </div>
              <div className="pedfdes">
                <button
                  className="pedfdesca"
                  onClick={() => {
                    setstart("");
                  }}
                >
                  Quitar Filtro
                </button>
              </div>
            </div>
          </div>
          <div className="pedftab">
            <div className="pedftabsub">
              <table className="pedftable">
                <tr className="pedftabtr">
                  <th className="pedftdnro">Nro Orden</th>
                  <th className="pedftdclt">Cliente</th>
                  <th className="pedftdfecha">Fecha</th>
                  <th className="pedftdmonto">Monto Total</th>
                  <th className="pedftdestado">Estado</th>
                </tr>
                {query
                  ? orders.orders.map((ord) => {
                      if (`${ord.number}` === query) {
                        return (
                          <tr
                            className="pedftabtr"
                            onClick={() => handleopen(ord._id)}
                            style={{ cursor: "pointer" }}
                          >
                            <td className="pedftdnro">{ord.number}</td>
                            <td className="pedftdclt">{ord.email}</td>
                            <td className="pedftdfecha">{ord.date}</td>
                            <td className="pedftdmonto">${ord.amountpayed}</td>
                            <td className="pedftdestado">
                              {showstatus(ord.status)}
                            </td>
                          </tr>
                        );
                      }
                    })
                  : start
                  ? ordbyD.order
                      .slice(pagesvisited, pagesvisited + worksperpage)
                      .map((or) => {
                        return (
                          <tr
                            className="pedftabtr"
                            onClick={() => handleopen(or._id)}
                            style={{ cursor: "pointer" }}
                          >
                            <td className="pedftdnro">{or.number}</td>
                            <td className="pedftdclt">{or.email}</td>
                            <td className="pedftdfecha">{or.date}</td>
                            <td className="pedftdmonto">${or.amountpayed}</td>
                            <td className="pedftdestado">
                              {showstatus(or.status)}
                            </td>
                          </tr>
                        );
                      })
                  : orders.orders
                      .slice(pagesvisited, pagesvisited + worksperpage)
                      .map((ord) => {
                        if (status) {
                          if (ord.status === status.value) {
                            return (
                              <tr
                                className="pedftabtr"
                                onClick={() => handleopen(ord._id)}
                                style={{ cursor: "pointer" }}
                              >
                                <td className="pedftdnro">{ord.number}</td>
                                <td className="pedftdclt">{ord.email}</td>
                                <td className="pedftdfecha">{ord.date}</td>
                                <td className="pedftdmonto">
                                  ${ord.amountpayed}
                                </td>
                                <td className="pedftdestado">
                                  {showstatus(ord.status)}
                                </td>
                              </tr>
                            );
                          }
                        } else {
                          return (
                            <tr
                              className="pedftabtr"
                              onClick={() => handleopen(ord._id)}
                              style={{ cursor: "pointer" }}
                            >
                              <td className="pedftdnro">{ord.number}</td>
                              <td className="pedftdclt">{ord.email}</td>
                              <td className="pedftdfecha">{ord.date}</td>
                              <td className="pedftdmonto">
                                ${ord.amountpayed}
                              </td>
                              <td className="pedftdestado">
                                {showstatus(ord.status)}
                              </td>
                            </tr>
                          );
                        }
                      })}
              </table>
              <div className="paginate2">
                <Paginate
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Resume
        blurstate={blur}
        id={orderid}
        handleit={(chlo) => handleit(chlo)}
      />
    </div>
  );
}

export default Pending;
