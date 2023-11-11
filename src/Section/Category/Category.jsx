import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import imgOne from '../../assets/home/slide1.jpg';
import imgTwo from '../../assets/home/slide2.jpg';
import imgThree from '../../assets/home/slide3.jpg';
import imgFour from '../../assets/home/slide4.jpg';
import imgFive from '../../assets/home/slide5.jpg';
import SectionTitle from '../../SubSection/SectionTitle';
import { useEffect, useState } from 'react';

const Category = () => {
  const [sliderCount, setSliderCount] = useState(4);

  useEffect(() => {
    const sliderSize = () => {
      if (window.innerWidth < 640) {
        setSliderCount(1);
      } else if (window.innerWidth < 1024) {
        setSliderCount(2);
      } else {
        setSliderCount(4);
      }
    };

    sliderSize();

    window.addEventListener('resize', sliderSize);

    return () => {
      window.removeEventListener('resize', sliderSize);
    };
  }, []);
  return (
    <>
      <section className="my-[10rem] max-w-screen-xl mx-auto">
        <SectionTitle
          heading="order online"
          subHeading={'---From 11:00am to 10:00pm---'}
        ></SectionTitle>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={sliderCount}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide style={{ margin: '10rem' }}>
            <div className="relative">
              <img src={imgOne} alt="" className="rounded-lg" />
              <h3 className="text-4xl uppercase absolute bottom-[2rem] left-[4rem] font-inter text-fontColorOne">
                Salad
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={imgTwo} alt="" className="rounded-lg" />
              <h3 className="text-4xl uppercase absolute bottom-[2rem] left-[4rem] font-inter text-fontColorOne">
                Pizza
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={imgThree} alt="" className="rounded-lg" />
              <h3 className="text-4xl uppercase absolute bottom-[2rem] left-[4rem] font-inter text-fontColorOne">
                soup
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={imgFour} alt="" className="rounded-lg" />
              <h3 className="text-4xl uppercase absolute bottom-[2rem] left-[4rem] font-inter text-fontColorOne">
                Desert
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={imgFive} alt="" className="rounded-lg" />
              <h3 className="text-4xl uppercase absolute bottom-[2rem] left-[4rem] font-inter text-fontColorOne">
                Salad
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
