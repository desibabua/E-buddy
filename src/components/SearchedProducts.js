import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import requestAPIs from '../api/reqAPIs';
import { getProducts } from './Products';

const StyledSearchedProducts = styled.div`
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const useQuery = function () {
  return new URLSearchParams(useLocation().search);
};

const SearchedProducts = function () {
  const value = useQuery().get('input');
  const [products, setProducts] = useState(null);

  useEffect(() => {
    requestAPIs.searchProducts(value).then(setProducts);
  }, [value]);

  if (!products) {
    return <p>Loading...</p>;
  }

  return <StyledSearchedProducts children={getProducts(products)} />;
};

export default SearchedProducts;
