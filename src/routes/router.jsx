import { createBrowserRouter } from 'react-router';
import Home from '../pages/dashboard';
import AuthLayout from '../layouts/auth-layout';
import Login from '../componants/auth/login';
import ForgetPassword from '../componants/auth/forget-password';
import RootLayout from '../layouts/root-layout';
import Verify from '../componants/auth/verify';
import ResetPassword from '../componants/auth/reset-password';
import Tables from '../pages/tables';
import Notification from '../pages/notification';
import Dashboard from '../pages/dashboard';
import Invoices from '../pages/invoices';

export const router = createBrowserRouter([
  {
    // This is the root path for authentication-related routes
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'verify', element: <Verify /> },
      { path: 'reset-password', element: <ResetPassword /> },
    ],
  },
  {
    // This is the root path for the main application
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: ':product', element: <Dashboard /> },
      { path: 'tables', element: <Tables /> },
      { path: 'tables/:product', element: <Tables /> },
      { path: 'invoices', element: <Invoices /> },
      { path: 'notifications', element: <Notification /> },
    ],
  },
]);
