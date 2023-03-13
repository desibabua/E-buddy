import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import requestAPIs from '../api/reqAPIs';
import ProductCard from './ProductCard';

const refrenceName = {
  'all': '',
  'clothes': 'Clothes',
  'men': 'Men Clothes',
  'women': 'Women Clothes',
  'electronics': 'Electronics',
  'phone': 'Phone',
  'sports': 'Sports',
  'books': 'Books',
}

const StyledSponseredProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 470px;
  overflow: hidden;
`;

const getSponsoredProducts = function (products) {
  return products.map((product) => (
    <ProductCard key={product.id} product={product} isSponsored={true} />
  ));
};

const SponsoredProducts = function ({ category }) {
  const [sponsoredproducts, setSponsoredproducts] = useState(null);
  const [brandCategory, setBrandCategory] = useState('');

  useEffect(() => {
    requestAPIs.getSponsoredProducts(category).then(setSponsoredproducts);
    if (category in refrenceName) {
      setBrandCategory(refrenceName[category])
    } else {
      setBrandCategory(category.toUpperCase().slice(0, 1) + category.toLowerCase().slice(1))
    }
  }, [category]);

  if (!sponsoredproducts) {
    return <p>Loading...</p>;
  }

  return <>
    <h2 style={{ marginTop: '0px' }}>World's foremost {brandCategory} Brand</h2>
    <StyledSponseredProducts children={getSponsoredProducts(sponsoredproducts)} />
  </>
};

export default SponsoredProducts;
