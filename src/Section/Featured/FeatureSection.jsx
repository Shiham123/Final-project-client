import { useState } from 'react';
import SectionTitle from '../../SubSection/SectionTitle';
import featureBgImg from '../../assets/home/featured.jpg';
import './feature.scss';

const FeatureSection = () => {
  const [isCheck] = useState(true);

  return (
    <section className="my-[10rem] feature-item">
      <div className="feature-background">
        <div className="blur-background"></div>
      </div>
      <div className="content-container py-[10rem]">
        <SectionTitle
          heading="Featured item"
          subHeading="check it out"
          isCheck={isCheck}
        />
        <div className="flex justify-center items-center py-8 px-[14rem] gap-8 text-fontColorOne">
          <div>
            <img src={featureBgImg} className="rounded-lg" alt="" />
          </div>
          <div>
            <p className="font-inter p-2">Aug 20, 2029</p>
            <p className="uppercase font-inter p-2">WHERE CAN I GET SOME?</p>
            <p className="font-inter p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur
            </p>
            <button className="bg-transparent text-white border-b-4 border-white rounded-lg p-4">
              Open now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
