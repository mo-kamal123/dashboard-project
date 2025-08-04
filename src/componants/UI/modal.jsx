import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';

const Modal = ({ data, path }) => {
  const { product } = useParams();
  const navigate = useNavigate();
  const selectedItem = data.find((item) => item.product === product);
  const modalRef = useRef();

  const closeModal = () => {
    navigate(path);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => removeEventListener('mousedown', handleClickOutside);
  }, []);
  console.log(selectedItem);
  return (
    <>
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded shadow-lg w-96 relative"
          >
            <h2 className="text-2xl font-bold mb-2">{selectedItem.product}</h2>
            <p className="text-gray-500 mb-2">{selectedItem.category}</p>
            <p className="text-lg font-semibold mb-2">{selectedItem.price}</p>
            <p className="text-gray-600 mb-2">Stock: {selectedItem.stock}</p>
            <p className="text-gray-700">{selectedItem.description}</p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
