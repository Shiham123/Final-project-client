import SectionTitle from '../../SubSection/SectionTitle';
import MenuItems from '../../SubSection/MenuItems';
import useJson from '../../Hooks/useJson';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const PopularMenuSection = (props) => {
  const [jsonData, setJsonData] = useState([]);
  const customData = useJson();

  const { category, buttonText, sectionTitle } = props;

  const { menuData } = customData;

  useEffect(() => {
    const filterData = menuData.filter((item) => item.category === category);
    setJsonData(filterData);
  }, [category, menuData]);

  return (
    <section className="mb-4">
      {sectionTitle ? (
        <SectionTitle heading={"TODAY'S OFFER"} subHeading="---Don't miss---" />
      ) : (
        ''
      )}

      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 px-0 lg:px-[5rem] md:px-[1rem]">
        {jsonData.map((item) => {
          const { _id } = item;
          return (
            <div key={_id}>
              <MenuItems menuItem={item} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center">
        {buttonText && (
          <button className="text-footerBgColorOne font-inter text-[20px] uppercase my-[3rem] border-b-4 border-footerBgColorOne rounded-lg p-4">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

PopularMenuSection.propTypes = {
  category: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  sectionTitle: PropTypes.bool.isRequired,
};

export default PopularMenuSection;
