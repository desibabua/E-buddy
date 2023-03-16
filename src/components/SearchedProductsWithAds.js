import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchedProducts from './SearchedProducts';
import SponsoredBanner from './SponsoredBanner';
import SponsoredProducts from './SponsoredProducts';

const ProductsHolder = styled.div`
   margin: 50px;
`;

const useQuery = function () {
    return new URLSearchParams(useLocation().search);
};

const SearchedProductsWithAds = function () {
    return (
        <ProductsHolder>
            <SponsoredBanner category={useQuery().get('input')} />
            <SponsoredProducts category={useQuery().get('input')} />
            <br />
            <br />
            <h2>RESULTS</h2>
            <SearchedProducts />
        </ProductsHolder>
    );
};

export default SearchedProductsWithAds;