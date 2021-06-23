import React, { useEffect, useState } from "react";
import Select from "react-select";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { CbyId } from "../actions/cartbyid";
import { remove } from "../actions/removeitem";
import { GiConfirmed } from "react-icons/gi";
import { addord } from "../actions/order";
import "../css/check.scss";

function Check() {
  const [number, setnumber] = useState(0);
  const [confirm, setconfirm] = useState(0);
  const [name, setname] = useState();
  const [surname, setsurname] = useState();
  const [shipping_Address, setshipping_Address] = useState();
  const [region, setregion] = useState();
  const [postalcode, setpostalcode] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [email, setemail] = useState();
  const [message, setmessage] = useState();
  const Cid = JSON.parse(localStorage.getItem("user"));
  const [removed, setremoved] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  let date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  console.log(window.location.pathname);

  date = mm + "/" + yyyy;
  useEffect(() => {
    dispatch(CbyId(Cid));
  }, []);
  useEffect(() => {
    dispatch(CbyId(Cid));
    setremoved(false);
  }, [removed]);

  const handleremove = (id) => {
    const it = {
      cartid: Cid,
      id,
    };
    dispatch(remove(it)).then((res) => {
      setremoved(true);
    });
  };
  const incnumber = () => {
    if (
      !email ||
      !name ||
      !surname ||
      !shipping_Address ||
      !region ||
      !postalcode ||
      !phonenumber
    ) {
      setmessage("Todos los datos son obligatorios");
    } else {
      setnumber(number + 1);
    }
  };
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      border: "none",
      color: "red",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "#ff6606", // Custom colour
    }),
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cartbyid = useSelector((state) => state.cartbyid);
  const amountpayed = cartbyid.total;
  let products;
  if (token) {
    products = cartbyid.item.cartItems.map((cat) => {
      return {
        product: cat.product._id,
        quantity: cat.quantity,
        price: cat.price,
      };
    });
  }
  const handlecoco = () => {
    window.scrollTo(0, 0);
    const items = {
      name,
      surname,
      email,
      shipping_Address,
      number: phonenumber,
      region,
      postalcode,
      amountpayed,
      cart: Cid,
      products,
      date,
      paymentmethod: "mecardo pago",
    };
    dispatch(addord(items)).then((res) => {
      setconfirm(1);
    });
  };
  const Condition = () => {
    if (number == 0) {
      return (
        <div>
          <div className="form__container">
            <div>
              <div className="d-flex justify-content-between">
                <h2 className="form__title">Ingresa tus datos personales</h2>
                <p
                  className="form_ok"
                  onClick={incnumber}
                  style={{ cursor: "pointer" }}
                >
                  INGRESAR
                </p>
              </div>
              <div className="d-flex">
                <div className="actual__form">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1" className="lablee">
                        Nombre
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese su nombre"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lablee">
                        Dirección
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Seleccione su Dirección"
                        value={shipping_Address}
                        onChange={(e) => setshipping_Address(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lablee">
                        Código postal
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Código postal"
                        value={postalcode}
                        onChange={(e) => setpostalcode(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className="actual__form">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1" className="lablee">
                        Apellido
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese su apellido"
                        value={surname}
                        onChange={(e) => setsurname(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lablee">
                        Región
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Seleccione su región"
                        value={region}
                        onChange={(e) => setregion(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lablee">
                        Teléfono
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Teléfono"
                        value={phonenumber}
                        onChange={(e) => setphonenumber(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="emailo">
                <div class="form-group">
                  <label for="exampleInputPassword1" className="lablee">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {message ? (
            <div class="alert alert-danger" role="alert">
              {message}
            </div>
          ) : null}
          <div className="below__buttons">
            <p
              className="REGISTRARME"
              onClick={incnumber}
              style={{ cursor: "pointer" }}
            >
              REGISTRARME
            </p>
            <p
              className="REGISTRARME2"
              onClick={incnumber}
              style={{ cursor: "pointer" }}
            >
              INVITADO
            </p>
          </div>
        </div>
      );
    } else if (number == 1) {
      return (
        <div>
          <div className="form__container2">
            <div className="second">
              <h2 className="gateway__title">Ingresa tus datos de pago</h2>
              <div className="d-flex justify-content-center icc">
                <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617186328/dd_orrufu.png"></img>
              </div>
              <div className="d-flex justify-content-center">
                <h3 className="pays">Mercado pago</h3>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" className="lableee">
                  Número de tarjeta
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Ingrese número de tarjeta"
                />
              </div>
              <div className="">
                <div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lableeee">
                      Documento
                    </label>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex qas">
                      <div className="select">
                        <Select
                          options={document}
                          placeholder="CURP"
                          styles={colourStyles}
                        />
                      </div>
                      <input
                        type="text"
                        class="form-controls"
                        id="exampleInputPassword1"
                        placeholder="Seleccione su documento"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lableeee">
                      Fecha de vencimeinto
                    </label>
                  </div>
                  <div className="">
                    <div className="d-flex qas">
                      <input
                        type="text"
                        class="form-controlss"
                        id="exampleInputPassword1"
                        placeholder="MM/AA"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lableeee">
                      Titular
                    </label>
                  </div>
                  <div className="">
                    <div className="d-flex qas">
                      <input
                        type="text"
                        class="form-controlS"
                        id="exampleInputPassword1"
                        placeholder="Ingrese su nombre"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lableeee">
                      Código de seguridad
                    </label>
                  </div>
                  <div className="">
                    <div className=" qas">
                      <input
                        type="text"
                        class="form-controlS"
                        id="exampleInputPassword1"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="below__buttons">
            <p className="REGISTRARME3" onClick={incnumber}>
              CONTINUAR
            </p>
          </div>
        </div>
      );
    } else if (number === 2) {
      return (
        <div>
          <div className="form__container3">
            <h2 className="direction">Resumen de pedido</h2>
            {cartbyid.item.cartItems.map((cart) => {
              return (
                <div className="d-flex">
                  <div className="product_in_cart">
                    <img
                      src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1616997221/table_zuilkb.png"
                      className="cart__image"
                    ></img>
                    <div>
                      <h3 className="cart__title">{cart.product.name}</h3>
                      <p className="cart__desc">{cart.product.description}</p>
                      <div className="d-flex">
                        <p className="color__title">Color</p>
                        <p
                          className="cart__color"
                          style={{ backgroundColor: `${cart.product.color}` }}
                        ></p>
                      </div>
                      <div className="d-flex">
                        <p className="cart__quantity">Cantidad</p>
                        <p className="minus">
                          <AiOutlineMinus />
                        </p>
                        <p className="quantityaa">{cart.quantity}</p>
                        <p className="minus2">
                          <BsPlus />
                        </p>
                        <h2 className="total">Monto</h2>
                        <p className="total--price">${cart.price}</p>
                      </div>
                    </div>
                    <p
                      className="del"
                      onClick={() => handleremove(cart._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <RiDeleteBin6Line />
                    </p>
                  </div>
                </div>
              );
            })}
            <p className="Monto__total">Monto total</p>
            <p className="prr">${cartbyid.total}</p>
          </div>
          <div className="below__buttons">
            <p
              className="REGISTRARME4"
              onClick={handlecoco}
              style={{ cursor: "pointer" }}
            >
              COMPRAR
            </p>
          </div>
        </div>
      );
    }
  };
  return confirm === 0 ? (
    <div className="container-fluid m-0 p-0">
      <div className="laoro">
        <div className="checkout_modal ">
          <div className="d-flex justify-content-center">
            <h2 className="checout__title">Checkout</h2>
          </div>
          <div className="contAINE">
            <div className="d-flex justify-content-around">
              <div className="d-flex numberinng__div justify-content-around">
                <p className={number >= 0 ? "numbering activa2" : "numbering "}>
                  1
                </p>
                <h2 className={number >= 0 ? "number1 activa" : "number1 "}>
                  Datos personales
                </h2>
              </div>
              <div className="lines"></div>
              <div className="d-flex numberinng__div2">
                <p className={number >= 1 ? "numbering activa2" : "numbering "}>
                  2
                </p>
                <h2 className={number >= 1 ? "number1 activa" : "number1"}>
                  Método de pago
                </h2>
              </div>
              <div className="lines"></div>
              <div className="d-flex numberinng__div2">
                <p className={number >= 2 ? "numbering activa2" : "numbering "}>
                  3
                </p>
                <h2 className={number >= 2 ? "number1 activa" : "number1"}>
                  Dirección
                </h2>
              </div>
            </div>
          </div>
          {Condition()}
        </div>
      </div>
    </div>
  ) : confirm === 1 ? (
    <div className="d-flex justify-content-center">
      <div className="ok__mainsss">
        <div className="d-flex justify-content-center">
          <p className="ok__confirmed">
            <GiConfirmed />
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="ok__text">¡{Cid ? Cid.name : "John"}! Tu compra se </p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="ok__text" style={{ marginTop: "-11px" }}>
            realizó con éxito
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p
            className="ver__sumer"
            style={{ cursor: "pointer" }}
            onClick={() => setconfirm(confirm + 1)}
          >
            ver resumen
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p
            className="ok__continue"
            style={{ cursor: "pointer" }}
            onClick={() => setconfirm(confirm + 1)}
          >
            CONTINUAR
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center">
      <div className="mobile__hot">
        <div className="d-flex justify-content-center">
          <p className="mobile__header">¡John! Esto podria interesarte</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="mobile__pic">
            <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618350168/sssa_fkfudm.png"></img>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p className="mobile__hot__name">Escritorio Montessori</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="mobile__hot__price">$999</p>
        </div>
        <div className="d-flex justify-content-center">
          <a href="/shop" className="hot__link">
            AGREGAR
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <a href="/shop" className="mobile__saltar">
            SALTAR
          </a>
        </div>
      </div>
    </div>
  );
}

export default Check;
