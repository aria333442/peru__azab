import React, { useState } from "react";
import "../css/Nuevoprdct.scss";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import Sidebar from "./Sidebar";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
import { useDispatch } from "react-redux";
import { createnew } from "../actions/createnew";
import { updatenew } from "../actions/updatenew";
import { useHistory, useParams } from "react-router";

function Editnew() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    history.push("/admin/login");
  } else if (user) {
    if (user.role !== "admin") {
      history.push("/admin/login");
    }
  }
  const { Nid } = useParams();
  const dispatch = useDispatch();
  const [name, setname] = useState();
  const [Images, setImages] = useState([]);
  const [saleprice, setsaleprice] = useState();
  const [description, setdescription] = useState();
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
            width: "230px",
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
  const successCallBack = (result) => {
    setImages([...Images, result.info.url]);
  };
  const failureCallBack = () => {};
  const createit = () => {
    const productImage = [];
    Images.map((ima) => {
      productImage.push({
        img: ima,
      });
    });
    const item = {
      name,
      productImage,
      saleprice,
      description,
      status: "new",
      id: Nid,
    };
    dispatch(updatenew(item)).then((res) => {
      alert("created");
      window.location.reload();
    });
  };
  return (
    <div>
      <div>
        <div className="nprmain">
          <div className="nprleft">
            <Sidebar />
          </div>
          <div className="nprright">
            <div className="nprhead">
              <div className="nprtab">
                <div className="nprta">
                  <p>Nuevo productos</p>
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
            <div className="nprnue">
              <div className="nprsnueleft"></div>
              <div className="nprsnueright">
                <p>Nuevo producto</p>
              </div>
            </div>
            <div className="nprti">
              <div className="nprtisub">
                <p>Titulo del producto</p>
              </div>
            </div>
            <div className="nprin">
              <div className="nprinsub">
                <input
                  className="nprtituin"
                  placeholder="Titulo del producto"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="nprfoto">
              <div className="nprfotosub">
                <p>FOTOS</p>
              </div>
            </div>
            <div className="nprfupload">
              <div className="nprfuploadsub">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1621433315/Armea/apps.38282.13733306562729316.049f2fd1-b066-4cb5-b5ef-317d282a0b02_guowkv.png"
                ></img>
              </div>
              {Images
                ? Images.map((img) => {
                    return (
                      <div className="lambo">
                        <img src={img}></img>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="newprdctagrigar">
              <Example></Example>
            </div>
            <div className="nprdes">
              <div className="nprdessub">
                <p>DESCRIPCIÓN DEL PRODUCTO</p>
              </div>
            </div>
            <div className="nprdesin">
              <div className="nprdesinsld">
                <textarea
                  className="nprdesinslddd"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="nprfoto">
              <div className="nprfotosub">
                <p>PRECIO (OPCIONAL)</p>
              </div>
            </div>
            <div className="nprprec">
              <div className="nprpreecsb">
                <input
                  placeholder="Prec"
                  className="nprprecin"
                  value={saleprice}
                  onChange={(e) => setsaleprice(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="nprbtn">
              <div className="nprbttn">
                <p className="nprpub" onClick={createit}>
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

export default Editnew;
