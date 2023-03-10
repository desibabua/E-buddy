import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  padding: 2px;
  font-size: 0.8rem;
  color: gray;
  width: 100%;
  text-align: right;
`;

const SponsoredTag = function () {
    return (
        <StyledTag>sponsored</StyledTag>
    );
};

export default SponsoredTag;
