import React from "react";
import "../css/Landing_res.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { FiArrowRight } from "react-icons/fi";

function Landing_res() {
  const items = [
    <div
      style={{
        border: "1px solid red",
        width: "60%",
        height: "165px",
        marginLeft: "30px",
        marginTop: "5px",
      }}
    >
      <img
        src="https://media.istockphoto.com/photos/laughing-donkey-picture-id483293702?k=6&m=483293702&s=170667a&w=0&h=LvLqPaXiVCjBHsALULVWKLt5Z67C5htZdHW0MtoQUfE="
        alt="bawaw"
        style={{ width: "100%", height: "100%" }}
      ></img>
    </div>,
    <div
      style={{
        border: "1px solid red",
        width: "60%",
        height: "165px",
        marginLeft: "30px",
        marginTop: "5px",
      }}
    ></div>,
    <div
      style={{
        border: "1px solid red",
        width: "60%",
        height: "165px",
        marginLeft: "30px",
        marginTop: "5px",
      }}
    >
      <img
        src="https://images.radio.com/aiu-media/GettyImages177311261-dca17731-f498-457b-bd2b-e1b06cbe4627.jpg"
        alt="bawaw"
        style={{ width: "100%", height: "100%" }}
      ></img>
    </div>,
  ];
  const nizam = [
    <div
      className="d-flex"
      style={{
        border: "1px solid red",
        width: "60%",
        height: "320px",
        marginLeft: "70px",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          height: "80px",
          width: "60%",
          marginLeft: "20px",
          marginTop: "230px",
          backgroundColor: "whitesmoke",
          opacity: "0.7",
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "10px", marginLeft: "5px" }}>
          Categoria
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "gray",
            marginTop: "-10px",
            marginLeft: "5px",
          }}
        >
          Catagory Name
        </p>
      </div>
      <div
        style={{
          border: "none",
          width: "18%",
          height: "10%",
          backgroundColor: "#FF6606",
          marginTop: "278px",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            color: "white",
            marginTop: "-5px",
            marginLeft: "5px",
          }}
        >
          <FiArrowRight />
        </p>
      </div>
    </div>,
    <div
      className="d-flex"
      style={{
        border: "1px solid red",
        width: "60%",
        height: "320px",
        marginLeft: "70px",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          height: "80px",
          width: "60%",
          marginLeft: "20px",
          marginTop: "230px",
          backgroundColor: "whitesmoke",
          opacity: "0.7",
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "10px", marginLeft: "5px" }}>
          Categoria
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "gray",
            marginTop: "-10px",
            marginLeft: "5px",
          }}
        >
          Catagory Name
        </p>
      </div>
      <div
        style={{
          border: "none",
          width: "18%",
          height: "10%",
          backgroundColor: "#FF6606",
          marginTop: "278px",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            color: "white",
            marginTop: "-5px",
            marginLeft: "5px",
          }}
        >
          <FiArrowRight />
        </p>
      </div>
    </div>,
    <div
      className="d-flex"
      style={{
        border: "1px solid red",
        width: "60%",
        height: "320px",
        marginLeft: "70px",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          height: "80px",
          width: "60%",
          marginLeft: "20px",
          marginTop: "230px",
          backgroundColor: "whitesmoke",
          opacity: "0.7",
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "10px", marginLeft: "5px" }}>
          Categoria
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "gray",
            marginTop: "-10px",
            marginLeft: "5px",
          }}
        >
          Catagory Name
        </p>
      </div>
      <div
        style={{
          border: "none",
          width: "18%",
          height: "10%",
          backgroundColor: "#FF6606",
          marginTop: "278px",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            color: "white",
            marginTop: "-5px",
            marginLeft: "5px",
          }}
        >
          <FiArrowRight />
        </p>
      </div>
    </div>,
  ];
  const nizamiii = [
    <div
      style={{
        border: "1px solid red",
        width: "40%",
        height: "190px",
        marginLeft: "100px",
        marginTop: "0px",
      }}
    >
      <img
        src="https://wallpapercave.com/wp/wp5554098.jpg"
        alt="bawa"
        style={{ width: "100%", height: "100%" }}
      ></img>
    </div>,
    <div
      style={{
        border: "1px solid red",
        width: "40%",
        height: "190px",
        marginLeft: "100px",
        marginTop: "0px",
      }}
    >
      <img
        src="https://swall.teahub.io/photos/small/169-1699326_shrek-the-third-shrek-donkey-poster.jpg"
        style={{ width: "100%", height: "100%" }}
        alt="bawa"
      ></img>
    </div>,
    <div
      style={{
        border: "1px solid red",
        width: "40%",
        height: "190px",
        marginLeft: "100px",
        marginTop: "0px",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1q6vI9HBRkQMdZY42W-v-fzHEq0te-_D9w&usqp=CAU"
        alt="bawa"
        style={{ width: "100%", height: "100%" }}
      ></img>
    </div>,
  ];
  return (
    <div className="landing_resp">
      <div>
        <div></div>
      </div>
      <div>
        <p>Productos de alta </p>
        <p>calidad</p>
      </div>
      <div>
        <AliceCarousel
          disableButtonsControls={true}
          autoPlay={true}
          disableDotsControls={true}
          infinite={true}
          items={nizam}
        />
      </div>
      <div>
        <button>IR A LA TIENDA</button>
      </div>
      <div className="_respppp">
        <p>Productos</p>
        <p> nuevos</p>
      </div>
      <div>
        <div>
          <div>
            <p>Escritorio Montessori</p>
          </div>
          <div>
            <p>Simple y real. Todo tiene su razón de ser.</p>
          </div>
          <div>
            <p>*****</p>
          </div>
          <div>
            <div>
              <button>COMPRAR</button>
            </div>
            <div>
              <button>AñADIR</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <AliceCarousel
              disableButtonsControls={true}
              items={items}
              infinite={true}
              disableDotsControls={true}
            />
          </div>
        </div>
      </div>
      <div>
        <p>#Mueblesquehacen</p>
        <p>click</p>
      </div>
      <div>
        <AliceCarousel
          disableButtonsControls={true}
          infinite={true}
          items={nizamiii}
          disableDotsControls={true}
        />
      </div>
      <div>div for footer</div>
    </div>
  );
}

export default Landing_res;
