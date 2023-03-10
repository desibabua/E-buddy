import React from 'react';
import styled from 'styled-components';
import Products from './Products';
import SponsoredProducts from './SponsoredProducts';

const ProductsHolder = styled.div`
  
`;

const ProductsWithAds = function () {
    return <ProductsHolder>
        <SponsoredProducts />
        <Products />
    </ProductsHolder>;
};

export default ProductsWithAds;