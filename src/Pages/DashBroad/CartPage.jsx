import { FaTrash } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';

const CartPage = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const deleteFood = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center p-4 bg-formTextColor my-4 rounded-lg">
        <h1 className="text-xl font-cinzel font-bold">Item : {cart.length}</h1>
        <h1 className="text-xl font-cinzel font-bold">
          Item : {totalPrice.toFixed(2)}
        </h1>
        <button className="border-2 border-white px-8 py-2 text-2xl hover:bg-white hover:text-formTextColor rounded-lg duration-300">
          Pay
        </button>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table ">
            <thead className="bg-formTextColor text-footerBgColorThree">
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((perCart) => {
                const { _id, name, price, image, recipe } = perCart;
                return (
                  <tr key={_id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold font-agbalumo">{name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="font-poppins font-semibold">
                      {`${recipe.slice(0, 10)}...`}
                      <br />
                    </td>
                    <td className="text-xl font-agbalumo">
                      Price : $ <span className="font-bold">{price}</span>
                    </td>
                    <th>
                      <button onClick={() => deleteFood(_id)}>
                        <FaTrash
                          size={40}
                          className="text-formTextColor hover:text-footerBgColorThree duration-300"
                        />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
