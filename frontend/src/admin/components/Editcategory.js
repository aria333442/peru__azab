import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import "../css/Editcat.scss";
import Sidebar from "./Sidebar";
import TreeView from "@material-ui/lab/TreeView";
import { makeStyles } from "@material-ui/core/styles";
import { TreeItem } from "@material-ui/lab";
import { IoMdArrowDropdown } from "react-icons/io";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getcat } from "../../actions";
import { getsubcat } from "../../actions/getsubcategory";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { updatecat } from "../actions/updatecat";
import Adminnav from "../components/Adminnav";

const useStyles = makeStyles({
  root: {
    Height: 0,
    maxWidth: 360,
    color: "black",
    fontSize: "25",
    background: "transparent",
    focus: "none",
    borderBottom: "1px solid #cecece",
  },
});

function Editcategory() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const { Cid } = useParams();
  const [name, setname] = useState();
  const [url, seturl] = useState();
  const [tags, settags] = useState();
  const [slug, setslug] = useState();
  const [image, setimage] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcat());
    dispatch(getsubcat());
  }, []);
  const getcategory = useSelector((state) => state.getcategory);
  const getsubcategory = useSelector((state) => state.getsubcategory);
  const options = [];
  getcategory.category.map((cat) => {
    options.push({
      value: cat._id,
      label: cat.name,
    });
  });
  const addcategory = () => {
    let tags1 = [];
    let tags2 = [];
    if (tags) {
      tags1 = tags.split(" ");
      tags1.map((t) => {
        tags2.push({
          tag: t,
        });
      });
      console.log(tags2);
    }
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "zlh5whib");
    data.append("cloud_name", "dd77cqt5fs");
    fetch("https://api.cloudinary.com/v1_1/dd77cqt5fs/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        seturl(data.url);
        if (data.url) {
          if (!name || !tags || !data.url || !slug) {
            console.log(name, tags, data.url, slug);
          } else {
            let item = {
              array: Cid,
              name,
              tags: tags2,
              url: data.url,
              slug,
            };
            dispatch(updatecat(item)).then((res) => {
              setname("");
              settags("");
              seturl("");
              setslug("");
              setimage("");
              alert("categoría editada");

              dispatch(getcat());
              dispatch(getsubcat()).then((res) => {
                window.location.reload();
              });
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const page = "Categorías";
  return (
    <div>
      <div className="encatmain">
        <div className="encatleft">
          <Sidebar />
        </div>
        <div className="encatright">
          <Adminnav page={page} />
          <div className="encatnue">
            <div className="encattleft">
              <NavLink to="/admin/allcategories" className="kukka">
                <IoIosArrowDropleftCircle />
              </NavLink>
            </div>
            <div className="encattright">
              <p>Editar categoría</p>
            </div>
          </div>
          <div className="encatmini">
            <div className="encatminileft">
              <div className="encatlefth">
                <p style={{ textTransform: "uppercase" }}>
                  NOMBRE DE LA Categorías
                </p>
              </div>
              <div className="encatgorianum">
                <input
                  className="encatgorianumin"
                  placeholder="Nombre de la categoría"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>
              </div>
              <div className="encatchbx">
                <p>Imagen de categoría</p>
              </div>
              <div className="enewcattagin">
                <input
                  className="encattaginn2"
                  type="file"
                  onChange={(e) => setimage(e.target.files[0])}
                ></input>
              </div>
              <div className="encattag">
                <p>TAGS</p>
              </div>
              <div className="enewcattagin">
                <input
                  className="encattaginn"
                  placeholder="Tags"
                  value={tags}
                  onChange={(e) => settags(e.target.value)}
                ></input>
              </div>
              <div className="encatslug">
                <p>SLUG</p>
              </div>
              <div className="encatslugin">
                <input
                  placeholder="Slug"
                  className="enewcatslugin"
                  value={slug}
                  onChange={(e) => setslug(e.target.value)}
                ></input>
              </div>
              <div className="encataggr">
                <p className="addcateggory" onClick={addcategory}>
                  AGREGAR
                </p>
              </div>
            </div>
            <div className="encatminiright">
              <div className="encathc">
                <p>HISTORIAL DE CATEGORIAS</p>
              </div>
              <div className="encatminrightmin">
                <div className="d-flex">
                  <p>Nombre</p>
                  <p>
                    <IoMdArrowDropdown />
                  </p>
                </div>
                <div>
                  <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
                    defaultExpandIcon={<ExpandMoreIcon />}
                  >
                    {getcategory.category.map((cat, index) => {
                      return (
                        <TreeItem
                          nodeId={index}
                          label={
                            <div className="treewich">
                              <p>{cat.name}</p>
                            </div>
                          }
                        >
                          {getsubcategory.subcategory.map((subcat) => {
                            if (subcat.category.name === cat.name) {
                              return (
                                <TreeItem
                                  label={
                                    <div className="treewich__nechy">
                                      <p>{subcat.name}</p>
                                    </div>
                                  }
                                ></TreeItem>
                              );
                            }
                          })}
                        </TreeItem>
                      );
                    })}
                  </TreeView>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editcategory;
