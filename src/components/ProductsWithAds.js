import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Products from './Products';
import SponsoredProducts from './SponsoredProducts';

const ProductsHolder = styled.div`
   margin: 50px;
`;

const ProductsWithAds = function () {
    return (
        <ProductsHolder>
            <SponsoredProducts category={useParams().category} />
            <br />
            <br />
            <h2>RESULTS</h2>
            <Products />
        </ProductsHolder>
    );
};

export default ProductsWithAds;