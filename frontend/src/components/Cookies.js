import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Cookies.scss";
import Footer from "./Footer";
import Nav from "./Nav";
import Helmet from "react-helmet";

function Cookies() {
  const handlecheck = () => {};
  return (
    <div>
      <Helmet>
        <title>Armea/Cookies</title>
        <meta name="description" content="política de cookies del sitio web" />
        <meta name="keywords" content="Cookies,CookiePolicy," />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="cookimainbg">
        <div className="cookyheadingdiv">
          <div className="d-flex lolu">
            <NavLink
              to="/"
              style={{ backgroundColor: "#fff5ee", color: "black" }}
              className="lass"
            >
              Incio
            </NavLink>
            <p>{">"}</p>
            <p>Política de cookies</p>
          </div>
          <p className="cookypara">
            POLÍTICA DE <span className="cookyspan">COOKIES</span>
          </p>
        </div>
        <div className="cookysubmain">
          <p className="cdf">POLÍTICA DE COOKIES</p>
          <p className="cde">
            Las cookies son un fichero que se descarga en el ordenador al
            acceder a determinadas páginas web, permitiendo almacenar y
            recuperar información sobre los hábitos de navegación de un usuario
            o su equipo (entre otras cosas). Dependiendo de la información que
            contengan y de la forma en que se utilice el equipo, pueden
            emplearse para reconocer al usuario. El navegador del usuario
            memoriza las cookies en el disco duro solamente durante la sesión
            actual, ocupando un espacio de memoria mínimo y sin perjudicar el
            ordenador. Las cookies no contienen ninguna clase de información
            personal específica y la mayoría se borran del disco duro al
            finalizar la sesión de navegador (cookies de sesión).
            <p className="cde">
              <br></br>
              Muchos navegadores aceptan las cookies como estándar e,
              independientemente del tipo que sean, permiten o impiden las
              cookies temporales o memorizadas en los ajustes de seguridad.
            </p>
            <p className="cde">
              Sin su expreso consentimiento –mediante la activación de las
              cookies en el navegador–, bainba.com no enlazará en las cookies
              los datos memorizados con información personal proporcionados en
              el momento del registro o la compra.
            </p>
            <p className="cde">
              ¿Qué tipos de cookies utiliza esta página web?
            </p>
            <p className="cde">
              - Cookies técnicas. Permiten la navegación a través de una página
              web, plataforma o aplicación, así como la utilización de
              diferentes opciones o servicios: controlar el tráfico y la
              comunicación de datos, identificar la sesión, acceder a partes
              restringidas, recordar los elementos que integran un pedido,
              efectuar la compra de un pedido, realizar la solicitud de
              inscripción o participación en un evento, utilizar elementos de
              seguridad durante la navegación, almacenar contenidos para la
              difusión de videos o sonido, o compartir contenidos a través de
              redes sociales.
            </p>
            <p className="cde">
              - Cookies de personalización. Permiten acceder al servicio con
              algunas características generales predefinidas en función de una
              serie de criterios en el terminal del usuario: el idioma, el tipo
              de navegador a través del cual accede al servicio, la
              configuración regional desde donde accede al servicio, etc.
            </p>
            <p className="cde">
              - Cookies de análisis. Ya sean tratadas por nosotros o por
              terceros, permiten cuantificar el número de usuarios y así
              realizar la medición y el análisis estadístico sobre la
              utilización del servicio ofertado. Para ello, se analiza la
              navegación en la página web a fin de mejorar la oferta de
              productos y/o servicios.
            </p>
            - Cookies de terceros. bainba.com puede utilizar servicios de
            terceros que recopilarán información con fines estadísticos sobre el
            uso del sitio web por parte del usuario, así como para la prestación
            de servicios relacionados con la actividad del sitio web y otros
            servicios de internet.
            <p className="cde">Concretamente, esta página web utiliza:</p>
            <p className="cde">
              Addthis Es un servicio que permite compartir el contenido de
              bainba.com en redes sociales mediante iconos identificativos.
              Utiliza cookies técnicas para su funcionamiento y cookies de
              personalización para recordar la configuración que el usuario hace
              de los iconos de las redes sociales.
            </p>
            <p className="cde">http://www.addthis.com/privacy</p>
            <p className="cde">
              Facebook bainba.com utiliza diferentes servicios de Facebook que,
              a su vez, hacen uso de cookies técnicas y de personalización.
              Estos servicios son el «like box» y el «like button».
            </p>
            <p className="cde">http://es-es.facebook.com/help/cookies</p>
            <p className="cde">
              Youtube bainba.com muestra videos de Youtube en diferentes
              apartados del sitio web. Estos videos hacen uso de cookies
              técnicas y de personalización para su correcto funcionamiento.
            </p>
            <p className="cde">
              https://www.google.com/policies/technologies/cookies/
            </p>
            <p className="cde">
              Este sitio web también utiliza Google Analytics, un servicio
              analítico de web que ofrece Google Inc., con sede central en 1600
              Amphitheatre Parkway, Mountain View, California 94043 (Estados
              Unidos). Para la prestación de dichos servicios se emplean cookies
              que recopilan toda la información (incluida la dirección IP del
              usuario), la cual será transmitida, tratada y almacenada por
              Google en los términos fijados en la webGoogle.com. Ello supone la
              posible transmisión de esta información a terceros por razones de
              exigencia legal o a fin de ser procesada por cuenta de Google.
            </p>
            <p className="cde">
              Al utilizar este sitio web, el usuario acepta expresamente el
              tratamiento de la información recabada en la forma y con los fines
              anteriormente mencionados. Asimismo, reconoce la posibilidad de
              rechazar el tratamiento de tales datos o la información mediante
              la selección de la configuración apropiada para este fin en su
              navegador. No obstante, es posible que esta opción de bloqueo de
              las cookies en el navegador no permita el uso pleno de todas las
              funcionalidades del sitio web.
            </p>
            <p className="cde">
              Usted puede permitir, bloquear o eliminar las cookies instaladas
              mediante la configuración de las opciones del navegador:
            </p>
            <p className="cde">Chrome</p>
            <p className="cde">Explorer</p>
            <p className="cde">Firefox</p>
            <p className="cde">Safari</p>
            <p className="cde">
              Si tiene dudas sobre esta política de cookies, puede contactar con
              bainba.com (info@bainba.com).
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cookies;
