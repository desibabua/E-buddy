import React from 'react';

const Discounted = function ({beforePrice, savingsPercent}) {
  return (
    <div className="discounted">
      <div className="original">₹ {beforePrice}</div>
      <div className="dis-percent">{savingsPercent}%</div>
    </div>
  );
};

const Prices = function ({ price }) {
  const { discounted, currentPrice } = price;

  return (
    <div className="price">
      <div className="current">₹ {currentPrice}</div>
      {discounted ? <Discounted {...price} /> : <></>}
    </div>
  );
};

export default Prices;
