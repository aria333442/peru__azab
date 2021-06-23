import React from "react";
import { Link, NavLink } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "../css/_card.scss";
const ProductCard = ({ x }) => {
  return (
    <div className="productCard">
      <img src={x.productImage[0].img} alt="" />
      <StarRatings
        rating={x.rating}
        starRatedColor="#ff6606"
        numberOfStars={5}
        name="rating"
        starSpacing="5px"
        starDimension="20px"
      />
      <p>{x.name}</p>
      <p>${x.saleprice}</p>
      <div>
        <NavLink to={`/product/${x._id}`} className="btn__details">
          DETALLES
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
