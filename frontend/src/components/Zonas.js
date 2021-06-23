import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/Zonas.scss";
import Footer from "./Footer";
import Nav from "./Nav";
import Helmet from "react-helmet";

function Zonas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlecheck = () => {};
  return (
    <div style={{ backgroundColor: "#fff5ee" }}>
      <Helmet>
        <title>Armea/Zones</title>
        <meta
          name="description"
          content="información sobre las zonas donde entregamos productos"
        />
        <meta
          name="keywords"
          content="NorOeste,NoEste,Oriente,Occidente,CentroNorte,CentroSur,SurOeste,SurEste"
        />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="mainaa">
        <div className="link__above">
          <NavLink to="/" className="linka">
            Inicio{" "}
          </NavLink>
          <p>{">"}</p>
          <p>Zonas de envio</p>
        </div>
        <div className="mt-4">
          <h1 className="zones___header">
            Zonas de <span>envió</span>
          </h1>
        </div>
        <div className="mt-4">
          <p className="actualaa">
            En la actualidad desde armeamuebles.com enviamos a las siguientes
            regiónes:
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="tablaaa">
            <table>
              <tr className="table__header__row">
                <th>Región</th>
                <th>Precio sin impuestos </th>
                <th>Portes (porcentaje del precio total del carrito)</th>
              </tr>
              <tr className="table_bottom_row">
                <td>NorOeste</td>
                <td>Sin Mínimo</td>
                <td>
                  5$ para pedidos inferiores a 25$, GRATIS para pedidos
                  superiores
                </td>
              </tr>
              <tr className="table_bottom_row">
                <td>NoEste</td>
                <td>5$</td>
                <td>10%</td>
              </tr>
              <tr className="table_bottom_row">
                <td>Oriente</td>
                <td>5$</td>
                <td>10%</td>
              </tr>
              <tr className="table_bottom_row">
                <td>Occidente</td>
                <td>5$</td>
                <td>10%</td>
              </tr>
              <tr className="table_bottom_row">
                <td>CentroNorte</td>
                <td>5$</td>
                <td>10%</td>
              </tr>
              <tr className="table_bottom_row">
                <td>CentroSur</td>
                <td>5$</td>
                <td>10%</td>
              </tr>
              <tr className="table_bottom_row">
                <td>SurOeste</td>
                <td>5$</td>
                <td>10%</td>
              </tr>
              <tr className="table_bottom_row">
                <td>SurEste</td>
                <td>5$</td>
                <td>10%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Zonas;
