import { MdDeleteForever } from 'react-icons/md';
import Breadcrumbs from '../components/Layout/Breadcrumbs';
import Modal from '../components/UI/modal';
import Table from '../components/UI/table';
import { FiEdit3 } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store/products/products-slice';
import { useState } from 'react';
import useSearch from '../hooks/useSearch';

const productsHeaders = ['Product', 'Category', 'Price', 'Stock', 'actions'];

const Products = () => {
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the product being edited
  const [search, setSearch] = useState(''); // State for search input
  const mainProducts = useSelector((state) => state.products.products); // Fetch products from Redux store
  const { filteredProducts } = useSearch(mainProducts, search); // Custom hook to filter products based on search input
  const products = filteredProducts || mainProducts; // Use filtered products or fallback to main products
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
  const handleSearch = (e) => {
    setSearch(e.target.value); // Update search state with input value
  };
  return (
    <section className="w-full">
      {/* Breadcrumbs for navigation */}
      <nav aria-label="Breadcrumb" className="mt-8">
        <Breadcrumbs links={[{ title: 'Products', url: '/products' }]} />
      </nav>
      {/* Products Table Section */}
      <section
        aria-label="Products Table"
        className="bg-white rounded-2xl overflow-hidden mt-5"
      >
        {/* Header for the products table */}
        <header className="bg-main py-5 px-3 flex justify-between items-center">
          <h2 className="text-2xl text-white font-semibold">
            Top Products Table ({products.length})
          </h2>
          <input
            onChange={handleSearch}
            type="text"
            name="search"
            id="search"
            className="bg-white py-1 px-3 rounded"
            placeholder="Search products..."
            value={search}
          />
        </header>
        {/* Render the products table with headers and data */}
        <Table tableHeaders={productsHeaders}>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr
                key={index}
                className="text-gray-500 font-light text-base hover:bg-gray-100 transition-colors duration-300"
              >
                <td className="p-3">{item.product}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3">{item.stock}</td>
                {/* Action buttons for delete and edit */}
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-xl text-white p-2 bg-red-500 hover:bg-red-600 ml-2 rounded-lg"
                  >
                    <MdDeleteForever />
                  </button>
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-xl text-white p-2 bg-blue-500 hover:bg-blue-600 ml-2 rounded-lg"
                  >
                    <FiEdit3 />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={productsHeaders.length}
                className="p-3 text-center text-gray-500"
              >
                No products found matching "{search}"
              </td>
            </tr>
          )}
        </Table>
      </section>
      {/* Modal */}
      {openModal && selectedProduct && (
        <Modal
          data={selectedProduct}
          path="/products"
          openModal={openModal}
          handleOpenModal={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Products;
