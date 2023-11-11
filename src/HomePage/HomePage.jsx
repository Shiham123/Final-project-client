import Category from '../Section/Category/Category';
import FeatureSection from '../Section/Featured/FeatureSection';
import PopularMenuSection from '../Section/Menu/PopularMenuSection';
import SliderSection from '../Section/Slider/SliderSection';

const HomePage = () => {
  return (
    <div>
      <SliderSection />
      <Category />
      <PopularMenuSection />
      <FeatureSection />
    </div>
  );
};

export default HomePage;
