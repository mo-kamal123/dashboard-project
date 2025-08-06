import { RiBillLine, RiDashboardHorizontalFill } from 'react-icons/ri';
import { TbTableShortcut } from 'react-icons/tb';
import { Link, NavLink } from 'react-router';
import {
  MdOutlineCircleNotifications,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

// This component renders a sidebar with navigation links for the dashboard, tables, billing, and notifications.
const Sidebar = () => {
  // Array of navigation links with titles, URLs, and icons
  const navUrl = [
    { title: 'Dashboard', url: '/', icon: <MdOutlineSpaceDashboard /> },
    { title: 'Tables', url: '/tables', icon: <TbTableShortcut /> },
    { title: 'Invoices', url: '/invoices', icon: <RiBillLine /> },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: <MdOutlineCircleNotifications />,
    },
  ];
  return (
    <aside className="w-[240px] m-2 h-[calc(100vh-1rem)] bg-white rounded-2xl border-[1px] border-sec">
      <Link
        to={'/'}
        className="flex items-center gap-4 py-6 px-5 text-xl font-semibold"
      >
        <p className="text-2xl">
          <RiDashboardHorizontalFill />
        </p>
        Dashboard
      </Link>
      <div className="flex flex-col justify-between h-full">
        <ul className="w-[90%] mx-auto">
          {/* Render navigation links using NavLink for active state styling */}
          {navUrl.map((nav) => (
            <li>
              <NavLink
                to={`${nav.url}`}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 mb-3 rounded text- ${
                    isActive
                      ? 'bg-main text-white'
                      : 'text-black hover:bg-gray-100'
                  } transition-all duration-300`
                }
              >
                <p>{nav.icon}</p>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-[90%] mx-auto mb-24">
          <NavLink to={'/profile'} className="flex items-center gap-2">
            <p className="text-2xl">
              <CgProfile />
            </p>
            Your Profile
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
