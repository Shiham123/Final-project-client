import { Helmet } from 'react-helmet-async';
import CoverSection from '../../Section/Cover/CoverSection';
import imgOne from '../../assets/menu/banner3.jpg';
import imgTwo from '../../assets/menu/dessert-bg.jpeg';
import imgThree from '../../assets/menu/pizza-bg.jpg';
import imgFour from '../../assets/menu/salad-bg.jpg';
import imgFive from '../../assets/menu/soup-bg.jpg';

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
        sectionTitle={true}
      />

      {/* second section */}

      <CoverSection
        heading="DESSERTS"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={imgTwo}
      />
      <PopularMenuSection
        category="dessert"
        buttonText="ORDER YOUR FAVOURITE FOOD"
        sectionTitle={false}
      />

      {/* third section */}

      <CoverSection
        heading="PIZZA"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={imgThree}
      />
      <PopularMenuSection
        category="pizza"
        buttonText="ORDER YOUR FAVOURITE FOOD"
        sectionTitle={false}
      />

      {/* section four */}

      <CoverSection
        heading="SALADS"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={imgFour}
      />
      <PopularMenuSection
        category="salad"
        buttonText="ORDER YOUR FAVOURITE FOOD"
        sectionTitle={false}
      />

      {/* section five */}

      <CoverSection
        heading="SOUPS"
        para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={imgFive}
      />
      <PopularMenuSection
        category="soup"
        buttonText="ORDER YOUR FAVOURITE FOOD"
        sectionTitle={false}
      />

      {/* section six */}
    </div>
  );
};

export default MenuPage;
