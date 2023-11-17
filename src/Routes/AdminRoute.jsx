import { useContext } from 'react';
import { AppContext } from '../Context/context';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useContext(AppContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (isLoading || isAdminLoading)
    return <progress className="progress w-56"></progress>;

  if (user && isAdmin) return children;

  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
