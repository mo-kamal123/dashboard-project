import { useSelector } from 'react-redux';

const useProducts = () => {
  const mainProducts = useSelector((state) => state.products.products); // Fetch products from Redux store
  return mainProducts;
};

export default useProducts;
