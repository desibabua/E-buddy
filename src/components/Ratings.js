import React from 'react';
import styled from 'styled-components';

const StyledRating = styled.div`
  font-size: 1.4rem;
  margin: 10px;
  margin-left: 20px;
`;

const Ratings = function ({ rating, reviews }) {
  return <StyledRating>Rating : {rating}</StyledRating>;
};

export default Ratings;
