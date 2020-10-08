import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import requestAPIs from '../api/reqAPIs';
import Moment from 'moment';
import GetReview from './Input';

import { User } from '../Contexts';

const StyledReviews = styled.div`
  margin-top: 50px;
`;

const Title = styled.div`
  padding: 20px;
  font-weight: 300;
  font-size: 2.4rem;
`;

const Count = styled.span`
  color: grey;
  font-size: 1.5rem;
`;

const Container = styled.div`
  padding: 20px 20px 10px;
`;

const StyledReview = styled.div`
  margin: 20px;
  padding: 20px;
  min-height: 60px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  box-shadow: 2px 3px 8px 2px lightgrey;
`;

const Info = styled.div`
  display: flex;
`;

const Owner = styled.div`
  font-weight: 400;
  margin-right: 10px;
  font-size: 1.2rem;
`;

const Time = styled.time`
  color: grey;
  font-size: 1rem;
  font-weight: 400;
`;

const Content = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 20px;
  margin-left: 10px;
`;

const getRelativeTime = function (time) {
  return new Moment(time).fromNow();
};

const Review = function ({ owner, review, timeStamp }) {
  return (
    <StyledReview>
      <Info>
        <Owner>{owner}</Owner>
        <Time>{getRelativeTime(timeStamp)}</Time>
      </Info>
      <Content>{review}</Content>
    </StyledReview>
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
  }, [id]);

  const onSubmit = function (value) {
    requestAPIs
      .addReview({ owner: user.name, productId: id, review: value })
      .then(setReviews);
  };

  if (!reviews) {
    return <p>Loading...</p>;
  }

  return (
    <StyledReviews>
      <Title>
        Reviews
        <Count>&nbsp;&nbsp;({reviews.length})</Count>
      </Title>
      {user && <GetReview placeholder="Your review" onSubmit={onSubmit} />}
      <Container>{getReviews(reviews)}</Container>
    </StyledReviews>
  );
};

export default Reviews;
