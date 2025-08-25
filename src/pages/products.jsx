import { useSelector } from 'react-redux';
import Breadcrumbs from '../components/Layout/breadcrumbs';
import Modal from '../components/UI/modal';
import Table from '../components/UI/table';
import Input from '../components/UI/input';
import ActionBtns from '../components/UI/action-Btns';
import PaginationActions from '../components/UI/pagination-actions';
import useTableLogic from '../hooks/useTableLogic';

const productsHeaders = ['Product', 'Category', 'Price', 'Stock', 'actions'];

const Products = () => {
  const mainProducts = useSelector((state) => state.products.products); // Fetch products from Redux store
  const {
    handleCloseModal,
    handleDelete,
    handleEdit,
    handleSearch,
    openModal,
    search,
    selectedProduct,
    paginatedData,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
  } = useTableLogic(mainProducts);

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
            Top Products Table ({mainProducts.length})
          </h2>
          <Input
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
          {paginatedData.length > 0 ? (
            paginatedData.map((item, index) => (
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
                  <ActionBtns
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    item={item}
                  />
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
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <PaginationActions
          currentPage={currentPage}
          totalPages={totalPages}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
        />
      )}
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
