import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { ubyid } from "../actions/userbyid";
import "../css/Clientsec.scss";
import Sidebar from "./Sidebar";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import { getorder } from "../../actions/getorders";
import { NavLink } from "react-router-dom";

function Clientsec() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const history = useHistory();

  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const item = {
      id,
    };
    dispatch(ubyid(item));
    dispatch(getorder());
  }, []);
  const userid = useSelector((state) => state.userid);
  const orders = useSelector((state) => state.orders);

  return (
    <div>
      <div className="cltmain">
        <div className="cltleft">
          <Sidebar />
        </div>
        <div className="cltright">
          <div className="clthead">
            <div className="clttab">
              <div className="cltta">
                <p>Clientes</p>
              </div>
              <div className="icon">
                <p>
                  <BiSearch />
                </p>
              </div>
              <div className="iconr">
                <p>
                  <MdNotificationsNone />
                </p>
              </div>
            </div>
            <div className="user">
              <div className="use">
                <p>Jhon Doe</p>
              </div>
              <div className="dp"></div>
            </div>
          </div>
          <div className="seccltbb">
            <NavLink className="seccltbbl" to="/admin/clients">
              <IoIosArrowDropleftCircle />
            </NavLink>
            <div className="seccltbbr">
              <p>Cliente</p>
            </div>
          </div>
          <div className="cltsfirstmin">
            <div className="cltsfirstminsub">
              <div className="cltsfirstleft" style={{ paddingTop: "40px" }}>
                {userid.user.image ? (
                  <Image
                    publicId={userid.user.image}
                    cloudName="dd77cqt5fs"
                    style={{
                      cursor: "pointer",
                      border: "1px solid white",
                      borderRadius: "50%",
                    }}
                  >
                    <Transformation
                      width="240"
                      height="250"
                      crop="scale"
                      gravity="face"
                      crop="thumb"
                      radius="max"
                    />
                  </Image>
                ) : (
                  <img
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                    }}
                    src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
                  ></img>
                )}
              </div>
              <div className="cltsfirstmid">
                <table className="secclttabl">
                  <tr>
                    <td className="secclttabtd">ID</td>
                    <td className="secclttabtdl">5623</td>
                  </tr>
                  <tr>
                    <td className="secclttabtd">Nombre</td>
                    <td className="secclttabtdl">5623</td>
                  </tr>
                  <tr>
                    <td className="secclttabtd">Coreo</td>
                    <td className="secclttabtdl"> {userid.user.email}</td>
                  </tr>
                  <tr>
                    <td className="secclttabtd">Teléfono</td>
                    <td className="secclttabtdl">
                      {userid.user.phone ? userid.user.phone : "231654"}
                    </td>
                  </tr>
                  <tr>
                    <td className="secclttabtd">Dirección</td>
                    <td className="secclttabtdl">
                      {userid.user.shipping_Address}
                    </td>
                  </tr>
                </table>
              </div>
              <div className="cltsfirstright">
                <table className="secclttabr">
                  <tr>
                    <td className="seccltrtabtd">ID</td>
                    <td className="seccltrtabtdl">5623</td>
                  </tr>
                  <tr>
                    <td className="seccltrtabtd">Nombre</td>
                    <td className="seccltrtabtdl">{userid.user.name}</td>
                  </tr>
                  <tr>
                    <td className="seccltrtabtd">Coreo</td>
                    <td className="seccltrtabtdl"> {userid.user.email}</td>
                  </tr>
                  <tr>
                    <td className="seccltrtabtd">Teléfono</td>
                    <td className="seccltrtabtdl">
                      {userid.user.phone ? userid.user.phone : "231654"}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="seclthdiv">
            <p>Pedidos del cliente</p>
          </div>
          <div className="seccltordrdiv">
            <div className="seccltordrdivsub">
              <table className="seccltordtab">
                <tr className="yehloo">
                  <td className="seccltordtabtd">Producto</td>
                  <td className="seccltordtabtdc">Cliente</td>
                  <td className="seccltordtabtdf">Fecha</td>
                  <td className="seccltordtabtdn">Número</td>
                  <td className="seccltordtabtde">Estado</td>
                </tr>
                {orders.orders.map((ors) => {
                  if (ors.email === userid.user.email) {
                    return (
                      <tr className="yehloo">
                        <td className="seccltordtabtd">
                          {ors.products.map((prod) => {
                            return prod.product.name;
                          })}
                        </td>
                        <td className="seccltordtabtdc">{ors.email}</td>
                        <td className="seccltordtabtdf">{ors.date}</td>
                        <td className="seccltordtabtdn">{ors.number}</td>
                        <td className="seccltordtabtde">{ors.status}</td>
                      </tr>
                    );
                  }
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clientsec;
