import { MdDeleteForever } from 'react-icons/md';
import Breadcrumbs from '../componants/Layout/Breadcrumbs';
import Modal from '../componants/UI/modal';
import Table from '../componants/UI/table';
import { FiEdit3 } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store/products/products-slice';
import { useState } from 'react';

const headers = ['Product', 'Category', 'Price', 'Stock', 'actions'];

const Products = () => {
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the product being edited
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products); // Fetch products from Redux store

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

  return (
    <section className="w-full">
      {/* Breadcrumbs for navigation */}
      <nav aria-label="Breadcrumb" className="mt-8">
        <Breadcrumbs links={[{ title: 'Tables', url: '/tables' }]} />
      </nav>
      {/* Products Table Section */}
      <section
        aria-label="Products Table"
        className="bg-white rounded-2xl overflow-hidden mt-5"
      >
        {/* Header for the products table */}
        <header className="bg-main py-5 px-3 text-center">
          <h2 className="text-2xl text-white font-semibold">Products Table</h2>
        </header>
        {/* Render the products table with headers and data */}
        <Table tableHeaders={headers}>
          {products.map((item, index) => (
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
          ))}
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
