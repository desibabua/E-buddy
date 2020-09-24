import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import requestAPIs from '../api/reqAPIs';
import {getProducts} from './Products';

const useQuery = function () {
  return new URLSearchParams(useLocation().search)
}

const SearchedProducts = function () {

  const value = useQuery().get("input")
  const [products, setProducts] = useState(null);

  useEffect(() => {
    requestAPIs.searchProducts(value).then(setProducts);
  }, [value]);

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="products">{getProducts(products)}</div>
    </div>
  );
};

export default SearchedProducts;
