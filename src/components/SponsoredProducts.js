import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import requestAPIs from '../api/reqAPIs';
import ProductCard from './ProductCard';
import SponsoredTag from './SponseredTag';

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
  height: 470px;
  overflow: hidden;

  .productCard {
    margin: 10px;
  }
`;

const StyledSponseredProductsContainer = styled.div`
  border: 1px solid #c2d0dc;
  border-radius: 10px;
  background-color: aliceBlue;
  padding: 20px;
`;

const getSponsoredBrands = function (products) {
  return products.slice(0, 4).map((product) => (
    <ProductCard key={product.id} product={product} isSponsored={true} />
  ));
};

const SponsoredProducts = function ({ category }) {
  const [sponsoredBrands, setSponsoredBrands] = useState(null);
  const [brandCategory, setBrandCategory] = useState('');

  useEffect(() => {
    requestAPIs.getSponsoredBrands(category).then(setSponsoredBrands);
    if (category in refrenceName) {
      setBrandCategory(refrenceName[category])
    } else {
      setBrandCategory(category.toUpperCase().slice(0, 1) + category.toLowerCase().slice(1))
    }
  }, [category]);

  if (!sponsoredBrands || !sponsoredBrands.length) {
    return <div></div>
  }

  return <StyledSponseredProductsContainer>
    <h2 style={{ marginTop: '0px' }}>World's foremost {brandCategory} Brand</h2>
    <StyledSponseredProducts children={getSponsoredBrands(sponsoredBrands)} />
    <SponsoredTag />
  </StyledSponseredProductsContainer>
};

export default SponsoredProducts;
