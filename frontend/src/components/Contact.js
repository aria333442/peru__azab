import React, { useRef, useState } from "react";
import "../css/Contact.scss";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Nav from "./Nav";
import Footer from "./Footer";
import Recaptcha from "react-google-invisible-recaptcha";
import Helmet from "react-helmet";

function Contact() {
  const handlecheck = () => {};
  const reref = useRef();
  const [name, setname] = useState();
  const [surname, setsurname] = useState();
  const [email, setemail] = useState();
  const [message, setmessage] = useState();
  const handless = () => {
    reref.current.execute();

    setname("");
    setsurname("");
    setemail("");
    setmessage("");
  };
  return (
    <div>
      <Helmet>
        <title>Armea/contact</title>
        <meta name="description" content="obtén tus respuestas de armea" />
        <meta
          name="keywords"
          content="contacto,contacto armea,información de muebles"
        />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="contact__main">
        <div className="div__image_contact">
          <img
            src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079857/animation_bg_3_kpllzd.png"
            alt="tt"
          ></img>
        </div>
        <div className="d-flex">
          <div className="contact_left">
            <h1 className="left__header">Contacto</h1>
            <p>Atenderemos cualquier problema o comentario que tengas</p>
            <div className="d-flex" style={{ marginTop: "30px" }}>
              <p className="contact__mail">
                <FiMail />
              </p>
              <p className="mail__infront">VENTAS@ARMEAMUEBLES.COM</p>
            </div>
            <div className="d-flex">
              <p className="contact__mail">
                <FiPhone />
              </p>
              <p className="mail__infront">(81) 8245 4321</p>
            </div>
            <div className="d-flex">
              <p className="contact__mail">
                <HiOutlineLocationMarker />
              </p>
              <p className="mail__infront">
                Mariano Escobedo 2631 col.<br></br> Victoria Monterrey N.L.
              </p>
            </div>
            <div className="contact__from">
              <div className="d-flex justify-content-between p-3">
                <div className="name__contact">
                  <div class="form-group">
                    <label for="exampleInputEmail1" className="lablee">
                      Nombre*
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Ingrese su nombre"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="surname__contact">
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lablee">
                      Apellido*
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Ingrese su apellido"
                      value={surname}
                      onChange={(e) => setsurname(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="email__contact">
                <div class="form-group">
                  <label for="exampleInputPassword1" className="lablee">
                    Email*
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
              </div>
              <div className="messaje">
                <div className="email__contact">
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lablee">
                      Mensaje*
                    </label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Escriba su mensaje"
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="contact__button" onClick={handless}>
                  ENVIAR
                </p>
              </div>
              <Recaptcha
                ref={reref}
                sitekey="6LfN7sEaAAAAAPcIMefTUvLgyR1pYlUU4matF8IC"
                onResolved={() =>
                  alert(
                    "Gracias por contactarse con Armea, su respuesta ha sido enviada. Nos comunicaremos con usted después de procesarlo."
                  )
                }
              />
            </div>
          </div>

          <div className="contact__right">
            <h3>
              ¿En qué podemos <span className="span">ayudarte</span>?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a pellentesque tellus. Vestibulum eu pharetra lacus,
              in vehicula nisi. Phasellus tempus magna semper nunc mattis
              cursus. Praesent rutrum imperdiet semper. Aenean mollis eros
              massa, eget aliquet dolor pharetra eu. Etiam vel arcu mi.
            </p>
            <div className="question">
              <p className="question__header">Información de envío</p>
              <p className="question__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque a pellentesque tellus. Vestibulum eu pharetra
                lacus, in vehicula nisi
              </p>
            </div>
            <div className="question">
              <p className="question__header">¿Dónde fabrican los muebles?</p>
              <p className="question__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque a pellentesque tellus. Vestibulum eu pharetra
                lacus, in vehicula nisi
              </p>
            </div>
            <div className="question">
              <p className="question__header">¿Cuánto cuesta el envío?</p>
              <p className="question__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque a pellentesque tellus. Vestibulum eu pharetra
                lacus, in vehicula nisi
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
