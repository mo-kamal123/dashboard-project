import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import Sidebar from '../componants/Layout/sidebar';

const RootLayout = () => {
  const isAuthenticated = useSelector((state) => state.login.logged);

  return isAuthenticated ? (
    <div className="flex bg-body min-h-screen">
      {/* Sidebar - Fixed */}
      <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-5">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={'/auth'} replace />
  );
};

export default RootLayout;
