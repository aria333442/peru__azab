import { Pagination } from "@material-ui/lab";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../css/_allProduct.scss";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { getprod } from "../actions/getproducts";

const AllProduct = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprod(props.selectsubcategory));
  }, []);
  useEffect(() => {
    dispatch(getprod(props.selectsubcategory));
  }, [props.selectsubcategory]);
  useEffect(() => {
    dispatch(getprod(props.selectsubcategory, props.search));
  }, [props.search]);
  const getproducts = useSelector((state) => state.getproducts);
  return (
    <div>
      <Media query="(min-width:1300px)">
        {(matches) => {
          return matches ? (
            <div className="allProduct">
              <div className="allProduct__container">
                {getproducts.products.slice(0, 6).map((x) => {
                  if (x.category.name === props.selectcategory) {
                    if (!props.upperlimit && props.lowerlimit) {
                      if (x.saleprice >= props.lowerlimit) {
                        return (
                          <ProductCard
                            x={x}
                            lower={props.lowerlimit}
                            upper={props.upperlimit}
                          ></ProductCard>
                        );
                      }
                    } else if (props.upperlimit && !props.lowerlimit) {
                      if (x.saleprice <= props.upperlimit) {
                        return (
                          <ProductCard
                            x={x}
                            lower={props.lowerlimit}
                            upper={props.upperlimit}
                          ></ProductCard>
                        );
                      }
                    } else if (props.upperlimit && props.lowerlimit) {
                      if (
                        x.saleprice >= props.lowerlimit &&
                        x.saleprice <= props.upperlimit
                      ) {
                        return (
                          <ProductCard
                            x={x}
                            lower={props.lowerlimit}
                            upper={props.upperlimit}
                          ></ProductCard>
                        );
                      }
                    } else if (props.selectcolor) {
                      if (x.color === props.selectcolor) {
                        return (
                          <ProductCard
                            x={x}
                            lower={props.lowerlimit}
                            upper={props.upperlimit}
                          ></ProductCard>
                        );
                      }
                    } else {
                      return (
                        <ProductCard
                          x={x}
                          lower={props.lowerlimit}
                          upper={props.upperlimit}
                        ></ProductCard>
                      );
                    }
                  }
                })}
              </div>
              <div className="allProduct__pagination">
                <Pagination count={4} />
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="allProduct">
              <div className="allProduct__container">
                <div className="row">
                  {getproducts.products.slice(0, 6).map((x) => {
                    if (x.category.name === props.selectcategory) {
                      if (!props.upperlimit && props.lowerlimit) {
                        if (x.saleprice >= props.lowerlimit) {
                          return (
                            <div className="col-6">
                              <ProductCard
                                x={x}
                                lower={props.lowerlimit}
                                upper={props.upperlimit}
                              ></ProductCard>
                            </div>
                          );
                        }
                      } else if (props.upperlimit && !props.lowerlimit) {
                        if (x.saleprice <= props.upperlimit) {
                          return (
                            <div className="col-6">
                              <ProductCard
                                x={x}
                                lower={props.lowerlimit}
                                upper={props.upperlimit}
                              ></ProductCard>
                            </div>
                          );
                        }
                      } else if (props.upperlimit && props.lowerlimit) {
                        if (
                          x.saleprice >= props.lowerlimit &&
                          x.saleprice <= props.upperlimit
                        ) {
                          return (
                            <div className="col-6">
                              <ProductCard
                                x={x}
                                lower={props.lowerlimit}
                                upper={props.upperlimit}
                              ></ProductCard>
                            </div>
                          );
                        }
                      } else if (props.selectcolor) {
                        if (x.color === props.selectcolor) {
                          return (
                            <div className="col-6">
                              <ProductCard
                                x={x}
                                lower={props.lowerlimit}
                                upper={props.upperlimit}
                              ></ProductCard>
                            </div>
                          );
                        }
                      } else {
                        return (
                          <div className="col-6">
                            <ProductCard
                              x={x}
                              lower={props.lowerlimit}
                              upper={props.upperlimit}
                            ></ProductCard>
                          </div>
                        );
                      }
                    }
                  })}
                </div>
              </div>
              <div className="allProduct__pagination">
                <Pagination count={2} />
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1299px)">
        {(matches) => {
          return matches ? (
            <div className="allProduct">
              <div className="allProduct__container">
                <div className="row">
                  {getproducts.products.slice(0, 6).map((x) => {
                    if (x.category.name === props.selectcategory) {
                      if (!props.upperlimit && props.lowerlimit) {
                        if (x.saleprice >= props.lowerlimit) {
                          return (
                            <div className="col-6">
                              <ProductCard
                                x={x}
                                lower={props.lowerlimit}
                                upper={props.upperlimit}
                              ></ProductCard>
                            </div>
                          );
                        }
                      } else if (props.upperlimit && !props.lowerlimit) {
                        if (x.saleprice <= props.upperlimit) {
                          return (
                            <div className="col-6">
                              <ProductCard
                                x={x}
                                lower={props.lowerlimit}
                                upper={props.upperlimit}
                              ></ProductCard>
                            </div>
                          );
                        }
                      } else if (props.upperlimit && props.lowerlimit) {
                        if (
                          x.saleprice >= props.lowerlimit &&
                          x.saleprice <= props.upperlimit
                        ) {
                          return (
                            <div className="col-6">
                              <ProductCard
                                x={x}
                                lower={props.lowerlimit}
                                upper={props.upperlimit}
                              ></ProductCard>
                            </div>
                          );
                        }
                      } else if (props.selectcolor) {
                        if (x.color === props.selectcolor) {
                          return (
                            <div className="col-6">
                              <ProductCard
                                x={x}
                                lower={props.lowerlimit}
                                upper={props.upperlimit}
                              ></ProductCard>
                            </div>
                          );
                        }
                      } else {
                        return (
                          <div className="col-6">
                            <ProductCard
                              x={x}
                              lower={props.lowerlimit}
                              upper={props.upperlimit}
                            ></ProductCard>
                          </div>
                        );
                      }
                    }
                  })}
                </div>
              </div>
              <div className="allProduct__pagination">
                <Pagination count={4} />
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
};

export default AllProduct;
