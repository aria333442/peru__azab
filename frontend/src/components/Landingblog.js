import React, { useEffect } from "react";
import "../css/higproduct.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/_blog.scss";
import { MdDateRange } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Media from "react-media";
import "../css/new.scss";
import { getblog } from "../actions/getblog";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Landingblog() {
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
    centerMode: false,
    swipe: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
    centerMode: false,
    swipe: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    dispatch(getblog());
  }, []);
  const getB = useSelector((state) => state.getB);
  return (
    <div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div style={{ marginTop: "80px" }}>
                <div className="d-flex justify-content-center">
                  <h1 className="new">
                    Nuestro{" "}
                    <p className="d-inline-block" style={{ color: "#ff6606" }}>
                      blog
                    </p>
                  </h1>
                </div>
              </div>
              <div
                style={{ width: "95%", marginLeft: "50px", marginTop: "10px" }}
                className="topa"
              >
                <Slider {...settings}>
                  {getB.blog.map((blog) => {
                    return (
                      <NavLink
                        to={`/blog/${blog._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div>
                          <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938010/img1_uggyig.png"></img>
                          <h4 style={{ color: "black" }}>{blog.title}</h4>
                          <div className="d-flex">
                            <p
                              style={{
                                fontSize: "25px",
                                color: "gray",
                                marginLeft: "25px",
                                color: "black",
                                textDecoration: "none",
                              }}
                            >
                              <MdDateRange />
                            </p>
                            <p
                              style={{
                                marginTop: "10px",
                                fontSize: "17px",
                                color: "black",
                                textDecoration: "none",
                              }}
                            >
                              {blog.date}
                            </p>
                            <p
                              style={{
                                fontSize: "25px",
                                color: "gray",
                                marginLeft: "25px",
                                textDecoration: "none",
                              }}
                            >
                              <CgProfile />
                            </p>
                            <p
                              style={{
                                marginTop: "10px",
                                fontSize: "17px",
                                marginLeft: "5px",
                                color: "black",
                                textDecoration: "none",
                              }}
                            >
                              {blog.aurthor}
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    );
                  })}
                </Slider>
              </div>
              <div className="d-flex justify-content-center">
                <NavLink to="/blog" className="leeruu">
                Ir al blog
                </NavLink>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div style={{ marginTop: "80px" }}>
                <div className="d-flex justify-content-center">
                  <h1 className="new">
                    Nuestro{" "}
                    <p className="d-inline-block" style={{ color: "#ff6606" }}>
                      blog
                    </p>
                  </h1>
                </div>
              </div>
              <div
                style={{ width: "95%", marginLeft: "30px", marginTop: "10px" }}
                className="topa"
              >
                <Slider {...settings}>
                  {getB.blog.map((blog) => {
                    return (
                      <NavLink to={`/blog/${blog._id}`}>
                        <div>
                          <img
                            src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938025/img2_w2w27a.png"
                            style={{ width: "90%" }}
                          ></img>
                          <h4 className="paraaa" style={{ color: "black" }}>
                            {blog.title}
                          </h4>
                          <div className="d-flex">
                            <p
                              style={{
                                fontSize: "20px",
                                color: "gray",
                                marginLeft: "0px",
                                color: "black",
                              }}
                            >
                              <MdDateRange />
                            </p>
                            <p
                              style={{
                                marginTop: "6px",
                                fontSize: "15px",
                                color: "black",
                              }}
                            >
                              {blog.date}
                            </p>
                            <p
                              style={{
                                fontSize: "20px",
                                color: "gray",
                                marginLeft: "14px",
                                color: "black",
                              }}
                            >
                              <CgProfile />
                            </p>
                            <p
                              style={{
                                marginTop: "6px",
                                fontSize: "15px",
                                marginLeft: "5px",
                                color: "black",
                              }}
                            >
                              {blog.aurthor}
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    );
                  })}
                </Slider>
              </div>
              <div className="d-flex justify-content-center">
                <NavLink to="/blog" className="leeruu">
                Ir al blog
                </NavLink>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div style={{ marginTop: "-210px" }}>
                <div className="d-flex justify-content-center">
                  <h1 className="new">
                    Nuestro{" "}
                    <p className="d-inline-block" style={{ color: "#ff6606" }}>
                      blog
                    </p>
                  </h1>
                </div>
              </div>
              <div
                style={{ width: "95%", marginLeft: "12px", marginTop: "10px" }}
                className="topa"
              >
                <Slider {...settings2}>
                  {getB.blog.map((blog) => {
                    return (
                      <NavLink to={`/blog/${blog._id}`}>
                        <div>
                          <img
                            src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1615938025/img2_w2w27a.png"
                            style={{ width: "90%", marginLeft: "5px" }}
                          ></img>
                          <h4 className="paraaa" style={{ color: "black" }}>
                            {blog.title}
                          </h4>
                          <div className="d-flex">
                            <p
                              style={{
                                fontSize: "20px",
                                color: "gray",
                                marginLeft: "20px",
                                color: "black",
                              }}
                            >
                              <MdDateRange />
                            </p>
                            <p
                              style={{
                                marginTop: "6px",
                                fontSize: "15px",
                                color: "black",
                              }}
                            >
                              {blog.date}
                            </p>
                            <p
                              style={{
                                fontSize: "20px",
                                color: "gray",
                                marginLeft: "14px",
                                color: "black",
                              }}
                            >
                              <CgProfile />
                            </p>
                            <p
                              style={{
                                marginTop: "6px",
                                fontSize: "15px",
                                marginLeft: "5px",
                                color: "black",
                              }}
                            >
                              {blog.aurthor}
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    );
                  })}
                </Slider>
              </div>
              <div className="d-flex justify-content-center">
                <NavLink to="/blog" className="leeruu">
                Ir al blog
                </NavLink>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
}

export default Landingblog;
