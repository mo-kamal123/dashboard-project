import Breadcrumbs from '../componants/Layout/Breadcrumbs';
import Table from '../componants/UI/table';
import Modal from '../componants/UI/modal';

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

const productsHeaders = ['Product', 'Category', 'Price', 'Stock'];
const ordersHeaders = ['Order ID', 'Customer', 'Total', 'Status'];

// this is the main tables page that displays various tables
const Tables = () => {
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
        <header className="bg-main py-5 px-3 text-center">
          <h2 className="text-2xl text-white font-semibold">
            Top Products Table
          </h2>
        </header>
        <Table tableHeaders={productsHeaders}>
          {products.map((item, index) => (
            <tr
              key={index}
              className="text-gray-500 font-light text-base hover:bg-gray-100 transition-colors duration-300"
            >
              <td className="p-3">{item.product}</td>
              <td className="p-3">{item.category}</td>
              <td className="p-3">{item.price}</td>
              <td className="p-3">{item.stock}</td>
            </tr>
          ))}
          <Modal data={products} path={'/tables'} type={'table'} />
        </Table>
      </section>

      {/* Orders Table 2 */}
      <section
        aria-label="Orders Table"
        className="bg-white rounded-2xl overflow-hidden mt-5"
      >
        <header className="bg-main py-5 px-3 text-center">
          <h2 className="text-2xl text-white font-semibold">
            Recent Orders Table
          </h2>
        </header>
        <Table tableHeaders={ordersHeaders}>
          {orders.map((item, index) => (
            <tr
              // onClick={() => navigate(`${item.order}`)}
              key={index}
              className="text-gray-500 font-light text-base hover:bg-gray-100 transition-colors duration-300"
            >
              <td className="p-3">{item.order}</td>
              <td className="p-3">{item.customer}</td>
              <td className="p-3">{item.total}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : item.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : item.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : item.status === 'Processing'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-red-100 text-red-800'
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
          <Modal data={orders} path={'/tables'} type={'table'} />
        </Table>
      </section>
    </section>
  );
};

export default Tables;
