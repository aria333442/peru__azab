import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import "../css/Blogdetails.scss";
import Sidebar from "./Sidebar";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Paginate from "react-paginate";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { getcat } from "../../actions/getcategory";
import { getsubcat } from "../../actions/getsubcategory";
import { deletecatee } from "../actions/deletecat";
import Adminnav from "../components/Adminnav";

function Todlacat() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const [pagenumber, setpagenumber] = useState(0);
  const worksperpage = 6;
  const pagesvisited = pagenumber * worksperpage;
  const [checked, setChecked] = useState([]);
  const [allchecked, setallchecked] = useState(false);
  const [all, setall] = useState([]);
  const getcategory = useSelector((state) => state.getcategory);
  const getsubcategory = useSelector((state) => state.getsubcategory);
  const history = useHistory();

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

  const handlechange = (e) => {
    let newArray = [];
    if (allchecked === false) {
      setallchecked(true);
      getcategory.category.map((blog) => {
        newArray.push(blog._id);
      });
      setall(newArray);
    } else {
      setallchecked(false);
      setall([]);
    }
  };
  console.log(checked);
  console.log(all);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcat());
    dispatch(getsubcat());
  }, []);
  console.log(all);
  const editit = () => {
    if (all.length > 0) {
      alert("No puedo editar más de una categoría al mismo tiempo");
    } else if (checked.length > 1) {
      alert("No puedo editar más de una categoría al mismo tiempo");
    } else if (checked.length === 0) {
      alert("por favor seleccione un categoría para editar");
    } else {
      const Cid = checked[0];
      history.push(`/admin/editcategory/${Cid}`);
    }
  };
  const pageCount = Math.ceil(
    (getcategory.category.length + getsubcategory.subcategory.length) /
      worksperpage
  );
  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  let newcat = [];
  for (let i = 0; i < getcategory.category.length; i++) {
    newcat.push(getcategory.category[i]);
    let catid = getcategory.category[i]._id;
    for (let i = 0; i < getsubcategory.subcategory.length; i++) {
      if (getsubcategory.subcategory[i].category._id === catid) {
        newcat.push(getsubcategory.subcategory[i]);
      }
    }
  }

  const deleteit = () => {
    if (all.length > 0) {
      const item = {
        array: all,
      };
      dispatch(deletecatee(item)).then((res) => {
        alert("categoría eliminado");
      });
    } else {
      const item = {
        array: checked,
      };
      dispatch(deletecatee(item)).then((res) => {
        alert("categoría eliminado");
      });
    }
  };
  const page = "Categorías";
  return (
    <div>
      <div>
        <div className="blgdetmain">
          <div className="blgdetleft">
            <Sidebar />
          </div>
          <div className="blgdetright">
            <Adminnav page={page} />
            <div className="blgdetfm">
              <div className="blgdetfmsub">
                <div className="blgdetfmsubl">
                  <div className="blgdetapp">
                    <p>APLICAR SELECCIÓN</p>
                  </div>
                  <div className="blgdetelmin">
                    <div className="blgdetelminl">
                      <p onClick={deleteit} style={{ cursor: "pointer" }}>
                        ELIMINAR
                      </p>
                    </div>
                    <div className="blgdetelminr">
                      <p onClick={editit} style={{ cursor: "pointer" }}>
                        EDITAR
                      </p>
                    </div>
                  </div>
                </div>
                <div className="blgdetfmsubr">
                  <div className="blgdetfmsubrf">
                    <NavLink to="/admin/newcategory" className="hell">
                      <IoMdAddCircle />
                    </NavLink>
                  </div>
                  <div className="blgdetfmsubrs">
                    <p className="blgdetfmsubrsp">Nueva categoría</p>
                  </div>
                </div>
              </div>

              <div className="blgdettabdiv2">
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
                      <th className="blgdettth">Tags</th>
                      <th className="blgdetffth">Sku</th>
                      <th className="blgdetffth">Tipo</th>
                    </tr>
                    {newcat
                      .slice(pagesvisited, pagesvisited + worksperpage)
                      .map((cat) => {
                        if (cat.type === "category") {
                          return (
                            <tr className="blgdettr">
                              <td className="blgdetcheck text-center">
                                <input
                                  type="checkbox"
                                  checked={
                                    allchecked === false
                                      ? checked.indexOf(cat._id) === -1
                                        ? false
                                        : true
                                      : true
                                  }
                                  onClick={() => setcheck(cat._id)}
                                ></input>
                              </td>
                              <td className="blgdetstd">{cat.name}</td>
                              <td className="blgdetttd">Tags</td>
                              <td className="blgdetfftd">sku</td>
                              <td className="blgdetfftd">
                                Categoría principal
                              </td>
                            </tr>
                          );
                        } else {
                          return (
                            <tr className="blgdettr">
                              <td className="blgdetcheck text-center"></td>
                              <td className="blgdetstd2">{cat.name}</td>
                              <td className="blgdetttd">Tags</td>
                              <td className="blgdetfftd">Sku</td>
                              <td className="blgdetfftd">SubCategoria</td>
                            </tr>
                          );
                        }
                      })}
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
      </div>
    </div>
  );
}

export default Todlacat;
