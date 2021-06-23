import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { NavLink, useHistory } from "react-router-dom";
import "../css/Slidertab.scss";
import Paginate from "react-paginate";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getslidw } from "../actions/getslider";
import { deleteslide } from "../actions/deleteslider";
import { IoMdAddCircle } from "react-icons/io";

function Slidertab() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const history = useHistory();
  const dispatch = useDispatch();
  const [pagenumber, setpagenumber] = useState(0);
  const worksperpage = 3;
  const pagesvisited = pagenumber * worksperpage;
  const [checked, setChecked] = useState([]);
  const [allchecked, setallchecked] = useState(false);
  const [all, setall] = useState([]);
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
  useEffect(() => {
    dispatch(getslidw());
  }, []);
  const getS = useSelector((state) => state.getS);
  const handlechange = (e) => {
    let newArray = [];
    if (allchecked === false) {
      setallchecked(true);
      getS.slider.map((blog) => {
        newArray.push(blog._id);
      });
      setall(newArray);
    } else {
      setallchecked(false);
      setall([]);
    }
  };
  const pageCount = Math.ceil(getS.slider.length / worksperpage);
  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const dispalyblogs = getS.slider
    .slice(pagesvisited, pagesvisited + worksperpage)
    .map((blog) => {
      return (
        <tr className="blgdettr2">
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
          <td className="blgdetstd">
            <div style={{ width: "100px", height: "100px" }}>
              <img
                src={blog.small}
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
          </td>
          <td className="blgdetttd">{blog.name}</td>
          <td className="blgdetfftd">{blog.description}</td>
          <td className="blgdetfftd">{`/product/${blog.product}`}</td>
        </tr>
      );
    });
  const editit = () => {
    if (all.length > 0) {
      alert("no puedo editar más de un slider a la vez");
    } else if (checked.length > 1) {
      alert("no puedo editar más de un slider a la vez");
    } else if (checked.length === 0) {
      alert("por favor seleccione un slider para editar");
    } else {
      const Sid = checked[0];
      history.push(`/admin/editslider/${Sid}`);
    }
  };
  const deleteit = () => {
    if (all.length > 0) {
      const item = {
        array: all,
      };
      dispatch(deleteslide(item)).then((res) => {
        alert("blog eliminado");
        dispatch(getslidw());
      });
    } else {
      const item = {
        array: checked,
      };
      dispatch(deleteslide(item)).then((res) => {
        alert("blog eliminado");
        dispatch(getslidw());
      });
    }
  };
  return (
    <div>
      <div>
        <div className="sltmain">
          <div className="sltleft">
            <Sidebar />
          </div>
          <div className="sltright">
            <div className="slthead">
              <div className="slttab">
                <div className="sltta">
                  <p>Sliders</p>
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
            <div className="sltfm">
              <div className="sltfmsub">
                <div className="sltfmsubl">
                  <div className="sltapp">
                    <p>APLICAR A SELECCION</p>
                  </div>
                  <div className="sltelmin">
                    <div className="sltelminl">
                      <p onClick={deleteit} style={{ cursor: "pointer" }}>
                        ELIMINAR
                      </p>
                    </div>
                    <div className="sltelminr">
                      <p onClick={editit} style={{ cursor: "pointer" }}>
                        EDITAR
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sltfmsubr">
                  <div className="sltfmsubrf">
                    <NavLink to="/admin/newslider" className="haiga">
                      <p>
                        <IoMdAddCircle />
                      </p>
                    </NavLink>
                  </div>
                  <div className="sltfmsubrs">
                    <p className="sltfmsubrsp">Nuevo slider</p>
                  </div>
                </div>
              </div>

              <div className="blgdettabdiv">
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
                      <th className="blgdetsth">imagen</th>
                      <th className="blgdettth">Titulo</th>
                      <th className="blgdetffth">Descripción</th>
                      <th className="blgdetffth">Enlace</th>
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
      </div>
    </div>
  );
}

export default Slidertab;
