import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import imgOne from '../../assets/home/01.jpg';
import imgTwo from '../../assets/home/02.jpg';
import imgThree from '../../assets/home/03.png';
import imgFour from '../../assets/home/04.jpg';
import imgFive from '../../assets/home/05.png';
import imgSix from '../../assets/home/06.png';

import './sliderSection.scss';

const SliderSection = () => {
  return (
    <div>
      <Carousel showArrows={false} showStatus={false}>
        <div>
          <img src={imgOne} alt="" />
        </div>
        <div>
          <img src={imgTwo} alt="" />
        </div>
        <div>
          <img src={imgThree} alt="" />
        </div>
        <div>
          <img src={imgFour} alt="" />
        </div>
        <div>
          <img src={imgFive} alt="" />
        </div>
        <div>
          <img src={imgSix} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderSection;
