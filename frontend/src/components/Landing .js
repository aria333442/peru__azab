import React, { useEffect, useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Button } from "@material-ui/core";
import "../css/landing.scss";
import HighProducts from "./HighProducts";
import { Link, NavLink } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Newproducts from "./Newproducts";
import Landingblog from "./Landingblog";
import Furniture from "./Furniture";
import Messenger from "./Messenger";
import Footer from "./Footer";
import Nav from "./Nav";
import Media from "react-media";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import Checkoutmodal from "./Checkout";
import { v4 as uuidv4 } from "uuid";
import { getslidw } from "../admin/actions/getslider";
import Landing_res from "./Landing_res";
const axios = require("axios");

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Landing() {
  const dispatch = useDispatch();
  const visitor = localStorage.getItem("visitor");
  let date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  useEffect(() => {
    dispatch(getslidw());
  }, []);
  const getS = useSelector((state) => state.getS);
  date = dd + "-" + mm + "-" + yyyy;
  useEffect(() => {
    if (visitor) {
      const item = {
        id: visitor,
        status: "returning",
        date: date,
      };
      axios.post("/visitor/update", { ...item });
    } else if (!visitor) {
      const _id = uuidv4();
      localStorage.setItem("visitor", _id);
      const item = {
        id: _id,
        status: "new",
        date: date,
      };
      axios.post("/visitor/update", { ...item });
    }
  }, []);
  const [checkout, setcheckout] = useState(0);
  const [formstates, setformstates] = useState(0);

  const handlecheck = (check) => {
    setcheckout(check);
  };

  const log = useSelector((state) => state.log);
  if (log.message === "login successful") {
    window.location.reload();
  }
  return (
    <div className="lullu">
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div style={{ overflowX: "auto" }}>
              <div
                className="container-fluid ml-0 mr-0 p-0"
                style={{ marginTop: "70px", overflow: "hidden" }}
              >
                <Nav />
                <div className="landing">
                  <div className="landing__slider">
                    <Swiper
                      spaceBetween={100}
                      slidesPerView={1}
                      navigation
                      pagination
                      autoplay
                      delay={5000}
                    >
                      {getS.slider.map((img, index) => {
                        return (
                          <SwiperSlide className="slide">
                            <div className="d-flex">
                              <img
                                src={img.big}
                                style={{
                                  width: "100%",
                                  height: "300px",
                                  marginLeft: "0px",
                                }}
                              ></img>
                            </div>
                            <div className="blurred-container">
                              <div className="blurred-box-2">
                                <div>
                                  <h3>{img.name}</h3>
                                  <p>{img.description}</p>
                                  <div>
                                    <h3>$ {img.price}</h3>
                                    <Link to="/shop">
                                      <ArrowForwardIcon></ArrowForwardIcon>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>

              <HighProducts />
              <Newproducts />
              <Furniture />
              <Popup />
              <Footer />
            </div>
          ) : (
            <div>
              <div
                className={
                  checkout == 0
                    ? "container-fluid m-0 p-0"
                    : "container-fluid m-0 p-0 civic"
                }
                style={{ marginTop: "100px", overflow: "hidden" }}
              >
                <Nav handlecheck={(check) => handlecheck(check)} />
                <div className="landing">
                  <div className="landing__slider">
                    <Swiper
                      spaceBetween={100}
                      slidesPerView={1}
                      navigation
                      pagination
                      autoplay
                      delay={5000}
                    >
                      {getS.slider.map((img, index) => {
                        return (
                          <SwiperSlide className="slide">
                            <div className="d-flex">
                              <img
                                src={img.small}
                                style={{ width: "25%", height: "557px" }}
                              ></img>
                              <img
                                src={img.big}
                                style={{
                                  width: "75%",
                                  height: "557px",
                                  marginLeft: "50px",
                                }}
                              ></img>
                            </div>
                            <div className="blurred-container">
                              <div className="blurred-box-2">
                                <div>
                                  <h3>{img.name}</h3>
                                  <p>{img.description}</p>
                                  <div>
                                    <h3>$ {img.price}</h3>
                                    <Link to="/shop">
                                      <ArrowForwardIcon></ArrowForwardIcon>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>

                <div className="blurred-box">
                  <div>
                    <h2>Muebles que hacen</h2>
                    <h2>click</h2>
                    <p>Cada mueble representa un estilo de vida.</p>
                    <NavLink to="/shop" style={{ textDecoration: "none" }}>
                      <Button className="batta">Comprar ahora</Button>
                    </NavLink>
                  </div>
                </div>

                <HighProducts />
                <Newproducts />
                <Landingblog />
                <Furniture />

                <Footer />
                <Popup />
              </div>
              <Checkoutmodal classstate={checkout} numberState={formstates} />
            </div>
          );
        }}
      </Media>
    </div>
  );
}

export default Landing;
