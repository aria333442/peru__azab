import React from "react";
import "../css/Tablero.scss";
import { MdPlayArrow } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gettable } from "../actions/makechart";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { Bar, Doughnut, defaults } from "react-chartjs-2";
import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { getusers } from "../actions/getvisitors";
import DonutChart from "react-donut-chart";
import { IoMdAddCircle } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { getproducts } from "../actions/productinfo";
import { useHistory } from "react-router";
import Adminnav from "../components/Adminnav";
function Tablero() {
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
  useEffect(() => {
    dispatch(gettable());
  }, []);
  useEffect(() => {
    dispatch(getusers());
  }, []);
  useEffect(() => {
    dispatch(getproducts());
  }, []);
  const makechart = useSelector((state) => state.makechart);
  const getU = useSelector((state) => state.getU);
  const getP = useSelector((state) => state.getP);
  const data = {
    labels: ["Don", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    datasets: [
      {
        label: "Ventas",
        data: makechart.final,
        backgroundColor: [
          "#1665D8",
          "#1665D8",
          "#1665D8",
          "#1665D8",
          "#1665D8",
          "#1665D8",
          "#1665D8",
        ],

        borderWidth: 0,
        barPercentage: 0.5,
      },
      {
        label: "ventas anteriores",
        data: [300, 0, 900, 1005, 0, 0, 600],
        backgroundColor: [
          "#EDF0F2",
          "#EDF0F2",
          "#EDF0F2",
          "#EDF0F2",
          "#EDF0F2",
          "#EDF0F2",
          "#EDF0F2",
        ],

        borderWidth: 0,
        barPercentage: 0.5,
      },
    ],
  };
  const total = getU.users + getU.allvisitors;
  const registered = Math.ceil((getU.users / total) * 100);
  const noregestred = Math.ceil((getU.allvisitors / total) * 100);
  const page = "Tabelero";
  return (
    <div>
      <div className="tblmain">
        <div className="tblleft">
          <Sidebar />
        </div>
        <div className="tblright">
          <Adminnav page={page} />
          <div className="per">
            <p>Performance</p>
            <p>Últimos 7 días {<MdPlayArrow />}</p>
          </div>
          <div className="mini">
            <div className="cmplt">
              <div className="first__half">
                <p>Ventas completadas</p>
                <p>{makechart.Entregado}</p>
                <div className="d-flex first__half__div">
                  <p>
                    <IoMdArrowDropdown />
                  </p>
                  <p>16%</p>
                  <p>Esta semana</p>
                </div>
              </div>
              <div className="second__half">
                <p>
                  <GiConfirmed />
                </p>
              </div>
            </div>
            <div className="cncl">
              <div className="first__half">
                <p>VEntas CANCELADAS</p>
                <p>{makechart.canceladas}</p>
                <div className="d-flex first__half__div">
                  <p>
                    <IoMdArrowDropdown />
                  </p>
                  <p>12%</p>
                  <p>Esta semana</p>
                </div>
              </div>
              <div className="second__half">
                <p>
                  <MdCancel />
                </p>
              </div>
            </div>
            <div className="actv">
              <div className="first__half">
                <p>USUARIOS ACTIVOS</p>
                <p>{getU.alluser}</p>
                <div className="d-flex first__half__div">
                  <p>
                    <IoMdArrowDropdown />
                  </p>
                  <p>12%</p>
                  <p>Esta semana</p>
                </div>
              </div>
              <div className="second__half">
                <p>
                  <FaUserCircle />
                </p>
              </div>
            </div>
            <div className="usractv">
              <div className="first__half">
                <p>USUARIOS ACTIVOS</p>
                <p>{getU.alluser}</p>
                <div className="d-flex first__half__div">
                  <p>
                    <IoMdArrowDropdown />
                  </p>
                  <p>12%</p>
                  <p>Esta semana</p>
                </div>
              </div>
              <div className="second__half">
                <p>
                  <IoIosArrowDropupCircle />
                </p>
              </div>
            </div>
          </div>
          <div className="graph">
            <div className="gph">
              <div className="d-flex grapth__top">
                <p>Ventas de la tienda</p>
                <p>{makechart.finale + "$"}</p>
                <p>
                  <IoMdArrowDropup />
                </p>
                <p>16%</p>
                <p>Esta semana</p>
                <p>Últimos 7 días</p>
                <p>
                  <IoMdArrowDropdown />
                </p>
              </div>
              <div className="actual__chart">
                <Bar data={data} height={280} width={400}></Bar>
              </div>
            </div>
            <div className="mtr">
              <div className="dash__table_top">
                <p>Visitas</p>
              </div>
              <div className="dash__table_mid">
                <DonutChart
                  height={200}
                  width={200}
                  legend={false}
                  colors={["#F7D154", "#1070CA"]}
                  formatValues={(values, total) => `${total}`}
                  data={[
                    {
                      label: "",
                      value: getU.users,
                    },
                    {
                      label: "",
                      value: getU.allvisitors,
                    },
                  ]}
                />
                <div className="below__chart">
                  <div className="half__one">
                    <p>No registrados</p>
                    <p>{noregestred + "%"}</p>
                  </div>
                  <div className="half__two">
                    <p>Registrados</p>
                    <p>{registered + "%"}</p>
                  </div>
                </div>
              </div>
              <div className="dash__table_last">
                <p>Últimos 7 días</p>
                <p>
                  <IoMdArrowDropright />
                </p>
              </div>
            </div>
          </div>
          <div className="ventas">
            <div className="vnts">
              <p>Ventas Tienda</p>
            </div>
          </div>
          <div className="tblventasdiv">
            <div className="ventasupper">
              <div className="ventasprdcto">
                <div className="div__upper">
                  <div className="div__first">
                    <p style={{ textTransform: "uppercase" }}>productos</p>
                    <p>{getP.allproducts}</p>
                  </div>
                  <div className="div__second">
                    <p>
                      <IoMdAddCircle />
                    </p>
                  </div>
                </div>
                <div className="div__middle">
                  <p style={{ textTransform: "uppercase" }}>Categorías</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="div__last">
                    <div className="d-flex justify-content-around">
                      <p>Muebles </p>
                      <p>Mascotas</p>
                      <p>Niños </p>
                      <p>Decoración</p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p>{getP.Muebles}</p>
                      <p>{getP.Mascotas}</p>
                      <p>{getP.Niños}</p>
                      <p>{getP.Decoración}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ventashstry">
                <div className="div__upper">
                  <div className="div__first">
                    <p style={{ textTransform: "uppercase" }}>informes</p>
                    <p>240</p>
                  </div>
                  <div className="div__second">
                    <p>
                      <IoMdAddCircle />
                    </p>
                  </div>
                </div>
                <div className="div__middle">
                  <p>HISTORIA</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="div__last">
                    <div className="d-flex justify-content-around">
                      <p>Semanal </p>
                      <p>Mensual</p>
                      <p>Anual </p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p>40</p>
                      <p>40</p>
                      <p>40</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ventaslower">
              <div className="ventaspdid">
                <div className="div__upper">
                  <div className="div__first">
                    <p style={{ textTransform: "uppercase" }}>pedidos</p>
                    <p>{makechart.allorders}</p>
                  </div>
                </div>
                <div className="div__middle">
                  <p>ESTADO</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="div__last">
                    <div className="d-flex justify-content-around">
                      <p>Activos </p>
                      <p>Finalizados </p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <div className="d-flex">
                        <p>{makechart.activeorders}</p>
                        <p className="time">
                          <BiTimeFive />
                        </p>
                      </div>
                      <div className="d-flex">
                        <p>{makechart.Entregado}</p>
                        <p className="confirm">
                          <GiConfirmed />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ventasclnts">
                <div className="div__upper">
                  <div className="div__first">
                    <p style={{ textTransform: "uppercase" }}>clientes</p>
                    <p>{getU.alluser}</p>
                  </div>
                </div>
                <div className="div__middle">
                  <p>HISTORIA</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="div__last">
                    <div className="d-flex justify-content-around">
                      <p>Nuevos</p>
                      <p>Recurrentes </p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p>{getU.newV}</p>
                      <p>{getU.returning}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ventas">
            <div className="vnts">
              <p>Entradas del Blog</p>
            </div>
          </div>

          <div className="mini">
            <div className="tblentasdas">
              <p style={{ textTransform: "uppercase" }}>entradas nuevas</p>
              <div className="d-flex">
                <p>240</p>
                <p>
                  <IoMdAddCircle />
                </p>
              </div>
              <div className="d-flex">
                <p>
                  <IoMdArrowDropdown />
                </p>
                <p>12%</p>
                <p>Esta semana</p>
              </div>
            </div>
            <div className="tblelimi">
              <p style={{ textTransform: "uppercase" }}>entradas eliminadas</p>
              <div className="d-flex">
                <p>4</p>
                <p>
                  <MdCancel />
                </p>
              </div>
              <div className="d-flex">
                <p>
                  <IoMdArrowDropdown />
                </p>
                <p>12%</p>
                <p>Esta semana</p>
              </div>
            </div>
            <div className="tblevisit">
              <p>vistas nuevas al blog</p>
              <div className="d-flex">
                <p>13</p>
              </div>
              <div className="d-flex">
                <p>
                  <IoMdArrowDropdown />
                </p>
                <p>12%</p>
                <p>Esta semana</p>
              </div>
            </div>
            <div className="tblmasvista">
              <p>entradas más vista</p>
              <div className="d-flex">
                <p>Como cuidar muebles</p>
              </div>
              <div className="d-flex">
                <p>
                  <IoMdArrowDropdown />
                </p>
                <p>12%</p>
                <p>Esta semana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablero;
