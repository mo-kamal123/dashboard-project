import Card from '../componants/UI/card';
import { FaDownload, FaEye, FaRegMoneyBill1, FaUsers } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import Breadcrumbs from '../componants/Layout/Breadcrumbs';
import Table from '../componants/UI/table';

// cardData contains the data for the cards displayed on the invoices page
const cardData = [
  {
    title: 'Total Invoices',
    value: '$53k',
    icon: <FaRegMoneyBill1 />,
  },
  {
    title: 'Paid Invoices',
    value: '$22,300',
    icon: <FaUsers />,
  },
  {
    title: 'Pending Invoices',
    value: '$3,462',
    icon: <FaEye />,
  },
  {
    title: 'Total Revenue',
    value: '$103,430',
    icon: <FaShoppingCart />,
  },
];
// invoicesData contains the data for the invoices displayed in the table
const invoicesData = [
  {
    id: 'INV-1001',
    customer: 'John Doe',
    date: '2025-08-01',
    status: 'Paid',
    paymentMethod: 'Credit Card',
    amount: 120.0,
  },
  {
    id: 'INV-1002',
    customer: 'Sarah Lee',
    date: '2025-08-02',
    status: 'Pending',
    paymentMethod: 'PayPal',
    amount: 75.0,
  },
  {
    id: 'INV-1003',
    customer: 'Ali Hassan',
    date: '2025-08-03',
    status: 'Paid',
    paymentMethod: 'Cash on Delivery',
    amount: 50.0,
  },
  {
    id: 'INV-1004',
    customer: 'Maria Gomez',
    date: '2025-08-04',
    status: 'Failed',
    paymentMethod: 'Credit Card',
    amount: 220.0,
  },
  {
    id: 'INV-1005',
    customer: 'Omar Khaled',
    date: '2025-08-05',
    status: 'Paid',
    paymentMethod: 'Bank Transfer',
    amount: 310.0,
  },
];
// headers contains the headers for the invoices table
const headers = [
  'Invoice ID',
  'Customer',
  'Date',
  'Status',
  'Payment Method',
  'Amount',
  'Actions',
];

// This component renders the Invoices page, which includes a list of invoices and various statistics
const Invoices = () => {
  return (
    <section className="w-full">
      {/* Breadcrumbs for navigation */}
      <nav aria-label="Breadcrumb" className="mt-8">
        <Breadcrumbs
          dashboard={true}
          links={[{ title: 'Invoices', url: '/' }]}
        />
      </nav>

      {/* Card components displaying various statistics */}
      <section
        aria-label="Invoice Statistics"
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

      {/* Invoices table section */}
      <section
        aria-label="Invoices Table"
        className="bg-white p-5 mt-10 border border-sec rounded-xl"
      >
        <h2 className="text-2xl mb-3">Invoices</h2>
        {/* Render the invoices table with headers and data */}
        <Table tableHeaders={headers}>
          {invoicesData.map((invoice, index) => (
            <tr
              key={index}
              className="text-gray-500 font-light text-base hover:bg-gray-100 transition-colors duration-300"
            >
              {/* Render each invoice's details in the table cells */}
              <td className="p-3">{invoice.id}</td>
              <td className="p-3">{invoice.customer}</td>
              <td className="p-3">{invoice.date}</td>
              <td className="p-3">{invoice.status}</td>
              <td className="p-3">{invoice.paymentMethod}</td>
              <td className="p-3">{invoice.amount}</td>
              <td className="p-3">
                <button className="bg-main text-white p-2 rounded-lg">
                  <FaDownload />
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </section>
    </section>
  );
};

export default Invoices;
