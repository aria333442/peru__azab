import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import "../css/Clients.scss";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../actions/getuser";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import Paginate from "react-paginate";
import { getusord } from "../actions/userorders";
import { serachus } from "../actions/searchuser";
import { useHistory } from "react-router";

function Clients() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const [pagenumber, setpagenumber] = useState(0);
  const [query, setquery] = useState();
  const worksperpage = 3;
  const pagesvisited = pagenumber * worksperpage;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser());
    dispatch(getusord());
  }, []);

  const handlesarch = (e) => {
    e.preventDefault();
    if (query) {
      const item = {
        query,
      };
      dispatch(serachus(item));
    }
  };

  const getUser = useSelector((state) => state.getUser);
  const userord = useSelector((state) => state.userord);
  const sear = useSelector((state) => state.sear);
  const pageCount = Math.ceil(getUser.user.length / worksperpage);
  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const history = useHistory();
  const chalo = (id) => {
    history.push(`/admin/user/${id}`);
  };
  let dispalyblogs;
  if (query) {
    dispalyblogs = sear.user
      .slice(pagesvisited, pagesvisited + worksperpage)
      .map((us) => {
        return (
          <tr className="clttabtr" onClick={() => chalo(us._id)}>
            <td className="clttabtd">
              {us.image ? (
                <Image
                  publicId={us.image}
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
              ) : (
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
                ></img>
              )}
            </td>
            <td className="clttabtd">{us.name + " " + us.surname}</td>
            <td className="clttabtd">{us.name + " " + us.surname}</td>
            <td className="clttabtd">{us.email}</td>
            <td className="clttabtd">
              {userord.user.map((use) => {
                if (use.email === us.email) {
                  return use.orders;
                }
              })}
            </td>
            <td className="clttabtd">
              {userord.final.map((fa) => {
                if (fa.email === us.email) {
                  return fa.amountpayed + "$";
                }
              })}
            </td>
            <td className="clttabtd">1$</td>
          </tr>
        );
      });
  } else {
    dispalyblogs = getUser.user
      .slice(pagesvisited, pagesvisited + worksperpage)
      .map((us) => {
        return (
          <tr className="clttabtr" onClick={() => chalo(us._id)}>
            <td className="clttabtd">
              {us.image ? (
                <Image
                  publicId={us.image}
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
              ) : (
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
                ></img>
              )}
            </td>
            <td className="clttabtd">{us.name + " " + us.surname}</td>
            <td className="clttabtd">{us.name + " " + us.surname}</td>
            <td className="clttabtd">{us.email}</td>
            <td className="clttabtd">
              {userord.user.map((use) => {
                if (use.email === us.email) {
                  return use.orders;
                }
              })}
            </td>
            <td className="clttabtd">
              {userord.final.map((fa) => {
                if (fa.email === us.email) {
                  return fa.amountpayed + "$";
                }
              })}
            </td>
            <td className="clttabtd">1$</td>
          </tr>
        );
      });
  }

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
                <p className="citi">Clientes</p>
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
          <div className="cltsear">
            <form onSubmit={handlesarch}>
              <input
                className="cltsrchin"
                placeholder="&#x1F50E;&#xFE0E; buscar clientes por nombre"
                vlaue={query}
                onChange={(e) => setquery(e.target.value)}
              ></input>
            </form>
          </div>
          <div className="clttabm">
            <div className="clttabmsub">
              <table>
                <tr className="clttabtr">
                  <th className="clttabtd2"></th>
                  <th className="clttabtd2">Nombre</th>
                  <th className="clttabtd2">Usuario</th>
                  <th className="clttabtd2">Correo</th>
                  <th className="clttabtd2">Pedidos</th>
                  <th className="clttabtd2">Importe</th>
                  <th className="clttabtd2">AOV</th>
                </tr>
                {dispalyblogs}
              </table>
            </div>
            <div className="paginate">
              <Paginate
                previousLabel={"<<"}
                nextLabel={">>"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
