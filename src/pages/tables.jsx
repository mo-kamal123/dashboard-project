import Breadcrumbs from '../componants/Layout/Breadcrumbs';
import Table from '../componants/UI/table';

// this is the main tables page that displays various tables
const Tables = () => {
  return (
    <div>
      {/* Breadcrumbs for navigation */}
      <div className="mt-8">
        <Breadcrumbs links={[{ title: 'Tables', url: '/tables' }]} />
      </div>
      {/* products table */}
      <div className="bg-white">
        <div className="bg-main py-5 px-3 rounded-t-2xl mt-5 text-center">
          <p className="text-2xl text-white">Products Table</p>
        </div>
        <Table />
      </div>
      {/* products table */}
      <div className="bg-white">
        <div className="bg-main py-5 px-3 rounded-t-2xl mt-5 text-center">
          <p className="text-2xl text-white">Products Table</p>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Tables;
