import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";
import "../css/Allproducts.scss";
import Sidebar from "./Sidebar";
import Select from "react-select";
import { getcat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getprod } from "../../actions/getproducts";
import Paginate from "react-paginate";
import { useHistory } from "react-router";
import { deleteprod } from "../actions/deleteproduct";
import { serachprods } from "../actions/searchprod";
import { IoMdAddCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Allproducts() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const [pagenumber, setpagenumber] = useState(0);
  const [category, setcategory] = useState({
    label: "Muebles",
    value: "6053de0a91b3b043442e4845",
  });
  const worksperpage = 3;
  const pagesvisited = pagenumber * worksperpage;
  const [show, seetshow] = useState(0);
  const [checked, setChecked] = useState([]);
  const [table, settable] = useState(0);
  const [allchecked, setallchecked] = useState(false);
  const [all, setall] = useState([]);
  const [query, setquery] = useState();
  const getcategory = useSelector((state) => state.getcategory);
  const getproducts = useSelector((state) => state.getproducts);
  const history = useHistory();
  const handlechange = (e) => {
    let newArray = [];
    if (allchecked === false) {
      setallchecked(true);
      getproducts.products.map((blog) => {
        newArray.push(blog._id);
      });
      setall(newArray);
    } else {
      setallchecked(false);
      setall([]);
    }
  };
  const pageCount = Math.ceil(getproducts.products.length / worksperpage);
  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcat());
    dispatch(getprod([]));
  }, []);

  const options = getcategory.category.map((cat) => {
    return {
      value: cat._id,
      label: cat.name,
    };
  });
  const setcheck = (id) => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const searchP = useSelector((state) => state.searchP);
  let dispalyblogs;
  if (query) {
    dispalyblogs = searchP.product
      .slice(pagesvisited, pagesvisited + worksperpage)
      .map((blog) => {
        return (
          <tr className="blgdettr">
            <td className="blgdetcheck text-center">
              <input
                type="checkbox"
                checked={
                  allchecked === false
                    ? checked.indexOf(blog._id) === -1
                      ? false
                      : true
                    : true
                }
                onClick={() => setcheck(blog._id)}
              ></input>
            </td>
            <td className="blgdetstd">{blog.name}</td>
            <td className="blgdetttd">{blog.category.name}</td>
            <td className="blgdetfftd">{blog.description.substr(1, 30)}</td>
            <td className="blgdetfftd">{blog.saleprice + "$"}</td>
          </tr>
        );
      });
  } else {
    dispalyblogs = getproducts.products
      .slice(pagesvisited, pagesvisited + worksperpage)
      .map((blog) => {
        return (
          <tr className="blgdettr">
            <td className="blgdetcheck text-center">
              <input
                type="checkbox"
                checked={
                  allchecked === false
                    ? checked.indexOf(blog._id) === -1
                      ? false
                      : true
                    : true
                }
                onClick={() => setcheck(blog._id)}
              ></input>
            </td>
            <td className="blgdetstd">{blog.name}</td>
            <td className="blgdetttd">{blog.category.name}</td>
            <td className="blgdetfftd">{blog.description.substr(1, 30)}</td>
            <td className="blgdetfftd">{blog.saleprice + "$"}</td>
          </tr>
        );
      });
  }
  const editit = () => {
    if (all.length > 0) {
      alert("no puedo editar más de un producto a la vez");
    } else if (checked.length > 1) {
      alert("no puedo editar más de un producto a la vez");
    } else if (checked.length === 0) {
      alert("por favor seleccione un producto para editar");
    } else {
      const Pid = checked[0];
      history.push(`/admin/editproduct/${Pid}`);
    }
  };
  const deleteit = () => {
    if (all.length > 0) {
      const item = {
        array: all,
      };
      dispatch(deleteprod(item)).then((res) => {
        alert("blog eliminado");
        dispatch(getprod([]));
      });
    } else {
      const item = {
        array: checked,
      };
      dispatch(deleteprod(item)).then((res) => {
        alert("blog eliminado");
        dispatch(getprod([]));
      });
    }
  };
  const searchit = (e) => {
    e.preventDefault();
    if (query) {
      const item = {
        query,
      };
      dispatch(serachprods(item));
    }
  };
  console.log(checked);

  return (
    <div>
      <div className="alprdmain">
        <div className="alprdleft">
          <Sidebar />
        </div>
        <div className="alprdright">
          <div className="alprdhead">
            <div className="alprdtab">
              <div className="alprdta">
                <p>Productos</p>
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
          <div className="alprdfm">
            <div className="alprdfmsub">
              <div className="alprdfmsubl">
                <div className="alprdapp">
                  <p>APLICAR A SELECCION</p>
                </div>
                <div className="alprdelmin">
                  <div className="alprdnelminl">
                    <p onClick={deleteit} style={{ cursor: "pointer" }}>
                      ELIMINAR
                    </p>
                  </div>
                  <div className="alprdelminr">
                    <p onClick={editit} style={{ cursor: "pointer" }}>
                      EDITAR
                    </p>
                  </div>
                </div>
              </div>
              <div className="alprdfmsubr">
                <div className="alprdfmsubrf">
                  <NavLink to="/admin/newproduct" className="shasha">
                    <IoMdAddCircle />
                  </NavLink>
                </div>
                <div className="alprdfmsubrs">
                  <p className="alprdfmsubrsp">Nuevo producto</p>
                </div>
              </div>
              <div className="alprdfmsublast">
                <div className="alprdordp">
                  <p className="alprdordpp">ORDENAR POR:</p>
                </div>
                <div className="alprdcat">
                  <Select
                    options={options}
                    placeholder="category"
                    value={category}
                    onChange={setcategory}
                  ></Select>
                </div>
              </div>
            </div>
            <div className="alprdbus">
              <div className="alprdicon">
                <p className="alprvewslec" onClick={() => settable(0)}>
                  <CgMenuGridR />
                </p>
              </div>
              <div className="alprdiconn">
                <p className="alprvewslec" onClick={() => settable(1)}>
                  <GiHamburgerMenu />
                </p>
              </div>
              <form onSubmit={searchit}>
                <input
                  placeholder="&#x1F50E;&#xFE0E; Buscar producto"
                  className="alprdbusin"
                  value={query}
                  onChange={(e) => setquery(e.target.value)}
                ></input>
              </form>
            </div>
            {table === 0 ? (
              <div>
                <div className="row__constainer">
                  <div className="row">
                    {query
                      ? searchP.product.map((prod) => {
                          return (
                            <div className="col-4 soosaq">
                              <div className="iiner-it">
                                <div className="d-flex">
                                  <img
                                    src={prod.productImage[0].img}
                                    className="imagara"
                                  ></img>
                                  <input
                                    type="checkbox"
                                    className="inputa"
                                    checked={
                                      checked.indexOf(prod._id) === -1
                                        ? false
                                        : true
                                    }
                                    onClick={() => setcheck(prod._id)}
                                  ></input>
                                </div>
                                <p className="nama">{prod.name}</p>
                                <p className="nam2">{prod.category.name}</p>
                                <p className="nam3">
                                  {prod.description.substr(1, 30) + "...."}
                                </p>
                                <p className="nam4">{prod.saleprice + "$"}</p>
                              </div>
                            </div>
                          );
                        })
                      : show === 0
                      ? getproducts.products.slice(0, 3).map((prod) => {
                          if (prod.category.name === category.label) {
                            return (
                              <div className="col-4 soosaq">
                                <div className="iiner-it">
                                  <div className="d-flex">
                                    <img
                                      src={prod.productImage[0].img}
                                      className="imagara"
                                    ></img>
                                    <input
                                      type="checkbox"
                                      className="inputa"
                                      checked={
                                        checked.indexOf(prod._id) === -1
                                          ? false
                                          : true
                                      }
                                      onClick={() => setcheck(prod._id)}
                                    ></input>
                                  </div>
                                  <p className="nama">{prod.name}</p>
                                  <p className="nam2">{prod.category.name}</p>
                                  <p className="nam3">
                                    {prod.description.substr(1, 30) + "...."}
                                  </p>
                                  <p className="nam4">{prod.saleprice + "$"}</p>
                                </div>
                              </div>
                            );
                          }
                        })
                      : getproducts.products.map((prod) => {
                          if (prod.category.name === category.label) {
                            return (
                              <div className="col-4 soosaq">
                                <div className="iiner-it">
                                  <div className="d-flex">
                                    <img
                                      src={
                                        prod.productImage
                                          ? prod.productImage[0].img
                                          : null
                                      }
                                      className="imagara"
                                    ></img>
                                    <input
                                      type="checkbox"
                                      className="inputa"
                                      checked={
                                        checked.indexOf(prod._id) === -1
                                          ? false
                                          : true
                                      }
                                      onClick={() => setcheck(prod._id)}
                                    ></input>
                                  </div>
                                  <p className="nama">{prod.name}</p>
                                  <p className="nam2">{prod.category.name}</p>
                                  <p className="nam3">
                                    {prod.description.substr(1, 30) + "...."}
                                  </p>
                                  <p className="nam4">{prod.saleprice + "$"}</p>
                                </div>
                              </div>
                            );
                          }
                        })}
                  </div>
                </div>

                <div className="alprdverb">
                  <button className="alprdverbut" onClick={() => seetshow(1)}>
                    VER MÁS
                  </button>
                </div>
              </div>
            ) : (
              <div className="blgdettabdiv" style={{ marginTop: "20px" }}>
                <div className="upperhalf">
                  <table className="blgdettable">
                    <tr className="blgdettr">
                      <th className="blgdetcheck text-center">
                        <input
                          type="checkbox"
                          onClick={handlechange}
                          checked={allchecked}
                        ></input>
                      </th>
                      <th className="blgdetsth">Nombre</th>
                      <th className="blgdettth">Categoria</th>
                      <th className="blgdetffth">Descripción</th>
                      <th className="blgdetffth">Precio</th>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allproducts;
