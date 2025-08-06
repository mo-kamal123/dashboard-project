import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import {
  MdOutlineSpaceDashboard,
  MdOutlineCircleNotifications,
} from 'react-icons/md';
import { TbTableShortcut } from 'react-icons/tb';
import { RiBillLine, RiDashboardHorizontalFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-main text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[240px] bg-white border-r border-sec rounded-r-2xl shadow-md transform z-10 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:h-[calc(100vh-1rem)] lg:m-2`}
        aria-label="Sidebar Navigation"
      >
        {/* Logo / Main Link */}
        <Link
          to="/"
          className="flex items-center gap-4 py-6 px-5 text-xl font-semibold border-b border-gray-200"
        >
          <span className="text-2xl">
            <RiDashboardHorizontalFill />
          </span>
          <span>Dashboard</span>
        </Link>

        <div className="flex flex-col justify-between h-full">
          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="w-[90%] mx-auto mt-4 space-y-2">
              {navUrl.map((nav) => (
                <li key={nav.url}>
                  <NavLink
                    to={nav.url}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 rounded-lg ${
                        isActive
                          ? 'bg-main text-white'
                          : 'text-black hover:bg-gray-100'
                      } transition-all duration-300`
                    }
                    onClick={() => setIsOpen(false)} // Close sidebar on mobile click
                  >
                    <span className="text-lg">{nav.icon}</span>
                    <span>{nav.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Profile Link */}
          <footer className="w-[90%] mx-auto  mb-26 border-t border-gray-200 pt-4">
            <NavLink
              to="/profile"
              className="flex items-center gap-2 hover:text-main transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl">
                <CgProfile />
              </span>
              <span>Your Profile</span>
            </NavLink>
          </footer>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0 bg-black bg-opacity-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
