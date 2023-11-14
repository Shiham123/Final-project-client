import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../../Context/context';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PerOrderItem = (props) => {
  const { orderedData } = props;
  const { _id, name, recipe, image, price } = orderedData;

  const { user } = useContext(AppContext);
  const email = user?.email;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const addToCart = () => {
    if (email) {
      const cartItem = {
        menuId: _id,
        loggedInUser: email,
        name,
        price,
        image,
        recipe,
      };

      axiosSecure
        .post('/carts', cartItem)
        .then((response) => {
          console.log(response.data);
          if (response.data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'food added to item',
              showConfirmButton: false,
              timer: 1000,
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        title: 'Are you want to add food to your cart?',
        text: 'You have to be login!',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-cardBgColor h-full">
      <div className="w-full relative">
        <img className="object-cover h-full w-full" src={image} alt="" />
        <div className="absolute top-5 right-5 bg-black text-white p-2 rounded-lg">
          <p className="font-semibold font-inter text-sm">$ {price}</p>
        </div>
      </div>

      <div className="py-[3rem] px-[1rem] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-inter">{name}</h1>
        <p className="text-xl font-inter text-footerBgColorThree text-center py-4">
          {recipe}
        </p>
        <button
          onClick={() => addToCart()}
          className="bg-borderColorOne p-4 text-xl rounded-lg border-b-4 border-b-buttonColorOne text-buttonColorOne hover:bg-footerBgColorOne duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

PerOrderItem.propTypes = {
  orderedData: PropTypes.object.isRequired,
};

export default PerOrderItem;
