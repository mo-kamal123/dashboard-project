import { Link } from 'react-router';

const Breadcrumbs = ({ links, dashboard }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-600">
      {!dashboard && (
        <Link to="/" className="hover:underline">
          Dashboard
        </Link>
      )}
      {dashboard && (
        <Link to="/" className="hover:underline">
          Pages
        </Link>
      )}
      {links.map((link, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span>/</span>
          <Link to={link.url} className="hover:underline">
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
