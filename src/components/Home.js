import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import requestAPIs from '../api/reqAPIs';

const TitleImage = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 500;
  text-align: center;
`;

const ImageAd = styled.img`
  height: 350px;
  display: block;
  margin: 0 auto;
`;

const HomeContainer = styled.div`
  background-color: white;
`;

const ImageAdCard = styled.div`
  border-radius: 10px;
  background-color: aliceBlue;
  padding: 10px;
  align-content: center;
  flex: 1;
  margin: 10px;
`;

const ImageAdCardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
`;

const getImageAdsForHomeScreen = function (imageAds) {
  return imageAds.map((ads) => {
    return (
      <ImageAdCard >
        <Title>{ads.title}</Title>
        <NavLink to={ads.url}>
          <ImageAd src={ads.image} alt="ad1" />
        </NavLink>
        <br />
        <NavLink to={ads.url} >Show more</NavLink>
      </ImageAdCard>
    )
  })
}

const Home = function () {
  const [homeDetails, setHomeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestAPIs.home().then((details) => {
      setHomeDetails(details);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HomeContainer>
      <NavLink to={'/products/all'}>
        <TitleImage src={homeDetails.titleImage} alt="Loading..." />
      </NavLink>
      <ImageAdCardsContainer children={getImageAdsForHomeScreen(homeDetails.ads)} />
    </HomeContainer>
  );
};

export default Home;
