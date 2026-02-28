import { createBrowserRouter } from 'react-router';
import { authRoutes } from '../../features/auth/routes/auth-routes';
import { productsRoutes } from '../../features/tables/routes/products-routes';
import { profileRoutes } from '../../features/profile/routes/profile-routes';
import RootLayout from '../layouts/root-layout';
import Tables from '../../features/tables/pages/tables';
import Notification from '../../features/notifications/pages/notification';
import Dashboard from '../../features/dashboard/pages/dashboard';
import Invoices from '../../features/invoices/pages/invoices';

export const router = createBrowserRouter([
  // Including the authentication routes
  authRoutes,
  {
    // This is the root path for the main application
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'tables', element: <Tables /> },
      { path: 'invoices', element: <Invoices /> },
      { path: 'notifications', element: <Notification /> },

      // Spread the products routes here
      ...productsRoutes,

      // Spread the profile routes here
      ...profileRoutes,
    ],
  },
]);
