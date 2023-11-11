import SectionTitle from '../../SubSection/SectionTitle';
import MenuItems from '../../SubSection/MenuItems';
import useJson from '../../Hooks/useJson';

const PopularMenuSection = () => {
  const customData = useJson();
  const { menuData } = customData;
  const popularItem = menuData.filter((item) => item.category === 'popular');

  return (
    <section className="mb-4">
      <SectionTitle heading="from our menu" subHeading="popular items" />

      <div className="grid grid-cols-2 px-[5rem]">
        {popularItem.map((item) => {
          const { _id } = item;
          return (
            <div key={_id}>
              <MenuItems menuItem={item} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="text-footerBgColorOne font-inter text-[20px] uppercase my-[3rem] border-b-4 border-footerBgColorOne rounded-lg p-4">
          View Full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenuSection;
