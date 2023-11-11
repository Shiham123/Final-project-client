import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import imgOne from '../../assets/home/slide1.jpg';
import imgTwo from '../../assets/home/slide2.jpg';
import imgThree from '../../assets/home/slide3.jpg';
import imgFour from '../../assets/home/slide4.jpg';
import imgFive from '../../assets/home/slide5.jpg';
import SectionTitle from '../../SubSection/SectionTitle';

const Category = () => {
  return (
    <>
      <section className="my-[10rem]">
        <SectionTitle
          heading="order online"
          subHeading={'---From 11:00am to 10:00pm---'}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
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
