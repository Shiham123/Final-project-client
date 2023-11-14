import { Outlet } from 'react-router-dom';
import DashBroadLeft from '../Pages/DashBroad/DashBroadLeft';

const DrawerLayout = () => {
  return (
    <div className="flex">
      <DashBroadLeft />
      <div className="flex-1 p-12">
        <Outlet />
      </div>
    </div>
  );
};

export default DrawerLayout;
