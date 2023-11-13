import { useContext } from 'react';
import { AppContext } from '../Context/context';
import { Navigate, useLocation } from 'react-router-dom';
import Proptypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AppContext);
  const location = useLocation();

  if (isLoading) return <progress className="progress w-56"></progress>;

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

PrivateRoute.propTypes = {
  children: Proptypes.node.isRequired,
};

export default PrivateRoute;
