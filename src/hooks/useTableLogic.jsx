import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import useSearch from './useSearch';
import { usePagination } from './usePagination';
import { useState } from 'react';
import { searchStrategies } from '../utils/table_filter';
import { removeProduct } from '../store/products/products-slice';

export const useTableLogic = (mainProducts) => {
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the product being edited
  const [search, setSearch] = useState(''); // State for search input
  const filteredData = useSearch(
    mainProducts,
    search,
    searchStrategies.products
  ); // Custom hook to filter products based on search input
  const { paginatedData, currentPage, totalPages, goToNextPage, goToPrevPage } =
    usePagination(filteredData); // Custom hook to handle pagination

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // handle delete confirmation and dispatch action to remove product
  const handleDelete = (product) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${product.product}?`
    );
    if (confirmDelete) {
      dispatch(removeProduct(product));
    }
  };

  // handle edit action, navigate to product edit page and open modal
  const handleEdit = (item) => {
    navigate(`/products/${item.id}`);
    setSelectedProduct(item);
    setOpenModal(true);
  };

  // close modal and reset selected product
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
    // Navigate back to products list when modal closes
    navigate('/products');
  };

  // Function to handle search input changes
  const handleSearch = (_, value) => {
    setSearch(value); // Update search state with input value
  };
  return {
    handleDelete,
    handleEdit,
    handleCloseModal,
    handleSearch,
    openModal,
    selectedProduct,
    paginatedData,
    currentPage,
    totalPages,
    search,
    goToNextPage,
    goToPrevPage,
  };
};

export default useTableLogic;
