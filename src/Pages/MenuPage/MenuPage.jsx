import { Helmet } from 'react-helmet-async';
import CoverSection from '../../Section/Cover/CoverSection';
import imgOne from '../../assets/menu/banner3.jpg';
import PopularMenuSection from '../../Section/Menu/PopularMenuSection';

const MenuPage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro website || our menu</title>
      </Helmet>
      <CoverSection
        heading="our menu"
        para="Would you like to try a dish?"
        img={imgOne}
      />
      <PopularMenuSection
        category="offered"
        buttonText="ORDER YOUR FAVOURITE FOOD"
      />
    </div>
  );
};

export default MenuPage;
