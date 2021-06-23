import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Nav from "./Nav";
import "../css/blog.scss";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getblog } from "../actions/getblog";
import Media from "react-media";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";

function Presentacios() {
  const [blogcat, setblogCat] = useState("Todos");
  const dispatch = useDispatch();
  const blog__category = [
    "Todos",
    "Muebles",
    "Decoración",
    "Mascotas",
    "Niños",
  ];
  useEffect(() => {
    dispatch(getblog());
  }, []);
  const getB = useSelector((state) => state.getB);
  const handlecheck = () => {};
  return (
    <div>
      <Helmet>
        <title>Armea/blog</title>
        <meta
          name="description"
          content="información sobre el blog y los últimos productos"
        />
        <meta
          name="keywords"
          content="Muebles,
                Decoración,
               Mascotas,
               Ninos,
               Tu mascota y tu
               "
        />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="dd">
        <div className="prsabove">
          <img
            src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617795550/animation_bg_1_jv7atd.png"
            className="aboveimg"
            alt="bawa"
          ></img>
          <div className="absldiv">
            <p className="ablsdivpara">
              Bienvenido al <span className="abslparadiv">blog</span> de &nbsp;
              <span className="abslparadiv">Armea</span>
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <div className="presbtdiv">
            {blog__category.map((cat) => {
              if (cat === blogcat) {
                return (
                  <button
                    className="presbut active"
                    onClick={() => setblogCat(cat)}
                  >
                    {cat}
                  </button>
                );
              } else {
                return (
                  <button className="presbut" onClick={() => setblogCat(cat)}>
                    {cat}
                  </button>
                );
              }
            })}
          </div>
        </div>
        <div className="bahir_div">
          <div className="row m-0 p-0">
            <Media query="(min-width:1300px)">
              {(matches) => {
                return matches
                  ? getB.blog.slice(0, 9).map((blog) => {
                      if (blogcat === "Todos") {
                        return (
                          <div className="col-4 xx mb-4 pr-3  p-0">
                            <div className="presfirst">
                              <div className="presphsub">
                                <img
                                  src={blog.blogImage}
                                  className="image"
                                  alt="bawa"
                                ></img>
                              </div>
                              <h3 className="presehead">{blog.title}</h3>
                              <p className="presehead2">
                                {blog.description.substring(0, 100)}
                              </p>
                              <div className="presicon">
                                <p className="presparaico">
                                  <FaRegCalendarAlt />
                                </p>
                                <p className="presparaicoo">{blog.date}</p>
                                <p className="presparaus">
                                  <AiOutlineUser />
                                </p>
                                <p className="presparauss">{blog.aurthor}</p>
                              </div>
                              <NavLink to={`/blog/${blog._id}`}>
                                <button className="presentbutt">
                                  LEER MÁS
                                </button>
                              </NavLink>
                            </div>
                          </div>
                        );
                      } else if (blogcat !== "Todos") {
                        if (blog.blogcategory === blogcat) {
                          return (
                            <div className="col-4 xx mb-4 pr-3  p-0">
                              <div className="presfirst">
                                <div className="presphsub">
                                  <img
                                    src={blog.blogImage}
                                    className="image"
                                    alt="bawa"
                                  ></img>
                                </div>
                                <h3 className="presehead">{blog.title}</h3>
                                <p className="presehead2">
                                  {blog.description.substring(0, 100)}
                                </p>
                                <div className="presicon">
                                  <p className="presparaico">
                                    <FaRegCalendarAlt />
                                  </p>
                                  <p className="presparaicoo">{blog.date}</p>
                                  <p className="presparaus">
                                    <AiOutlineUser />
                                  </p>
                                  <p className="presparauss">{blog.aurthor}</p>
                                </div>
                                <NavLink to={`/blog/${blog._id}`}>
                                  <button className="presentbutt">
                                    LEER MÁS
                                  </button>
                                </NavLink>
                              </div>
                            </div>
                          );
                        }
                      }
                    })
                  : null;
              }}
            </Media>
            <Media query="(min-width:768px) and (max-width:1299px)">
              {(matches) => {
                return matches
                  ? getB.blog.slice(0, 9).map((blog) => {
                      if (blogcat === "Todos") {
                        return (
                          <div className="col-6 xx mb-4 pr-3  p-0">
                            <div className="presfirst">
                              <div className="presphsub">
                                <img
                                  src={blog.blogImage}
                                  className="image"
                                  alt="bawa"
                                ></img>
                              </div>
                              <h3 className="presehead">{blog.title}</h3>
                              <p className="presehead2">
                                {blog.description.substring(0, 100)}
                              </p>
                              <div className="presicon">
                                <p className="presparaico">
                                  <FaRegCalendarAlt />
                                </p>
                                <p className="presparaicoo">{blog.date}</p>
                                <p className="presparaus">
                                  <AiOutlineUser />
                                </p>
                                <p className="presparauss">{blog.aurthor}</p>
                              </div>
                              <NavLink to={`/blog/${blog._id}`}>
                                <button className="presentbutt">
                                  LEER MÁS
                                </button>
                              </NavLink>
                            </div>
                          </div>
                        );
                      } else if (blogcat !== "Todos") {
                        if (blog.blogcategory === blogcat) {
                          return (
                            <div className="col-6 xx mb-4 pr-3  p-0">
                              <div className="presfirst">
                                <div className="presphsub">
                                  <img
                                    src={blog.blogImage}
                                    className="image"
                                    alt="bawa"
                                  ></img>
                                </div>
                                <h3 className="presehead">{blog.title}</h3>
                                <p className="presehead2">
                                  {blog.description.substring(0, 100)}
                                </p>
                                <div className="presicon">
                                  <p className="presparaico">
                                    <FaRegCalendarAlt />
                                  </p>
                                  <p className="presparaicoo">{blog.date}</p>
                                  <p className="presparaus">
                                    <AiOutlineUser />
                                  </p>
                                  <p className="presparauss">{blog.aurthor}</p>
                                </div>
                                <NavLink to={`/blog/${blog._id}`}>
                                  <button className="presentbutt">
                                    LEER MÁS
                                  </button>
                                </NavLink>
                              </div>
                            </div>
                          );
                        }
                      }
                    })
                  : null;
              }}
            </Media>
            <Media query="(max-width:767px)">
              {(matches) => {
                return matches
                  ? getB.blog.slice(0, 9).map((blog) => {
                      if (blogcat === "Todos") {
                        return (
                          <div className="col-12 xx mb-4 pr-3  p-0">
                            <div className="presfirst">
                              <div className="presphsub">
                                <img
                                  src={blog.blogImage}
                                  className="image"
                                  alt="bawa"
                                ></img>
                              </div>
                              <h3 className="presehead">{blog.title}</h3>
                              <p className="presehead2">
                                {blog.description.substring(0, 100)}
                              </p>
                              <div className="presicon">
                                <p className="presparaico">
                                  <FaRegCalendarAlt />
                                </p>
                                <p className="presparaicoo">{blog.date}</p>
                                <p className="presparaus">
                                  <AiOutlineUser />
                                </p>
                                <p className="presparauss">{blog.aurthor}</p>
                              </div>
                              <NavLink to={`/blog/${blog._id}`}>
                                <button className="presentbutt">
                                  LEER MÁS
                                </button>
                              </NavLink>
                            </div>
                          </div>
                        );
                      } else if (blogcat !== "Todos") {
                        if (blog.blogcategory === blogcat) {
                          return (
                            <div className="col-12 xx mb-4 pr-3  p-0">
                              <div className="presfirst">
                                <div className="presphsub">
                                  <img
                                    src={blog.blogImage}
                                    className="image"
                                    alt="bawa"
                                  ></img>
                                </div>
                                <h3 className="presehead">{blog.title}</h3>
                                <p className="presehead2">
                                  {blog.description.substring(0, 100)}
                                </p>
                                <div className="presicon">
                                  <p className="presparaico">
                                    <FaRegCalendarAlt />
                                  </p>
                                  <p className="presparaicoo">{blog.date}</p>
                                  <p className="presparaus">
                                    <AiOutlineUser />
                                  </p>
                                  <p className="presparauss">{blog.aurthor}</p>
                                </div>
                                <NavLink to={`/blog/${blog._id}`}>
                                  <button className="presentbutt">
                                    LEER MÁS
                                  </button>
                                </NavLink>
                              </div>
                            </div>
                          );
                        }
                      }
                    })
                  : null;
              }}
            </Media>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Presentacios;
