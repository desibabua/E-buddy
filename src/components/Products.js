import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requestAPIs from '../api/reqAPIs';
import ProductCard from './ProductCard';
import ProductNav from './ProductsNav';

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

  return (
    <div>
      <ProductNav />
      <div className="products">{getProducts(products)}</div>
    </div>
  );
};

export default Products;
