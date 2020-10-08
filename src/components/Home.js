import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import requestAPIs from '../api/reqAPIs';

const Title = styled.h1`
  margin: 80px;
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
`;

const Content = styled.p`
  width: 1000px;
  font-size: 2rem;
  font-weight: 300;
  margin: 50px auto;
  text-align: center;
`;

const Home = function (props) {
  const [homeDetails, setHomeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestAPIs.home().then((details) => {
      setHomeDetails(details);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Title>Loading...</Title>;
  }

  return (
    <div>
      <Title>{homeDetails.title}</Title>
      <Content>{homeDetails.content}</Content>
    </div>
  );
};

export default Home;
