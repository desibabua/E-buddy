import React from 'react';
import styled from 'styled-components';

const AllPrices = styled.div`
  display: flex;
  padding: 10px;
  font-size: 1.1rem;

  & div {
    margin-right: 20px;
  }

  .product & {
    margin: 30px 10px 10px;
    font-size: 1.4rem;
  }
`;

const Discount = styled.div`
  display: flex;
`;

const Original = styled.div`
  color: grey;
  text-decoration: line-through;
`;

const DiscountPercent = styled.div`
  color: green;
`;

const Discounted = function ({ beforePrice, savingsPercent }) {
  return (
    <Discount>
      <Original>₹ {beforePrice}</Original>
      <DiscountPercent>{savingsPercent}%</DiscountPercent>
    </Discount>
  );
};

const Prices = function ({ price }) {
  const { discounted, currentPrice } = price;

  return (
    <AllPrices>
      <div>₹ {currentPrice}</div>
      {discounted && <Discounted {...price} />}
    </AllPrices>
  );
};

export default Prices;
