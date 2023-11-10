import { Outlet } from 'react-router-dom';
import NavbarSection from '../Section/Navbar/NavbarSection';

const MainLayout = () => {
  return (
    <>
      <NavbarSection />
      <Outlet />
    </>
  );
};

export default MainLayout;
