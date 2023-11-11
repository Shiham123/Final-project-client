import PropTypes from 'prop-types';

const MenuItems = (props) => {
  const { menuItem } = props;
  const { name, recipe, image, price } = menuItem;
  return (
    <div className="flex space-x-4 mt-8 mx-[4rem]">
      <img
        style={{ borderRadius: '0px 200px 200px 200px' }}
        className="w-[120px]"
        src={image}
        alt=""
      />
      <div>
        <h3>{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-subTitleColor">${price}</p>
    </div>
  );
};

MenuItems.propTypes = {
  menuItem: PropTypes.object.isRequired,
};

export default MenuItems;
