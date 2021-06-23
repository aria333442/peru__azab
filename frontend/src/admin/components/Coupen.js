import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import "../css/Coupen.scss";
import Sidebar from "./Sidebar";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getcat } from "../../actions/getcategory";
import { getprod } from "../../actions/getproducts";
import DatePicker from "react-date-picker";
import { createcoup } from "../actions/createcoupon";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { NavLink, useHistory } from "react-router-dom";

function Coupen() {
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
  const [select, setselect] = useState();
  const [category, setcategory] = useState();
  const [category2, setcategory2] = useState();
  const [product, setproduct] = useState();
  const [start, setstart] = useState(new Date());
  const [end, setend] = useState(new Date());
  const [name, setname] = useState();
  const [discount, setdiscount] = useState();
  const handlechange = (event) => {
    setselect(event.target.value);
  };
  useEffect(() => {
    dispatch(getcat());
    dispatch(getprod([]));
  }, []);
  const getcategory = useSelector((state) => state.getcategory);
  const getproducts = useSelector((state) => state.getproducts);
  const options = getcategory.category.map((cat) => {
    return {
      value: cat._id,
      label: cat.name,
    };
  });
  const options2 = [];
  if (category2) {
    getproducts.products.map((pro) => {
      if (pro.category._id === category2.value) {
        options2.push({
          value: pro._id,
          label: pro.name,
        });
      }
    });
  }
  const setcoupon = () => {
    if (select === "all") {
      const item = {
        name,
        discount,
        start,
        end,
        all: "all",
      };
      dispatch(createcoup(item)).then((res) => {
        alert("created");
        window.location.reload();
      });
    } else if (select === "category") {
      const item = {
        name,
        discount,
        start,
        end,
        category: category.value,
      };
      dispatch(createcoup(item)).then((res) => {
        alert("created");
        window.location.reload();
      });
    } else if (select === "product") {
      const item = {
        name,
        discount,
        start,
        end,
        product: product.value,
      };
      dispatch(createcoup(item)).then((res) => {
        alert("created");
        window.location.reload();
      });
    }
  };
  return (
    <div>
      <div className="ncpnmain">
        <div className="ncpnleft">
          <Sidebar />
        </div>
        <div className="ncpnright">
          <div className="ncpnhead">
            <div className="ncpntab">
              <div className="ncpnta">
                <p>Cupones</p>
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
          <div className="ncpnnue">
            <div className="ncpnsnueleft">
              <NavLink to="/admin/allcoupon" className="polla">
                <IoIosArrowDropleftCircle />
              </NavLink>
            </div>
            <div className="ncpnsnueright">
              <p>Nuevo cupón</p>
            </div>
          </div>
          <div className="bottom__main__div">
            <div>
              <p>Nombre de la campaÑa</p>
              <input
                placeholder="Nombre de la campaña"
                value={name}
                onChange={(e) => setname(e.target.value)}
              ></input>
            </div>
            <div>
              <p>descuento</p>
              <input
                placeholder="Numero"
                value={discount}
                onChange={(e) => setdiscount(e.target.value)}
              ></input>
            </div>
            <div>
              <p>alcance del cupón</p>
              <div className="d-flex">
                <input
                  type="radio"
                  className="check__input"
                  value="all"
                  onChange={handlechange}
                  name="gender"
                ></input>
                <label>TODOS LOS PRODUCTOS</label>
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  className="check__input"
                  value="category"
                  onChange={handlechange}
                  name="gender"
                ></input>
                <label>CATEGORÍA</label>
                {select === "category" ? (
                  <div style={{ width: "150px", marginLeft: "40px" }}>
                    <Select
                      options={options}
                      value={category}
                      onChange={setcategory}
                    ></Select>
                  </div>
                ) : null}
              </div>
              <div className="d-flex">
                <input
                  type="radio"
                  className="check__input"
                  value="product"
                  onChange={handlechange}
                  name="gender"
                ></input>
                <label>PRODUCTO</label>
                {select === "product" ? (
                  <div style={{ width: "150px", marginLeft: "40px" }}>
                    <Select
                      options={options}
                      value={category2}
                      onChange={setcategory2}
                    ></Select>
                  </div>
                ) : null}
                {category2 ? (
                  <div style={{ width: "150px", marginLeft: "40px" }}>
                    <Select
                      options={options2}
                      value={product}
                      onChange={setproduct}
                    ></Select>
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <p>fecha del descuento</p>
            </div>
            <div className="d-flex">
              <div>
                <p>inicio</p>
                <DatePicker onChange={setstart} value={start} />
              </div>
              <div>
                <p>final</p>
                <DatePicker onChange={setend} value={end} />
              </div>
            </div>
            <div>
              <p onClick={setcoupon}>agregar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupen;
