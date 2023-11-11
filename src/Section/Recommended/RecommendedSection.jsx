import SectionTitle from '../../SubSection/SectionTitle';
import imgOne from '../../assets/home/slide1.jpg';

const RecommendedSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <SectionTitle heading="---Should Try---" subHeading="CHEF RECOMMENDS" />
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
        {/*  */}
        <div className="bg-cardBgColor h-[35rem]">
          <div className="w-full h-1/2">
            <img className="object-cover h-full w-full" src={imgOne} alt="" />
          </div>

          <div className="py-[3rem] px-[1rem] flex flex-col justify-center items-center">
            <h1 className="text-3xl font-inter">Caeser Salad</h1>
            <p className="text-xl font-inter text-footerBgColorThree text-center py-4">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="bg-borderColorOne p-4 text-xl rounded-lg border-b-4 border-b-buttonColorOne text-buttonColorOne hover:bg-footerBgColorOne duration-300">
              Add to Cart
            </button>
          </div>
        </div>
        {/*  */}
        <div className="bg-cardBgColor h-[35rem]">
          <div className="w-full h-1/2">
            <img className="object-cover h-full w-full" src={imgOne} alt="" />
          </div>

          <div className="py-[3rem] px-[1rem] flex flex-col justify-center items-center">
            <h1 className="text-3xl font-inter">Caeser Salad</h1>
            <p className="text-xl font-inter text-footerBgColorThree text-center py-4">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="bg-borderColorOne p-4 text-xl rounded-lg border-b-4 border-b-buttonColorOne text-buttonColorOne hover:bg-footerBgColorOne duration-300">
              Add to Cart
            </button>
          </div>
        </div>
        {/*  */}
        <div className="bg-cardBgColor h-[35rem]">
          <div className="w-full h-1/2">
            <img className="object-cover h-full w-full" src={imgOne} alt="" />
          </div>

          <div className="py-[3rem] px-[1rem] flex flex-col justify-center items-center">
            <h1 className="text-3xl font-inter">Caeser Salad</h1>
            <p className="text-xl font-inter text-footerBgColorThree text-center py-4">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="bg-borderColorOne p-4 text-xl rounded-lg border-b-4 border-b-buttonColorOne text-buttonColorOne hover:bg-footerBgColorOne duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedSection;
