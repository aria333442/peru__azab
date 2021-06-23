import React, { useEffect, useState } from "react";
import { background } from "./Background";
import Nav from "./Nav";
import "../css/search.scss";
import StarRating from "react-star-ratings";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchP } from "../actions/search";
import Media from "react-media";
import Footer from "./Footer";

function Search() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  let query1 = query.get("query");
  const [q, setq] = useState(query1);
  console.log(q);
  setTimeout(() => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, 5000);
  const handlecheck = () => {};
  useEffect(() => {
    dispatch(searchP(q)).then((res) => {
      setq("");
    });
  }, []);

  const searchit = useSelector((state) => state.searchit);
  return (
    <div className="container-fluid m-0 p-0">
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div
        className="shop__banner"
        style={{
          backgroundImage: `url(${background[count].img})`,
          marginTop: "100px",
        }}
      >
        <div>
          <h2>{background[count].text}</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h1 className="search__header">
          Resultados de búsqueda para{" "}
          <span style={{ color: "#ff6606" }}>{query1}</span>
        </h1>
      </div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div className="d-flex justify-content-center">
              <div className="resultss">
                <div className="row">
                  {searchit.products.length > 0 ? (
                    searchit.products.map((prod) => {
                      return (
                        <div className="col-3">
                          <div className="search__card">
                            <div className="card__image">
                              <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617090025/henjtable_yglavn.png"></img>
                            </div>
                            <div className="d-flex justify-content-center">
                              <StarRating
                                starRatedColor="#ff6606"
                                rating={prod.rating}
                                starDimension="23px"
                                starSpacing="5px"
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <p className="card__name">{prod.name}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <p className="card__price">${prod.saleprice}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <NavLink
                                to={`/product/${prod._id}`}
                                className="card_detalles"
                              >
                                DETALLES
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      className="d-flex justify-content-center"
                      style={{ height: "500px" }}
                    >
                      <h2>no se encontraron resultados de búsqueda</h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div className="d-flex justify-content-center">
              <div className="resultss">
                <div className="row">
                  {searchit.products.length > 0 ? (
                    searchit.products.map((prod) => {
                      return (
                        <div className="col-4">
                          <div className="search__card">
                            <div className="card__image">
                              <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617090025/henjtable_yglavn.png"></img>
                            </div>
                            <div className="d-flex justify-content-center">
                              <StarRating
                                starRatedColor="#ff6606"
                                rating={prod.rating}
                                starDimension="23px"
                                starSpacing="5px"
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <p className="card__name">{prod.name}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <p className="card__price">${prod.saleprice}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <NavLink
                                to={`/product/${prod._id}`}
                                className="card_detalles"
                              >
                                DETALLES
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      className="d-flex justify-content-center"
                      style={{ height: "500px" }}
                    >
                      <h2>no se encontraron resultados de búsqueda</h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="d-flex justify-content-center">
              <div className="resultss">
                <div className="row">
                  {searchit.products.length > 0 ? (
                    searchit.products.map((prod) => {
                      return (
                        <div className="col-12">
                          <div className="search__card">
                            <div className="card__image">
                              <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1617090025/henjtable_yglavn.png"></img>
                            </div>
                            <div className="d-flex justify-content-center">
                              <StarRating
                                starRatedColor="#ff6606"
                                rating={prod.rating}
                                starDimension="23px"
                                starSpacing="5px"
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <p className="card__name">{prod.name}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <p className="card__price">${prod.saleprice}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <NavLink
                                to={`/product/${prod._id}`}
                                className="card_detalles"
                              >
                                DETALLES
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      className="d-flex justify-content-center"
                      style={{ height: "500px" }}
                    >
                      <h2>no se encontraron resultados de búsqueda</h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Footer />
    </div>
  );
}

export default Search;
