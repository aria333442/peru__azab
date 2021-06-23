import React from "react";
import "../css/Adminnav.scss";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

function Adminnav(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="aminnav__main">
      <div>
        <h3>{props.page}</h3>
      </div>
      <div>
        <div>
          <p>
            <BiSearch />
          </p>
          <p>
            <MdNotificationsNone />
          </p>
        </div>
        <div></div>
        <div className="cred__div">
          <h6>{user.name}</h6>
          <div>
            {user.image ? (
              <Image
                publicId={user.image}
                cloudName="dd77cqt5fs"
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
              >
                <Transformation
                  width="50"
                  height="50"
                  crop="scale"
                  gravity="face"
                  crop="thumb"
                  radius="max"
                />
              </Image>
            ) : (
              <img
                alt="bawa"
                src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618961504/circle-cropped_6_crdmcu.png"
                className="uspp"
              ></img>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminnav;
