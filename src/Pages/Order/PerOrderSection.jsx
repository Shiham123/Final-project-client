import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useJson from '../../Hooks/useJson';
import PerOrderItem from './PerOrderItem';
import { Helmet } from 'react-helmet-async';

const PerOrderSection = (props) => {
  const [orderedData, setOrderedData] = useState([]);
  const jsonData = useJson();
  const { menuData } = jsonData;
  const { category } = props;

  useEffect(() => {
    const filterData = menuData.filter((data) => data.category === category);
    setOrderedData(filterData);
  }, [menuData, category]);

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 my-[10rem]">
      <Helmet>
        <title>Bistro food || {category}</title>
      </Helmet>

      {orderedData &&
        orderedData.map((item) => {
          const { _id } = item;
          return (
            <div key={_id} className="h-full">
              <PerOrderItem orderedData={item} />
            </div>
          );
        })}
    </div>
  );
};

PerOrderSection.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PerOrderSection;
