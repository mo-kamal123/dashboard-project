import { useNavigate } from 'react-router';
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
const headers = ['Product', 'Category', 'Price', 'Stock'];

// this is the main tables page that displays various tables
const Tables = () => {
  const navigate = useNavigate();
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
          <h2 className="text-2xl text-white font-semibold">Products Table</h2>
        </header>
        <Table tableHeaders={headers}>
          {products.map((item, index) => (
            <tr
              onClick={() => navigate(`${item.product}`)}
              key={index}
              className="text-gray-500 font-light text-base hover:bg-gray-100 transition-colors duration-300"
            >
              <td className="p-3">{item.product}</td>
              <td className="p-3">{item.category}</td>
              <td className="p-3">{item.price}</td>
              <td className="p-3">{item.stock}</td>
            </tr>
          ))}
          <Modal data={products} path={'/tables'} />
        </Table>
      </section>

      {/* Products Table 2 */}
      <section
        aria-label="Products Table"
        className="bg-white rounded-2xl overflow-hidden mt-5"
      >
        <header className="bg-main py-5 px-3 text-center">
          <h2 className="text-2xl text-white font-semibold">Products Table</h2>
        </header>
        <Table tableHeaders={headers}>
          {products.map((item, index) => (
            <tr
              onClick={() => navigate(`${item.product}`)}
              key={index}
              className="text-gray-500 font-light text-base hover:bg-gray-100 transition-colors duration-300"
            >
              <td className="p-3">{item.product}</td>
              <td className="p-3">{item.category}</td>
              <td className="p-3">{item.price}</td>
              <td className="p-3">{item.stock}</td>
            </tr>
          ))}
          <Modal data={products} path={'/tables'} />
        </Table>
      </section>
    </section>
  );
};

export default Tables;
