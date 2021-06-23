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
import { NavLink } from "react-router-dom";
import { payit } from "../actions/payment";
import CreditCardInput from "react-credit-card-input";

function Checkout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [number, setnumber] = useState(props.numberState);
  const [name, setname] = useState(user ? user.name : "");
  const [surname, setsurname] = useState(user ? user.surname : "");
  const [shipping_Address, setshipping_Address] = useState(
    user ? user.shipping_Address : ""
  );
  const [streetnumber, setstreetnumber] = useState(
    user ? user.streetnumber : ""
  );
  const [postalcode, setpostalcode] = useState(user ? user.postalcode : "");
  const [phonenumber, setphonenumber] = useState(
    user ? (user.phone ? user.phone : "") : ""
  );
  const [town, settown] = useState(user ? (user.town ? user.town : "") : "");
  const [condition, setcondition] = useState(
    user ? (user.town ? user.town : "") : ""
  );
  const [email, setemail] = useState(user ? user.email : "");
  const [message, setmessage] = useState();
  const [cardholderName, setcardholderName] = useState();
  const [expire, setexpire] = useState();
  const [cardNumber, setnumbr] = useState("");
  const [securityCode, setsecurityCode] = useState();
  const [paymentmethod, setpaymentMethod] = useState();
  const [card_token, setcardtoken] = useState();
  const [confirm, setconfirm] = useState(0);
  const [mes, setmes] = useState();
  const Cid = JSON.parse(localStorage.getItem("user"));
  const [removed, setremoved] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  let date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  let product__id = "607753842aa7744730ec00e7";

  date = dd + "-" + mm + "-" + yyyy;
  let month;
  if (mm === "01") {
    month = "enero";
  } else if (mm === "02") {
    month = "febrero";
  } else if (mm === "03") {
    month = "marzo";
  } else if (mm === "04") {
    month = "abril";
  } else if (mm === "05") {
    month = "mayo";
  } else if (mm === "06") {
    month = "junio";
  } else if (mm === "07") {
    month = "julio";
  } else if (mm === "08") {
    month = "agosto";
  } else if ((mm = "09")) {
    month = "septiembre";
  } else if (mm === "10") {
    month = "octubre";
  } else if (mm === "11") {
    month = "noviembre";
  } else if (month === "12") {
    month = "diciembre";
  }
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

  const cartbyid = useSelector((state) => state.cartbyid);
  const amountpayed = cartbyid.total;
  let products;
  if (token) {
    products = cartbyid.item.cartItems.map((cat) => {
      return {
        product: cat.product._id,
        quantity: cat.quantity,
        price: cat.price,
        name: cat.product.name,
        category: cartbyid.category.map((cats) => {
          if (cats._id === cat.product.category) {
            return cats.name;
          }
        }),
      };
    });
  }
  console.log(products);
  const document = [
    {
      value: "CURP",
      label: "CURP",
    },
  ];
  const incnumber = () => {
    setnumber(number + 1);
  };

  useEffect(() => {}, []);

  //payment method

  if (window.Mercadopago) {
    window.Mercadopago.setPublishableKey(
      "TEST-a54eaa27-330b-4060-870a-349b748bf1ef"
    );
  }
  let cardExpirationMonth;
  let cardExpirationYear;
  let ex;
  if (expire) {
    ex = expire.split("/");
    cardExpirationMonth = ex[0];
    cardExpirationYear = ex[1];
    console.log(cardExpirationMonth, cardExpirationYear);
  }

  const pay = (e) => {
    if (
      !cardholderName ||
      !cardNumber ||
      !cardExpirationMonth ||
      !cardExpirationYear ||
      !securityCode
    ) {
      alert("Todos los campos son obligatorios");
    } else {
      window.Mercadopago.createToken(
        {
          cardholderName,
          cardNumber,
          cardExpirationMonth,
          cardExpirationYear,
          securityCode,
          paymentmethod,
        },
        setCardTokenAndPay
      );
    }
  };
  function setCardTokenAndPay(status, response) {
    if (status == 200 || status == 201) {
      setcardtoken(response.id);
      console.log(response.id);
      if (response.id) {
        setcardtoken(response.id);
        setnumber(2);
      } else {
        alert("hay algún problema con los datos de pago");
      }
    } else {
      alert("Verify filled data!\n" + JSON.stringify(response, null, 4));
    }
  }
  const paynow = (id) => {
    const items = {
      amountpayed,
      paymentmethod,
      card_token,
      email,
    };
    dispatch(payit(items)).then((res) => {});
  };
  const handleit = (e) => {
    setnumbr(e);
    guessPaymentMethod();
  };

  let cardnumber;
  function guessPaymentMethod(event) {
    if (cardNumber.length > 0) {
      cardnumber = cardNumber;
      if (cardnumber.length >= 6) {
        let bin = cardnumber.substring(0, 7);
        window.Mercadopago.getPaymentMethod(
          {
            bin: bin,
          },
          setPaymentMethod
        );
      }
    }
  }

  function setPaymentMethod(status, response) {
    if (status == 200) {
      let paymentMethod = response[0];

      setpaymentMethod(paymentMethod.id);
    } else {
      alert(`payment method info error: ${response}`);
    }
  }

  const paye = useSelector((state) => state.paye);
  var d = new Date();
  var n = d.getDay();
  console.log(n);

  if (paye.message === "verified") {
    window.scrollTo(0, 0);
    const items = {
      name,
      surname,
      email,
      shipping_Address,
      number: phonenumber,
      streetnumber,
      postalcode,
      amountpayed,
      cart: Cid,
      products,
      date,
      paymentmethod: "mecardo pago",
      day: n,
      month: month,
      town,
      condition,
    };
    dispatch(addord(items)).then((res) => {
      paye.message = "";
      setconfirm(1);
    });
  } else if (paye.message === "se produjo un error en el pago") {
    alert("se produjo un error en el pago");
    paye.message = "";
    setnumber(1);
  }
  const handleChange = (text) => {
    let textTemp = text;
    if (textTemp[0] !== "1" && textTemp[0] !== "0") {
      textTemp = "";
    }
    if (textTemp.length === 2) {
      if (
        parseInt(textTemp.substring(0, 2)) > 12 ||
        parseInt(textTemp.substring(0, 2)) == 0
      ) {
        textTemp = textTemp[0];
      } else if (text.length === 2) {
        textTemp += "/";
      } else {
        textTemp = textTemp[0];
      }
    }
    console.log(textTemp);
    setexpire(textTemp);
  };

  const Condition = () => {
    if (number == 0) {
      return (
        <div>
          <div className="form__container">
            <div>
              <h2 className="form__title">Ingresa tus datos personales</h2>
              <p
                className="form_ok"
                onClick={incnumber}
                style={{ cursor: "pointer" }}
              >
                INGRESAR
              </p>
              <form>
                <div className="d-flex">
                  <div className="actual__form">
                    <div class="form-group">
                      <label for="exampleInputEmail1" className="lablee">
                        Nombre
                      </label>
                      <input
                        type="text"
                        class="form-control"
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
                        placeholder="Seleccione su Dirección"
                        value={shipping_Address}
                        onChange={(e) => setshipping_Address(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lablee">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ingrese Ciudad"
                        value={town}
                        onChange={(e) => settown(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="actual__form">
                    <div class="form-group">
                      <label for="exampleInputEmail1" className="lablee">
                        Apellido
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese su apellido"
                        value={surname}
                        onChange={(e) => setsurname(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lablee">
                        Calle y Número
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ingrese calle y número"
                        value={streetnumber}
                        onChange={(e) => setstreetnumber(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lablee">
                        Estado
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ingrese Estado"
                        value={condition}
                        onChange={(e) => setcondition(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="emailo">
                  <div class="form-group">
                    <label for="exampleInputPassword1" className="lablee">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Ingrese su Teléfono"
                      value={phonenumber}
                      onChange={(e) => setphonenumber(e.target.value)}
                      style={{ marginBottom: "20px" }}
                    />
                  </div>
                </div>
              </form>
              {message ? (
                <div class="alert alert-danger" role="alert">
                  {message}
                </div>
              ) : null}
            </div>
          </div>

          <div className="below__buttons">
            <p
              className="REGISTRARME2"
              onClick={incnumber}
              style={{ cursor: "pointer" }}
            >
              CONTINUAR
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
              <h3 className="pays">Mercado pago</h3>
              <div class="form-group">
                <label for="exampleInputPassword1" className="lableee">
                  Número de tarjeta
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Ingrese número de tarjeta"
                  onChange={(e) => handleit(e.target.value)}
                  onPaste={(e) => handleit(e.clipboardData.getData("Text"))}
                />
              </div>
              <div>
                <div class="form-group">
                  <label for="exampleInputPassword1" className="lableeee">
                    Titular
                  </label>
                </div>
                <div className="d-flex">
                  <div className="d-flex qas">
                    <input
                      type="text"
                      className="form-controlSS"
                      id="exampleInputPassword1"
                      placeholder="Ingrese su nombre"
                      value={cardholderName}
                      onChange={(e) => setcardholderName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lableeee">
                        Fecha de vencimeinto
                      </label>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex qas">
                        <input
                          keyboardType={"numeric"}
                          type="text"
                          class="form-controlss"
                          id="exampleInputPassword1"
                          placeholder="MM/YY"
                          value={expire}
                          onChange={(e) => handleChange(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="form-group">
                      <label for="exampleInputPassword1" className="lableeee">
                        Código de seguridad
                      </label>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex qas">
                        <input
                          type="text"
                          class="form-controlS"
                          id="exampleInputPassword1"
                          placeholder="CVV"
                          value={securityCode}
                          onChange={(e) => setsecurityCode(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="below__buttons">
            <p
              className="REGISTRARME3"
              onClick={pay}
              style={{ cursor: "pointer" }}
            >
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
              className="REGISTRARME3"
              style={{ cursor: "pointer", textDecoration: "none" }}
              onClick={paynow}
            >
              COMPRAR
            </p>
          </div>
        </div>
      );
    }
  };
  const handleremoval = () => {
    window.location.reload();
  };
  return confirm === 0 ? (
    <div className="d-flex justify-content-center">
      <div
        className={
          props.classstate === 0 ? "checkout_modal " : "checkout_modal active"
        }
      >
        <div className="d-flex justify-content-center">
          <h2 className="checout__title">Checkout</h2>
        </div>
        <div className="contAINE">
          <div
            className="d-flex justify-content-around"
            style={{ marginRight: "100px" }}
          >
            <div className="d-flex numberinng__div">
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
  ) : confirm === 1 ? (
    <div className="d-flex justify-content-center">
      <div className="confirmation__model">
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <p className="confirmed">
            <GiConfirmed />
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="text__div">
            ¡{name}! Tu compra se realizó con éxito
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "10px" }}
        >
          <p
            className="ver"
            onClick={() => {
              setconfirm(2);
            }}
            style={{ cursor: "pointer", fontSize: "20px" }}
          >
            ver resumen
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="button__div">
            <p
              className="button__text"
              onClick={() => {
                setconfirm(2);
              }}
              style={{ cursor: "pointer" }}
            >
              CONTINUAR
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : confirm === 2 ? (
    <div className="d-flex justify-content-center">
      <div className="intnrest">
        <div className="d-flex justify-content-center">
          <p className="interest__header">¡{name}! Esto podría interesarte.</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="image__div">
            <img
              src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617738245/desk_urbkuu.png"
              alt="sass"
              className="hot__image"
            ></img>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p className="hot__name">Escritorio Montessori</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="hot__price">$999</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="but__div">
            <a className="but" href={`/product/${product__id}`}>
              AGREGAR
            </a>
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "20px" }}
        >
          {window.location.pathname === "/shop" ? (
            <a className="but__2" href="/shop">
              SALTAR
            </a>
          ) : (
            <p className="but__2" onClick={handleremoval}>
              SALTAR
            </p>
          )}
        </div>
      </div>
    </div>
  ) : null;
}

export default Checkout;
