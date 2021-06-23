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

function Blogdetails() {
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
  const getB = useSelector((state) => state.getB);
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
      getB.blog.map((blog) => {
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
  }, []);
  console.log(all);
  const editit = () => {
    if (all.length > 0) {
      alert("no puedo editar más de un blog a la vez");
    } else if (checked.length > 1) {
      alert("no puedo editar más de un blog a la vez");
    } else if (checked.length === 0) {
      alert("por favor seleccione un blog para editar");
    } else {
      const Bid = checked[0];
      history.push(`/admin/blogedit/${Bid}`);
    }
  };
  const pageCount = Math.ceil(getB.blog.length / worksperpage);
  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const dispalyblogs = getB.blog
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
          <td className="blgdetstd">{blog.title}</td>
          <td className="blgdetttd">
            {blog.tags.map((tag) => {
              return `#${tag.tag}`;
            })}
          </td>
          <td className="blgdetfftd">{blog.date}</td>
        </tr>
      );
    });
  const deleteit = () => {
    if (all.length > 0) {
      const item = {
        array: all,
      };
      dispatch(deleteblo(item)).then((res) => {
        alert("blog eliminado");
        dispatch(getblog());
      });
    } else {
      const item = {
        array: checked,
      };
      dispatch(deleteblo(item)).then((res) => {
        alert("blog eliminado");
        dispatch(getblog());
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
                  <p>Blog</p>
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
                    <NavLink to="/admin/newblog" className="hell">
                      <IoMdAddCircle />
                    </NavLink>
                  </div>
                  <div className="blgdetfmsubrs">
                    <p className="blgdetfmsubrsp">Nueva entrada</p>
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
                      <th className="blgdetsth">Titulo</th>
                      <th className="blgdettth">Etiquetas</th>
                      <th className="blgdetffth">Fecha</th>
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

export default Blogdetails;
