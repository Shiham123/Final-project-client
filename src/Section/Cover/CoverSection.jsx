import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const CoverSection = (props) => {
  const { heading, para, img } = props;
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="flex flex-col justify-center items-center px-[5rem] py-[10rem]">
        <div className="p-[10rem] w-2/3 flex flex-col justify-center items-center gap-8 bg-navbarBgColorOne rounded-lg">
          <h1 className="font-agbalumo text-3xl md:text-4xl lg:text-5xl text-white uppercase">
            {heading}
          </h1>
          <p className="font-agbalumo text-xl md:text-2xl lg:text-3xl text-white">
            {para}
          </p>
        </div>
      </div>
    </Parallax>
  );
};

CoverSection.propTypes = {
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CoverSection;
