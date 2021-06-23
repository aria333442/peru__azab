import React from "react";
import Media from "react-media";
import "../css/furniture.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Furniture() {
  const images = [
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944769/fur-1_xdxcjj.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-2_x4zhyu.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-3_fxjbyf.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-4_k333j4.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-5_o6qx2y.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-7_ijzviq.png",
    "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-8_cjbek3.png",
  ];
  const settings = {
    dots: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
    centerMode: false,
    swipe: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div style={{ marginTop: "50px" }}>
                <div className="d-flex justify-content-center">
                  <h1
                    className="new"
                    style={{ fontSize: "60px", fontWeight: "800" }}
                  >
                    #Mueblesquehacenclick
                  </h1>
                </div>
                <div
                  style={{
                    width: "99%",
                    height: "600px",
                    marginTop: "70px",
                  }}
                  className="d-flex justify-content-lg-around"
                >
                  <div>
                    <div className="image1">
                      <img
                        src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944769/fur-1_xdxcjj.png"
                        style={{
                          marginLeft: "20px",
                          width: "453px",
                          height: "313px",
                        }}
                      ></img>
                      <p className="ecto">Escritorio Montessori</p>
                      <p>John Doe</p>
                      <p>12/10/21</p>
                    </div>
                    <div className="d-flex">
                      <div className="image2">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-2_x4zhyu.png"
                          style={{
                            marginLeft: "0px",
                            width: "153px",
                            height: "332px",
                            marginTop: "10px",
                          }}
                          className="d-block"
                        ></img>
                        <p>Escritorio Montessori</p>
                        <p>John Doe</p>
                        <p>12/10/21</p>
                      </div>
                      <div className="image3">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-3_fxjbyf.png"
                          style={{
                            marginLeft: "0px",
                            width: "304px",
                            height: "242px",
                            marginTop: "10px",
                            marginLeft: "16px",
                          }}
                          className="d-inline-block"
                        ></img>
                        <p>Escritorio Montessori</p>
                        <p>John Doe</p>
                        <p>12/10/21</p>
                      </div>
                    </div>
                  </div>
                  <div className="image4">
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-4_k333j4.png"
                      style={{
                        width: "297px",
                        height: "394px",
                        marginLeft: "15px",
                        marginTop: "95px",
                      }}
                    ></img>
                    <p>Escritorio Montessori</p>
                    <p>John Doe</p>
                    <p>12/10/21</p>
                  </div>
                  <div>
                    <div className="d-flex">
                      <div className="image5">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-5_o6qx2y.png"
                          style={{
                            width: "296px",
                            height: "348px",
                            marginLeft: "15px",
                            marginTop: "20px",
                          }}
                        ></img>
                        <p>Escritorio Montessori</p>
                        <p>John Doe</p>
                        <p>12/10/21</p>
                      </div>
                      <div className="image6">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-6_yb2nvi.png"
                          style={{
                            width: "235px",
                            height: "435px",
                            marginLeft: "15px",
                            marginTop: "-65px",
                          }}
                        ></img>
                        <p>Escritorio Montessori</p>
                        <p>John Doe</p>
                        <p>12/10/21</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="image7">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-7_ijzviq.png"
                          style={{
                            width: "178px",
                            height: "243px",
                            marginLeft: "15px",
                            marginTop: "15px",
                          }}
                        ></img>
                        <p>Escritorio Montessori</p>
                        <p>John Doe</p>
                        <p>12/10/21</p>
                      </div>
                      <div className="image8">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-8_cjbek3.png"
                          style={{
                            width: "258px",
                            height: "196px",
                            marginLeft: "15px",
                            marginTop: "15px",
                          }}
                        ></img>
                        <p>Escritorio Montessori</p>
                        <p>John Doe</p>
                        <p>12/10/21</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div style={{ marginTop: "50px" }}>
                <div className="d-flex justify-content-center">
                  <h1
                    className="new"
                    style={{ fontSize: "60px", fontWeight: "800" }}
                  >
                    #Mueblesquehacenclick
                  </h1>
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginLeft: "130px" }}
                >
                  <div
                    style={{
                      width: "99%",
                      marginTop: "70px",
                    }}
                  >
                    <div>
                      <img
                        src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944769/fur-1_xdxcjj.png"
                        style={{
                          marginLeft: "20px",
                          width: "453px",
                          height: "313px",
                        }}
                      ></img>
                      <div className="d-flex">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-2_x4zhyu.png"
                          style={{
                            marginLeft: "0px",
                            width: "153px",
                            height: "332px",
                            marginTop: "10px",
                          }}
                          className="d-block"
                        ></img>
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-3_fxjbyf.png"
                          style={{
                            marginLeft: "0px",
                            width: "304px",
                            height: "242px",
                            marginTop: "10px",
                            marginLeft: "16px",
                          }}
                          className="d-inline-block"
                        ></img>
                      </div>
                    </div>
                    <div>
                      <img
                        src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-4_k333j4.png"
                        style={{
                          width: "297px",
                          height: "394px",
                          marginLeft: "15px",
                          marginTop: "95px",
                        }}
                      ></img>
                    </div>
                    <div>
                      <div className="d-flex">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-5_o6qx2y.png"
                          style={{
                            width: "296px",
                            height: "348px",
                            marginLeft: "15px",
                            marginTop: "20px",
                          }}
                        ></img>
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-6_yb2nvi.png"
                          style={{
                            width: "235px",
                            height: "435px",
                            marginLeft: "15px",
                            marginTop: "-65px",
                          }}
                        ></img>
                      </div>
                      <div className="d-flex">
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944786/fur-7_ijzviq.png"
                          style={{
                            width: "178px",
                            height: "243px",
                            marginLeft: "15px",
                            marginTop: "15px",
                          }}
                        ></img>
                        <img
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615944787/fur-8_cjbek3.png"
                          style={{
                            width: "258px",
                            height: "196px",
                            marginLeft: "15px",
                            marginTop: "15px",
                          }}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0 sollawq">
              <div style={{ marginTop: "50px" }}>
                <div className="d-flex justify-content-center">
                  <h1
                    className="new"
                    style={{ fontSize: "30px", fontWeight: "800" }}
                  >
                    #Mueblesquehacenclick
                  </h1>
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginLeft: "0px" }}
                >
                  <div
                    style={{
                      width: "100%",
                      marginTop: "20px",
                      height: "300px",
                    }}
                  >
                    <Slider {...settings}>
                      {images.map((ima) => {
                        return (
                          <div style={{ width: "200px", height: "300px" }}>
                            <img
                              src={ima}
                              style={{ height: "300px", width: "200px" }}
                            ></img>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
}

export default Furniture;
