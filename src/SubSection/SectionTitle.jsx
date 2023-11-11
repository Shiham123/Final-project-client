import PropTypes from 'prop-types';

const SectionTitle = (props) => {
  const { heading, subHeading, isCheck } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-8 my-20">
      <h2 className="text-xl font-inter uppercase text-subTitleColor">
        {subHeading}
      </h2>
      <h1
        className={
          isCheck
            ? 'text-fontColorOne uppercase font-inter text-2xl md:text-3xl lg:text-4xl border-t-4 border-borderColorOne py-4 border-b-4 w-2/3 md:w-2/4 lg:w-1/4 text-center'
            : 'text-footerBgColorThree uppercase font-inter text-2xl md:text-3xl lg:text-4xl border-t-4 border-borderColorOne py-4 border-b-4 w-2/3 md:w-2/4 lg:w-1/4 text-center'
        }
      >
        {heading}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  isCheck: PropTypes.string,
};

export default SectionTitle;
