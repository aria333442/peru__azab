import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { NavLink, useHistory } from "react-router-dom";
import "../css/Slidertab.scss";
import Paginate from "react-paginate";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getnewprod } from "../actions/getnewproduct";
import { getemail } from "../actions/getemail";

function Allemail() {
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
    dispatch(getnewprod());
    dispatch(getemail());
  }, []);
  const getE = useSelector((state) => state.getE);
  const handlechange = (e) => {
    let newArray = [];
    if (allchecked === false) {
      setallchecked(true);
      getE.email.map((blog) => {
        newArray.push(blog._id);
      });
      setall(newArray);
    } else {
      setallchecked(false);
      setall([]);
    }
  };
  const pageCount = Math.ceil(getE.email.length / worksperpage);
  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const dispalyblogs = getE.email
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
          <td className="blgdetstd2">{blog.type}</td>
          <td className="blgdetttd">
            {blog.users.map((us) => {
              return <p>{us.user}</p>;
            })}
          </td>
          <td className="blgdetfftd">
            <NavLink to="/admin/newemail">Configurar</NavLink>
          </td>
        </tr>
      );
    });
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
                  <p>Correos</p>
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
                      <th className="blgdetsth">Tipo de correo</th>
                      <th className="blgdettth">Destinarios</th>
                      <th className="blgdetffth">Configurar</th>
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

export default Allemail;
