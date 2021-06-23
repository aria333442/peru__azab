import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import "../css/Reportes.scss";
import Sidebar from "./Sidebar";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { getcat } from "../../actions/getcategory";
import { useDispatch, useSelector } from "react-redux";
import { getprod } from "../../actions/getproducts";
import Paginate from "react-paginate";
import { getreport } from "../actions/getreports";
import { useHistory } from "react-router";

function Reportes() {
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
  const [pagenumber, setpagenumber] = useState(0);
  const worksperpage = 4;
  const pagesvisited = pagenumber * worksperpage;
  const [category, setcategory] = useState();
  const [month, setmonth] = useState();
  const [product, setproduct] = useState();
  const [start, setstart] = useState();
  const [end, setend] = useState();
  const dateit = (e, picker) => {
    let sasa = JSON.stringify(picker.startDate._d);
    let date = sasa.substr(1, 10).split("-").reverse();
    let starts = date.join("-");
    let sassa = JSON.stringify(picker.endDate._d);
    let datee = sassa.substr(1, 10).split("-").reverse();
    let ends = datee.join("-");
    setstart(starts);
    setend(ends);
    const item = {
      start,
      end,
    };
    dispatch(getreport(item));
  };
  useEffect(() => {
    dispatch(getcat());
    dispatch(getprod([]));
    dispatch(getreport());
  }, []);
  useEffect(() => {
    if (category) {
      const item = {
        category: category.label,
      };
      dispatch(getreport(item));
    }
  }, [category]);
  useEffect(() => {
    if (month) {
      const item = {
        month: month.label,
      };
      dispatch(getreport(item));
    }
  }, [month]);
  useEffect(() => {
    if (product) {
      const item = {
        product: product.label,
      };
      dispatch(getreport(item));
    }
  }, [product]);
  const getcategory = useSelector((state) => state.getcategory);
  const getproducts = useSelector((state) => state.getproducts);
  const getRep = useSelector((state) => state.getRep);
  const options = getcategory.category.map((cat) => {
    return {
      value: cat._id,
      label: cat.name,
    };
  });
  const options2 = [
    {
      value: "enero",
      label: "enero",
    },
    {
      value: "febrero",
      label: "febrero",
    },
    {
      value: "marzo",
      label: "marzo",
    },
    {
      value: "abril",
      label: "abril",
    },
    {
      value: "mayo",
      label: "mayo",
    },
    {
      value: "junio",
      label: "junio",
    },
    {
      value: "julio",
      label: "julio",
    },
    {
      value: "agosto",
      label: "agosto",
    },
    {
      value: "septiembre",
      label: "septiembre",
    },
    {
      value: "octubre",
      label: "octubre",
    },
    {
      value: "noviembre",
      label: "noviembre",
    },
    {
      value: "diciembre",
      label: "diciembre",
    },
  ];
  const option3 = getproducts.products.map((prod) => {
    return {
      value: prod._id,
      label: prod.name,
    };
  });
  const pageCount = Math.ceil(getRep.result.length / worksperpage);
  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const dispalyblogs = getRep.result
    .slice(pagesvisited, pagesvisited + worksperpage)
    .map((blog) => {
      return (
        <tr className="blgdettr">
          <td className="slqwe">{blog.month}</td>
          <td className="slqwe">00000</td>
          <td className="slqwe">{blog.quantity}</td>
          <td className="slqwe">{blog.name}</td>
          <td className="slqwe">{blog.price}$</td>
          <td className="slqwe">{blog.quantity}</td>
        </tr>
      );
    });
  return (
    <div>
      <div className="repmain">
        <div className="repleft">
          <Sidebar />
        </div>
        <div className="repright">
          <div className="rephead">
            <div className="reptabb">
              <div className="repta">
                <p>Reportes</p>
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
          <div className="repf">
            <div className="repfl">
              <div className="repford">
                <p className="repfordp">ordenar por:</p>
              </div>
              <div className="repfcat">
                <Select
                  placeholder="categoria"
                  options={options}
                  value={category}
                  onChange={setcategory}
                ></Select>
              </div>
              <div className="repfmes">
                <Select
                  placeholder="mes"
                  options={options2}
                  value={month}
                  onChange={setmonth}
                ></Select>
              </div>
              <div className="repfprd">
                <Select
                  placeholder="PRODUCTO"
                  options={option3}
                  value={product}
                  onChange={setproduct}
                ></Select>
              </div>
              <div className="repfrang">
                <DateRangePicker
                  onApply={(event, picker) => dateit(event, picker)}
                >
                  <button className="repfrangbt">RANGO FECHA</button>
                </DateRangePicker>
              </div>
            </div>
            <div className="repfr">
              <button className="repfrbt">DESCARGAR</button>
            </div>
          </div>

          <div className="blgdettabdiv">
            <div className="upperhalf">
              <table className="blgdettable">
                <tr className="">
                  <th className="slqwe">Mes</th>
                  <th className="slqwe">Sku</th>
                  <th className="slqwe">Categoría</th>
                  <th className="slqwe">Producto</th>
                  <th className="slqwe">Monto</th>
                  <th className="slqwe">Unidades</th>
                </tr>

                {dispalyblogs}
              </table>
            </div>
            <div className="paginate">
              <Paginate
                previousLabel={"<<"}
                nextLabel={">>"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reportes;
