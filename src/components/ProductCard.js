import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import Prices from './Prices';

const Card = styled.div`
  width: 300px;
  height: 400px;
  padding: 10px;
  margin-top: 40px;
  border-radius: 5px;
  box-shadow: 2px 3px 8px 2px lightgrey;
`;

const Figure = styled.figure`
  display: flex;
  margin:0px;
  width: 100%;
  height: 75%;
`;

const Image = styled.img`
  margin: auto;
  display: block;
  max-width: 250px;
  max-height: 250px;
`;

const Title = styled.div`
  margin: 5px;
  font-weight: 400;
  font-size: 1.3rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ProductCard = function ({ product }) {
  const { id, title, imgUrl, price } = product;

  return (
    <Card>
      <Figure>
        <Image src={imgUrl} alt="Loading..." />
      </Figure>
      <NavLink exact to={`/product/${id}`}>
        <Title>{`${title.slice(0, 25)}...`}</Title>
      </NavLink>
      <Prices price={price} />
    </Card>
  );
};

export default ProductCard;
