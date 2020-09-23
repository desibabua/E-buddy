import React from 'react';

const Ratings = function ({ rating, reviews }) {
  return (
    <div className="ratings">
      <div className="rating">Rating : {rating}</div>
    </div>
  );
};

export default Ratings;
