const getFetch = async (url) => {
  const res = await fetch(url);
  if (!res.ok) console.log(res);
  return await res.json();
};

const requestAPIs = {};

requestAPIs.home = () => getFetch('/api/home');
requestAPIs.login = () => getFetch('/api/login');
requestAPIs.getProducts = (category) => getFetch(`/api/products/${category}`);
requestAPIs.getProduct = (id) => getFetch(`/api/product/${id}`);

export default requestAPIs;
export { getFetch };
