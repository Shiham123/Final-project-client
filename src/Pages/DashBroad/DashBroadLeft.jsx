import useAdmin from '../../Hooks/useAdmin';
import AdminLayout from './Addmin/AdminLayout';
import UserPanelLayout from './UserDashBroad/UserPanelLayout';

const DashBroadLeft = () => {
  const [isAdmin] = useAdmin();

  return <>{isAdmin ? <AdminLayout /> : <UserPanelLayout />}</>;
};

export default DashBroadLeft;
