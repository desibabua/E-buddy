import React from 'react';
import styled from 'styled-components';
import Products from './Products';
import SponsoredProducts from './SponsoredProducts';

const ProductsHolder = styled.div`
   margin: 50px;
`;

const ProductsWithAds = function () {
    return (
        <ProductsHolder>
            <SponsoredProducts />
            <br />
            <br />
            <h2>RESULTS</h2>
            <Products />
        </ProductsHolder>
    );
};

export default ProductsWithAds;