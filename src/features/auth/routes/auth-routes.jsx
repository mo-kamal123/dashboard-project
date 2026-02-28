import ForgetPassword from '../components/forget-password';
import Login from '../components/login';
import ResetPassword from '../components/reset-password';
import Verify from '../components/verify';
import AuthLayout from '../layout/auth-layout';

export const authRoutes = {
  // This is the root path for authentication-related routes
  path: '/auth',
  element: <AuthLayout />,
  children: [
    { index: true, element: <Login /> },
    { path: 'forget-password', element: <ForgetPassword /> },
    { path: 'verify', element: <Verify /> },
    { path: 'reset-password', element: <ResetPassword /> },
  ],
};
