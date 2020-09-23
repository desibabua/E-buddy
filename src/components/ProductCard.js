import React from 'react';
import { NavLink } from 'react-router-dom';
import Prices from './Prices';

const ProductCard = function ({ product }) {
  const { id, title, imgUrl, price } = product;

  return (
    <div className="product-card">
      <div className="img-holder">
        <img src={imgUrl} alt="Loading..." />
      </div>
      <NavLink exact to={`/product/${id}`}>
        <div className="title">{`${title.slice(0, 25)}...`}</div>
      </NavLink>
      <Prices price={price}/>
    </div>
  );
};

export default ProductCard;
