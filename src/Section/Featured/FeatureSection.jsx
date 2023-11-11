import SectionTitle from '../../SubSection/SectionTitle';
import featureBgImg from '../../assets/home/featured.jpg';

const FeatureSection = () => {
  return (
    <section className="my-[10rem]">
      <SectionTitle heading="Featured item" subHeading="check it out" />
      <div className="relative">
        <img src={featureBgImg} className="blur-sm brightness-50" alt="" />
        <div className="flex justify-center items-center py-8 px-[10rem] gap-8 absolute top-[25rem] text-fontColorOne">
          <div>
            <img src={featureBgImg} className="rounded-lg" alt="" />
          </div>
          <div>
            <p>Aug 20, 2029</p>
            <p className="uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur
            </p>
            <button>Open now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
