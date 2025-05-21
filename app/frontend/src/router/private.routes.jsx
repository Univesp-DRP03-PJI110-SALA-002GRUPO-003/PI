import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  // return Boolean(localStorage.getItem('token'))
  return true;
};

const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
