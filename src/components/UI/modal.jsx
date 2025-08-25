import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../store/products/products-slice';
import Input from './input';

const Modal = ({ data, openModal, handleOpenModal }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [formData, setFormData] = useState(data); // Initializing formData with data prop

  // Sync formData whenever `data` changes
  useEffect(() => {
    setFormData(data);
  }, [data]);

  // Function to close the modal
  const closeModal = () => {
    handleOpenModal();
  };

  // Function to handle clicks outside the modal to close it
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Effect to add event listener for clicks outside the modal when it is open
  useEffect(() => {
    if (openModal) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openModal]);

  // Function to handle input changes in the form
  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(formData));
    closeModal();
  };

  // Check if formData and openModal are defined before rendering the modal
  if (!formData || !openModal) return null;

  // Render the modal with form inputs for editing product details
  return (
    <section className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded shadow-lg w-96 relative"
      >
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        {/* Form for editing product details */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />

          <Input
            name="category"
            value={formData.category || ''}
            onChange={handleChange}
            placeholder="Category"
            required
          />

          <Input
            name="price"
            value={formData.price || ''}
            onChange={handleChange}
            placeholder="Price"
            required
          />

          <Input
            name="stock"
            value={formData.stock || ''}
            onChange={handleChange}
            placeholder="Stock"
            required
          />
          <textarea
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            className="w-full border px-3 py-1 rounded resize-none"
            placeholder="Description"
            rows="3"
          ></textarea>

          {/* Button to submit or Cancel the form */}
          <div className="flex justify-between items-center pt-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Save
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-stone-300 text-black px-4 py-2 rounded transition-all hover:bg-stone-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
