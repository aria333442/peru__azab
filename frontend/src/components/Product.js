import React, { useEffect, useState } from "react";
import "../css/product.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import StarRatings from "react-star-ratings";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import ReactPlayer from "react-player";
import { Modal, Button } from "react-bootstrap";
import Nav from "../components/Nav";
import Checkoutmodal from "./Checkout";
import Footer from "./Footer";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { getPbyId } from "../actions/productbyid";
import { getprod } from "../actions/getproducts";
import { addtocart } from "../actions/addtocart";
import { CbyId } from "../actions/cartbyid";
import { remove } from "../actions/removeitem";
import Helmet from "react-helmet";
import { getcoupon } from "../admin/actions/getcoupon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Product() {
  const token = localStorage.getItem("token");
  const [bulla, setbulla] = useState(0);
  const [show, setShow] = useState(0);
  const [formstates, setformstates] = useState(0);
  const [checkout, setcheckout] = useState(0);
  const [quantity, setquantity] = useState(1);
  const [removed, setremoved] = useState(false);
  const [coupon, setcoupon] = useState();
  const [productdetailmodel, setproductdetailmodel] = useState(false);
  const [info, setinfo] = useState("no");
  const [rev, setrev] = useState("no");
  const history = useHistory();
  let ser = [];
  const dispatch = useDispatch();
  const { Id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(getPbyId(Id));
    dispatch(getcoupon());
  }, []);
  useEffect(() => {
    dispatch(getprod(ser));
  }, []);
  useEffect(() => {
    dispatch(CbyId(Cid));
  }, []);
  useEffect(() => {
    dispatch(CbyId(Cid));
    setremoved(false);
  }, [removed]);
  const getproducts = useSelector((state) => state.getproducts);
  const Pbyid = useSelector((state) => state.Pbyid);
  const price = Pbyid.product.saleprice;
  const actualPrice = Pbyid.product.actualPrice;
  let disc = actualPrice - price;
  disc = disc / actualPrice;
  disc = disc * 100;
  console.log(actualPrice);
  const user = JSON.parse(localStorage.getItem("user"));
  const Cid = JSON.parse(localStorage.getItem("user"));
  const getCop = useSelector((state) => state.getCop);
  useEffect(() => {
    getCop.coupon.map((co) => {
      co.products.map((prod) => {
        if (prod.product === Id) {
          setcoupon(co);
        }
      });
    });
  }, []);
  let diffDays = "";
  if (coupon) {
    const date1 = coupon.start.substr(0, 10);
    const date2 = coupon.end.substr(0, 10);
    let arr = date1.split("-");
    let arr2 = date2.split("-");
    let start = arr.join(",");
    let end = arr2.join(",");
    const oneDay = 24 * 60 * 60 * 1000;
    let startdate = new Date(start);
    let enddate = new Date(end);
    diffDays = Math.round(Math.abs((startdate - enddate) / oneDay));
    console.log(`yeh ha ${diffDays}`);
  }

  const prod = Pbyid.product._id;
  const handlemodal = () => {
    setShow(false);
  };
  const handlecheckout = () => {
    setShow(false);
    setcheckout(1);
  };
  const removeblur = (blur) => {
    setcheckout(blur);
    window.location.reload();
  };
  const handleaddsss = () => {
    if (token) {
      const items = {
        user,
        price: "1700",
        prod,
        quantity,
      };
      dispatch(addtocart(items)).then((res) => {
        dispatch(CbyId(Cid)).then((res) => {
          setShow(true);
        });
      });
    } else if (!token) {
      history.push("/login");
    }
  };
  const handleadd = () => {
    if (token) {
      const items = {
        user,
        price,
        prod,
        quantity,
      };
      dispatch(addtocart(items)).then((res) => {
        dispatch(CbyId(Cid)).then((res) => {
          setShow(true);
        });
      });
    } else if (!token) {
      history.push("/login");
    }
  };
  const incquan = () => {
    setquantity(quantity + 1);
  };
  const decquan = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };
  const cartbyid = useSelector((state) => state.cartbyid);
  let total;
  if (cartbyid.item.cartItems.length > 0) {
    let p = cartbyid.item.cartItems.map((it) => {
      return it.price * it.quantity;
    });
    total = p.reduce((tot, item) => {
      return tot + item;
    });
  }
  const handlecheck = (check) => {
    setcheckout(check);
  };
  const handleremove = (id) => {
    const it = {
      cartid: Cid,
      id,
    };
    dispatch(remove(it)).then((res) => {
      setremoved(true);
    });
  };
  const renderModal = () => {
    return (
      <Modal show={show} onHide={handlemodal}>
        <Modal.Body>
          {cartbyid.item.cartItems.map((cart) => {
            return (
              <div className="modal__centre">
                <img
                  src={cart.product.productImage[0].img}
                  className="modal__image"
                ></img>
                <div>
                  <p className="modal__name">{cart.product.name}</p>
                  <p
                    className="modal__color"
                    style={{ backgroundColor: `${cart.product.color}` }}
                  ></p>
                  <p>
                    <span className="modal__price">${cart.price}</span> X{" "}
                    {cart.quantity}
                  </p>
                </div>
                <p
                  className="El"
                  onClick={() => handleremove(cart._id)}
                  style={{ cursor: "pointer" }}
                >
                  Eliminar
                </p>
              </div>
            );
          })}

          <div className="d-flex">
            <p className="total">Total:${total}</p>
            <Media query="(max-width:767px)">
              {(matches) => {
                return matches ? (
                  <NavLink to="/Checkout" className="modal__link">
                    Ir a Pagar
                  </NavLink>
                ) : (
                  <p
                    className="modal__link"
                    onClick={handlecheckout}
                    style={{ cursor: "pointer" }}
                  >
                    Ir a Pagar
                  </p>
                );
              }}
            </Media>
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  const handleinc = () => {
    if (bulla < 3) {
      setbulla(bulla + 1);
    }
  };
  const handledec = () => {
    if (bulla > 0) {
      setbulla(bulla - 1);
    }
  };
  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
    centerMode: false,
    swipe: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
    centerMode: false,
    swipe: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const openinfo = () => {
    if (info === "no") {
      setinfo("yes");
      console.log(info);
    } else {
      setinfo("no");
    }
  };
  const handlerev = () => {
    if (rev === "no") {
      setrev("yes");
      console.log(rev);
    } else {
      setrev("no");
    }
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Helmet>
        <title>Armea/product</title>
        <meta name="description" content="comprar los productos en el armea" />
        <meta name="keywords" content="armea,armeaproducts,armeacombo" />
      </Helmet>
      <div
        className={
          checkout == 0
            ? "container-fluid m-0 p-0"
            : "container-fluid m-0 p-0 civic"
        }
        style={{ overflow: "hidden" }}
      >
        <Nav handlecheck={(check) => handlecheck(check)} />
        <div className="product__container">
          <div className="header_container">
            <h3 className="header_text">
              {Pbyid.product.name}.
              <span className="inner__span">
                Tavolo actualmente se encuentra en una oferta especial de{" "}
                {Math.floor(disc)}% de descuento
                <br />
              </span>
              la oferta termina en: 12 dias
            </h3>
          </div>
          <Media query="(max-width:767px)">
            {(matches) => {
              return matches ? (
                <div className="product__upper">
                  <div className="">
                    <div className="ProductImage_slider">
                      <NavLink to="/shop">
                        <p className="sliderabove__text">
                          Regresar a la Tienda
                        </p>
                      </NavLink>

                      <div className="d-flex justify-content-center">
                        <div className="big__image">
                          <Slider {...settings}>
                            {Pbyid.product.productImage.map((im, index) => {
                              return (
                                <img
                                  src={im.img}
                                  className="BIGIMAGE toggleIn"
                                ></img>
                              );
                            })}
                          </Slider>
                        </div>
                      </div>
                    </div>
                    <div className="description__container">
                      <div className="d-flex justify-content-between">
                        <p className="header">{Pbyid.product.name}</p>
                        <h2 className="new__price">
                          ${Pbyid.product.saleprice}
                        </h2>
                      </div>
                      <div className="d-flex justify-content-end lomba">
                        <div className="d-flex">
                          <p className="cutprice">
                            ${Pbyid.product.actualPrice}
                          </p>
                          <p className="offer">
                            Ahorras {Math.floor(disc)}% con esta oferta
                          </p>
                        </div>
                      </div>

                      <div className="d-flex">
                        {Pbyid.product.colors.map((col) => {
                          return (
                            <p
                              className="co"
                              style={{ backgroundColor: `${col.color}` }}
                            ></p>
                          );
                        })}

                        <div className="d-flex">
                          <p
                            className="lef"
                            onClick={decquan}
                            style={{ cursor: "pointer" }}
                          >
                            <MdKeyboardArrowLeft />
                          </p>
                          <p className="quantity">{quantity} unidad</p>
                          <p
                            className="lef2"
                            onClick={incquan}
                            style={{ cursor: "pointer" }}
                          >
                            <MdKeyboardArrowRight />
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <p className="desc">Descripción</p>
                        <div className="d-flex">
                          <Media query="(max-width:767px)">
                            {(matches) => {
                              return matches ? (
                                <p className="star">
                                  <StarRatings
                                    starRatedColor="#ff6606"
                                    rating={5}
                                    starDimension="15px"
                                    starSpacing="0px"
                                  />
                                </p>
                              ) : null;
                            }}
                          </Media>
                          <p className="openions">10 openions</p>
                        </div>
                      </div>
                      <p className="des">{Pbyid.product.description}</p>
                      <div className="d-flex justify-content-center">
                        <p className="COMPRAR" onClick={handleadd}>
                          AÑADIR AL CARRITO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="product__upper d-flex justify-content-center">
                  <div className="d-flex">
                    <div className="ProductImage_slider">
                      <NavLink to="/shop">
                        <p className="sliderabove__text">
                          Regresar a la Tienda
                        </p>
                      </NavLink>

                      <div className="d-flex">
                        <Media query="(min-width:1300px)">
                          {(matches) => {
                            return matches ? (
                              <div className="small_images">
                                {Pbyid.product.productImage.map(
                                  (ima, index) => {
                                    return (
                                      <div className="slider__image">
                                        <img
                                          src={ima.img}
                                          onClick={() => setbulla(index)}
                                          className="imga"
                                        ></img>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            ) : null;
                          }}
                        </Media>
                        <Media query="(min-width:768px) and (max-width:1299px)">
                          {(matches) => {
                            return matches ? (
                              <div className="small_images">
                                {Pbyid.product.productImage.map(
                                  (ima, index) => {
                                    return (
                                      <div className="slider__image">
                                        <img
                                          src={ima.img}
                                          onClick={() => setbulla(index)}
                                          className="imga"
                                        ></img>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            ) : null;
                          }}
                        </Media>

                        <div className="big__image">
                          <div className="arrow__border">
                            <p className="left__arrow" onClick={handledec}>
                              <MdKeyboardArrowLeft />
                            </p>
                          </div>
                          {Pbyid.product.productImage.map((im, index) => {
                            if (index == bulla) {
                              return (
                                <img
                                  src={im.img}
                                  className="BIGIMAGE toggleIn"
                                ></img>
                              );
                            }
                          })}
                          <div className="arrow__border2">
                            <p className="left__arrow2" onClick={handleinc}>
                              <MdKeyboardArrowRight />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="description__container">
                      <p className="header">{Pbyid.product.name}</p>
                      <div className="d-flex">
                        <Media query="(max-width:767px)">
                          {(matches) => {
                            return matches ? (
                              <p className="star">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="7px"
                                  starSpacing="0px"
                                />
                              </p>
                            ) : (
                              <p className="star">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="15px"
                                  starSpacing="5px"
                                />
                              </p>
                            );
                          }}
                        </Media>
                        <p className="openions">10 openions</p>
                      </div>
                      <div className="d-flex">
                        <p className="cutprice">${Pbyid.product.actualPrice}</p>
                        <p className="offer">
                          Ahorras {Math.floor(disc)}% con esta oferta
                        </p>
                      </div>
                      <h2 className="new__price">${Pbyid.product.saleprice}</h2>
                      <div className="d-flex">
                        {Pbyid.product.colors.map((col) => {
                          return (
                            <p
                              className="co"
                              style={{ backgroundColor: `${col.color}` }}
                            ></p>
                          );
                        })}

                        <div className="d-flex">
                          <p
                            className="lef"
                            onClick={decquan}
                            style={{ cursor: "pointer" }}
                          >
                            <MdKeyboardArrowLeft />
                          </p>
                          <p className="quantity">{quantity} unidad</p>
                          <p
                            className="lef2"
                            onClick={incquan}
                            style={{ cursor: "pointer" }}
                          >
                            <MdKeyboardArrowRight />
                          </p>
                        </div>
                      </div>
                      <p className="desc">Descripción</p>
                      <p className="des">{Pbyid.product.description}</p>
                      <div className="d-flex justify-content-center">
                        <p className="COMPRAR" onClick={handleadd}>
                          AÑADIR AL CARRITO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </Media>

          <Media query="(max-width:767px)">
            {(matches) => {
              return matches ? (
                <div>
                  <div className="beloow__coupon">
                    <div className="d-flex justify-content-center oneww">
                      <p style={{ cursor: "pointer" }} onClick={openinfo}>
                        Información del producto
                      </p>
                    </div>
                    <div>
                      <div
                        className={info === "yes" ? "below__combo" : "activeww"}
                      >
                        <h2 className="below_header">Estructura y armado</h2>
                        <p className="below__text">
                          Esta casita no necesita clavos ni pegamento y consta
                          de tan solo 8 piezas, se puede armar en 5 minutos y es
                          muy resistente, está hecha de material laminado lo
                          cual la hacen durable ante cualquier derrame de
                          líquidos.
                        </p>
                        <Media query="(max-width:767px)">
                          {(matches) => {
                            return matches ? (
                              <div className="d-flex" style={{ width: "100%" }}>
                                <div className="video1">
                                  <ReactPlayer
                                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                    width="100%"
                                    height="120px"
                                  />
                                </div>
                              </div>
                            ) : null;
                          }}
                        </Media>
                        <h2 className="Beneficios">Beneficios</h2>
                        <p className="text2">{Pbyid.product.benefits}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center onewww">
                      <p style={{ cursor: "pointer" }} onClick={handlerev}>
                        Opiniones de clientes
                      </p>
                    </div>
                    <div
                      className={
                        rev === "yes" ? "reviews__container" : "actooli"
                      }
                    >
                      <h2 className="reviews__header">
                        Calificación de este producto
                      </h2>
                      <Media query="(max-width:767px)">
                        {(matches) => {
                          return matches ? (
                            <div>
                              <div className="d-flex">
                                <div>
                                  <p className="orignal__rating">
                                    {Pbyid.product.rating}.0
                                  </p>
                                  <p className="reviews__rating">
                                    <Media query="(max-width:767px)">
                                      {(matches) => {
                                        return matches ? (
                                          <StarRatings
                                            starRatedColor="#ff6606"
                                            rating={5}
                                            starDimension="15px"
                                            starSpacing="5px"
                                          />
                                        ) : null;
                                      }}
                                    </Media>
                                  </p>
                                </div>
                              </div>
                              <div
                                style={{
                                  marginLeft: "-40px",
                                  marginTop: "-30px",
                                }}
                              >
                                <div className="d-flex">
                                  <p className="estrellas">5 estrellas </p>
                                  <p className="review__bar"></p>
                                </div>
                                <div className="d-flex">
                                  <p className="estrellas2">5 estrellas </p>
                                  <p className="review__bar2"></p>
                                </div>
                                <div className="d-flex">
                                  <p className="estrellas2">5 estrellas </p>
                                  <p className="review__bar2"></p>
                                </div>
                                <div className="d-flex">
                                  <p className="estrellas2">5 estrellas </p>
                                  <p className="review__bar2"></p>
                                </div>
                              </div>
                            </div>
                          ) : null;
                        }}
                      </Media>

                      <h2 className="Reseñas">Reseñas de clientes</h2>
                      {Pbyid.product.reviews.map((re) => {
                        return (
                          <div>
                            <div className="d-flex">
                              <h4 className="Hermoso">{re.heading}</h4>
                              <Media query="(max-width:767px)">
                                {(matches) => {
                                  return matches ? (
                                    <p className="rat">
                                      <StarRatings
                                        starRatedColor="#ff6606"
                                        rating={5}
                                        starDimension="15px"
                                        starSpacing="0px"
                                      />
                                    </p>
                                  ) : null;
                                }}
                              </Media>
                            </div>
                            <p className="text7">{re.Review}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className=" bara justify-content-center combo__review">
                    <h3 className="combos">ArmeaCombos</h3>
                    <div className="d-flex justify-content-center">
                      <div className="combo__container">
                        <div>
                          <div className="">
                            <div className="d-flex">
                              <div className="combo__Image">
                                <div className="inner">
                                  <img
                                    src={Pbyid.product.comboimages[0].img1}
                                    className="imgss"
                                  ></img>

                                  <div className="d-flex justify-content-center">
                                    <Media query="(max-width:767px)">
                                      {(matches) => {
                                        return matches ? (
                                          <p className="combo__rating">
                                            <StarRatings
                                              starRatedColor="#ff6606"
                                              rating={5}
                                              starDimension="15px"
                                              starSpacing="5px"
                                            />
                                          </p>
                                        ) : null;
                                      }}
                                    </Media>
                                  </div>

                                  <p className="combo__text">
                                    {Pbyid.product.comboname[0].name1}
                                  </p>
                                </div>
                              </div>
                              <p className="plus">
                                <AiOutlinePlus />
                              </p>
                              <div className="combo__Image2">
                                <div className="inner">
                                  <img
                                    src={Pbyid.product.comboimages[0].img2}
                                    className="imgss"
                                  ></img>
                                  <Media query="(min-width:768px) and (max-width:1299px)">
                                    {(matches) => {
                                      return matches ? (
                                        <p className="combo__rating">
                                          <StarRatings
                                            starRatedColor="#ff6606"
                                            rating={5}
                                            starDimension="15px"
                                            starSpacing="5px"
                                          />
                                        </p>
                                      ) : null;
                                    }}
                                  </Media>
                                  <Media query="(min-width:1300px)">
                                    {(matches) => {
                                      return matches ? (
                                        <p className="combo__rating">
                                          <StarRatings
                                            starRatedColor="#ff6606"
                                            rating={5}
                                            starDimension="15px"
                                            starSpacing="5px"
                                          />
                                        </p>
                                      ) : null;
                                    }}
                                  </Media>
                                  <Media query="(max-width:767px)">
                                    {(matches) => {
                                      return matches ? (
                                        <p
                                          className="combo__rating"
                                          style={{ marginLeft: "10px" }}
                                        >
                                          <StarRatings
                                            starRatedColor="#ff6606"
                                            rating={5}
                                            starDimension="15px"
                                            starSpacing="5px"
                                          />
                                        </p>
                                      ) : null;
                                    }}
                                  </Media>
                                  <p className="combo__text">
                                    {Pbyid.product.comboname[0].name1}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-center">
                                <p className="discount">
                                  Precio:{" "}
                                  <span className="combo__price">
                                    ${Pbyid.product.comboprice}
                                  </span>
                                  <span className="combo__discount">
                                    -{Pbyid.product.combopercentage}%
                                  </span>
                                </p>
                              </div>
                              <div className="d-flex justify-content-center">
                                <p
                                  onClick={handleaddsss}
                                  style={{ cursor: "pointer" }}
                                  className="combo__link"
                                >
                                  COMPRAR
                                </p>
                              </div>
                              <div className="d-flex justify-content-center">
                                <p
                                  onClick={handleaddsss}
                                  className="combo__links"
                                  style={{ cursor: "pointer" }}
                                >
                                  AÑADIR
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="d-flex bara justify-content-center combo__review">
                    <div className="combo__container">
                      <h3 className="combos">ArmeaCombos</h3>
                      <div>
                        <div className="d-flex">
                          <div className="combo__Image">
                            <div className="inner">
                              <img
                                src={Pbyid.product.comboimages[0].img1}
                                className="imgss"
                              ></img>
                              <Media query="(min-width:768px) and (max-width:1299px)">
                                {(matches) => {
                                  return matches ? (
                                    <p className="combo__rating">
                                      <StarRatings
                                        starRatedColor="#ff6606"
                                        rating={5}
                                        starDimension="8px"
                                        starSpacing="2px"
                                      />
                                    </p>
                                  ) : null;
                                }}
                              </Media>
                              <Media query="(min-width:1300px)">
                                {(matches) => {
                                  return matches ? (
                                    <p className="combo__rating">
                                      <StarRatings
                                        starRatedColor="#ff6606"
                                        rating={5}
                                        starDimension="15px"
                                        starSpacing="2px"
                                      />
                                    </p>
                                  ) : null;
                                }}
                              </Media>
                              <Media query="(max-width:767px)">
                                {(matches) => {
                                  return matches ? (
                                    <p className="combo__rating">
                                      <StarRatings
                                        starRatedColor="#ff6606"
                                        rating={5}
                                        starDimension="7px"
                                        starSpacing="0px"
                                      />
                                    </p>
                                  ) : null;
                                }}
                              </Media>

                              <p className="combo__text">
                                {Pbyid.product.comboname[0].name1}
                              </p>
                            </div>
                          </div>
                          <p className="plus">
                            <AiOutlinePlus />
                          </p>
                          <div className="combo__Image2">
                            <div className="inner">
                              <img
                                src={Pbyid.product.comboimages[0].img2}
                                className="imgss"
                              ></img>
                              <Media query="(min-width:768px) and (max-width:1299px)">
                                {(matches) => {
                                  return matches ? (
                                    <p className="combo__rating">
                                      <StarRatings
                                        starRatedColor="#ff6606"
                                        rating={5}
                                        starDimension="8px"
                                        starSpacing="2px"
                                      />
                                    </p>
                                  ) : null;
                                }}
                              </Media>
                              <Media query="(min-width:1300px)">
                                {(matches) => {
                                  return matches ? (
                                    <p className="combo__rating">
                                      <StarRatings
                                        starRatedColor="#ff6606"
                                        rating={5}
                                        starDimension="15px"
                                        starSpacing="2px"
                                      />
                                    </p>
                                  ) : null;
                                }}
                              </Media>
                              <Media query="(max-width:767px)">
                                {(matches) => {
                                  return matches ? (
                                    <p className="combo__rating">
                                      <StarRatings
                                        starRatedColor="#ff6606"
                                        rating={5}
                                        starDimension="7px"
                                        starSpacing="0px"
                                      />
                                    </p>
                                  ) : null;
                                }}
                              </Media>
                              <p className="combo__text">
                                {Pbyid.product.comboname[0].name1}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p className="discount">
                              Precio:{" "}
                              <span className="combo__price">
                                ${Pbyid.product.comboprice}
                              </span>
                              <span className="combo__discount">
                                -{Pbyid.product.combopercentage}%
                              </span>
                            </p>
                            <div>
                              <p
                                onClick={handleaddsss}
                                style={{ cursor: "pointer" }}
                                className="combo__link"
                              >
                                COMPRAR
                              </p>
                            </div>
                            <div>
                              <p
                                onClick={handleaddsss}
                                className="combo__links"
                                style={{ cursor: "pointer" }}
                              >
                                AÑADIR
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="below__combo">
                          <h2 className="below_header">Estructura y armado</h2>
                          <p className="below__text">
                            Esta casita no necesita clavos ni pegamento y consta
                            de tan solo 8 piezas, se puede armar en 5 minutos y
                            es muy resistente, está hecha de material laminado
                            lo cual la hacen durable ante cualquier derrame de
                            líquidos.
                          </p>
                          <Media query="(max-width:767px)">
                            {(matches) => {
                              return matches ? (
                                <div
                                  className="d-flex"
                                  style={{ width: "100%" }}
                                >
                                  <div className="video1">
                                    <ReactPlayer
                                      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                      width="100%"
                                      height="120px"
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className="d-flex"
                                  style={{ width: "100%" }}
                                >
                                  <div className="video1">
                                    <ReactPlayer
                                      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                      width="100%"
                                      height="120px"
                                    />
                                  </div>
                                  <div className="video2">
                                    <ReactPlayer
                                      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                      width="100%"
                                      height="120px"
                                    />
                                  </div>
                                </div>
                              );
                            }}
                          </Media>
                          <h2 className="Beneficios">Beneficios</h2>
                          <p className="text2">{Pbyid.product.benefits}</p>
                          <div className="d-flex">
                            <h2 className="Preguntas">Preguntas frecuentes</h2>
                            <p className="text3">Ver preguntas</p>
                          </div>
                          <p className="Información">Información de envío</p>
                          <p className="text4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque a pellentesque tellus. Vestibulum
                            eu pharetra lacus, in vehicula nisi
                          </p>
                          <p className="Información">
                            ¿Dónde fabrican los muebles?
                          </p>
                          <p className="text4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque a pellentesque tellus. Vestibulum
                            eu pharetra lacus, in vehicula nisi
                          </p>
                          <p className="Información">
                            ¿Cuánto cuesta el envío?
                          </p>
                          <p className="text4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque a pellentesque tellus. Vestibulum
                            eu pharetra lacus, in vehicula nisi
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="reviews__container">
                      <h2 className="reviews__header">
                        Calificación de este producto
                      </h2>
                      <Media query="(max-width:767px)">
                        {(matches) => {
                          return matches ? (
                            <div>
                              <div className="d-flex">
                                <div>
                                  <p className="orignal__rating">
                                    {Pbyid.product.rating}.0
                                  </p>
                                  <p className="reviews__rating">
                                    <Media query="(max-width:767px)">
                                      {(matches) => {
                                        return matches ? (
                                          <StarRatings
                                            starRatedColor="#ff6606"
                                            rating={5}
                                            starDimension="7px"
                                            starSpacing="0px"
                                          />
                                        ) : (
                                          <StarRatings
                                            starRatedColor="#ff6606"
                                            rating={5}
                                            starDimension="15px"
                                            starSpacing="1px"
                                          />
                                        );
                                      }}
                                    </Media>
                                  </p>
                                </div>
                              </div>
                              <div
                                style={{
                                  marginLeft: "-40px",
                                  marginTop: "-30px",
                                }}
                              >
                                <div className="d-flex">
                                  <p className="estrellas">5 estrellas </p>
                                  <p className="review__bar"></p>
                                </div>
                                <div className="d-flex">
                                  <p className="estrellas2">5 estrellas </p>
                                  <p className="review__bar2"></p>
                                </div>
                                <div className="d-flex">
                                  <p className="estrellas2">5 estrellas </p>
                                  <p className="review__bar2"></p>
                                </div>
                                <div className="d-flex">
                                  <p className="estrellas2">5 estrellas </p>
                                  <p className="review__bar2"></p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="d-flex">
                              <div>
                                <p className="orignal__rating">
                                  {Pbyid.product.rating}.0
                                </p>
                                <p className="reviews__rating">
                                  <Media query="(max-width:767px)">
                                    {(matches) => {
                                      return matches ? (
                                        <StarRatings
                                          starRatedColor="#ff6606"
                                          rating={5}
                                          starDimension="7px"
                                          starSpacing="0px"
                                        />
                                      ) : (
                                        <StarRatings
                                          starRatedColor="#ff6606"
                                          rating={5}
                                          starDimension="15px"
                                          starSpacing="1px"
                                        />
                                      );
                                    }}
                                  </Media>
                                </p>
                              </div>
                              <div style={{ marginLeft: "-10px" }}>
                                <div className="d-flex">
                                  <p className="estrellas">5 estrellas </p>
                                  <p className="review__bar"></p>
                                </div>
                                <div className="d-flex">
                                  <p className="estrellas2">5 estrellas </p>
                                  <p className="review__bar2"></p>
                                </div>
                                <div className="d-flex">
                                  <p className="estrellas2">5 estrellas </p>
                                  <p className="review__bar2"></p>
                                </div>
                                <div className="d-flex">
                                  <p className="estrellas2">5 estrellas </p>
                                  <p className="review__bar2"></p>
                                </div>
                              </div>
                            </div>
                          );
                        }}
                      </Media>

                      <h2 className="Reseñas">Reseñas de clientes</h2>
                      {Pbyid.product.reviews.map((re) => {
                        return (
                          <div>
                            <div className="d-flex">
                              <h4 className="Hermoso">{re.heading}</h4>
                              <Media query="(max-width:767px)">
                                {(matches) => {
                                  return matches ? (
                                    <p className="rat">
                                      <StarRatings
                                        starRatedColor="#ff6606"
                                        rating={5}
                                        starDimension="7px"
                                        starSpacing="0px"
                                      />
                                    </p>
                                  ) : (
                                    <p className="rat">
                                      <StarRatings
                                        starRatedColor="#ff6606"
                                        rating={5}
                                        starDimension="15px"
                                        starSpacing="2px"
                                      />
                                    </p>
                                  );
                                }}
                              </Media>
                            </div>
                            <p className="text7">{re.Review}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }}
          </Media>
          <div className="similar">
            <div className="d-flex justify-content-center">
              <h1 className="similares">
                Productos<span className="sim"> similares</span>
              </h1>
            </div>
            <Media query="(min-width:1300px)">
              {(matches) => {
                return matches ? (
                  <div className="d-flex justify-content-center">
                    <div className="row">
                      {getproducts.products.slice(0, 4).map((car) => {
                        if (car.category.name === Pbyid.product.category.name) {
                          return (
                            <div className="col-3 mt-5">
                              <div className="cards">
                                <img
                                  src={car.productImage[0].img}
                                  className="card__image"
                                ></img>
                                <p className="card__rating">
                                  <StarRatings
                                    starRatedColor="#ff6606"
                                    rating={5}
                                    starDimension="15px"
                                    starSpacing="2px"
                                  />
                                </p>
                                <p className="card__name">{car.name}</p>
                                <p className="card__price">${car.saleprice}</p>
                                <a href={`${car._id}`} className="DETALLES">
                                  DETALLES
                                </a>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                ) : null;
              }}
            </Media>

            <Media query="(min-width:768px) and (max-width:1299px)">
              {(matches) => {
                return matches ? (
                  <div className="row justify-content-center">
                    {getproducts.products.slice(0, 4).map((car) => {
                      if (car.category.name === Pbyid.product.category.name) {
                        return (
                          <div className="col-6 mt-5">
                            <div className="cards">
                              <img
                                src={car.productImage[0].img}
                                className="card__image"
                              ></img>
                              <p className="card__rating">
                                <StarRatings
                                  starRatedColor="#ff6606"
                                  rating={5}
                                  starDimension="15px"
                                  starSpacing="2px"
                                />
                              </p>
                              <p className="card__name">{car.name}</p>
                              <p className="card__price">${car.saleprice}</p>
                              <a href={`${car._id}`} className="DETALLES">
                                DETALLES
                              </a>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : null;
              }}
            </Media>
            <Media query="(max-width:767px)">
              {(matches) => {
                return matches ? (
                  <Slider {...settings2}>
                    {getproducts.products.slice(0, 4).map((car) => {
                      if (car.category.name === Pbyid.product.category.name) {
                        return (
                          <div className="cards">
                            <div>
                              <img
                                src={car.productImage[0].img}
                                className="card__image"
                              ></img>
                              <div className="d-flex justify-content-center">
                                <p className="card__rating">
                                  <StarRatings
                                    starRatedColor="#ff6606"
                                    rating={5}
                                    starDimension="15px"
                                    starSpacing="2px"
                                  />
                                </p>
                              </div>
                              <p className="card__name">{car.name}</p>
                              <div className="d-flex justify-content-center">
                                <p className="card__price">${car.saleprice}</p>
                              </div>
                              <div className="d-flex justify-content-center">
                                <a href={`${car._id}`} className="DETALLES">
                                  DETALLES
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </Slider>
                ) : null;
              }}
            </Media>
          </div>
        </div>
        {renderModal()}
      </div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? null : (
            <Checkoutmodal classstate={checkout} numberState={formstates} />
          );
        }}
      </Media>
      <Footer />
    </div>
  );
}

export default Product;
