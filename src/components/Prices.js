import React from 'react';

const Prices = function ({ price }) {
  const { currentPrice, beforePrice, savingsPercent } = price;

  return (
    <div className="price">
      <div className="current">₹ {currentPrice}</div>
      {beforePrice ? <div className="original">₹ {beforePrice}</div> : <></>}
      {savingsPercent ? (
        <div className="dis-percent">{savingsPercent} %</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Prices;
