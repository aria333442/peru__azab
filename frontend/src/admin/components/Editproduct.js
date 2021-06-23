import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import "../css/Editnueprd.scss";
import Sidebar from "./Sidebar";
import Select from "react-select";
import { getcat } from "../../actions";
import { getsubcat } from "../../actions/getsubcategory";
import { useDispatch, useSelector } from "react-redux";

import { Image } from "cloudinary-react";
import ReactPlayer from "react-player";

import { useHistory, useParams } from "react-router";
import { updateprod } from "../actions/editproduct";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Editproduct() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const { Pid } = useParams();
  const dispatch = useDispatch();
  const [checkled, setchecked] = useState(false);
  const [category, setcategory] = useState();
  const [stock, setstock] = useState();
  const [subcat, setsubcat] = useState();
  const [name, setname] = useState();
  const [number, setnumber] = useState();
  const [images, setimages] = useState([]);
  const [video, setvideo] = useState();
  const [coloroptions, setcoloroptions] = useState();
  const [color, setcolor] = useState();
  const [colors, setcolors] = useState([]);
  const [actualPrice, setactualPrice] = useState();
  const [saleprice, setsaleprice] = useState();
  const [description, setdescription] = useState();
  const [Metatitle, setMetatitle] = useState();
  const [Metadescription, setMetadescription] = useState();
  useEffect(() => {
    dispatch(getcat());
    dispatch(getsubcat());
  }, []);
  const getcategory = useSelector((state) => state.getcategory);
  const getsubcategory = useSelector((state) => state.getsubcategory);
  const options = getcategory.category.map((cat) => {
    return {
      value: cat._id,
      label: cat.name,
    };
  });
  let options2 = [];
  for (let i = 1; i <= 10; i++) {
    options2.push({
      value: i,
      label: i,
    });
  }
  let options3 = [];
  if (category) {
    getsubcategory.subcategory.map((sub) => {
      if (sub.category.name === category.label) {
        options3.push({
          label: sub.name,
          value: sub._id,
        });
      }
    });
  }
  let options4 = [];
  for (let i = 1; i <= 4; i++) {
    options4.push({
      value: i,
      label: i,
    });
  }
  console.log(subcat);
  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dd77cqt5fs",
      uploadPreset: "ababeel",
      folder: "Armea",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setimages([...images, result.info.url]);
      }
    }
  );
  const openvideo = () => {
    videoWidget.open();
  };
  var videoWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dd77cqt5fs",
      uploadPreset: "ababeel",
      folder: "Armea",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setvideo(result.info.url);
      }
    }
  );
  const openit = () => {
    myWidget.open();
  };
  console.log(images);
  const Dispalygallery = () => {
    if (images.length > 0) {
      return (
        <div className="d-flex">
          {images.map((ima) => {
            return (
              <div className="thisis">
                <Image
                  publicId={ima}
                  cloudName="dd77cqt5fs"
                  style={{
                    cursor: "pointer",
                    border: "1px solid white",
                    width: "100%",
                    height: "100%",
                  }}
                ></Image>
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  };
  let array1 = [];
  if (coloroptions) {
    for (let i = 0; i < coloroptions.value; i++) {
      array1.push(i);
    }
  }
  console.log(array1);
  const handlecolors = () => {
    setcolors([...colors, color]);
  };
  console.log(colors);
  const handleit = (e) => {
    if (e.target.checked === false) {
      setchecked(false);
    } else {
      setchecked(true);
    }
  };

  let discount = actualPrice - saleprice;
  let less = (discount / actualPrice) * 100;
  console.log(less);
  const cretaeprod = () => {
    const image2 = [];
    images.map((ima) => {
      image2.push({
        img: ima,
      });
    });
    let color1 = [];
    colors.map((col) => {
      color1.push({
        color: col,
      });
    });
    const item = {
      id: Pid,
      name,
      productImage: image2,
      saleprice,
      actualPrice,
      lessPercentage: less,
      description,
      category: category.value,
      subcategory: subcat.value,
      colors: color1,
      number,
      video,
      Metatitle,
      Metadescription,
    };

    dispatch(updateprod(item)).then((res) => {
      alert("product created");
    });
  };
  return (
    <div>
      <div>
        <div className="eanpmain">
          <div className="eanpleft">
            <Sidebar />
          </div>
          <div className="eanpright">
            <div className="eanphead">
              <div className="eanptab">
                <div className="eanpta">
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
            <div className="eanpnuevo">
              <div className="eanpnuevol">
                <NavLink to="/admin/allproducts" className="susuu">
                  <IoIosArrowDropleftCircle />
                </NavLink>
              </div>
              <div className="eanpnuevor">
                <p>Nuevo producto</p>
              </div>
            </div>
            <div className="eanpminidiv">
              <div className="eanpminidivsub">
                <div className="eanpminf">
                  <div className="eanpminfnom">
                    <p>NOMBRE DEL PRODUCTO</p>
                  </div>
                  <div className="eanpminfcat">
                    <p>CATEGORÍA</p>
                  </div>
                  {category ? (
                    <div className="sub__header">
                      <p>SUBCATEGORÍA</p>
                    </div>
                  ) : null}
                </div>
                <div className="eanpnomin">
                  <div className="eanpnominl">
                    <input
                      className="eaddnprdin"
                      placeholder="Nombre del producto"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    ></input>
                  </div>
                  <div className="eanpnominr">
                    <Select
                      placeholder="CATEGORÍA"
                      options={options}
                      value={category}
                      onChange={setcategory}
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "50px",
                      marginTop: "0px",
                      width: "130px",
                    }}
                  >
                    {category ? (
                      <Select
                        placeholder="SUBCATEGORÍA"
                        options={options3}
                        value={subcat}
                        onChange={setsubcat}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="eanpminf">
                  <div className="eanpminfnom">
                    <p>CÓDIGO DE PRODUCTO</p>
                  </div>
                  <div className="eanpminfcat">
                    <p>STOCK</p>
                  </div>
                </div>
                <div className="eanpnomin">
                  <div className="eanpnominll">
                    <input
                      className="eaddnprdinn"
                      placeholder="Ejemplo: 90821387"
                      value={number}
                      onChange={number}
                    ></input>
                  </div>
                  <div className="eanpnominrr">
                    <Select
                      placeholder="Cantidad"
                      options={options2}
                      value={stock}
                      onChange={setstock}
                    />
                  </div>
                </div>

                <div className="eanpminf">
                  <div className="eanpminfcat">
                    <p>FOTO PRINCIPAL</p>
                  </div>

                  <div className="eanpminfnom2">
                    <p>Galería de imágenes</p>
                  </div>
                </div>

                <div className="eanpnominfoto">
                  <div className="eanpnominfotol">
                    <div className="eanpfotoinput">
                      {images.length > 0 ? (
                        <Image
                          publicId={images[0]}
                          cloudName="dd77cqt5fs"
                          style={{
                            cursor: "pointer",
                            border: "1px solid white",
                            width: "100%",
                            height: "100%",
                          }}
                          onClick={openit}
                        ></Image>
                      ) : (
                        <img
                          style={{ width: "100%", height: "100%" }}
                          onClick={openit}
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1621433315/Armea/apps.38282.13733306562729316.049f2fd1-b066-4cb5-b5ef-317d282a0b02_guowkv.png"
                        ></img>
                      )}
                    </div>
                    <div className="eanpfotoinputbut">
                      <button className="eanpfotoagg" onClick={openit}>
                        subir
                      </button>
                    </div>
                  </div>
                  <div className="eanpnominfotor">
                    <div className="gallery">{Dispalygallery()}</div>
                    <div className="lullalo">
                      <button onClick={openit}>subir</button>
                    </div>
                  </div>
                </div>
                <div className="eanpvid">
                  <p>VIDEOS</p>
                </div>
                <div className="eanpvideoin">
                  <div className="eanpvideoinl">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1621785791/video_n47gye.jpg"
                    ></img>
                    <button className="vido__but" onClick={openvideo}>
                      Subir
                    </button>
                  </div>
                  <div className="eanpvideoinr" style={{ marginLeft: "100px" }}>
                    {video ? (
                      <ReactPlayer
                        url={video}
                        width="250px"
                        height="150px"
                        controls={true}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="eanpcheck">
                  <p>SELECCIONAR COLORES DE PRODUCTO</p>
                </div>
                <div className="color__container">
                  <div>
                    <p>número de colores</p>
                    <Select
                      options={options4}
                      value={coloroptions}
                      onChange={setcoloroptions}
                    ></Select>
                  </div>
                  {coloroptions
                    ? array1.map((arr, index) => {
                        return (
                          <div className="sossa">
                            <p>color {" " + index}</p>
                            <input
                              style={{ width: "100%" }}
                              placeholder="#00000"
                              key={index}
                              onChange={(e) => setcolor(e.target.value)}
                            ></input>
                            <p
                              className="coloro"
                              type="submit"
                              onClick={handlecolors}
                            >
                              confirmar el color
                            </p>
                          </div>
                        );
                      })
                    : null}
                </div>
                <div className="eanpprice">
                  <div className="eanppricel">
                    <p>PRECIO REGULAR</p>
                  </div>
                  <div className="eanppricer">
                    <p>DECUENTO(OPCIONAL)</p>
                  </div>
                </div>
                <div className="eanppricein">
                  <div className="eanppricelin">
                    <input
                      placeholder="Precio"
                      className="eanpprecioact"
                      value={actualPrice}
                      onChange={(e) => setactualPrice(e.target.value)}
                    ></input>
                  </div>
                  <div className="eanppricerin">
                    <input
                      placeholder="Precio"
                      className="eanppreciocio"
                      value={saleprice}
                      onChange={(e) => setsaleprice(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="eanpdescr">
                  <p>DESCRIPCIÓN DEL PRODUCTO</p>
                </div>
                <div className="eanpdescrin">
                  <div className="eanpdescrinl">
                    <textarea
                      className="eanpdescrinlinput"
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="eanpdescrinr">
                    <div className="d-flex">
                      <input
                        type="checkbox"
                        className="lss"
                        value={checkled}
                        onClick={handleit}
                      ></input>
                      <label style={{ marginTop: "-5px" }}>
                        ADJUSTAR SEO DE PRODUCTO
                      </label>
                    </div>
                    {checkled === true ? (
                      <div className="seo">
                        <p>METATITULO</p>
                        <input
                          placeholder="Meta"
                          className="shusha"
                          value={Metatitle}
                          onChange={(e) => setMetatitle(e.target.value)}
                        ></input>
                        <div className="mt-4">
                          <p>METADESCRIPSION</p>
                          <input
                            placeholder="Meta"
                            className="shusha"
                            value={Metadescription}
                            onChange={(e) => setMetadescription(e.target.value)}
                          ></input>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="eanpagreg">
                  <p className="eanpagregbut" onClick={cretaeprod}>
                    AGREGAR
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

export default Editproduct;
