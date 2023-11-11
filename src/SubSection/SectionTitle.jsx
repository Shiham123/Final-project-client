import PropTypes from 'prop-types';

const SectionTitle = (props) => {
  const { heading, subHeading } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-8 my-20">
      <h2 className="text-xl font-inter uppercase text-subTitleColor">
        {subHeading}
      </h2>
      <h1 className="text-footerBgColorThree uppercase font-inter text-4xl border-t-4 border-borderColorOne py-4 border-b-4 w-1/4 text-center">
        {heading}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
};

export default SectionTitle;
