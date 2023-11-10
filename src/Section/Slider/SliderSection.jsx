import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import imgOne from '../../assets/home/01.jpg';
import imgTwo from '../../assets/home/02.jpg';
import imgThree from '../../assets/home/03.png';
import imgFour from '../../assets/home/04.jpg';
import imgFive from '../../assets/home/05.png';
import imgSix from '../../assets/home/06.png';

const SliderSection = () => {
  return (
    <div>
      <Carousel showArrows={false} showStatus={false}>
        <img src={imgOne} alt="" />
        <img src={imgTwo} alt="" />
        <img src={imgThree} alt="" />
        <img src={imgFour} alt="" />
        <img src={imgFive} alt="" />
        <img src={imgSix} alt="" />
      </Carousel>
    </div>
  );
};

export default SliderSection;
