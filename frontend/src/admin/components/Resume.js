import React, { useEffect, useState } from "react";
import "../../css/Resumen.scss";
import { AiOutlineClose } from "react-icons/ai";
import { getorder } from "../../actions/getorders";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { updatestat } from "../actions/updatestatus";
import { useHistory } from "react-router";

function Resume(props) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const dispatch = useDispatch();
  const [status, setstatus] = useState();
  useEffect(() => {
    dispatch(getorder());
  }, []);
  const orders = useSelector((state) => state.orders);
  const handlecloo = () => {
    props.handleit(0);
  };
  const options = [
    {
      value: "Pendiente",
      label: "Pendiente",
    },
    {
      value: "Proceso",
      label: "Proceso",
    },
    {
      value: "Enviado",
      label: "Enviado",
    },
    {
      value: "Entregado",
      label: "Entregado",
    },
    {
      value: "Pagado",
      label: "Pagado",
    },
  ];
  useEffect(() => {
    if (status) {
      const item = {
        id: props.id,
        status: status.value,
      };
      dispatch(updatestat(item));
    }
  }, [status]);
  console.log(status);
  return (
    <div className="d-flex justify-content-center">
      <div className={props.blurstate === 1 ? "reseee2 active" : "reseee2"}>
        <div className="resumen">
          <div className="surk">
            <div className="headr">
              <p>
                Resumen de <span className="span2">Pedido</span>
              </p>
              <div className="d-flex" style={{ marginRight: "200px" }}>
                <div style={{ width: "100px" }}>
                  <p style={{ fontSize: "14px", marginTop: "10px" }}>ESTADO:</p>
                </div>
                <div className="stoe">
                  <Select
                    placeholder="ESTADO"
                    options={options}
                    value={status}
                    onChange={setstatus}
                  ></Select>
                </div>
              </div>
              <p onClick={handlecloo}>
                <AiOutlineClose />
              </p>
            </div>
          </div>
          {orders.orders.map((ord) => {
            if (ord._id === props.id) {
              return (
                <div>
                  <div className="resma">
                    <div className="resleft">
                      <div className="resnum">
                        <p>Número de pedido</p>
                      </div>
                      <div className="resdata">
                        <p>Fecha de pedido</p>
                      </div>
                      <div className="resdata">
                        <p>Estado de pedido</p>
                      </div>
                      <div className="resdata">
                        <p>Envio</p>
                      </div>
                      <div className="resdata">
                        <p>Método de pago</p>
                      </div>
                      <div className="resnum">
                        <p>Total</p>
                      </div>
                    </div>
                    <div className="resright">
                      <div className="resnum">
                        <p>1012975</p>
                      </div>
                      <div className="resdata">
                        <p>{ord.date}</p>
                      </div>
                      <div className="resdata">
                        <p>{ord.status}</p>
                      </div>
                      <div className="resdata">
                        <p>Correo</p>
                      </div>
                      <div className="resdata">
                        <p>{ord.paymentmethod}</p>
                      </div>
                      <div className="resnum">
                        <p>{ord.amountpayed}$</p>
                      </div>
                    </div>
                  </div>
                  <div className="resmid">
                    <div className="midleft">
                      <p className="midp">Datos de cobro</p>
                    </div>
                    <div className="midright">
                      <p className="midp">Envío</p>
                    </div>
                  </div>
                  <div className="datacob">
                    <div className="cobleft">
                      <div className="leftl">
                        <div className="resdata">
                          <p>Email</p>
                        </div>
                        <div className="resdata">
                          <p>Nombre</p>
                        </div>
                        <div className="resdata">
                          <p>Apellido</p>
                        </div>
                        <div className="resdata">
                          <p>Codigo postal</p>
                        </div>
                        <div className="resdaata">
                          <p>Dirección</p>
                        </div>
                        <div className="resdata">
                          <p>Ciudad</p>
                        </div>
                        <div className="resdata">
                          <p>Telefono</p>
                        </div>
                      </div>
                      <div className="leftr">
                        <div className="resdata">
                          <p>{ord.email}</p>
                        </div>
                        <div className="resdata">
                          <p>{ord.name}</p>
                        </div>
                        <div className="resdata">
                          <p>{ord.surname}</p>
                        </div>
                        <div className="resdata">
                          <p>{ord.postalcode}</p>
                        </div>
                        <div className="resdaata">
                          <p>{ord.shipping_Address}</p>
                        </div>
                        <div className="resdata">
                          <p>{ord.region}</p>
                        </div>
                        <div className="resdata">
                          <p>{ord.number}</p>
                        </div>
                      </div>
                    </div>
                    <div className="cobright">
                      <div className="leftl">
                        <div className="resdata">
                          <p>Nombre</p>
                        </div>
                        <div className="resdata">
                          <p>Apellido</p>
                        </div>
                        <div className="resdata">
                          <p>Codigo postal</p>
                        </div>
                        <div className="resdaata">
                          <p>Dirección</p>
                        </div>
                        <div className="resdata">
                          <p>Ciudad</p>
                        </div>
                        <div className="resdata">
                          <p>Telefono</p>
                        </div>
                      </div>
                      <div className="leftr">
                        <div className="resdata">
                          <p>{ord.name}</p>
                        </div>
                        <div className="resdata">
                          <p>{ord.surname}</p>
                        </div>
                        <div className="resdata">
                          <p>{ord.postalcode}</p>
                        </div>
                        <div className="resdaata">
                          <p>{ord.shipping_Address}</p>
                        </div>
                        <div className="resdata">
                          <p>{ord.region}</p>
                        </div>
                        <div className="resdata">
                          <p>{ord.number}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="artic">
                    <div className="arct">
                      <p>Artículos del pedido</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="tableees">
                      <table>
                        <tr className="model_table__head">
                          <th>Producto</th>
                          <th>Estado</th>
                          <th className="loass">Precio</th>
                          <th className="loass">Cta</th>
                          <th className="loass">Impuesto</th>
                          <th className="loass">Descuento</th>
                          <th className="loass">Total</th>
                        </tr>
                        {ord.products.map((pro) => {
                          return (
                            <tr className="sdl">
                              <td>{pro.product.name}</td>
                              <td>Pagado</td>
                              <td>{pro.price}$</td>
                              <td>{pro.quantity}</td>
                              <td>0$</td>
                              <td>0$</td>
                              <td>{pro.price}$</td>
                            </tr>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="frew">
                      <p>Total</p>
                      <p>${ord.amountpayed}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Resume;
