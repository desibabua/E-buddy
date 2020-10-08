import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import requestAPIs from '../api/reqAPIs';
import Prices from './Prices';
import Ratings from './Ratings';
import Reviews from './Reviews';

const StyledProduct = styled.div`
  margin: 50px 30px;
`;

const Details = styled.div`
  display: flex;
`;

const Figure = styled.figure`
  display: flex;
  margin: 20px 60px 20px 100px;
  border-radius: 5px;
  box-shadow: 2px 3px 8px 2px lightgrey;
`;

const Img = styled.img`
  margin: auto;
  height: 400px;
  display: block;
`;

const Info = styled.div`
  width: 50%;
  margin: 20px;
  padding: 50px 20px;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 1.8rem;
`;

const Product = function () {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    requestAPIs.getProduct(id).then(setDetails);
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  const { title, imgUrl, price, rating } = details;

  return (
    <StyledProduct>
      <Details>
        <Figure>
          <Img src={imgUrl} alt="product-img" />
        </Figure>
        <Info>
          <Title>{title}</Title>
          <Prices price={price} />
          <Ratings rating={rating} />
        </Info>
      </Details>
      <Reviews id={id} />
    </StyledProduct>
  );
};

export default Product;
