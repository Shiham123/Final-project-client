import { Helmet } from 'react-helmet-async';
import CoverSection from '../../Section/Cover/CoverSection';
import MenuImg from '../../assets/menu/banner3.jpg';
import PopularMenuSection from '../../Section/Menu/PopularMenuSection';

const MenuPage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro website || our menu</title>
      </Helmet>
      <CoverSection img={MenuImg} title={'Our menu'} />
      <PopularMenuSection />
      <CoverSection img={MenuImg} title={'Our menu'} />
      <PopularMenuSection />
      <CoverSection img={MenuImg} title={'Our menu'} />
      <PopularMenuSection />
    </div>
  );
};

export default MenuPage;
