import React, { useEffect, useState } from "react";
import "../css/blogdetail.scss";
import { BiCalendar } from "react-icons/bi";
import { HiUser } from "react-icons/hi";
import Nav from "./Nav";
import Footer from "./Footer";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { getBbyId } from "../actions/blogbyid";
import { useHistory, useParams } from "react-router";
import { getblog } from "../actions/getblog";
import { addcom } from "../actions/addcomment";

function Blog() {
  const dispatch = useDispatch();
  const [name, setname] = useState();
  const [comment, setcomment] = useState();
  const [email, setemail] = useState();
  const { Id } = useParams();
  useEffect(() => {
    dispatch(getBbyId(Id));
  }, []);
  useEffect(() => {
    dispatch(getblog());
  }, []);
  const history = useHistory();
  let date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  date = dd + " " + mm + " " + yyyy;
  const getB = useSelector((state) => state.getB);
  const blogbyid = useSelector((state) => state.blogbyid);
  let bl = 0;
  let bl1 = 0;
  let bl2 = 0;
  const handleadd = (e) => {
    e.preventDefault();
    const items = {
      Id,
      name,
      comment,
      date,
    };
    dispatch(addcom(items)).then((res) => {
      dispatch(getBbyId(Id));
    });
    setname("");
    setcomment("");
    setemail("");
  };
  const handlecheck = () => {};
  const handleback = () => {
    history.push("/blog");
  };
  return (
    <div>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div classcomment="ph">
        <img
          alt="bawa"
          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617795550/animation_bg_1_jv7atd.png"
          className="phimg"
        ></img>
      </div>
      <div className="loolo">
        <div className="pdiv d-flex mt-4 mb-3">
          <p className="left__arrow" onClick={handleback}>
            <HiOutlineArrowLeft />
          </p>
          <p className="mp">Regresar al Blog</p>
        </div>
        <div className="mainawq">
          <div className="left">
            <div className="left__smaller">
              <div className="lefthead">
                <p className="lefthp">Avances del Blog</p>
              </div>
              <div className="adddate">
                <p className="addp">
                  Escrito por {blogbyid.blog.aurthor}, {blogbyid.blog.date}
                </p>
              </div>
              <div className="lftimg">
                <div className="lftimage">
                  <img
                    alt="bawa"
                    src={blogbyid.blog.blogImage}
                    className="sofa"
                  ></img>
                </div>
              </div>
              <div className="leftpara">
                <div className="lftsbp">
                  <p className="viva">{blogbyid.blog.description}</p>
                </div>
              </div>
            </div>
            <div className="left__bottom">
              <h2 className="bottom__header">2 Comentarios</h2>
              {blogbyid.blog.comments.map((com) => {
                return (
                  <div className="comment__div">
                    <div className="image__div">
                      <img
                        src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618801525/profile_bqmim9.png"
                        className="ii"
                      ></img>
                    </div>
                    <div className="content__div">
                      <div className="d-flex">
                        <div className="name__div">
                          <p>{com.name}</p>
                        </div>
                        <div className="date__div">
                          <p>{com.date}</p>
                        </div>
                      </div>
                      <div className="content">
                        <p>{com.comment}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right">
            <div className="aut">
              <p className="rp">Autor del artículo</p>
            </div>
            <div className="rightph">
              <div className="rip">
                <img
                  className="rnm"
                  alt="bawa"
                  src={blogbyid.blog.authorImage}
                ></img>
              </div>
            </div>
            <div className="user">
              <p className="userid">{blogbyid.blog.aurthor}</p>
            </div>
            <div className="userr">
              <p className="useradd">
                Etiam vel magna sed leo feugiat cursus. Cras mollis blandit{" "}
              </p>
            </div>
            <p className="ulti">Últimos post</p>
            {getB.blog.map((blog) => {
              if (blog.aurthor === blogbyid.blog.aurthor) {
                bl = bl + 1;
                if (bl <= 2) {
                  return (
                    <div className="prdct">
                      <div className="prdctleft">
                        <img
                          alt="bawa"
                          src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618732794/dk_egoocm.png"
                          className="tbl"
                        ></img>
                      </div>
                      <div className="prdctright">
                        <div className="sugh">
                          <p className="sh">Avances del Blog</p>
                        </div>
                        <div className="sugdes">
                          <p className="sd">
                            Etiam vel magna sed leo feugiat cursus. Cras mollis
                            blandit{" "}
                          </p>
                        </div>
                        <button className="prdbt">LEER MÁS</button>
                      </div>
                    </div>
                  );
                }
              }
            })}

            <div>
              <h3 className="tags">Tags</h3>
              <div className="row tages__actal ml-1">
                {blogbyid.blog.tags.map((tag) => {
                  return (
                    <div className="col-4">
                      <p>{tag.tag}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="cmnt">
          <div className="comment">
            <p className="esc">Escribe un comentario</p>
            <form onSubmit={handleadd}>
              <div className="comentario">
                <div className="no">
                  <p className="num">
                    Nombre<span className="span">*</span>
                  </p>
                </div>
                <div className="em">
                  <p className="num">
                    Email<span className="span">*</span>
                  </p>
                </div>
              </div>
              <div className="comentario">
                <div className="no">
                  <input
                    placeholder=" Ingrese su nombre"
                    className="leftin"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  ></input>
                </div>
                <div className="em">
                  <input
                    placeholder="Ingrese su email"
                    className="rightin"
                    vlaue={email}
                    onChange={(e) => setemail(e.target.vlaue)}
                  ></input>
                </div>
              </div>
              <div className="mens">
                <p className="num">
                  Mensaje<span className="span">*</span>
                </p>
              </div>
              <div className="mensin">
                <textarea
                  placeholder="Escriba su mensaje"
                  className="mesninn"
                  value={comment}
                  onChange={(e) => setcomment(e.target.value)}
                ></textarea>
              </div>
              <div className="cmntbd">
                <button className="enviar" type="submit">
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="simi">
          <div className="post">
            <p className="ps">
              Post <span className="span">similares</span>
            </p>
          </div>
        </div>
        <Media query="(max-width:767px)">
          {(matches) => {
            return matches ? (
              <div className="d-flex justify-content-center">
                <div className="divs">
                  {getB.blog.map((blog) => {
                    if (blog.blogcategory === blogbyid.blog.blogcategory) {
                      bl1 = bl1 + 1;
                      if (bl1 <= 2) {
                        return (
                          <div className="first">
                            <div className="png">
                              <img
                                alt="bawa"
                                src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618732794/dk_egoocm.png"
                                className="coffee"
                              ></img>
                            </div>
                            <div className="head">
                              <p className="headhd">Tu mascota y tu</p>
                            </div>
                            <div className="des">
                              <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec pulvinar massa
                              </p>
                            </div>
                            <div className="icons">
                              <div className="khaba">
                                <div className="cal">
                                  <p className="cali">
                                    <BiCalendar />
                                  </p>
                                </div>
                                <div className="date">
                                  <p className="datep">10 - 12 - 2020</p>
                                </div>
                              </div>
                              <div className="saja">
                                <div className="cal">
                                  <p className="cali">
                                    <HiUser />
                                  </p>
                                </div>
                                <div className="date">
                                  <p className="datep">John Doe</p>
                                </div>
                              </div>
                            </div>
                            <button className="but">LEER MÁS</button>
                          </div>
                        );
                      }
                    }
                  })}
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <div className="divs">
                  {getB.blog.map((blog) => {
                    if (blog.blogcategory === blogbyid.blog.blogcategory) {
                      bl2 = bl2 + 1;
                      if (bl2 <= 3) {
                        return (
                          <div className="first">
                            <div className="png">
                              <img
                                alt="bawa"
                                src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1618732794/dk_egoocm.png"
                                className="coffee"
                              ></img>
                            </div>
                            <div className="head">
                              <p className="headhd">Tu mascota y tu</p>
                            </div>
                            <div className="des">
                              <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec pulvinar massa
                              </p>
                            </div>
                            <div className="icons">
                              <div className="khaba">
                                <div className="cal">
                                  <p className="cali">
                                    <BiCalendar />
                                  </p>
                                </div>
                                <div className="date">
                                  <p className="datep">10 - 12 - 2020</p>
                                </div>
                              </div>
                              <div className="saja">
                                <div className="cal">
                                  <p className="cali">
                                    <HiUser />
                                  </p>
                                </div>
                                <div className="date">
                                  <p className="datep">John Doe</p>
                                </div>
                              </div>
                            </div>
                            <button className="but">LEER MÁS</button>
                          </div>
                        );
                      }
                    }
                  })}
                </div>
              </div>
            );
          }}
        </Media>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
