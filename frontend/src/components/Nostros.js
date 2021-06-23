import React, { useEffect } from "react";

import "../css/Nostros.scss";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";

function Nostros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlecheck = () => {};

  return (
    <div
      className="container-fluid m-0 p-0 lallu"
      style={{ backgroundColor: "#fff5ee" }}
    >
      <Helmet>
        <title>Armea/about</title>
        <meta
          name="description"
          content="información sobre los productos y cómo se fabrican"
        />
        <meta
          name="keywords"
          content="Innovación,Compromiso,Trabajo en equipo,Integridad,Atención al servicio,Creamos"
        />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="nostros" style={{ marginTop: "100px" }}>
        <div className="d-flex breadcrumbs">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {" "}
            <p className="inc">Inicio </p>
          </NavLink>
          <p>{`>`}</p>
          <p>Nosotros</p>
        </div>
        <div className="photo">
          <p className="nospara">
            Bienvenidos a <span className="clrchg">ARMEA</span>, los mejores
            muebles para ti, tu familia y tu mascota. Todo en un solo lugar con{" "}
            <span className="clrchg">muebles que hacen click.</span>{" "}
          </p>
        </div>
        <div className="nosmain1">
          <div className="nosmainleft">
            <p className="misi">- Misión</p>
            <p className="paraa">
              Brindar soluciones innovadoras al cliente en cuanto a mobiliario,
              por medio de la experiencia “ármelo usted mismo”, que cumplan
              satisfacer sus necesidades tanto funcionales como decorativas; a
              precios bajos, confiando en las habilidades y capacidades de
              nuestro personal para así garantizar la durabilidad y calidad de
              nuestro mobiliario.
            </p>
          </div>
          <div className="nosmainright">
            <img
              className="jpg"
              alt="bawa"
              src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619876789/carpenter_irbsjn.jpg"
            ></img>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="nosicondiv">
            <div className="nosiconsub">
              <p className="nosicons">
                <img
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079854/grid1_kavmxo.png"
                  className="iconph"
                ></img>
              </p>
              <div>
                <p className="iconparanoshead">Creamos</p>
                <p className="iconparanosheadsm">Diseñamos nuestros muebles</p>
              </div>
            </div>
            <div className="nosiconsub">
              <p className="nosicons">
                <img
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079854/grid2_vmnhm7.png"
                  className="iconph"
                ></img>
              </p>
              <div>
                <p className="iconparanoshead">Fabricamos</p>
                <p className="iconparanosheadsm">Directo desde la Fábrica</p>
              </div>
            </div>
            <div className="nosiconsub">
              <p className="nosicons">
                <img
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079854/grid3_jr52ga.png"
                  className="iconph"
                ></img>
              </p>
              <div>
                <p className="iconparanoshead">Te ayudamos</p>
                <p className="iconparanosheadsm">Consúltenos</p>
              </div>
            </div>
            <div className="nosiconsub">
              <p className="nosicons">
                <img
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079855/grid4_qmcm2i.png"
                  className="iconph"
                ></img>
              </p>
              <div>
                <p className="iconparanoshead">Enviamos</p>
                <p className="iconparanosheadsm">2/5 días de entrega</p>
              </div>
            </div>
          </div>
        </div>

        <div className="nosmain2">
          <div className="nosmainleft">
            <img
              className="nosrightph"
              alt="bawa"
              src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619876789/carpenter_irbsjn.jpg"
            ></img>
          </div>

          <div className="nosvision">
            <p className="visio">-Visión</p>
            <p className="paraaa">
              Ser el líder en el mercado nacional de muebles bajo el concepto
              “ármelo usted mismo”, conceptualizando diseños innovadores de alta
              calidad y al mismo tiempo funcionales, con precios accesibles,
              apoyándonos en nuestro equipo de trabajo y en la más alta
              tecnología que se encuentre a nuestro alcance.
            </p>
            <ul className="ul">
              - En <span className="clrchg">ARMEA</span> encontrarás
            </ul>
            <li className="li">Innovación</li>
            <li className="li">Compromiso</li>
            <li className="li">Trabajo en equipo</li>
            <li className="li">Integridad</li>
            <li className="li">Atención al servicio</li>
          </div>
        </div>
        <div className="nosmain3">
          <div className="noslast">
            <img
              className="nosrightphl"
              alt="bawa"
              src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619876789/carpenter_irbsjn.jpg"
            ></img>
          </div>
          <div className="noslastright">
            <img
              className="nosrightphl"
              alt="bawa"
              src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619876789/carpenter_irbsjn.jpg"
            ></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nostros;
