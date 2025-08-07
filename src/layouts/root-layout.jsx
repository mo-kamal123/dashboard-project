import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import Sidebar from '../components/Layout/sidebar';

const RootLayout = () => {
  const isAuthenticated = useSelector((state) => state.login.logged);

  return isAuthenticated ? (
    <div className="flex bg-body min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-5 lg:ml-[240px] transition-all duration-300">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={'/auth'} replace />
  );
};

export default RootLayout;
