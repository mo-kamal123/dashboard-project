import Breadcrumbs from '../components/Layout/breadcrumbs';
import Table from '../components/UI/table';
import Modal from '../components/UI/modal';
import useSearch from '../hooks/useSearch';
import { useState } from 'react';
import { searchStrategies } from '../utils/table_filter';
import ItemStatus from '../components/UI/item-status';

// products data to be displayed in the table
const products = [
  { product: 'Shirt', category: 'Man clothes', price: '$100', stock: 500 },
  { product: 'T-Shirt', category: 'Man clothes', price: '$50', stock: 300 },
  { product: 'Jeans', category: 'Man clothes', price: '$80', stock: 200 },
  { product: 'Jacket', category: 'Man clothes', price: '$150', stock: 100 },
  { product: 'hoody', category: 'Man clothes', price: '$160', stock: 140 },
];

// orders data to be displayed in the second table
const orders = [
  { order: '#12345', customer: 'John Doe', total: '$250', status: 'Completed' },
  { order: '#12346', customer: 'Jane Smith', total: '$180', status: 'Pending' },
  {
    order: '#12347',
    customer: 'Mike Johnson',
    total: '$320',
    status: 'Shipped',
  },
  {
    order: '#12348',
    customer: 'Sarah Wilson',
    total: '$95',
    status: 'Cancelled',
  },
  {
    order: '#12349',
    customer: 'David Brown',
    total: '$420',
    status: 'Processing',
  },
];

// headers for both tables
const productsHeaders = ['Product', 'Category', 'Price', 'Stock'];
const ordersHeaders = ['Order ID', 'Customer', 'Total', 'Status'];

// this is the main tables page that displays various tables
const Tables = () => {
  const [search, setSearch] = useState('');
  const [searchOrders, setSearchOrders] = useState('');

  // Get filtered products
  const filteredProducts = useSearch(
    products,
    search,
    searchStrategies.products
  );

  // Get filtered orders (if you want to add search to orders table too)
  const filteredOrders = useSearch(
    orders,
    searchOrders,
    searchStrategies.orders
  ); // Pass field type for orders

  // Handle search for products table
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle search for orders table
  const handleOrdersSearch = (e) => {
    setSearchOrders(e.target.value);
  };

  return (
    <section className="w-full">
      {/* Breadcrumbs for navigation */}
      <nav aria-label="Breadcrumb" className="mt-8">
        <Breadcrumbs links={[{ title: 'Tables', url: '/tables' }]} />
      </nav>

      {/* Products Table 1 */}
      <section
        aria-label="Products Table"
        className="bg-white rounded-2xl overflow-hidden mt-5"
      >
        <header className="bg-main py-5 px-3 flex justify-between items-center">
          <h2 className="text-2xl text-white font-semibold">
            Top Products Table ({filteredProducts.length})
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
        <Table tableHeaders={productsHeaders}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <tr
                key={`product-${index}`} // Better key
                className="text-gray-500 font-light text-base hover:bg-gray-100 transition-colors duration-300"
              >
                <td className="p-3">{item.product}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3">{item.stock}</td>
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

      {/* Orders Table 2 */}
      <section
        aria-label="Orders Table"
        className="bg-white rounded-2xl overflow-hidden mt-5"
      >
        <header className="bg-main py-5 px-3 flex justify-between items-center">
          <h2 className="text-2xl text-white font-semibold">
            Recent Orders Table ({filteredOrders.length})
          </h2>
          <input
            onChange={handleOrdersSearch}
            type="text"
            name="searchOrders"
            id="searchOrders"
            className="bg-white py-1 px-3 rounded"
            placeholder="Search orders..."
            value={searchOrders}
          />
        </header>
        <Table tableHeaders={ordersHeaders}>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((item, index) => (
              <tr
                key={`order-${index}`} // Better key
                className="text-gray-500 font-light text-base hover:bg-gray-100 transition-colors duration-300"
              >
                <td className="p-3">{item.order}</td>
                <td className="p-3">{item.customer}</td>
                <td className="p-3">{item.total}</td>
                <td className="p-3">
                  <ItemStatus status={item.status} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={ordersHeaders.length}
                className="p-3 text-center text-gray-500"
              >
                No orders found matching "{searchOrders}"
              </td>
            </tr>
          )}
          {/* Pass filtered data to Modal */}
          <Modal data={filteredOrders} path={'/tables'} type={'table'} />
        </Table>
      </section>
    </section>
  );
};

export default Tables;
