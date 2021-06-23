import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import "../css/Editpopup.scss";
import Sidebar from "./Sidebar";
import { getcat } from "../../actions";
import { getsubcat } from "../../actions/getsubcategory";
import { useDispatch, useSelector } from "react-redux";
import { getprod } from "../../actions/getproducts";
import Select from "react-select";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
import { createpop } from "../actions/createpop";
import { useHistory } from "react-router";

function Editpopup() {
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
  const [image, setimage] = useState();
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
  const successCallBack = (result) => {
    setimage(result.info.url);
  };
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
  const makeit = () => {
    const item = {
      name,
      image,
      url: product.value,
    };
    dispatch(createpop(item)).then((res) => {
      alert("created");
      window.location.reload();
    });
  };

  return (
    <div>
      <div className="epupmain">
        <div className="epupleft">
          <Sidebar />
        </div>
        <div className="epupright">
          <div className="epuphead">
            <div className="epuptabb">
              <div className="epupta">
                <p>Pop Up</p>
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
          <div className="enpupf">
            <div className="enpupfl"></div>
            <div className="enpupfr">
              <p>Nuevo pop up</p>
            </div>
          </div>
          <div className="enpupmini">
            <div className="enpupmtiu">
              <p>TITULO DEL POP UP</p>
            </div>
            <div className="enpupmtiui">
              <input
                className="enpupmtiuin"
                placeholder="Titulo del pop up"
                value={name}
                onChange={(e) => setname(e.target.value)}
              ></input>
            </div>
            <div className="enpupmtiu">
              <p>FOTO</p>
            </div>
            <div className="enpupfoto">
              <div className="enpupfotosub">
                {image ? (
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image}
                  ></img>
                ) : (
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1621433315/Armea/apps.38282.13733306562729316.049f2fd1-b066-4cb5-b5ef-317d282a0b02_guowkv.png"
                  ></img>
                )}
              </div>
            </div>
            <div className="enpupagg">
              <Example />
            </div>
            <div className="enpupmtiu">
              <p>ENLACE DE DIRECCION</p>
            </div>
            <div>
              <div className="utl__selector__div" style={{ marginLeft: "0px" }}>
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
            </div>

            <div className="enpupagrg">
              <p className="enpupagrgbt" onClick={makeit}>
                GUARDAR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editpopup;
