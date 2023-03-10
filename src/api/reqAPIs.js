const getFetch = async (url) => {
  const res = await fetch(url);
  if (!res.ok) console.log(res);
  return await res.json();
};

const postFetch = async (url, data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data || {}),
  };
  const res = await fetch(url, options);
  if (!res.ok) console.log(res);
  return await res.json();
};

const requestAPIs = {};

requestAPIs.home = () => getFetch('/api/home');
requestAPIs.getProducts = (category) => getFetch(`/api/products/${category}`);
requestAPIs.getSponsoredProducts = (category) => getFetch(`/api/products/${category}`);
requestAPIs.getProduct = (id) => getFetch(`/api/product/${id}`);
requestAPIs.searchProducts = (value) => getFetch(`/api/search?input=${value}`);
requestAPIs.getProductReviews = (id) => getFetch(`/api/review/${id}`);
requestAPIs.addReview = (review) => postFetch(`/api/addReview`, review);

export default requestAPIs;
export { getFetch };
