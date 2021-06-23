import React, { useEffect, useState } from "react";
import "../css/History.scss";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, useHistory } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getorder } from "../actions/getorders";
import Resumen from "./Resumen";
import Helmet from "react-helmet";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

function History() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [blur, setblur] = useState(0);
  const [orderid, setorderid] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getorder());
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const orders = useSelector((state) => state.orders);
  const handlecheck = () => {};
  const handleopen = (id) => {
    setorderid(id);
    setblur(1);
  };
  const handleit = () => {
    setblur(0);
  };
  const token = localStorage.getItem("token");
  const history = useHistory();
  if (!token) {
    history.push("/login");
  }
  return (
    <div>
      <Helmet>
        <title>Armea/orderhistory</title>
        <meta
          name="description"
          content="para realizar un seguimiento de sus pedidos en Armea"
        />
        <meta name="keywords" content="Historial de compras,armea orders" />
      </Helmet>
      <div className={blur === 0 ? "" : "bluri"}>
        <Nav handlecheck={(check) => handlecheck(check)} />
        <div className="misdatos">
          <div className="misdato">
            <div className="misdatosleft">
              <div className="phtag">
                <div className="leftf">
                  {user.image ? (
                    <Image
                      publicId={user.image}
                      cloudName="dd77cqt5fs"
                      style={{
                        cursor: "pointer",
                        border: "1px solid #ff6606",
                        borderRadius: "50%",
                      }}
                    >
                      <Transformation
                        width="200"
                        height="200"
                        crop="scale"
                        gravity="face"
                        crop="thumb"
                        radius="max"
                      />
                    </Image>
                  ) : (
                    <img
                      alt="bawa"
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
                      className="uspp"
                    ></img>
                  )}
                </div>
                <div className="lefts">
                  <p className="misp">
                    {user ? user.name + " " + user.surname : "john Doe"}
                  </p>
                </div>
                <div className="leftt">
                  <p className="misp">
                    {user ? user.email : "Jhondoe@correo.com"}
                  </p>
                </div>
              </div>
              <div className="miscoms">
                <p className="picon2s">
                  <HiOutlineShoppingBag />
                </p>
                <NavLink to="#" className="btn1s">
                  Compras
                </NavLink>
              </div>
              <div className="miscomps">
                <p className="picons">
                  <AiOutlineUser />
                </p>
                <NavLink to="/editdata" className="btn2s">
                  Editar datos
                </NavLink>
              </div>
            </div>
            <div className="misdatosright">
              <p className="mishead">Historial de compras</p>
              <div className="d-flex justify-content-center">
                <div className="tabletop">
                  <p>Pedidos</p>
                  <p>Ordenar por</p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="tablee">
                  <table>
                    <tr>
                      <th className="table__head">Producto</th>
                      <th className="table__head2">Cantidad</th>
                      <th className="table__head2">Fecha</th>
                      <th className="table__head2">Monto</th>
                    </tr>
                    {user
                      ? orders.orders.map((ord) => {
                          if (user.email === ord.email) {
                            return ord.products.map((prod) => {
                              return (
                                <tr className="recordss">
                                  <td>{prod.product.name}</td>
                                  <td>{prod.quantity}</td>
                                  <td>{ord.date}</td>
                                  <td>${prod.price}</td>
                                  <td>
                                    <p
                                      className="ver__button"
                                      onClick={() => handleopen(ord._id)}
                                    >
                                      VER
                                    </p>
                                  </td>
                                </tr>
                              );
                            });
                          }
                        })
                      : null}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <Resumen
        blurstate={blur}
        id={orderid}
        handleit={(chlo) => handleit(chlo)}
      />
    </div>
  );
}

export default History;
