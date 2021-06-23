import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../css/_nav.scss";
import Drarwer from "./Drarwer";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { CbyId } from "../actions/cartbyid";
import { Modal, Button } from "react-bootstrap";
import { remove } from "../actions/removeitem";
import { logO } from "../actions/login";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

const Navigation = (props) => {
  const token = localStorage.getItem("token");
  const [search, setSearch] = useState(false);
  const Cid = JSON.parse(localStorage.getItem("user"));
  const cartbyid = useSelector((state) => state.cartbyid);
  const [show, setShow] = useState(0);
  const [sh, setsh] = useState(0);
  const [query, setquery] = useState();
  const history = useHistory();
  const [removed, setremoved] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const handlecheckout = () => {
    setShow(false);
    props.handlecheck(1);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CbyId(Cid));
  }, []);
  useEffect(() => {
    dispatch(CbyId(Cid));
    setremoved(false);
  }, [removed]);

  const handlemodal = () => {
    setShow(false);
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
  const hands = () => {
    setSearch(true);
    setsh(1);
  };
  const handleclick = () => {
    if (token) {
      setShow(true);
    } else if (!token) {
      history.push("/login");
    }
  };
  const handlesearch = (e) => {
    e.preventDefault();
    if (!search) {
      setSearch(true);
    } else {
      setSearch(false);
      if (query) {
        history.push(`/product?query=${query}`);
      }
    }
  };

  const handlesignout = () => {
    dispatch(logO()).then((res) => {
      window.location.reload();
    });
  };
  const imagea = () => {
    if (user) {
      if (user.image) {
        return (
          <Image
            publicId={user.image}
            cloudName="dd77cqt5fs"
            style={{
              cursor: "pointer",
              border: "1px solid white",
              borderRadius: "50%",
            }}
          >
            <Transformation
              width="50"
              height="50"
              crop="scale"
              gravity="face"
              crop="thumb"
              radius="max"
            />
          </Image>
        );
      } else {
        return (
          <img
            src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
            className="imug"
          ></img>
        );
      }
    } else if (!user) {
      return (
        <img
          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
          className="imug"
        ></img>
      );
    }
  };
  const imagea2 = () => {
    if (user) {
      if (user.image) {
        return (
          <Image
            publicId={user.image}
            cloudName="dd77cqt5fs"
            style={{
              cursor: "pointer",
              border: "1px solid white",
              borderRadius: "50%",
            }}
          >
            <Transformation
              width="40"
              height="40"
              crop="scale"
              gravity="face"
              crop="thumb"
              radius="max"
            />
          </Image>
        );
      } else {
        return (
          <img
            src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
            className="imug"
          ></img>
        );
      }
    } else if (!user) {
      return (
        <img
          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
          className="imug"
        ></img>
      );
    }
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
            <p className="total">Total:${cartbyid.total}</p>
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
  return (
    <div>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <from onSubmit={handlesearch}>
              <nav className="nav">
                <div className="nav__left">
                  <NavLink to="/">
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619080123/logo_oo46gw.png"
                      alt="logo"
                      className="imgray"
                    />
                  </NavLink>
                </div>
                <div className="nav__right">
                  <div className="div__left">
                    {!search &&
                      (token ? (
                        <div className="d-flex justify-content-between proffu">
                          <div className="imaguu">
                            <NavLink to="personalinfo">{imagea2()}</NavLink>
                          </div>
                          <p className="nav__name">
                            {user ? user.name + " " + user.surname : "John Doe"}
                          </p>
                        </div>
                      ) : (
                        <div className="d-flex">
                          <NavLink to="/login" className="loginss">
                            Ingresar
                          </NavLink>
                          <NavLink
                            to="/register"
                            className="registers"
                            style={{ color: "black" }}
                          >
                            Registrarse
                          </NavLink>
                        </div>
                      ))}
                    {search && (
                      <input
                        type="text"
                        placeholder="Buscar"
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                        className="inputaaa"
                      />
                    )}
                  </div>

                  <div className="div___right">
                    <div className="d-flex">
                      {window.location.pathname !== "/product" ? (
                        <button
                          style={{
                            zIndex: "100",
                            color: "white",
                            marginTop: "0px",
                            marginRight: "0px",
                            border: "none",
                            background: "transparent",
                          }}
                          type="submit"
                          onClick={handlesearch}
                        >
                          <SearchIcon></SearchIcon>
                        </button>
                      ) : sh === 0 ? (
                        <p
                          style={{
                            color: "white",
                            marginRight: "20px",
                            marginTop: "10px",
                          }}
                          onClick={hands}
                        >
                          <SearchIcon></SearchIcon>
                        </p>
                      ) : (
                        <a
                          style={{ color: "white", marginRight: "20px" }}
                          href={`/product?query=${query}`}
                        >
                          {" "}
                          <SearchIcon></SearchIcon>
                        </a>
                      )}
                      {sh === 0 ? (
                        <NavLink to="#">
                          <div className="d-flex" style={{ marginTop: "8px" }}>
                            {token ? (
                              <ShoppingBasketIcon
                                onClick={handleclick}
                                style={{
                                  marginTop: "-7px",
                                }}
                              ></ShoppingBasketIcon>
                            ) : (
                              <NavLink
                                to="/login"
                                style={{ color: "white", marginTop: "-9px" }}
                              >
                                <ShoppingBasketIcon></ShoppingBasketIcon>
                              </NavLink>
                            )}
                            {cartbyid.item.cartItems.length === 0 ? null : (
                              <div className="cart__items">
                                <p
                                  style={{
                                    marginLeft: "5px",
                                    marginTop: "-13px",
                                    color: "white",
                                    position: "absolute",
                                    backgroundColor: "blue",
                                    padding: "1px 5px",
                                    borderRadius: "50%",
                                  }}
                                >
                                  {cartbyid.item.cartItems.length}
                                </p>
                              </div>
                            )}
                          </div>
                        </NavLink>
                      ) : (
                        <NavLink to="#">
                          <div className="d-flex" style={{ marginTop: "0px" }}>
                            {token ? (
                              <ShoppingBasketIcon
                                onClick={handleclick}
                                style={{
                                  marginTop: "0px",
                                }}
                              ></ShoppingBasketIcon>
                            ) : (
                              <NavLink
                                to="/login"
                                style={{ color: "white", marginTop: "-8px" }}
                              >
                                <ShoppingBasketIcon></ShoppingBasketIcon>
                              </NavLink>
                            )}
                            {cartbyid.item.cartItems.length === 0 ? null : (
                              <div className="cart__items">
                                <p
                                  style={{
                                    marginLeft: "5px",
                                    marginTop: "-2px",
                                    backgroundColor: "blue",
                                  }}
                                >
                                  {cartbyid.item.cartItems.length}
                                </p>
                              </div>
                            )}
                          </div>
                        </NavLink>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <Drarwer />
                </div>
                {renderModal()}
              </nav>
            </from>
          ) : (
            <form onSubmit={handlesearch}>
              <nav className="nav">
                <div className="nav__left">
                  <NavLink to="/">
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619080123/logo_oo46gw.png"
                      alt="logo"
                      className="imgray"
                    />
                  </NavLink>
                  <NavLink to="/" className="linkaaa">
                    Inicio
                  </NavLink>
                  <NavLink to="/shop" className="linkaaa">
                    Tienda
                  </NavLink>
                  <NavLink to="/about" className="linkaaa">
                    Nosotros
                  </NavLink>
                  <NavLink to="/contact" className="linkaaa">
                    Contacto
                  </NavLink>
                  <NavLink to="/blog" className="linkaaa">
                    Blog
                  </NavLink>
                  {token ? (
                    <NavLink to="#" onClick={handlesignout} className="linkaaa">
                      Cerrar sesión
                    </NavLink>
                  ) : null}
                </div>
                <div className="nav__right">
                  <div className="div__left">
                    {!search &&
                      (token ? (
                        <div className="d-flex justify-content-between proffu">
                          <div className="imaguu">
                            <NavLink to="/personalinfo">{imagea()}</NavLink>
                          </div>

                          <p className="nav__name">
                            {user ? user.name + " " + user.surname : "John Doe"}
                          </p>
                        </div>
                      ) : (
                        <div className="sassuu">
                          <div className="d-flex">
                            <NavLink to="/login" className="loginss">
                              Ingresar
                            </NavLink>
                            <NavLink
                              to="/register"
                              className="registers"
                              style={{ color: "black" }}
                            >
                              Registrarse
                            </NavLink>
                          </div>
                        </div>
                      ))}
                    {search && (
                      <input
                        type="text"
                        placeholder="Buscar"
                        className="inputaaa"
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                      />
                    )}
                  </div>
                  <div className="div__right">
                    {window.location.pathname !== "/product" ? (
                      <button
                        style={{
                          zIndex: "100",
                          color: "white",
                          marginTop: "5px",
                          marginRight: "10px",
                          border: "none",
                          background: "transparent",
                        }}
                        type="submit"
                      >
                        <SearchIcon></SearchIcon>
                      </button>
                    ) : sh === 0 ? (
                      <p
                        style={{
                          color: "white",
                          marginRight: "20px",
                          marginTop: "10px",
                        }}
                        onClick={hands}
                      >
                        <SearchIcon></SearchIcon>
                      </p>
                    ) : (
                      <a
                        style={{ color: "white", marginRight: "20px" }}
                        href={`/product?query=${query}`}
                      >
                        {" "}
                        <SearchIcon></SearchIcon>
                      </a>
                    )}

                    {sh === 0 ? (
                      <NavLink to="#">
                        <div className="d-flex" style={{ marginTop: "8px" }}>
                          {token ? (
                            <ShoppingBasketIcon
                              onClick={handleclick}
                              style={{
                                marginTop: "0px",
                              }}
                            ></ShoppingBasketIcon>
                          ) : (
                            <NavLink
                              to="/login"
                              style={{ color: "white", marginTop: "-8px" }}
                            >
                              <ShoppingBasketIcon></ShoppingBasketIcon>
                            </NavLink>
                          )}
                          {cartbyid.item.cartItems.length === 0 ? null : (
                            <div className="cart__items">
                              <p
                                style={{
                                  marginLeft: "5px",
                                  marginTop: "-2px",
                                  backgroundColor: "blue",
                                }}
                              >
                                {cartbyid.item.cartItems.length}
                              </p>
                            </div>
                          )}
                        </div>
                      </NavLink>
                    ) : (
                      <NavLink to="#">
                        <div className="d-flex" style={{ marginTop: "0px" }}>
                          {token ? (
                            <ShoppingBasketIcon
                              onClick={handleclick}
                              style={{
                                marginTop: "0px",
                              }}
                            ></ShoppingBasketIcon>
                          ) : (
                            <NavLink to="/login" style={{ color: "white" }}>
                              <ShoppingBasketIcon></ShoppingBasketIcon>
                            </NavLink>
                          )}
                          {cartbyid.item.cartItems.length === 0 ? null : (
                            <div className="cart__items">
                              <p
                                style={{
                                  marginLeft: "5px",
                                  marginTop: "-2px",
                                  backgroundColor: "blue",
                                }}
                              >
                                {cartbyid.item.cartItems.length}
                              </p>
                            </div>
                          )}
                        </div>
                      </NavLink>
                    )}
                  </div>
                </div>
                <div>
                  <Drarwer />
                </div>
                {renderModal()}
              </nav>
            </form>
          );
        }}
      </Media>
    </div>
  );
};

export default Navigation;
