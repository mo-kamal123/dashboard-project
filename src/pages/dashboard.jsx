import { FaEye, FaRegMoneyBill1, FaUsers } from 'react-icons/fa6';
import Breadcrumbs from '../componants/Layout/Breadcrumbs';
import Card from '../componants/UI/card';
import { FaShoppingCart } from 'react-icons/fa';
import BarChart from '../componants/UI/bar-chart';
import StatisticCard from '../componants/UI/statistic-card';
import LineChart from '../componants/UI/line-chart';
import Table from '../componants/UI/table';

// This data is used to populate the cards on the dashboard
const cardData = [
  {
    title: "Today's Money",
    value: '$53k',
    icon: <FaRegMoneyBill1 />,
    percent: +55,
    desc: ' than last week',
  },
  {
    title: "Today's Users",
    value: '2300',
    icon: <FaUsers />,
    percent: +3,
    desc: ' than last month',
  },
  {
    title: 'Ads Views',
    value: '3,462',
    icon: <FaEye />,
    percent: -2,
    desc: ' than yesterday',
  },
  {
    title: 'Sales',
    value: '$103,430',
    icon: <FaShoppingCart />,
    percent: +5,
    desc: ' than yesterday',
  },
];
// products data to be displayed in the table
const products = [
  {
    product: 'Shirt',
    category: 'Man clothes',
    price: '$100',
    stock: 500,
    description:
      'Classic formal shirt made from premium cotton, perfect for office and casual wear.',
  },
  {
    product: 'T-Shirt',
    category: 'Man clothes',
    price: '$50',
    stock: 300,
    description:
      'Comfortable cotton T-shirt with a modern fit, suitable for everyday use.',
  },
  {
    product: 'Jeans',
    category: 'Man clothes',
    price: '$80',
    stock: 200,
    description:
      'Slim-fit denim jeans with a stylish design, durable and versatile for any occasion.',
  },
  {
    product: 'Jacket',
    category: 'Man clothes',
    price: '$150',
    stock: 100,
    description:
      'Warm and stylish jacket made from high-quality fabric, ideal for cold weather.',
  },
  {
    product: 'Hoody',
    category: 'Man clothes',
    price: '$160',
    stock: 140,
    description:
      'Cozy and trendy hoodie with soft inner lining for maximum comfort and warmth.',
  },
];

const headers = ['Product', 'Category', 'Price', 'Stock'];

// This is the main dashboard page that displays various statistics and metrics
const Dashboard = () => {
  return (
    <section className="w-full mr-5">
      {/* Breadcrumbs for navigation */}
      <nav aria-label="Breadcrumb" className="mt-8">
        <Breadcrumbs
          dashboard={true}
          links={[{ title: 'Dashboard', url: '/' }]}
        />
      </nav>

      {/* Main title and description */}
      <header className="my-5">
        <h1 className="text-2xl font-black">Dashboard</h1>
        <p className="text-gray-500">
          Check the sales, value and bounce rate by country.
        </p>
      </header>

      {/* Card components displaying various statistics */}
      <section
        aria-label="Statistics Overview"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-5"
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            percent={card.percent}
            desc={card.desc}
          />
        ))}
      </section>

      {/* Statistic cards with charts */}
      <section
        aria-label="Charts Section"
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6"
      >
        <StatisticCard
          title={'Website Views'}
          desc={'Last Campaign Performance'}
          time={'campaign sent 2 days ago'}
        >
          <BarChart />
        </StatisticCard>
        <StatisticCard
          title={'Daily Sales'}
          desc={'Last Campaign Performance'}
          time={'updated 4 min ago'}
        >
          <LineChart />
        </StatisticCard>
      </section>

      {/* Top selling products table */}
      <section
        aria-label="Top Selling Products"
        className="bg-white p-5 border border-sec rounded-xl mt-6"
      >
        <h2 className="text-2xl mb-3">Top selling products</h2>
        <Table tableHeaders={headers}>
          {/* Iterate over products and create a row for each product */}
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
        </Table>
      </section>
    </section>
  );
};

export default Dashboard;
