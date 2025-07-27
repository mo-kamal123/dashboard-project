import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

// This component serves as a layout for the main application
const RootLayout = () => {
  const isAuthenticated = useSelector((state) => state.login.logged);

  // Check if the user is authenticated
  return isAuthenticated ? <Outlet /> : <Navigate to={'/auth'} replace />;
};

export default RootLayout;
