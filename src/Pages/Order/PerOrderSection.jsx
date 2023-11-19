import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useJson from '../../Hooks/useJson';
import PerOrderItem from './PerOrderItem';
import { Helmet } from 'react-helmet-async';

const PerOrderSection = (props) => {
  const [orderedData, setOrderedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const jsonData = useJson();
  const { menuData } = jsonData;
  const { category } = props;

  const itemsPerPage = 3;
  const numberOfPage = Math.ceil(orderedData.length / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = orderedData.slice(startIndex, endIndex);

  useEffect(() => {
    const filterData = menuData.filter((data) => data.category === category);
    setOrderedData(filterData);
  }, [menuData, category]);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 my-[10rem]">
        <Helmet>
          <title>Bistro food || {category}</title>
        </Helmet>

        {itemsToDisplay &&
          itemsToDisplay.map((item) => {
            const { _id } = item;
            return (
              <div key={_id} className="h-full">
                <PerOrderItem orderedData={item} />
              </div>
            );
          })}
      </div>
      {/* pagination */}
      <div className="flex justify-center items-center">
        {pages.map((item, index) => {
          return (
            <div key={index} className="flex gap-4">
              <button
                onClick={() => {
                  setCurrentPage(item);
                }}
                className={`${
                  currentPage === item &&
                  'bg-footerBgColorThree text-formTextColor'
                } border-2 border-footerBgColorThree duration-100 p-4 m-2 rounded-lg`}
              >
                {index + 1}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

PerOrderSection.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PerOrderSection;
