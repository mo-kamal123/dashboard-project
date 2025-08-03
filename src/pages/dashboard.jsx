import { FaEye, FaRegMoneyBill1, FaUsers } from 'react-icons/fa6';
import Breadcrumbs from '../componants/Layout/Breadcrumbs';
import Card from '../componants/UI/card';
import { FaShoppingCart } from 'react-icons/fa';
import BarChart from '../componants/UI/bar-chart';
import StatisticCard from '../componants/UI/statistic-card';
import LineChart from '../componants/UI/line-chart';
import Table from '../componants/UI/table';

// This is the main dashboard page that displays various statistics and metrics
const Dashboard = () => {
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

  return (
    <div className="w-full mr-5">
      {/* Breadcrumbs for navigation */}
      <div className="mt-8">
        <Breadcrumbs
          dashboard={true}
          links={[{ title: 'Dashboard', url: '/' }]}
        />
      </div>
      {/* Main title and description */}
      <div className="my-5">
        <h1 className="text-2xl font-black">Dashboard</h1>
        <p className="text-gray-500">
          Check the sales, value and bounce rate by country.
        </p>
      </div>
      {/* Card components displaying various statistics */}
      <div className="grid grid-cols-4 gap-5 w-full mt-5">
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
      </div>
      <div className="grid grid-cols-2 gap-5">
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
      </div>
      <div className="bg-white p-5 border border-sec rounded-xl">
        <h2 className="text-2xl mb-3">Top selling products</h2>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
