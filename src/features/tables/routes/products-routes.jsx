import Products from '../pages/products';

export const productsRoutes = [
  { path: 'products', element: <Products /> },
  { path: 'products/:id', element: <Products /> },
];
