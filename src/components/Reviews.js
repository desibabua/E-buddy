import React, { useEffect, useState, useContext } from 'react';
import requestAPIs from '../api/reqAPIs';
import Moment from 'moment';
import GetReview from './Input';

import { User } from '../Contexts';

const getRelativeTime = function (time) {
  return new Moment(time).fromNow();
};

const Review = function ({ owner, review, timeStamp }) {
  return (
    <div className="review">
      <div className="info">
        <div className="owner">{owner}</div>
        <div className="time">{getRelativeTime(timeStamp)}</div>
      </div>
      <div className="content">{review}</div>
    </div>
  );
};

const getReviews = function (reviews) {
  return reviews.map((review) => <Review key={review.id} {...review} />);
};

const Reviews = function ({ id }) {
  const { user } = useContext(User);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    requestAPIs.getProductReviews(id).then(setReviews);
  }, []);

  const onSubmit = function (value) {
    requestAPIs
      .addReview({ owner: user.name, productId: id, review: value })
      .then(setReviews)
  };

  if (!reviews) {
    return <p>Loading...</p>;
  }

  return (
    <div className="reviews">
      <div className="title">
        Reviews
        <span className="count">&nbsp;&nbsp;({reviews.length})</span>
      </div>
      {user && <GetReview placeholder="Your review" onSubmit={onSubmit} />}
      <div className="container">{getReviews(reviews)}</div>
    </div>
  );
};

export default Reviews;
