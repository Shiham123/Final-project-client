import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';

import useJson from '../../Hooks/useJson';
import SectionTitle from '../../SubSection/SectionTitle';

const TestimonialSection = () => {
  const reviewsData = useJson();
  const { reviews } = reviewsData;

  return (
    <section className="max-w-screen-2xl mx-auto my-[10rem]">
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="---What Our Clients Say---"
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => {
          const { _id, name, details, rating } = review;
          return (
            <SwiperSlide key={_id}>
              <div className="px-[10rem] flex flex-col justify-center items-center gap-12">
                <Rating style={{ maxWidth: 300 }} value={rating} isRequired />
                <FaQuoteLeft size={100} />
                <p className="text-[20px] leading-[35px] font-inter text-[#444] text-center">
                  {details}
                </p>
                <h1 className="uppercase text-4xl font-inter text-testimonialColor">
                  {name}
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
