import { createBrowserRouter } from 'react-router';
import Home from '../pages/home';
import AuthLayout from '../componants/Layout/auth-layout';
import Login from '../componants/auth/login';
import ForgetPassword from '../componants/auth/forget-password';
import RootLayout from '../componants/Layout/root-layout';
import Verify from '../componants/auth/verify';
import ResetPassword from '../componants/auth/reset-password';

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
    children: [{ index: true, element: <Home /> }],
  },
]);
