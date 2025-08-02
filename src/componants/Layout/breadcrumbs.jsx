import { Link } from "react-router";

const Breadcrumbs = ({ links }) => {
  return (
    <div className="flex items-center">
      Pages /{' '}
      {links.map((link) => (
        <Link to={link.url}> {link.title} / </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
