import React from "react";
import "../css/sidebar.scss";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { makeStyles } from "@material-ui/core/styles";
import { TreeItem } from "@material-ui/lab";
import { FaChartPie } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { RiCoupon3Fill, RiLogoutBoxLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { SiBlogger } from "react-icons/si";
import { BiEdit } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FiSettings, FiMenu } from "react-icons/fi";
import { HiOutlineViewGrid } from "react-icons/hi";

const useStyles = makeStyles({
  root: {
    Height: 240,
    maxWidth: 300,
    color: "white",
    fontSize: "20",
    backgroundColor: "#363740",
    background: "transparent",
  },
});

function Sidebar() {
  const classes = useStyles();
  return (
    <div className="container-fluid m-0 p-0">
      <div className="sidebar__div__top">
        <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1620759359/Armea/admin__logo_hhktcd.png"></img>
      </div>
      <div className="after__logo__sidebar">
        <TreeView className={classes.root}>
          {/* First  */}
          <TreeItem
            nodeId="1"
            label={
              <div className="d-flex">
                <NavLink
                  to="/admin"
                  className="text__it"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <span className="icon__width">
                    <FaChartPie />
                  </span>
                  Tablero
                </NavLink>
              </div>
            }
          ></TreeItem>
          {/* 2nd  */}
          <div className="mt-4">
            <TreeItem
              nodeId="2"
              label={
                <div className="d-flex">
                  <NavLink
                    to="#"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <HiOutlineViewGrid />
                    </span>
                    Categorías
                  </NavLink>
                  <span className="sidebar_icon">
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </span>
                </div>
              }
            >
              <div className="bottom__one">
                <TreeItem
                  label={
                    <NavLink
                      to="/admin/newcategory"
                      className="bottom__two"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Nueva Categoría
                    </NavLink>
                  }
                ></TreeItem>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/allcategories"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Todas las Categorías
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
              </div>
            </TreeItem>
          </div>
          {/* Third  */}
          <div className="mt-4">
            <TreeItem
              nodeId="3"
              label={
                <div className="d-flex">
                  <NavLink
                    to="#"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <HiShoppingCart />
                    </span>
                    Productos
                  </NavLink>
                  <span className="sidebar_icon">
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </span>
                </div>
              }
            >
              <div className="bottom__one">
                <TreeItem
                  label={
                    <NavLink
                      to="/admin/newproduct"
                      className="bottom__two"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Nuevo Producto
                    </NavLink>
                  }
                ></TreeItem>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/allproducts"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Todos los productos
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
              </div>
            </TreeItem>
          </div>
          {/* 4th  */}
          <div className="mt-4">
            <TreeItem
              nodeId="4"
              label={
                <div className="d-flex">
                  <NavLink
                    to="#"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <RiCoupon3Fill />
                    </span>
                    Cupones
                  </NavLink>
                  <span className="sidebar_icon">
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </span>
                </div>
              }
            >
              <div className="bottom__one">
                <TreeItem
                  label={
                    <NavLink
                      to="/admin/newcoupon"
                      className="bottom__two"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Nuevo Cupón
                    </NavLink>
                  }
                ></TreeItem>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/allcoupon"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Todos los Cupones
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
              </div>
            </TreeItem>
          </div>
          {/* 5th  */}
          <div className="mt-4">
            <TreeItem
              nodeId="5"
              label={
                <div className="d-flex">
                  <NavLink
                    to="/admin/clients"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <FaUserAlt />
                    </span>
                    Clientes
                  </NavLink>
                </div>
              }
            ></TreeItem>
          </div>
          {/* 6th  */}
          <div className="mt-4">
            <TreeItem
              nodeId="6"
              label={
                <div className="d-flex">
                  <NavLink
                    to="#"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <FiMenu />
                    </span>
                    Pedidos
                  </NavLink>
                  <span className="sidebar_icon">
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </span>
                </div>
              }
            >
              <div className="bottom__one">
                <TreeItem
                  label={
                    <NavLink
                      to="/admin/allorders"
                      className="bottom__two"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Todos las Pedidos
                    </NavLink>
                  }
                ></TreeItem>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/pendingorders"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Pendientes
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/payedorders"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Pagado
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/processingorders"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        En Proceso
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/enviadoorder"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enviados
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/finishedorders"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Entregados
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
              </div>
            </TreeItem>
          </div>
          {/*7th */}
          <div className="mt-4">
            <TreeItem
              nodeId="7"
              label={
                <div className="d-flex">
                  <NavLink
                    to="/admin/reports"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <AiFillSignal />
                    </span>
                    Reportes de Ventas
                  </NavLink>
                </div>
              }
            ></TreeItem>
          </div>
          {/*8th */}
          <div className="mt-4">
            <TreeItem
              nodeId="8"
              label={
                <div className="d-flex">
                  <NavLink
                    to="#"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <SiBlogger />
                    </span>
                    Blog
                  </NavLink>
                  <span className="sidebar_icon">
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </span>
                </div>
              }
            >
              <div className="bottom__one">
                <TreeItem
                  label={
                    <NavLink
                      to="/admin/newblog"
                      className="bottom__two"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Nueva Entrada
                    </NavLink>
                  }
                ></TreeItem>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/blogdetail"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Todas las Entradas
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
              </div>
            </TreeItem>
          </div>
          {/*9th */}
          <div className="mt-4">
            <TreeItem
              nodeId="9"
              label={
                <div className="d-flex">
                  <NavLink
                    to="#"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <BiEdit />
                    </span>
                    Configurar Home
                  </NavLink>
                  <span className="sidebar_icon">
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </span>
                </div>
              }
            >
              <div className="bottom__one">
                <TreeItem
                  label={
                    <NavLink
                      to="/admin/allsliders"
                      className="bottom__two"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Slider
                    </NavLink>
                  }
                ></TreeItem>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/allhomeproduct"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Nuevos Productos
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
              </div>
            </TreeItem>
          </div>
          {/*10th */}
          <div className="mt-4">
            <TreeItem
              nodeId="10"
              label={
                <div className="d-flex">
                  <NavLink
                    to="#"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <MdEmail />
                    </span>
                    Correos
                  </NavLink>
                  <span className="sidebar_icon">
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </span>
                </div>
              }
            >
              <div className="bottom__one">
                <TreeItem
                  label={
                    <NavLink
                      to="/admin/newemail"
                      className="bottom__two"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Nuevo Correo
                    </NavLink>
                  }
                ></TreeItem>
                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/allemail"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Todos los Correos
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
              </div>
            </TreeItem>
          </div>
          {/*11th */}
          <div className="mt-4">
            <TreeItem
              nodeId="11"
              label={
                <div className="d-flex">
                  <NavLink
                    to="#"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <FiSettings />
                    </span>
                    Ajustes
                  </NavLink>
                  <span className="sidebar_icon">
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </span>
                </div>
              }
            >
              <div className="bottom__one">
                <TreeItem
                  label={
                    <NavLink
                      to="/admin/allshipping"
                      className="bottom__two"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Métodos de Envío
                    </NavLink>
                  }
                ></TreeItem>

                <div className="mt-2">
                  <TreeItem
                    label={
                      <NavLink
                        to="/admin/popup"
                        className="bottom__two"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Pop Up
                      </NavLink>
                    }
                  ></TreeItem>
                </div>
              </div>
            </TreeItem>
          </div>
          <div className="mt-4">
            <TreeItem
              nodeId="12"
              label={
                <div className="d-flex">
                  <NavLink
                    to="/admin/makeadmin"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <FaUserAlt />
                    </span>
                    Make admin
                  </NavLink>
                </div>
              }
            ></TreeItem>
          </div>
          <div style={{ marginTop: "120px" }}>
            <TreeItem
              nodeId="13"
              label={
                <div className="d-flex">
                  <NavLink
                    to="#"
                    className="text__it"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span className="icon__width">
                      <RiLogoutBoxLine />
                    </span>
                    Cerrar sesión
                  </NavLink>
                </div>
              }
            ></TreeItem>
          </div>
        </TreeView>
      </div>
    </div>
  );
}

export default Sidebar;
