import React, { useEffect } from "react";
import "../css/Resumen.scss";
import { AiOutlineClose } from "react-icons/ai";
import { getorder } from "../actions/getorders";
import { useDispatch, useSelector } from "react-redux";
import Shippingcost from "./Shippingcost";
function Resumen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getorder());
  }, []);
  const orders = useSelector((state) => state.orders);
  const handlecloo = () => {
    props.handleit(0);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className={props.blurstate === 1 ? "reseee1 active" : "reseee1"}>
        <div className="resumen">
          <div className="surk">
            <div className="headr">
              <p>
                Resumen de <span className="span">Pedido</span>
              </p>
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
                        <p>Pagado</p>
                      </div>
                      <div className="resdata">
                        <p>Correo</p>
                      </div>
                      <div className="resdata">
                        <p>{ord.paymentmethod}</p>
                      </div>
                      <div className="resnum">
                        <p>${ord.amountpayed}</p>
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
                              <td>${pro.price}</td>
                              <td>{pro.quantity}</td>
                              <td>$0</td>
                              <td>$0</td>
                              <td>${pro.price}</td>
                            </tr>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                  <div className="resumen_deliverycost">
                    <Shippingcost amount={ord.amountpayed} />
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

export default Resumen;
