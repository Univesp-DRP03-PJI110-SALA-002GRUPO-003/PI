import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  return Boolean(localStorage.getItem('token'))};

const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
