import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import requestAPIs from '../api/reqAPIs';

const TitleImage = styled.img`
  width: 100%;
  margin-botton: 20px;
`;

const SponsoredBanner = function ({ category }) {
  const [sponsoredBanner, setSponsoredBanner] = useState(null);

  useEffect(() => {
    requestAPIs.getSponsoredBanners(category).then(({ sponsoredBanner }) => setSponsoredBanner(sponsoredBanner));
  }, [category]);

  if (!sponsoredBanner || !sponsoredBanner.imgUrl) {
    return <div></div>
  }

  return (<NavLink to={sponsoredBanner.redirectionLink}>
    <TitleImage src={sponsoredBanner.imgUrl} alt="Loading..." />
  </NavLink>);

};

export default SponsoredBanner;
