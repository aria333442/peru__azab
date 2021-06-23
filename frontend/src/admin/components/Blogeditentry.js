import React, { useState, useCallback } from "react";
import "../css/Blognueventr.scss";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import Select from "react-select";
import { FaBold } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { getcat } from "../../actions";
import { getsubcat } from "../../actions/getsubcategory";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { createblo } from "../actions/createblog";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { updateblo } from "../actions/updateblog";

function Blogeditentry() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  let date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  date = dd + "-" + mm + "-" + yyyy;
  const { Bid } = useParams();

  const [checked, setchecked] = useState(false);
  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [tags, settags] = useState();
  const [blogImage, setblogImage] = useState();
  const [blogcategory, setblogcategory] = useState();
  const [font, setfont] = useState("Roboto");
  const [sizes, setsizes] = useState("12px");
  const [Metatitle, setMetatitle] = useState();
  const [Metadescription, setMetadescription] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    const data = new FormData();
    data.append("file", acceptedFiles[0]);
    data.append("upload_preset", "ababeel");
    data.append("cloud_name", "dd77cqt5fs");
    fetch("https://api.cloudinary.com/v1_1/dd77cqt5fs/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          console.log(data.url);
          setblogImage(data.url);
        }
      });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcat());
    dispatch(getsubcat());
  }, []);
  const setaddress = (e) => {
    if (e.target.checked === true) {
      setchecked(true);
    } else {
      setchecked(false);
    }
  };

  const getcategory = useSelector((state) => state.getcategory);
  const options = [];
  getcategory.category.map((cat) => {
    options.push({
      value: cat.name,
      label: cat.name,
    });
  });
  const size = [
    {
      value: "12px",
      label: "12px",
    },
    {
      value: "14px",
      label: "14px",
    },
    {
      value: "16px",
      label: "16px",
    },
    {
      value: "18px",
      label: "18px",
    },
    {
      value: "20px",
      label: "20px",
    },
    {
      value: "22px",
      label: "22px",
    },
  ];
  const fonts = [
    {
      value: "Roboto",
      label: "Roboto",
    },
    {
      value: "Arial",
      label: "Arial",
    },
    {
      value: "Helvetica",
      label: "Helvetica",
    },
    {
      value: "Verdana",
      label: "Verdana",
    },
    {
      value: "Calibri",
      label: "Calibri",
    },
    {
      value: "Noto",
      label: "Noto",
    },
    {
      value: "Lucida Sans",
      label: "Lucida Sans",
    },
    {
      value: "Times New Roman",
      label: "Times New Roman",
    },
    {
      value: "Georgia",
      label: "Georgia",
    },
  ];
  const publishit = () => {
    let aurthor1;
    let aurthorimage1;
    if (user) {
      aurthor1 = user.name;
      aurthorimage1 = user.image;
    } else if (!user) {
      aurthor1 = "John";
      aurthorimage1 =
        "https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png";
    }

    if (!title || !description || !blogImage || !tags || !blogcategory) {
      alert("Todos los campos son obligatorios");
    } else {
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
      const item = {
        array: Bid,
        aurthor: aurthor1,
        authorImage: aurthorimage1,
        title,
        description,
        blogImage,
        blogcategory: blogcategory.value,
        tags: tags2,
        Metatitle,
        Metadescription,
        date,
      };
      dispatch(updateblo(item)).then((res) => {
        settitle(" ");
        setblogImage("");
        setdescription("");
        setblogcategory("");
        settags("");
        setMetatitle("");
        setMetadescription("");
        alert("blog updato");
      });
    }
  };
  const eleminate = () => {
    window.location.reload();
  };
  return (
    <div>
      <div>
        <div className="blgnprmain">
          <div className="blgnprleft">
            <Sidebar />
          </div>
          <div className="blgnprright">
            <div className="blgnprhead">
              <div className="blgnprtab">
                <div className="blgnprta">
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
            <div>
              <div className="blgnprnue">
                <div className="blgnprsnueleft">
                  <NavLink to="/admin/blogdetail" className="iconee">
                    <IoIosArrowDropleftCircle />
                  </NavLink>
                </div>
                <div className="blgnprsnueright">
                  <p>Editar entrada</p>
                </div>
              </div>
              <div className="blgnprti">
                <div className="blgnprtisub">
                  <p>Titulo del entrada</p>
                </div>
              </div>
              <div className="blgnprin">
                <div className="blgnprinsub">
                  <input
                    className="blgnprtituin"
                    placeholder="Titulo del entrada"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="blgnprfoto">
                <div className="blgnprfotosub">
                  <div
                    style={{
                      backgroundColor: "white",
                      boxShadow: " 0px 1px 3px 0px #3f3f4426",
                      borderRadius: "5px",
                    }}
                    className="d-flex"
                  >
                    <div className="aluu">
                      <Select
                        placeholder="Roboto"
                        options={fonts}
                        onChange={setfont}
                      ></Select>
                    </div>
                    <div className="aluu">
                      <Select
                        placeholder="12px"
                        options={size}
                        onChange={setsizes}
                      ></Select>
                    </div>
                    <p className="lulla">
                      <FaBold />
                    </p>
                    <p className="lulla2">
                      <FaUnderline />
                    </p>
                  </div>
                </div>
              </div>
              <div className="blognprdesmn">
                <div className="blgnprdesin">
                  <div className="blgnprdesinsld">
                    <textarea
                      className="sussa"
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                      style={{
                        fontFamily: `${font.value}`,
                        fontSize: `${sizes.value}`,
                      }}
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    ></textarea>
                  </div>

                  <div className="blgnprfotoright">
                    <div className="blgnprfotorightsb">
                      <div className="blgnprrph">
                        <p>FOTO</p>
                      </div>
                      <div className="blgnprrightph" {...getRootProps()}>
                        <input {...getInputProps()}></input>
                        {blogImage ? (
                          <img src={blogImage} className="foto"></img>
                        ) : (
                          <img
                            className="foto"
                            src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1621433315/Armea/apps.38282.13733306562729316.049f2fd1-b066-4cb5-b5ef-317d282a0b02_guowkv.png"
                          ></img>
                        )}
                      </div>
                      <div className="blgnprphaggr">
                        <button className="blgnprightagbut">AGREGAR</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blgnprfotoo">
                <div className="blgnprfotosub">
                  <p>Tags</p>
                </div>
              </div>
              <div className="blgnprprec">
                <div className="blgnprpreecsb">
                  <input
                    placeholder="Tags"
                    className="blgnprprecin"
                    value={tags}
                    onChange={(e) => settags(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="blgnprfotoo" style={{ marginTop: "20px" }}>
                <div className="blgnprfotosub">
                  <p>Seleccionar categoría de blog</p>
                </div>
              </div>
              <div className="ccategory__select">
                <Select
                  options={options}
                  placeholder="selecciona categoría"
                  onChange={setblogcategory}
                ></Select>
              </div>
              <div className="d-flex mt-5" style={{ marginLeft: "100px" }}>
                <input
                  type="checkbox"
                  className="checkit"
                  value={checked}
                  onClick={setaddress}
                ></input>
                <label className="adjustit">ADJUSTAR SEO DEL POST</label>
              </div>
              <div className={checked === true ? "show" : "notshow"}>
                <div className="blgnprmeta">
                  <div className="blgnprmetasub">
                    <p>METATITULO</p>
                  </div>
                </div>
                <div className="blgnprinmeta">
                  <div className="blgnprinmetasub">
                    <input
                      className="blgnprmetain"
                      placeholder="Meta"
                      value={Metatitle}
                      onChange={(e) => setMetatitle(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="blgnprmeta">
                  <div className="blgnprmetasub">
                    <p>METADESCRIPSION</p>
                  </div>
                </div>
                <div className="blgnprinmeta">
                  <div className="blgnprinmetasub">
                    <input
                      className="blgnprmetainn"
                      placeholder="Meta"
                      value={Metadescription}
                      onChange={(e) => setMetadescription(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="blgnprbtn">
                <div className="blgnprbttn">
                  <p
                    className="blgnprbor"
                    onClick={eleminate}
                    style={{ cursor: "pointer" }}
                  >
                    BORRADOR
                  </p>
                </div>
                <div className="blgnprbttn">
                  <p
                    className="publish"
                    style={{ cursor: "pointer" }}
                    onClick={publishit}
                  >
                    PUBLICAR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogeditentry;
