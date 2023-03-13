import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import requestAPIs from '../api/reqAPIs';
import ProductCard from './ProductCard';

const StyledProducts = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const getProducts = function (products) {
  return products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
};

const Products = function () {
  const { category } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    requestAPIs.getProducts(category).then(setProducts);
  }, [category]);

  if (!products) {
    return <p>Loading...</p>;
  }

  return <StyledProducts children={getProducts(products)} />;
};

export default Products;
export { getProducts };
