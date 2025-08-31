// constants/sidebar.js
import {
  MdOutlineSpaceDashboard,
  MdOutlineCircleNotifications,
} from 'react-icons/md';
import { RiBillLine } from 'react-icons/ri';
import { FaCartArrowDown, FaTableCells } from 'react-icons/fa6';

export const sidebarLinks = [
  { title: 'Dashboard', url: '/', icon: MdOutlineSpaceDashboard },
  { title: 'Tables', url: '/tables', icon: FaTableCells },
  { title: 'Products', url: '/products', icon: FaCartArrowDown },
  { title: 'Invoices', url: '/invoices', icon: RiBillLine },
  {
    title: 'Notifications',
    url: '/notifications',
    icon: MdOutlineCircleNotifications,
  },
];
