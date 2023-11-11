import { useState } from 'react';
import SectionTitle from '../../SubSection/SectionTitle';
import featureBgImg from '../../assets/home/featured.jpg';
import './feature.scss';

const FeatureSection = () => {
  const [isCheck] = useState(true);

  return (
    <section className="my-[10rem] feature-item">
      <div>
        <SectionTitle
          heading="Featured item"
          subHeading="check it out"
          isCheck={isCheck}
        />
        <div className="flex justify-center items-center py-8 px-[10rem] gap-8 text-fontColorOne">
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
            <button className="btn">Open now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
