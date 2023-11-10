import { Outlet } from 'react-router-dom';
import NavbarSection from '../Section/Navbar/NavbarSection';
import FooterSection from '../Section/Footer/FooterSection';

const MainLayout = () => {
  return (
    <>
      <NavbarSection />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default MainLayout;
