import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";
import "../css/higproduct.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { getcat } from "../actions";
import Media from "react-media";

const HighProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcat());
  }, []);
  const getcategory = useSelector((state) => state.getcategory);
  getcategory.category.map((cat) => {
    console.log(cat.name);
  });

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: -40,
    dots: true,
  };
  const settings = {
    dots: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerPadding: 8,
    swipe: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div className="highProduct">
              <div>
                <div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079854/grid1_kavmxo.png"
                      alt="bawa"
                    ></img>
                  </div>
                  <div>
                    <div>
                      <p>Creamos</p>
                    </div>
                    <div>
                      <p>Diseñamos nuestros muebles</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079854/grid2_vmnhm7.png"
                      alt="bawa"
                    ></img>
                  </div>
                  <div>
                    <div>
                      <p>Fabricamos</p>
                    </div>
                    <div>
                      <p>Directo desde la Fábrica</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079854/grid3_jr52ga.png"
                      alt="bawa"
                    ></img>
                  </div>
                  <div>
                    <div>
                      <p>Te ayudamos</p>
                    </div>
                    <div>
                      <p>Consúltenos</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079855/grid4_qmcm2i.png"
                      alt="bawa"
                    ></img>
                  </div>
                  <div>
                    <div>
                      <p>Enviamos</p>
                    </div>
                    <div>
                      <p>2/5 días de entrega</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highProduct__slider">
                <div>
                  <h2>Productos de alta</h2>
                </div>
                <div className="swiper__box">
                  <Slider {...settings} onChange={() => alert()}>
                    {getcategory.category.map((cat) => {
                      return (
                        <Media query="(max-width:767px)">
                          {(matches) => {
                            return matches ? (
                              <NavLink to="/shop">
                                <div
                                  style={{ padding: "0px" }}
                                  className="ipad"
                                >
                                  <img
                                    src={cat.image}
                                    style={{ width: "372px", height: "478px" }}
                                  ></img>
                                  <div>
                                    <div
                                      style={{
                                        marginTop: "-280px",
                                        marginLeft: "10px",
                                        zIndex: 10,
                                        position: "fixed",
                                        backgroundColor: "white",
                                        opacity: 0.9,
                                        width: "180px",
                                        height: "100px",
                                      }}
                                      className="d-flex"
                                    ></div>
                                    <Link
                                      style={{
                                        marginTop: "-226px",
                                        marginLeft: "40px",
                                        padding: "10px",
                                        backgroundColor: "#ff6606",
                                        paddingRight: "12px",
                                        color: "white",
                                        zIndex: 100,
                                        position: "absolute",
                                      }}
                                    >
                                      <ArrowForwardIcon></ArrowForwardIcon>
                                    </Link>
                                    <div className="d-flex xor">
                                      <div className="ninos ninos2">
                                        <p
                                          style={{
                                            fontSize: "21px",
                                            opacity: 0.7,
                                            marginTop: "-270px",
                                            position: "absolute",
                                            zIndex: 12,
                                            marginLeft: "35px",
                                            color: "black",
                                          }}
                                        >
                                          Categoría
                                        </p>
                                        <p
                                          style={{
                                            fontSize: "35px",
                                            opacity: 1,
                                            marginTop: "-240px",
                                            position: "absolute",
                                            zIndex: 12,
                                            marginLeft: "35px",
                                            color: "black",
                                          }}
                                        >
                                          {cat.name}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            ) : (
                              <NavLink to="/shop">
                                <div
                                  style={{ padding: "0px" }}
                                  className="ipad"
                                >
                                  <img
                                    src={cat.image}
                                    style={{ width: "372px", height: "478px" }}
                                  ></img>
                                  <div
                                    style={{
                                      marginTop: "-160px",
                                      marginLeft: "20px",
                                      zIndex: 10,
                                      position: "fixed",
                                      backgroundColor: "white",
                                      opacity: 0.9,
                                      width: "250px",
                                      height: "140px",
                                    }}
                                    className="d-flex"
                                  ></div>
                                  <div className="d-flex xor">
                                    <div className="ninos ninos2">
                                      <p
                                        style={{
                                          fontSize: "21px",
                                          opacity: 0.7,
                                          marginTop: "-130px",
                                          position: "absolute",
                                          zIndex: 12,
                                          marginLeft: "55px",
                                          color: "black",
                                        }}
                                      >
                                        Categoría
                                      </p>
                                      <p
                                        style={{
                                          fontSize: "35px",
                                          opacity: 1,
                                          marginTop: "-110px",
                                          position: "absolute",
                                          zIndex: 12,
                                          marginLeft: "55px",
                                          color: "black",
                                        }}
                                      >
                                        {cat.name}
                                      </p>
                                    </div>
                                    <Link
                                      style={{
                                        marginTop: "-66px",
                                        marginLeft: "270px",
                                        padding: "10px",
                                        position: "absolute",
                                        backgroundColor: "#ff6606",
                                        paddingRight: "12px",
                                        color: "white",
                                      }}
                                    >
                                      <ArrowForwardIcon></ArrowForwardIcon>
                                    </Link>
                                  </div>
                                </div>
                              </NavLink>
                            );
                          }}
                        </Media>
                      );
                    })}
                  </Slider>
                </div>
                <div>
                  <Link className="btn" to="/shop">
                    IR A LA TIENDA
                  </Link>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div className="highProduct">
              <div className="highProduct__top">
                <div>
                  <img
                    src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079854/grid1_kavmxo.png"
                    alt=""
                  />
                  <div>
                    <h3>Creamos</h3>
                    <p>Diseñamos nuestros muebles</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079854/grid2_vmnhm7.png"
                    alt=""
                  />
                  <div>
                    <h3>Fabricamos</h3>
                    <p>Directo desde la Fábrica</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079854/grid3_jr52ga.png"
                    alt=""
                  />
                  <div>
                    <h3>Te ayudamos</h3>
                    <p>Consúltenos</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619079855/grid4_qmcm2i.png"
                    alt=""
                  />
                  <div>
                    <h3>Enviamos</h3>
                    <p>2/5 días de entrega</p>
                  </div>
                </div>
              </div>
              <div className="highProduct__slider">
                <div>
                  <h2>Productos de alta</h2>
                </div>
                <div className="swiper__box">
                  <Slider {...settings} onChange={() => alert()}>
                    {getcategory.category.map((cat) => {
                      return (
                        <Media query="(max-width:767px)">
                          {(matches) => {
                            return matches ? (
                              <NavLink to="/shop">
                                <div
                                  style={{ padding: "0px" }}
                                  className="ipad"
                                >
                                  <img
                                    src={cat.image}
                                    style={{ width: "372px", height: "478px" }}
                                  ></img>
                                  <div>
                                    <div
                                      style={{
                                        marginTop: "-280px",
                                        marginLeft: "10px",
                                        zIndex: 10,
                                        position: "fixed",
                                        backgroundColor: "white",
                                        opacity: 0.9,
                                        width: "180px",
                                        height: "100px",
                                      }}
                                      className="d-flex"
                                    ></div>
                                    <Link
                                      style={{
                                        marginTop: "-226px",
                                        marginLeft: "40px",
                                        padding: "10px",
                                        backgroundColor: "#ff6606",
                                        paddingRight: "12px",
                                        color: "white",
                                        zIndex: 100,
                                        position: "absolute",
                                      }}
                                    >
                                      <ArrowForwardIcon></ArrowForwardIcon>
                                    </Link>
                                    <div className="d-flex xor">
                                      <div className="ninos ninos2">
                                        <p
                                          style={{
                                            fontSize: "21px",
                                            opacity: 0.7,
                                            marginTop: "-270px",
                                            position: "absolute",
                                            zIndex: 12,
                                            marginLeft: "35px",
                                            color: "black",
                                          }}
                                        >
                                          Categoría
                                        </p>
                                        <p
                                          style={{
                                            fontSize: "35px",
                                            opacity: 1,
                                            marginTop: "-240px",
                                            position: "absolute",
                                            zIndex: 12,
                                            marginLeft: "35px",
                                            color: "black",
                                          }}
                                        >
                                          {cat.name}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </NavLink>
                            ) : (
                              <NavLink to="/shop">
                                <div
                                  style={{ padding: "0px" }}
                                  className="ipad"
                                >
                                  <img
                                    src={cat.image}
                                    style={{ width: "372px", height: "478px" }}
                                  ></img>
                                  <div
                                    style={{
                                      marginTop: "-160px",
                                      marginLeft: "20px",
                                      zIndex: 10,
                                      position: "fixed",
                                      backgroundColor: "white",
                                      opacity: 0.9,
                                      width: "250px",
                                      height: "140px",
                                    }}
                                    className="d-flex"
                                  ></div>
                                  <div className="d-flex xor">
                                    <div className="ninos ninos2">
                                      <p
                                        style={{
                                          fontSize: "21px",
                                          opacity: 0.7,
                                          marginTop: "-130px",
                                          position: "absolute",
                                          zIndex: 12,
                                          marginLeft: "55px",
                                          color: "black",
                                        }}
                                      >
                                        Categoría
                                      </p>
                                      <p
                                        style={{
                                          fontSize: "35px",
                                          opacity: 1,
                                          marginTop: "-110px",
                                          position: "absolute",
                                          zIndex: 12,
                                          marginLeft: "55px",
                                          color: "black",
                                        }}
                                      >
                                        {cat.name}
                                      </p>
                                    </div>
                                    <Link
                                      style={{
                                        marginTop: "-66px",
                                        marginLeft: "270px",
                                        padding: "10px",
                                        position: "absolute",
                                        backgroundColor: "#ff6606",
                                        paddingRight: "12px",
                                        color: "white",
                                      }}
                                    >
                                      <ArrowForwardIcon></ArrowForwardIcon>
                                    </Link>
                                  </div>
                                </div>
                              </NavLink>
                            );
                          }}
                        </Media>
                      );
                    })}
                  </Slider>
                </div>
                <div>
                  <Link className="btn" to="/shop">
                    IR A LA TIENDA
                  </Link>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="highProduct">
              <div className="top"></div>
              <div className="highProduct__slider">
                <div>
                  <h2>Productos de alta</h2>
                </div>
                <div className="slidd">
                  <Slider {...settings2} onChange={() => alert()}>
                    {getcategory.category.map((cat) => {
                      return (
                        <Media query="(max-width:767px)">
                          {(matches) => {
                            return matches ? (
                              <NavLink to="/shop">
                                <div
                                  style={{ padding: "0px" }}
                                  className="ipad"
                                >
                                  <img
                                    src={cat.image}
                                    style={{
                                      width: "200px",
                                      height: "300px",
                                      marginLeft: "10px",
                                    }}
                                  ></img>
                                  <div
                                    style={{
                                      marginTop: "-90px",
                                      marginLeft: "20px",
                                      zIndex: 10,
                                      position: "fixed",
                                      backgroundColor: "white",
                                      opacity: 0.9,
                                      width: "150px",
                                      height: "70px",
                                    }}
                                    className="d-flex"
                                  ></div>
                                  <div className="d-flex xor">
                                    <div className="ninos ninos2">
                                      <p
                                        style={{
                                          fontSize: "16px",
                                          opacity: 0.7,
                                          marginTop: "-80px",
                                          position: "absolute",
                                          zIndex: 12,
                                          marginLeft: "30px",
                                          color: "black",
                                        }}
                                      >
                                        Categoría
                                      </p>
                                      <p
                                        style={{
                                          fontSize: "18px",
                                          opacity: 1,
                                          marginTop: "-60px",
                                          position: "absolute",
                                          zIndex: 12,
                                          marginLeft: "30px",
                                          color: "black",
                                        }}
                                      >
                                        {cat.name}
                                      </p>
                                    </div>
                                    <Link
                                      style={{
                                        marginTop: "-50px",
                                        marginLeft: "410px",
                                        padding: "3px 5px",
                                        position: "absolute",
                                        backgroundColor: "#ff6606",
                                        paddingRight: "5px",
                                        color: "white",
                                        fontSize: "10px",
                                      }}
                                    >
                                      <ArrowForwardIcon></ArrowForwardIcon>
                                    </Link>
                                  </div>
                                </div>
                              </NavLink>
                            ) : null;
                          }}
                        </Media>
                      );
                    })}
                  </Slider>
                </div>
                <div>
                  <Link className="btn" to="/shop">
                    IR A LA TIENDA
                  </Link>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
};

export default HighProducts;
