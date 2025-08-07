import { createSlice } from '@reduxjs/toolkit';
import {
  addToLocalStorage,
  getFromLocalStorage,
} from '../../utils/change-localStorage';

// this constant is used to initialize the products state from localStorage or with default values
const products = getFromLocalStorage('products') || [
  {
    id: 1,
    product: 'Shirt',
    category: 'Man clothes',
    price: '$100',
    stock: 500,
    description: 'Classic cotton shirt perfect for work or casual wear.',
  },
  {
    id: 2,
    product: 'T-Shirt',
    category: 'Man clothes',
    price: '$50',
    stock: 300,
    description: 'Soft and comfortable cotton T-shirt with modern fit.',
  },
  {
    id: 3,
    product: 'Jeans',
    category: 'Man clothes',
    price: '$80',
    stock: 200,
    description: 'Regular fit denim jeans with a timeless look.',
  },
  {
    id: 4,
    product: 'Jacket',
    category: 'Man clothes',
    price: '$150',
    stock: 100,
    description: 'Warm and stylish jacket suitable for cold seasons.',
  },
  {
    id: 5,
    product: 'Hoodie',
    category: 'Man clothes',
    price: '$160',
    stock: 140,
    description: 'Cozy fleece hoodie with front pockets and adjustable hood.',
  },
  {
    id: 6,
    product: 'Sneakers',
    category: 'Footwear',
    price: '$120',
    stock: 250,
    description: 'Lightweight running sneakers with cushioned soles.',
  },
  {
    id: 7,
    product: 'Formal Shoes',
    category: 'Footwear',
    price: '$180',
    stock: 80,
    description: 'Elegant leather formal shoes for business occasions.',
  },
  {
    id: 8,
    product: 'Cap',
    category: 'Accessories',
    price: '$25',
    stock: 400,
    description: 'Adjustable baseball cap for everyday use.',
  },
  {
    id: 9,
    product: 'Sunglasses',
    category: 'Accessories',
    price: '$90',
    stock: 150,
    description: 'UV-protective sunglasses with modern frame design.',
  },
  {
    id: 10,
    product: 'Backpack',
    category: 'Accessories',
    price: '$70',
    stock: 180,
    description:
      'Durable backpack with multiple compartments and laptop sleeve.',
  },
];

const initialState = { products };

// The initial state of the products slice, which includes the products array
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // add a new product to the products array
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.products.push(newProduct);
      addToLocalStorage('products', state.products);
    },
    // remove a product from the products array by its id
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productToRemove.id
      );
      addToLocalStorage('products', state.products);
    },
    // update an existing product in the products array
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = updatedProduct;
        addToLocalStorage('products', state.products);
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;

export default productsSlice.reducer;
