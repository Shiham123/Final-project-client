import { useEffect, useState } from 'react';
import SectionTitle from '../../SubSection/SectionTitle';
import MenuItems from '../../SubSection/MenuItems';

const PopularMenuSection = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.filter((item) => item.category === 'popular');
        setMenu(filterData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mb-4">
      <SectionTitle heading="from our menu" subHeading="popular items" />

      <div className="grid grid-cols-2">
        {menu.map((item) => {
          const { _id } = item;
          return (
            <div key={_id}>
              <MenuItems menuItem={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularMenuSection;
