import { Outlet } from 'react-router-dom';
import NavbarSection from '../Section/NavbarSection';

const MainLayout = () => {
  return (
    <>
      <NavbarSection />
      <Outlet />
    </>
  );
};

export default MainLayout;
