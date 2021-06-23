import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import "../css/Blogdetails.scss";
import Sidebar from "./Sidebar";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getblog } from "../../actions/getblog";
import Paginate from "react-paginate";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { deleteblo } from "../actions/deleteblog";
import { getrepop } from "../actions/getpop";
import Select from "react-select";
import { deletepop } from "../actions/deletepop";

function Allpopup() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const [pagenumber, setpagenumber] = useState(0);
  const worksperpage = 3;
  const pagesvisited = pagenumber * worksperpage;
  const [checked, setChecked] = useState([]);
  const [allchecked, setallchecked] = useState(false);
  const [all, setall] = useState([]);
  const [status, setstaus] = useState();
  const getpo = useSelector((state) => state.getpo);
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
      getpo.popup.map((blog) => {
        newArray.push(blog._id);
      });
      setall(newArray);
    } else {
      setallchecked(false);
      setall([]);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getblog());
    dispatch(getrepop());
  }, []);
  console.log(all);
  const editit = () => {
    if (all.length > 0) {
      alert("no puedo editar más de un popup a la vez");
    } else if (checked.length > 1) {
      alert("no puedo editar más de un popup a la vez");
    } else if (checked.length === 0) {
      alert("por favor seleccione un popup para editar");
    } else {
      const ID = checked[0];
      history.push(`/admin/editpop/${ID}`);
    }
  };
  const pageCount = Math.ceil(getpo.popup.length / worksperpage);
  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const options = [
    {
      value: "inactive",
      label: "inactive",
    },
    {
      value: "active",
      label: "active",
    },
  ];
  const dispalyblogs = getpo.popup
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
            <img
              src={blog.image}
              style={{ width: "100px", height: "100px" }}
            ></img>
          </td>
          <td className="blgdetttd">{blog.name}</td>
          <td className="blgdetfftd">{`/product/${blog.url}`}</td>
          <td className="blgdetfftd">
            <div className="choomu">
              <div style={{ width: "120px" }}>
                <Select
                  placeholder={blog.status}
                  vlaue={status}
                  onChange={setstaus}
                  options={options}
                ></Select>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  const deleteit = () => {
    if (all.length > 0) {
      const item = {
        array: all,
      };
      dispatch(deletepop(item)).then((res) => {
        alert("popup eliminado");
        dispatch(getrepop());
      });
    } else {
      const item = {
        array: checked,
      };
      dispatch(deletepop(item)).then((res) => {
        alert("popup eliminado");
        dispatch(getrepop());
      });
    }
  };
  return (
    <div>
      <div>
        <div className="blgdetmain">
          <div className="blgdetleft">
            <Sidebar />
          </div>
          <div className="blgdetright">
            <div className="blgdethead">
              <div className="blgdettab">
                <div className="blgdetta">
                  <p>Ajustes</p>
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
            <div className="blgdetfm">
              <div className="blgdetfmsub">
                <div className="blgdetfmsubl">
                  <div className="blgdetapp">
                    <p>APLICAR A SELECCION</p>
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
                    <NavLink to="/admin/newpopup" className="hell">
                      <IoMdAddCircle />
                    </NavLink>
                  </div>
                  <div className="blgdetfmsubrs">
                    <p className="blgdetfmsubrsp">Nuevo Pop up</p>
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
                      <th className="blgdetsth">Imagen</th>
                      <th className="blgdettth">Titulo</th>
                      <th className="blgdetffth">URL de enlace</th>
                      <th className="blgdetffth">Estado</th>
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

export default Allpopup;
