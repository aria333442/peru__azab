import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import "../css/Editsldr.scss";
import Sidebar from "../components/Sidebar";
import Select from "react-select";
import { getcat } from "../../actions";
import { getsubcat } from "../../actions/getsubcategory";
import { useDispatch, useSelector } from "react-redux";
import { getprod } from "../../actions/getproducts";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
import { createslide } from "../actions/createslider";
import { useHistory } from "react-router";

function Editsldr() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const dispatch = useDispatch();
  const [category, setcategory] = useState();
  const [subcat, setsubcat] = useState();
  const [product, setproduct] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [smallimage, setsmallimage] = useState([]);
  const [price, setprice] = useState();
  useEffect(() => {
    dispatch(getcat());
    dispatch(getsubcat());
    dispatch(getprod([]));
  }, []);
  const getcategory = useSelector((state) => state.getcategory);
  const getsubcategory = useSelector((state) => state.getsubcategory);
  const getproducts = useSelector((state) => state.getproducts);
  const options = getcategory.category.map((cat) => {
    return {
      value: cat._id,
      label: cat.name,
    };
  });
  let options2 = [];
  if (category) {
    getsubcategory.subcategory.map((subcat) => {
      if (subcat.category.name === category.label) {
        console.log("henj a na");
        options2.push({
          value: subcat._id,
          label: subcat.name,
        });
      }
    });
  }
  let options3 = [];
  if (subcat) {
    getproducts.products.map((prod) => {
      if (prod.subcategory.name === subcat.label) {
        options3.push({
          value: prod._id,
          label: prod.name,
        });
      }
    });
  }

  const addit = () => {
    const item = {
      name,
      description,
      product: product.value,
      small: smallimage[0],
      big: smallimage[1],
      price,
    };
    dispatch(createslide(item)).then((res) => {
      alert("control deslizante creado");
      window.location.reload();
    });
  };

  const successCallBack = (result) => {
    if (smallimage.length === 2) {
      alert("cant upload more images");
    } else {
      setsmallimage([...smallimage, result.info.url]);
    }
  };
  console.log(smallimage);

  const failureCallBack = () => {};
  const Example = () => {
    return (
      <>
        <WidgetLoader />
        <Widget
          sources={["local", "camera", "dropbox"]}
          sourceKeys={{
            dropboxAppKey: "1dsf42dl1i2",
            instagramClientId: "d7aadf962m",
          }}
          resourceType={"image"}
          cloudName={"dd77cqt5fs"}
          uploadPreset={"ababeel"}
          buttonText={"Subir"}
          style={{
            color: "white",
            border: "none",
            width: "160px",
            backgroundColor: "green",
            borderRadius: "4px",
            height: "40px",
          }}
          folder={"my_folder"}
          cropping={false}
          onSuccess={successCallBack}
          onFailure={failureCallBack}
          logging={false}
          customPublicId={"sample"}
          eager={""}
          use_filename={true}
          accepts={"application/json"}
          contentType={"application/json"}
          withCredentials={false}
          unique_filename={true}
        />
      </>
    );
  };

  return (
    <div>
      <div>
        <div className="eslidermain">
          <div className="esldrleft">
            <Sidebar />
          </div>
          <div className="esldrright">
            <div className="esldrhead">
              <div className="esldrtab">
                <div className="esldrta">
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
            <div className="esldrnue">
              <div className="esnueleft"></div>
              <div className="esnueright">
                <p>Nuevo slider</p>
              </div>
            </div>
            <div className="esldrti">
              <div className="esldrtisub">
                <p>Titulo del slide</p>
              </div>
            </div>
            <div className="esldrin">
              <div className="esldrinsub">
                <input
                  className="esldrtituin"
                  placeholder="Titulo slide"
                  vlaue={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="esldrfoto">
              <div className="esldrfotosub">
                <p>FOTOS</p>
              </div>
              <div className="d-flex foto__div">
                <div>
                  <p>Primero (imagen pequeña)</p>
                  {smallimage[0] ? (
                    <img src={smallimage[0]}></img>
                  ) : (
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1621433315/Armea/apps.38282.13733306562729316.049f2fd1-b066-4cb5-b5ef-317d282a0b02_guowkv.png"></img>
                  )}
                  <Example></Example>
                </div>
                <div>
                  <p>2do (imagen grande)</p>
                  {smallimage[1] ? (
                    <img src={smallimage[1]}></img>
                  ) : (
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1621433315/Armea/apps.38282.13733306562729316.049f2fd1-b066-4cb5-b5ef-317d282a0b02_guowkv.png"></img>
                  )}

                  <Example></Example>
                </div>
              </div>
            </div>

            <div className="esldrdes">
              <div className="esldrdessub">
                <p>DESCRIPCIÓN DEL SLIDER</p>
              </div>
            </div>
            <div className="esldrdesin">
              <div className="edesinsld">
                <textarea
                  className="edesinslddd"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="eelnce">
              <div className="eelnceurl">
                <p>ENLANCE DE DIRECCION</p>
              </div>
            </div>
            <div className="utl__selector__div">
              <div>
                <p>categoría</p>
                <Select
                  placeholder="categoría"
                  options={options}
                  value={category}
                  onChange={setcategory}
                />
              </div>
              <div>
                <p>subcategoría</p>
                <Select
                  placeholder="subcategoría"
                  options={options2}
                  value={subcat}
                  onChange={setsubcat}
                />
              </div>
              <div>
                <p>producto</p>
                <Select
                  placeholder="producto"
                  options={options3}
                  value={product}
                  onChange={setproduct}
                />
              </div>
            </div>
            <div className="esldrfoto">
              <div className="esldrfotosub">
                <p>PRECIO (OPCIONAL)</p>
              </div>
            </div>
            <div className="esldrprec">
              <div className="esldrpreecsb">
                <input
                  placeholder="Prec"
                  className="eprecin"
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="esldrbtn">
              <div className="esldrbttn">
                <p onClick={addit} className="esldrpub">
                  PUBLICAR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editsldr;
