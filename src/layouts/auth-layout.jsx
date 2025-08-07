import { Navigate, Outlet } from 'react-router';
import classess from './auth.module.css';
import { useSelector } from 'react-redux';

const AuthLayout = () => {
  const isAuthenticated = useSelector((state) => state.login.logged);

  return !isAuthenticated ? (
    <div
      className={`flex justify-center items-center min-h-screen relative ${classess.bgImg}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Auth Card Container */}
      <div className="relative z-20 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-md p-4 sm:p-6">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={'/'} replace />
  );
};

export default AuthLayout;
