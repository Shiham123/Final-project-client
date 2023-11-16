import AdminLayout from './Addmin/AdminLayout';
import UserPanelLayout from './UserDashBroad/UserPanelLayout';

const DashBroadLeft = () => {
  const admin = true;
  return <>{admin ? <AdminLayout /> : <UserPanelLayout />}</>;
};

export default DashBroadLeft;
