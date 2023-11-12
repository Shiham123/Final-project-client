import PropTypes from 'prop-types';

const PerOrderItem = (props) => {
  const { orderedData } = props;
  const { name, recipe, image, price } = orderedData;

  return (
    <div className="bg-cardBgColor h-full">
      <div className="w-full relative">
        <img className="object-cover h-full w-full" src={image} alt="" />
        <div className="absolute top-5 right-5 bg-black text-white p-2 rounded-lg">
          <p className="font-semibold font-inter text-sm">$ {price}</p>
        </div>
      </div>

      <div className="py-[3rem] px-[1rem] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-inter">{name}</h1>
        <p className="text-xl font-inter text-footerBgColorThree text-center py-4">
          {recipe}
        </p>
        <button className="bg-borderColorOne p-4 text-xl rounded-lg border-b-4 border-b-buttonColorOne text-buttonColorOne hover:bg-footerBgColorOne duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

PerOrderItem.propTypes = {
  orderedData: PropTypes.object.isRequired,
};

export default PerOrderItem;
