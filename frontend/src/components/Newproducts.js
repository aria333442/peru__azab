import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../actions/addtocart";

import "../css/higproduct.scss";
import { getprod } from "../actions/getproducts";
import { getnewprod } from "../admin/actions/getnewproduct";

function Newproducts() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    centerMode: false,
    centerPadding: 11,
    swipe: false,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: 10,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: 10,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const checked = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getnewprod());
  }, []);
  const getnewP = useSelector((state) => state.getnewP);
  const handlebuy = (price, prod, quantity) => {
    if (!token) {
      history.push("/login");
    } else if (token) {
      const items = {
        user,
        price,
        prod,
        quantity,
      };
      dispatch(addtocart(items)).then((res) => {
        window.location.reload();
      });
    }
  };
  const handleadd = (price, prod, quantity) => {
    history.push(`/product/${prod}`);
  };

  return (
    <div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div
              className="container-fluid ml-0 mr-0 p-0"
              style={{ marginTop: "70px" }}
            >
              <div className="d-flex justify-content-center">
                <h1 className="new">
                  Productos{" "}
                  <p className="d-inline-block" style={{ color: "#ff6606" }}>
                    nuevos
                  </p>
                </h1>
              </div>
              <div className="d-flex new__container">
                <div className="pro">
                  {getnewP.product.map((prod) => {
                    if (prod.status === "new") {
                      return (
                        <div>
                          <h1 className="pro__title">{prod.name}</h1>
                          <p className="pro__desc">
                            Simple y real. Todo tiene su razón de ser.
                          </p>
                          <StarRatings
                            rating={prod.rating}
                            starDimension="22px"
                            starSpacing="6px"
                            starRatedColor="#ff6606"
                          />
                          <div className="d-flex">
                            <p
                              className="pro__but1"
                              onClick={() =>
                                handlebuy(prod.saleprice, prod._id, 1)
                              }
                            >
                              COMPRAR
                            </p>
                            <p
                              className="pro__but2"
                              onClick={() =>
                                handleadd(prod.saleprice, prod._id, 1)
                              }
                            >
                              AÑADIR
                            </p>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="sli">
                  <Slider {...settings}>
                    {getnewP.product.map((prod) => {
                      if (prod.status === "new") {
                        return prod.productImage.map((ima) => {
                          return (
                            <div>
                              <img
                                src={ima.img}
                                style={{ width: "95%", height: "590px" }}
                              ></img>
                            </div>
                          );
                        });
                      }
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div
              className="container-fluid ml-0 mr-0 p-0"
              style={{ marginTop: "70px" }}
            >
              <div className="d-flex justify-content-center">
                <h1 className="new">
                  Productos{" "}
                  <p className="d-inline-block" style={{ color: "#ff6606" }}>
                    nuevos
                  </p>
                </h1>
              </div>
              <div className="d-flex new__container">
                <div className="pro">
                  {getnewP.product.map((prod) => {
                    if (prod.new === "true") {
                      return (
                        <div>
                          <h1 className="pro__title">{prod.name}</h1>
                          <p className="pro__desc">
                            Simple y real. Todo tiene su razón de ser.
                          </p>
                          <StarRatings
                            rating={prod.rating}
                            starDimension="22px"
                            starSpacing="6px"
                            starRatedColor="#ff6606"
                          />
                          <div className="d-flex">
                            <p
                              className="pro__but1"
                              onClick={() =>
                                handlebuy(prod.saleprice, prod._id, 1)
                              }
                            >
                              COMPRAR
                            </p>
                            <p
                              className="pro__but2"
                              onClick={() =>
                                handleadd(prod.saleprice, prod._id, 1)
                              }
                            >
                              AÑADIR
                            </p>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="sli">
                  <Slider {...settings}>
                    {getnewP.product.map((prod) => {
                      if (prod.new === "true") {
                        return prod.productImage.map((ima) => {
                          return (
                            <div>
                              <img
                                src={ima.img}
                                style={{ width: "100%", height: "590px" }}
                              ></img>
                            </div>
                          );
                        });
                      }
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div
              className="container-fluid ml-0 mr-0 p-0"
              style={{ marginTop: "70px" }}
            >
              <div className="d-flex justify-content-center">
                <h1 className="new">
                  Productos{" "}
                  <p className="d-inline-block" style={{ color: "#ff6606" }}>
                    nuevos
                  </p>
                </h1>
              </div>
              <div className="d-flex new__container">
                <div className="pro">
                  {getnewP.product.map((prod) => {
                    if (prod.status === "new") {
                      return (
                        <div>
                          <h1 className="pro__title">{prod.name}</h1>
                          <p className="pro__desc">
                            Simple y real. Todo tiene su razón de ser.
                          </p>
                          <p style={{ marginLeft: "10px", marginTop: "-20px" }}>
                            <StarRatings
                              rating={prod.rating}
                              starDimension="15px"
                              starSpacing="2px"
                              starRatedColor="#ff6606"
                            />
                          </p>
                          <div
                            className="d-flex"
                            style={{ marginTop: "-50px" }}
                          >
                            <p
                              className="pro__but1"
                              onClick={() =>
                                handlebuy(prod.saleprice, prod._id, 1)
                              }
                            >
                              COMPRAR
                            </p>
                            <p
                              className="pro__but2"
                              onClick={() =>
                                handleadd(prod.saleprice, prod._id, 1)
                              }
                            >
                              AÑADIR
                            </p>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="sli">
                  <Slider {...settings}>
                    {getnewP.product.map((prod) => {
                      if (prod.status === "new") {
                        return prod.productImage.map((ima) => {
                          return (
                            <div>
                              <img
                                src={ima.img}
                                style={{ width: "100%", height: "200px" }}
                              ></img>
                            </div>
                          );
                        });
                      }
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
}

export default Newproducts;
