import React, { useState, useEffect } from "react";
import AllProduct from "./AllProduct";
import { background } from "./Background";
import SideBox from "./SideBox";
import "../css/_shop.scss";
import Nav from "../components/Nav";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import TreeItem from "@material-ui/lab/TreeItem";
import { Button, Checkbox } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "../css/_sidebox.scss";
import { useDispatch, useSelector } from "react-redux";
import { getcat } from "../actions";
import Checkoutmodal from "./Checkout";
import { getsubcat } from "../actions/getsubcategory";
import Media from "react-media";
import Helmet from "react-helmet";
import { FaFilter } from "react-icons/fa";
const useStyles = makeStyles({
  root: {
    Height: 240,
    flexGrow: 1,
    maxWidth: 100,
    flexDirection: "row-reverse",
  },
});
const Shop = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [query, setquery] = useState();
  const [checkout, setcheckout] = useState(0);
  const [formstates, setformstates] = useState(0);
  const handlecheck = (check) => {
    setcheckout(check);
  };
  setTimeout(() => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, 5000);
  useEffect(() => {
    dispatch(getcat());
    dispatch(getsubcat());
  }, []);
  const getcategory = useSelector((state) => state.getcategory);
  const getsubcategory = useSelector((state) => state.getsubcategory);

  const classes = useStyles();
  const [minimum, setminimum] = useState();
  const [maximum, setmaximum] = useState();
  const [checked, setChecked] = useState([]);
  const [category, setcategory] = useState("Muebles");
  const [color, setcolors] = useState();
  useEffect(() => {
    dispatch(getcat());
    dispatch(getsubcat());
  }, []);

  const handleChange = (id) => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  console.log(color);
  const colors = ["brown", "black", "blue", "gray"];

  return (
    <div className="lols">
      <Helmet>
        <title>Armea/shop</title>
        <meta name="description" content="consuelo que deseas" />
        <meta
          name="keywords"
          content="SUEÑA,CREA,VIVE,Muebles,Deccoracion,Ninos"
        />
      </Helmet>
      <div
        className={
          checkout == 0
            ? "container-fluid m-0 p-0"
            : "container-fluid m-0 p-0 civic"
        }
      >
        <div className="shop">
          <Nav handlecheck={(check) => handlecheck(check)} />
          <div
            className="shop__banner"
            style={{ backgroundImage: `url(${background[count].img})` }}
          >
            <div>
              <h2>{background[count].text}</h2>
            </div>
          </div>
          <div className="shop__head">
            <h2>Tienda de</h2>
            <h2 className="cat">{category}</h2>
          </div>
          <Media query="(max-width:767px)">
            {(matches) => {
              return matches ? (
                <div className="" style={{ width: "100%" }}>
                  <Media query="(max-width:767px)">
                    {(matches) => {
                      return matches ? (
                        <div className="shop__top__div__bottom">
                          <div>
                            <input
                              type="text"
                              placeholder="¿Qué buscas?"
                              value={query}
                              onChange={(e) => setquery(e.target.value)}
                            />
                            <p>
                              <SearchIcon></SearchIcon>
                            </p>
                          </div>
                          <div>
                            <p>
                              <FaFilter />
                            </p>
                            <p>FILTROS</p>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="d-flex justify-content-center SASSO"
                          style={{ width: "20%" }}
                        >
                          <div className="sideBox">
                            <div className="sideBox__top">
                              <h2>Buscar</h2>
                              <div>
                                <input
                                  type="text"
                                  placeholder="¿Qué buscas?"
                                  value={query}
                                  onChange={(e) => setquery(e.target.value)}
                                />
                                <SearchIcon></SearchIcon>
                              </div>
                            </div>
                            <div className="sideBox__range">
                              <h2>Rango de Precio</h2>
                              <div>
                                <div>
                                  <p>Mínimo</p>
                                  <div>
                                    <p
                                      style={{
                                        marginTop: "15px",
                                        marginRight: "1px",
                                      }}
                                    >
                                      $
                                    </p>
                                    <input
                                      type="text"
                                      placeholder="549"
                                      value={minimum}
                                      onChange={(e) =>
                                        setminimum(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div>
                                  <p>Máximo</p>
                                  <div>
                                    <p
                                      style={{
                                        marginTop: "15px",
                                        marginRight: "1px",
                                      }}
                                    >
                                      $
                                    </p>
                                    <input
                                      type="text"
                                      placeholder="549"
                                      value={maximum}
                                      onChange={(e) =>
                                        setmaximum(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h2 className="h2">Categoría</h2>
                              <TreeView
                                className={classes.root}
                                defaultCollapseIcon={
                                  <ExpandLessIcon></ExpandLessIcon>
                                }
                                defaultExpandIcon={<ExpandMoreIcon />}
                              >
                                {getcategory.category.map((cat, index) => {
                                  return (
                                    <TreeItem
                                      nodeId={index}
                                      label={cat.name}
                                      onClick={() => setcategory(cat.name)}
                                    >
                                      {getsubcategory.subcategory.map(
                                        (subcat, index) => {
                                          if (
                                            subcat.category.name === cat.name
                                          ) {
                                            return (
                                              <div className="checkBox__container">
                                                <Checkbox
                                                  checked={
                                                    checked.indexOf(
                                                      subcat._id
                                                    ) === -1
                                                      ? false
                                                      : true
                                                  }
                                                  onChange={() =>
                                                    handleChange(subcat._id)
                                                  }
                                                  inputProps={{
                                                    "aria-label":
                                                      "primary checkbox",
                                                  }}
                                                />
                                                <p>{subcat.name}</p>
                                              </div>
                                            );
                                          }
                                        }
                                      )}
                                    </TreeItem>
                                  );
                                })}
                              </TreeView>
                            </div>
                            <div className="sideBox__colorCheck">
                              <h2 className="h2">Color</h2>
                              <div>
                                <div className="d-flex justify-content-around">
                                  {colors.map((col) => {
                                    if (color === col) {
                                      return (
                                        <div>
                                          <p
                                            className="colo"
                                            style={{
                                              backgroundColor: `${col}`,
                                              cursor: "pointer",
                                            }}
                                            onClick={() => setcolors(col)}
                                          ></p>
                                          <p className="colos2"></p>
                                        </div>
                                      );
                                    } else {
                                      return (
                                        <div>
                                          <p
                                            className="colo"
                                            style={{
                                              backgroundColor: `${col}`,
                                              cursor: "pointer",
                                            }}
                                            onClick={() => setcolors(col)}
                                          ></p>
                                          <p className="colos"></p>
                                        </div>
                                      );
                                    }
                                  })}
                                  <p
                                    onClick={() => setcolors("")}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Todos
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }}
                  </Media>
                  <Media query="(max-width:767px)">
                    {(matches) => {
                      return matches ? (
                        <div style={{ width: "100%" }}>
                          <AllProduct
                            lowerlimit={minimum}
                            upperlimit={maximum}
                            selectcategory={category}
                            selectsubcategory={checked}
                            selectcolor={color}
                            search={query}
                          ></AllProduct>
                        </div>
                      ) : (
                        <div style={{ width: "80%" }}>
                          <AllProduct
                            lowerlimit={minimum}
                            upperlimit={maximum}
                            selectcategory={category}
                            selectsubcategory={checked}
                            selectcolor={color}
                            search={query}
                          ></AllProduct>
                        </div>
                      );
                    }}
                  </Media>
                </div>
              ) : (
                <div
                  className="d-flex justify-content-center"
                  style={{ width: "100%" }}
                >
                  <Media query="(max-width:767px)">
                    {(matches) => {
                      return matches ? (
                        <div className="shop__top__div__bottom">
                          <div>
                            <input
                              type="text"
                              placeholder="¿Qué buscas?"
                              value={query}
                              onChange={(e) => setquery(e.target.value)}
                            />
                            <p>
                              <SearchIcon></SearchIcon>
                            </p>
                          </div>
                          <div>
                            <p>
                              <FaFilter />
                            </p>
                            <p>FILTROS</p>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="d-flex justify-content-center SASSO"
                          style={{ width: "20%" }}
                        >
                          <div className="sideBox">
                            <div className="sideBox__top">
                              <h2>Buscar</h2>
                              <div>
                                <input
                                  type="text"
                                  placeholder="¿Qué buscas?"
                                  value={query}
                                  onChange={(e) => setquery(e.target.value)}
                                />
                                <SearchIcon></SearchIcon>
                              </div>
                            </div>
                            <div className="sideBox__range">
                              <h2>Rango de Precio</h2>
                              <div>
                                <div>
                                  <p>Mínimo</p>
                                  <div>
                                    <p
                                      style={{
                                        marginTop: "15px",
                                        marginRight: "1px",
                                      }}
                                    >
                                      $
                                    </p>
                                    <input
                                      type="text"
                                      placeholder="549"
                                      value={minimum}
                                      onChange={(e) =>
                                        setminimum(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div>
                                  <p>Máximo</p>
                                  <div>
                                    <p
                                      style={{
                                        marginTop: "15px",
                                        marginRight: "1px",
                                      }}
                                    >
                                      $
                                    </p>
                                    <input
                                      type="text"
                                      placeholder="549"
                                      value={maximum}
                                      onChange={(e) =>
                                        setmaximum(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h2 className="h2">Categoría</h2>
                              <TreeView
                                className={classes.root}
                                defaultCollapseIcon={
                                  <ExpandLessIcon></ExpandLessIcon>
                                }
                                defaultExpandIcon={<ExpandMoreIcon />}
                              >
                                {getcategory.category.map((cat, index) => {
                                  return (
                                    <TreeItem
                                      nodeId={index}
                                      label={cat.name}
                                      onClick={() => setcategory(cat.name)}
                                    >
                                      {getsubcategory.subcategory.map(
                                        (subcat, index) => {
                                          if (
                                            subcat.category.name === cat.name
                                          ) {
                                            return (
                                              <div className="checkBox__container">
                                                <Checkbox
                                                  checked={
                                                    checked.indexOf(
                                                      subcat._id
                                                    ) === -1
                                                      ? false
                                                      : true
                                                  }
                                                  onChange={() =>
                                                    handleChange(subcat._id)
                                                  }
                                                  inputProps={{
                                                    "aria-label":
                                                      "primary checkbox",
                                                  }}
                                                />
                                                <p>{subcat.name}</p>
                                              </div>
                                            );
                                          }
                                        }
                                      )}
                                    </TreeItem>
                                  );
                                })}
                              </TreeView>
                            </div>
                            <div className="sideBox__colorCheck">
                              <h2 className="h2">Color</h2>
                              <div>
                                <div className="d-flex justify-content-around">
                                  {colors.map((col) => {
                                    if (color === col) {
                                      return (
                                        <div>
                                          <p
                                            className="colo"
                                            style={{
                                              backgroundColor: `${col}`,
                                              cursor: "pointer",
                                            }}
                                            onClick={() => setcolors(col)}
                                          ></p>
                                          <p className="colos2"></p>
                                        </div>
                                      );
                                    } else {
                                      return (
                                        <div>
                                          <p
                                            className="colo"
                                            style={{
                                              backgroundColor: `${col}`,
                                              cursor: "pointer",
                                            }}
                                            onClick={() => setcolors(col)}
                                          ></p>
                                          <p className="colos"></p>
                                        </div>
                                      );
                                    }
                                  })}
                                  <p
                                    onClick={() => setcolors("")}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Todos
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }}
                  </Media>
                  <Media query="(max-width:767px)">
                    {(matches) => {
                      return matches ? (
                        <div style={{ width: "100%" }}>
                          <AllProduct
                            lowerlimit={minimum}
                            upperlimit={maximum}
                            selectcategory={category}
                            selectsubcategory={checked}
                            selectcolor={color}
                            search={query}
                          ></AllProduct>
                        </div>
                      ) : (
                        <div style={{ width: "80%" }}>
                          <AllProduct
                            lowerlimit={minimum}
                            upperlimit={maximum}
                            selectcategory={category}
                            selectsubcategory={checked}
                            selectcolor={color}
                            search={query}
                          ></AllProduct>
                        </div>
                      );
                    }}
                  </Media>
                </div>
              );
            }}
          </Media>

          <Footer />
        </div>
      </div>
      <Checkoutmodal classstate={checkout} numberState={formstates} />
    </div>
  );
};

export default Shop;
