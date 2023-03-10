import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import requestAPIs from '../api/reqAPIs';
import ProductCard from './ProductCard';

const StyledSponseredProducts = styled.div`
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const getSponsoredProducts = function (products) {
  return products.map((product) => (
    <ProductCard key={product.id} product={product} isSponsored={true} />
  ));
};

const SponsoredProducts = function () {
  const { category } = useParams();
  const [sponsoredproducts, setSponsoredproducts] = useState(null);

  useEffect(() => {
    requestAPIs.getSponsoredProducts(category).then(setSponsoredproducts);
  }, [category]);

  if (!sponsoredproducts) {
    return <p>Loading...</p>;
  }

  return <StyledSponseredProducts children={getSponsoredProducts(sponsoredproducts)} />;
};

export default SponsoredProducts;
