import { RiBillLine, RiDashboardHorizontalFill } from 'react-icons/ri';
import Btn from '../UI/Btn';
import { NavLink } from 'react-router';
import {
  MdOutlineCircleNotifications,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';
import { TbTableShortcut } from 'react-icons/tb';

const Sidebar = () => {
  const navUrl = [
    { title: 'dashboard', url: '/', icon: <MdOutlineSpaceDashboard /> },
    { title: 'tables', url: '/tables', icon: <TbTableShortcut /> },
    { title: 'billing', url: '/billing', icon: <RiBillLine /> },
    {
      title: 'notifications',
      url: '/notifications',
      icon: <MdOutlineCircleNotifications />,
    },
  ];
  return (
    <div className="w-[240px] m-2 h-[calc(100vh-1rem)] bg-white rounded-2xl border-[1px] border-sec">
      <div className="flex items-center gap-4 py-6 px-5 text-xl font-semibold">
        <p className="text-2xl">
          <RiDashboardHorizontalFill />
        </p>
        Dashboard
      </div>
      <div className="w-[90%] m-auto">
        {navUrl.map((nav) => (
          <NavLink
            to={`${nav.url}`}
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-2 mb-3 rounded text- ${
                isActive ? 'bg-main text-white' : 'text-black hover:bg-gray-100'
              } transition-all duration-300`
            }
          >
            <p>{nav.icon}</p>
            {nav.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
