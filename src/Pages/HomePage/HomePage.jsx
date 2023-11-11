import SliderSection from '../../Section/Slider/SliderSection';
import Category from '../../Section/Category/Category';
import PopularMenuSection from '../../Section/Menu/PopularMenuSection';
import FeatureSection from '../../Section/Featured/FeatureSection';
import TestimonialSection from '../../Section/Testimonial/TestimonialSection';
import { Helmet } from 'react-helmet-async';

// import
const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <SliderSection />
      <Category />
      <PopularMenuSection />
      <FeatureSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
